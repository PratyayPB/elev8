import { put, del } from "@vercel/blob";

export class BlobStorageService {
  /**
   * Uploads a JSON object or string artifact to Vercel Blob Storage with private access by default.
   */
  public static async uploadJson<T>(
    pathname: string,
    data: T
  ): Promise<string> {
    const jsonString = typeof data === "string" ? data : JSON.stringify(data, null, 2);

    const blob = await put(pathname, jsonString, {
      access: "private",
      contentType: "application/json",
    });

    return blob.url;
  }

  /**
   * Fetches JSON content from a Blob URL.
   */
  public static async fetchJson<T>(url: string): Promise<T> {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    const response = await fetch(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch artifact from blob storage: ${response.statusText}`);
    }
    return response.json() as Promise<T>;
  }

  /**
   * Deletes a blob from Vercel Blob Storage by URL.
   */
  public static async delete(url: string): Promise<void> {
    await del(url);
  }

  /**
   * Replaces an existing JSON blob by deleting the old one and uploading a new one.
   * Returns the new blob URL.
   */
  public static async replaceJson<T>(
    currentBlobUrl: string,
    pathname: string,
    data: T
  ): Promise<string> {
    try {
      if (currentBlobUrl) {
        await this.delete(currentBlobUrl);
      }
    } catch (error) {
      console.warn(`Failed to delete old blob during replacement: ${currentBlobUrl}`, error);
    }
    
    return this.uploadJson(pathname, data);
  }

  /**
   * Uploads a Buffer or File artifact to Vercel Blob Storage.
   */
  public static async uploadBuffer(
    pathname: string,
    buffer: Buffer,
    contentType: string = "application/pdf"
  ): Promise<string> {
    const blob = await put(pathname, buffer, {
      access: "private",
      contentType,
    });
    return blob.url;
  }

  /**
   * Fetches binary content (Buffer) from a Blob URL using Bearer token authentication.
   */
  public static async fetchBuffer(url: string): Promise<Buffer> {
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    const response = await fetch(url, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF from Blob Storage. Status: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    return Buffer.from(arrayBuffer);
  }
}


