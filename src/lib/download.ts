/**
 * Utility to programmatically download a file in the browser without navigating away.
 * Uses a temporary hidden anchor tag to trigger native browser file download.
 */
export async function downloadFileFromUrl(url: string, filename?: string): Promise<void> {
  if (typeof window === "undefined" || !url) return;

  try {
    // For direct PDF downloads, fetching blob ensures the 'download' attribute
    // is respected even across different domains (e.g. Vercel Blob vs app domain)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const blob = await response.blob();
    const objectUrl = window.URL.createObjectURL(blob);

    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = filename || "resume.pdf";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();

    setTimeout(() => {
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(objectUrl);
    }, 150);
  } catch (fetchErr) {
    // Fallback: direct window anchor click or new tab if CORS blocks fetch
    console.warn("[downloadFileFromUrl] Blob fetch failed, falling back to direct anchor:", fetchErr);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename || "resume.pdf";
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();

    setTimeout(() => {
      document.body.removeChild(anchor);
    }, 150);
  }
}
