import { BlobStorageService } from "@/services/storage/blob-storage.service";
import { pathToFileURL } from "node:url";

export class PdfParserService {
  /**
   * Downloads a PDF file from a private or public Blob URL and extracts raw text.
   */
  public static async parsePdfFromUrl(pdfUrl: string): Promise<string> {
    const buffer = await BlobStorageService.fetchBuffer(pdfUrl);

    try {
      const pdfParseModule = require("pdf-parse");
      let text = "";

      // Configure pdf.worker.mjs absolute file URL to prevent dynamic relative import failures in bundlers (Trigger.dev/Esbuild)
      try {
        const workerPath = require.resolve("pdfjs-dist/legacy/build/pdf.worker.mjs");
        const workerUrl = pathToFileURL(workerPath).toString();
        if (pdfParseModule?.PDFParse?.setWorker) {
          pdfParseModule.PDFParse.setWorker(workerUrl);
        }
      } catch (workerErr) {
        try {
          const workerPath = require.resolve("pdfjs-dist/build/pdf.worker.mjs");
          const workerUrl = pathToFileURL(workerPath).toString();
          if (pdfParseModule?.PDFParse?.setWorker) {
            pdfParseModule.PDFParse.setWorker(workerUrl);
          }
        } catch (e) {
          console.warn("Could not resolve pdf.worker.mjs path:", workerErr);
        }
      }

      // Support pdf-parse v2 PDFParse class API
      if (pdfParseModule && typeof pdfParseModule.PDFParse === "function") {
        const parser = new pdfParseModule.PDFParse({ data: buffer });
        const textResult = await parser.getText();
        text = textResult.text ? textResult.text.trim() : "";
        await parser.destroy().catch(() => {});
      } else {
        // Fallback for pdf-parse v1 / legacy function API
        const pdfParseFn =
          typeof pdfParseModule === "function"
            ? pdfParseModule
            : pdfParseModule?.default;

        if (typeof pdfParseFn === "function") {
          const parsed = await pdfParseFn(buffer);
          text = parsed.text ? parsed.text.trim() : "";
        } else {
          throw new Error("Unable to resolve pdf-parse parsing function or PDFParse class.");
        }
      }

      if (!text || text.length < 20) {
        throw new Error(
          "PDF extraction returned minimal or no text. File may be image-only, corrupted, or encrypted."
        );
      }

      return text;
    } catch (err: any) {
      console.error("PDF Parsing error:", err);
      throw new Error(`PDF Parsing failed: ${err?.message || "Corrupted or encrypted PDF"}`);
    }
  }
}

