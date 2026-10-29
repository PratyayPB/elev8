"use client";

import { toSvg, getFontEmbedCSS } from "html-to-image";
import jsPDF from "jspdf";
import { svg2pdf } from "svg2pdf.js";
import { getNodesBounds, getViewportForBounds, type Node } from "@xyflow/react";
import { toast } from "sonner";
import { ReactFlowNode } from "./roadmap-render.service";

export type ExportableRoadmapNode =
  | ReactFlowNode
  | {
      id: string;
      type?: string;
      position: { x: number; y: number };
      width?: number;
      height?: number;
      data?: {
        label?: string;
        title?: string;
        description?: string;
        category?: string;
        estimatedHours?: number;
        nodeType?: string;
        [key: string]: unknown;
      };
      [key: string]: unknown;
    };

/**
 * Helper to split text into wrapped lines for SVG <tspan> rendering.
 */
function wrapText(text: string, maxCharsPerLine: number, maxLines: number): string[] {
  if (!text) return [];
  const words = text.trim().split(/\s+/);
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    if (testLine.length <= maxCharsPerLine) {
      currentLine = testLine;
    } else {
      if (currentLine) lines.push(currentLine);
      currentLine = word;
      if (lines.length >= maxLines) break;
    }
  }

  if (currentLine && lines.length < maxLines) {
    lines.push(currentLine);
  }

  if (lines.length === maxLines && words.length > 0) {
    const lastIdx = maxLines - 1;
    if (lines[lastIdx].length > maxCharsPerLine - 3) {
      lines[lastIdx] = lines[lastIdx].slice(0, maxCharsPerLine - 3) + "...";
    } else {
      lines[lastIdx] = lines[lastIdx] + "...";
    }
  }

  return lines;
}

export class RoadmapExportUtility {
  /**
   * Exports the roadmap element as a high-resolution, vector-based PDF file.
   * Utilizes html-to-image toSvg() and svg2pdf.js to render native vector paths,
   * connectors, text, and styled node shapes into jsPDF without raster compression.
   */
  public static async downloadPdf(
    element: HTMLElement,
    nodes: ExportableRoadmapNode[],
    filename = "roadmap.pdf"
  ) {
    try {
      const viewport = element.querySelector(".react-flow__viewport") as HTMLElement;
      if (!viewport) {
        throw new Error("ReactFlow viewport element not found.");
      }

      // Map nodes to ensure fallback width/height for bounds calculation
      const nodesWithDimensions: Node[] = nodes.map((node) => ({
        id: node.id,
        position: node.position,
        data: (node.data || {}) as Record<string, unknown>,
        width: "width" in node && typeof node.width === "number" ? node.width : 280,
        height: "height" in node && typeof node.height === "number" ? node.height : 110,
      }));

      // Calculate the complete bounding box of all nodes
      const bounds = getNodesBounds(nodesWithDimensions);

      // Add consistent 60px padding around graph bounds
      const padding = 60;
      const imageWidth = bounds.width + padding * 2;
      const imageHeight = bounds.height + padding * 2;

      // Calculate viewport transform coordinates to frame the entire graph
      const transform = getViewportForBounds(
        bounds,
        imageWidth,
        imageHeight,
        0.5,
        2.0,
        padding
      );

      // Pre-embed web fonts if available, handling any cross-origin font failures gracefully
      let fontEmbedCSS: string | undefined;
      try {
        fontEmbedCSS = await getFontEmbedCSS(viewport);
      } catch (fontErr) {
        console.warn(
          "Failed to pre-embed web fonts for roadmap export, proceeding with fallback fonts:",
          fontErr
        );
      }

      // Capture SVG data URL of the viewport with clean white background
      const svgDataUrl = await toSvg(viewport, {
        backgroundColor: "#FFFFFF",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.zoom})`,
        },
        fontEmbedCSS,
        filter: (domNode: HTMLElement) => {
          if (
            domNode.classList &&
            (domNode.classList.contains("react-flow__controls") ||
              domNode.classList.contains("react-flow__minimap") ||
              domNode.classList.contains("react-flow__panel"))
          ) {
            return false;
          }
          return true;
        },
      });

      // Decode SVG data URL to raw XML string
      let svgString: string;
      if (svgDataUrl.startsWith("data:image/svg+xml;base64,")) {
        svgString = atob(svgDataUrl.replace("data:image/svg+xml;base64,", ""));
      } else if (svgDataUrl.startsWith("data:image/svg+xml;charset=utf-8,")) {
        svgString = decodeURIComponent(svgDataUrl.replace("data:image/svg+xml;charset=utf-8,", ""));
      } else if (svgDataUrl.startsWith("data:image/svg+xml,")) {
        svgString = decodeURIComponent(svgDataUrl.replace("data:image/svg+xml,", ""));
      } else {
        const commaIdx = svgDataUrl.indexOf(",");
        svgString = commaIdx !== -1 ? decodeURIComponent(svgDataUrl.slice(commaIdx + 1)) : svgDataUrl;
      }

      // Parse SVG document
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
      const parseError = svgDoc.querySelector("parsererror");
      if (parseError) {
        throw new Error(`SVG parsing failed: ${parseError.textContent}`);
      }

      const svgElement = svgDoc.documentElement as unknown as SVGSVGElement;
      svgElement.setAttribute("width", `${imageWidth}`);
      svgElement.setAttribute("height", `${imageHeight}`);
      svgElement.setAttribute("viewBox", `0 0 ${imageWidth} ${imageHeight}`);

      // Ensure explicit clean white background rect with exact pixel bounds in the SVG
      const bgRect = svgDoc.createElementNS("http://www.w3.org/2000/svg", "rect");
      bgRect.setAttribute("x", "0");
      bgRect.setAttribute("y", "0");
      bgRect.setAttribute("width", `${imageWidth}`);
      bgRect.setAttribute("height", `${imageHeight}`);
      bgRect.setAttribute("fill", "#FFFFFF");
      svgElement.insertBefore(bgRect, svgElement.firstChild);

      // Extract existing SVG defs (markers, gradients) and edge paths
      const existingDefs = svgDoc.querySelectorAll("defs");
      const defsContainer = svgDoc.createElementNS("http://www.w3.org/2000/svg", "defs");
      existingDefs.forEach((defs) => {
        Array.from(defs.children).forEach((child) => {
          defsContainer.appendChild(child.cloneNode(true));
        });
      });
      svgElement.appendChild(defsContainer);

      // Create vector container for the transformed viewport content
      const viewportGroup = svgDoc.createElementNS("http://www.w3.org/2000/svg", "g");
      viewportGroup.setAttribute(
        "transform",
        `translate(${transform.x}, ${transform.y}) scale(${transform.zoom})`
      );

      // 1. Append vector edges
      const edgeElements = svgDoc.querySelectorAll(".react-flow__edge, .react-flow__edge-path");
      const edgesGroup = svgDoc.createElementNS("http://www.w3.org/2000/svg", "g");
      edgesGroup.setAttribute("class", "vector-edges");

      if (edgeElements.length > 0) {
        const processedEdges = new Set<Element>();
        edgeElements.forEach((edgeEl) => {
          const parentEdge = edgeEl.closest(".react-flow__edge") || edgeEl;
          if (!processedEdges.has(parentEdge)) {
            processedEdges.add(parentEdge);
            const clone = parentEdge.cloneNode(true) as SVGElement;
            const paths = clone.querySelectorAll ? clone.querySelectorAll("path") : [];
            paths.forEach((p) => {
              if (!p.getAttribute("stroke")) p.setAttribute("stroke", "#52525b");
              if (!p.getAttribute("stroke-width")) p.setAttribute("stroke-width", "2");
              p.setAttribute("fill", "none");
            });
            edgesGroup.appendChild(clone);
          }
        });
      } else {
        const liveEdges = viewport.querySelectorAll(".react-flow__edge");
        liveEdges.forEach((edgeEl) => {
          const clone = edgeEl.cloneNode(true) as SVGElement;
          const paths = clone.querySelectorAll("path");
          paths.forEach((p) => {
            p.setAttribute("stroke", "#52525b");
            p.setAttribute("stroke-width", "2");
            p.setAttribute("fill", "none");
          });
          edgesGroup.appendChild(clone);
        });
      }
      viewportGroup.appendChild(edgesGroup);

      // 2. Render vector nodes
      const nodesGroup = svgDoc.createElementNS("http://www.w3.org/2000/svg", "g");
      nodesGroup.setAttribute("class", "vector-nodes");

      nodes.forEach((node) => {
        const width = "width" in node && typeof node.width === "number" ? node.width : 280;
        const height = "height" in node && typeof node.height === "number" ? node.height : 110;
        const posX = node.position?.x ?? 0;
        const posY = node.position?.y ?? 0;

        const data = (node.data || {}) as Record<string, unknown>;
        const nodeType = String(data.nodeType || "SKILL").toUpperCase();
        const estimatedHours = data.estimatedHours ? `${data.estimatedHours}h` : null;
        const title = String(data.title || data.label || "");
        const description = String(data.description || "");

        const nodeG = svgDoc.createElementNS("http://www.w3.org/2000/svg", "g");
        nodeG.setAttribute("class", "vector-skill-node");
        nodeG.setAttribute("transform", `translate(${posX}, ${posY})`);

        // Node card background rect
        const cardRect = svgDoc.createElementNS("http://www.w3.org/2000/svg", "rect");
        cardRect.setAttribute("width", `${width}`);
        cardRect.setAttribute("height", `${height}`);
        cardRect.setAttribute("rx", "12");
        cardRect.setAttribute("ry", "12");
        cardRect.setAttribute("fill", "#333333");
        cardRect.setAttribute("stroke", "#4b4b53");
        cardRect.setAttribute("stroke-width", "1.5");
        nodeG.appendChild(cardRect);

        // Top handle connector
        const topHandle = svgDoc.createElementNS("http://www.w3.org/2000/svg", "circle");
        topHandle.setAttribute("cx", `${width / 2}`);
        topHandle.setAttribute("cy", "0");
        topHandle.setAttribute("r", "5");
        topHandle.setAttribute("fill", "#A7A7A7");
        topHandle.setAttribute("stroke", "#333333");
        topHandle.setAttribute("stroke-width", "2");
        nodeG.appendChild(topHandle);

        // Bottom handle connector
        const bottomHandle = svgDoc.createElementNS("http://www.w3.org/2000/svg", "circle");
        bottomHandle.setAttribute("cx", `${width / 2}`);
        bottomHandle.setAttribute("cy", `${height}`);
        bottomHandle.setAttribute("r", "5");
        bottomHandle.setAttribute("fill", "#A7A7A7");
        bottomHandle.setAttribute("stroke", "#333333");
        bottomHandle.setAttribute("stroke-width", "2");
        nodeG.appendChild(bottomHandle);

        // Category / Node Type Badge
        const typeText = svgDoc.createElementNS("http://www.w3.org/2000/svg", "text");
        typeText.setAttribute("x", "16");
        typeText.setAttribute("y", "22");
        typeText.setAttribute("fill", "#10B981");
        typeText.setAttribute("font-size", "10");
        typeText.setAttribute("font-family", "system-ui, -apple-system, sans-serif");
        typeText.setAttribute("font-weight", "bold");
        typeText.setAttribute("letter-spacing", "0.08em");
        typeText.textContent = nodeType;
        nodeG.appendChild(typeText);

        // Estimated hours pill badge (if available)
        if (estimatedHours) {
          const pillWidth = 38;
          const pillHeight = 16;
          const pillX = width - pillWidth - 14;
          const pillY = 10;

          const hoursRect = svgDoc.createElementNS("http://www.w3.org/2000/svg", "rect");
          hoursRect.setAttribute("x", `${pillX}`);
          hoursRect.setAttribute("y", `${pillY}`);
          hoursRect.setAttribute("width", `${pillWidth}`);
          hoursRect.setAttribute("height", `${pillHeight}`);
          hoursRect.setAttribute("rx", "8");
          hoursRect.setAttribute("ry", "8");
          hoursRect.setAttribute("fill", "#242424");
          hoursRect.setAttribute("stroke", "#4b4b53");
          hoursRect.setAttribute("stroke-width", "1");
          nodeG.appendChild(hoursRect);

          const hoursText = svgDoc.createElementNS("http://www.w3.org/2000/svg", "text");
          hoursText.setAttribute("x", `${pillX + pillWidth / 2}`);
          hoursText.setAttribute("y", `${pillY + 11.5}`);
          hoursText.setAttribute("text-anchor", "middle");
          hoursText.setAttribute("fill", "#D4D4D8");
          hoursText.setAttribute("font-size", "9");
          hoursText.setAttribute("font-family", "system-ui, -apple-system, sans-serif");
          hoursText.setAttribute("font-weight", "500");
          hoursText.textContent = estimatedHours;
          nodeG.appendChild(hoursText);
        }

        // Title text (max 2 lines with tspan)
        const titleLines = wrapText(title, 28, 2);
        const titleText = svgDoc.createElementNS("http://www.w3.org/2000/svg", "text");
        titleText.setAttribute("x", "16");
        titleText.setAttribute("y", "42");
        titleText.setAttribute("fill", "#FFFFFF");
        titleText.setAttribute("font-size", "13");
        titleText.setAttribute("font-family", "system-ui, -apple-system, sans-serif");
        titleText.setAttribute("font-weight", "600");

        titleLines.forEach((line, lineIdx) => {
          const tspan = svgDoc.createElementNS("http://www.w3.org/2000/svg", "tspan");
          tspan.setAttribute("x", "16");
          tspan.setAttribute("dy", lineIdx === 0 ? "0" : "16");
          tspan.textContent = line;
          titleText.appendChild(tspan);
        });
        nodeG.appendChild(titleText);

        // Description text (max 2 lines with tspan)
        if (description) {
          const descStartY = 44 + titleLines.length * 16;
          const descLines = wrapText(description, 36, 2);
          const descText = svgDoc.createElementNS("http://www.w3.org/2000/svg", "text");
          descText.setAttribute("x", "16");
          descText.setAttribute("y", `${descStartY}`);
          descText.setAttribute("fill", "#A1A1AA");
          descText.setAttribute("font-size", "10");
          descText.setAttribute("font-family", "system-ui, -apple-system, sans-serif");

          descLines.forEach((line, lineIdx) => {
            const tspan = svgDoc.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspan.setAttribute("x", "16");
            tspan.setAttribute("dy", lineIdx === 0 ? "0" : "13");
            tspan.textContent = line;
            descText.appendChild(tspan);
          });
          nodeG.appendChild(descText);
        }

        nodesGroup.appendChild(nodeG);
      });
      viewportGroup.appendChild(nodesGroup);

      // Remove the original foreignObject to ensure svg2pdf only renders clean vector elements
      const foreignObjects = svgElement.querySelectorAll("foreignObject");
      foreignObjects.forEach((fo) => fo.remove());

      // Append vector content to the root SVG
      svgElement.appendChild(viewportGroup);

      // Construct PDF matching graph dimensions and orientation
      const isLandscape = imageWidth > imageHeight;
      const pdf = new jsPDF({
        orientation: isLandscape ? "landscape" : "portrait",
        unit: "px",
        format: [imageWidth, imageHeight],
        compress: true,
      });

      // Explicitly paint the PDF canvas background white to guarantee uniform coverage across all viewers
      pdf.setFillColor(255, 255, 255);
      pdf.rect(0, 0, imageWidth, imageHeight, "F");

      // Render vector SVG directly into jsPDF
      await svg2pdf(svgElement, pdf, {
        x: 0,
        y: 0,
        width: imageWidth,
        height: imageHeight,
      });

      // Save PDF document and prompt download
      pdf.save(filename);
      toast.success("PDF exported successfully!");
    } catch (err) {
      console.error("Failed to export roadmap to PDF:", err);
      toast.error("Export failed", {
        description: "Failed to export PDF file. Please try again.",
      });
    }
  }
}
