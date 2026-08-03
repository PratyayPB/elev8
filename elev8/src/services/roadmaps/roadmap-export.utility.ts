"use client";

import { toSvg, toPng } from "html-to-image";
import jsPDF from "jspdf";

export class RoadmapExportUtility {
  /**
   * Downloads the roadmap element as an SVG file.
   */
  public static async downloadSvg(element: HTMLElement, filename = "roadmap.svg") {
    try {
      const dataUrl = await toSvg(element, {
        backgroundColor: "#020617",
        quality: 0.95,
      });

      const link = document.createElement("a");
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Failed to export roadmap to SVG:", err);
      alert("Failed to export SVG image. Please try again.");
    }
  }

  /**
   * Downloads the roadmap element as a PDF file.
   */
  public static async downloadPdf(element: HTMLElement, filename = "roadmap.pdf") {
    try {
      const dataUrl = await toPng(element, {
        backgroundColor: "#020617",
        pixelRatio: 2,
      });

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [element.offsetWidth, element.offsetHeight],
      });

      pdf.addImage(dataUrl, "PNG", 0, 0, element.offsetWidth, element.offsetHeight);
      pdf.save(filename);
    } catch (err) {
      console.error("Failed to export roadmap to PDF:", err);
      alert("Failed to export PDF file. Please try again.");
    }
  }
}
