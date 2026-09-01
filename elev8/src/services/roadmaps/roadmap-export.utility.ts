"use client";

import { toJpeg } from "html-to-image";
import jsPDF from "jspdf";
import { getNodesBounds, getViewportForBounds } from "@xyflow/react";
import { toast } from "sonner";

export class RoadmapExportUtility {
  /**
   * Downloads the roadmap element as a PDF file, capturing the entire graph bounds.
   * Uses JPEG at quality 0.85 and pixelRatio 1 to keep file size below 5MB.
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
        width: node.width || 280,
        height: node.height || 110,
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

      // Generate JPEG image of the viewport:
      // - JPEG lossy compression at quality 0.85 shrinks file by ~70-80% vs PNG
      // - pixelRatio: 1 avoids doubling the bitmap resolution (still sharp at native res)
      const dataUrl = await toJpeg(viewport, {
        backgroundColor: "#242424",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.zoom})`,
        },
        pixelRatio: 1,
        quality: 0.85, // JPEG quality (0 = worst, 1 = lossless-equivalent)
      });

      // Construct PDF matching calculated dimensions
      const pdf = new jsPDF({
        orientation: imageWidth > imageHeight ? "landscape" : "portrait",
        unit: "px",
        format: [imageWidth, imageHeight],
        compress: true, // Enable jsPDF's internal compression
      });

      pdf.addImage(dataUrl, "JPEG", 0, 0, imageWidth, imageHeight, undefined, "FAST");
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
