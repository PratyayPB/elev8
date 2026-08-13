"use client";

import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import { getNodesBounds, getViewportForBounds } from "@xyflow/react";

export class RoadmapExportUtility {
  /**
   * Downloads the roadmap element as a PDF file, capturing the entire graph bounds.
   */
  public static async downloadPdf(element: HTMLElement, nodes: any[], filename = "roadmap.pdf") {
    try {
      const viewport = element.querySelector(".react-flow__viewport") as HTMLElement;
      if (!viewport) {
        throw new Error("ReactFlow viewport element not found.");
      }

      // Map nodes to add default width/height for bounds calculation
      const nodesWithDimensions = nodes.map((node) => ({
        ...node,
        width: node.width || 250,
        height: node.height || 150,
      }));

      // Calculate the bounding box of the graph
      const bounds = getNodesBounds(nodesWithDimensions);

      // Add padding around the bounding box
      const padding = 60;
      const imageWidth = bounds.width + padding * 2;
      const imageHeight = bounds.height + padding * 2;

      // Get viewport transform coordinates to fit the bounds
      const transform = getViewportForBounds(
        bounds,
        imageWidth,
        imageHeight,
        0.5, // minZoom
        2.0, // maxZoom
        padding
      );

      // Generate PNG image of the viewport with custom transform overrides
      const dataUrl = await toPng(viewport, {
        backgroundColor: "#09090b", // Match bg-zinc-950 dark theme
        width: imageWidth,
        height: imageHeight,
        style: {
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.zoom})`,
        },
        pixelRatio: 2, // High resolution
      });

      // Construct PDF matching calculated dimensions
      const pdf = new jsPDF({
        orientation: imageWidth > imageHeight ? "landscape" : "portrait",
        unit: "px",
        format: [imageWidth, imageHeight],
      });

      pdf.addImage(dataUrl, "PNG", 0, 0, imageWidth, imageHeight);
      pdf.save(filename);
    } catch (err) {
      console.error("Failed to export roadmap to PDF:", err);
      alert("Failed to export PDF file. Please try again.");
    }
  }
}
