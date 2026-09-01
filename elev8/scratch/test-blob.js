const { put } = require("@vercel/blob");
require("dotenv").config({ path: ".env.local" });

async function testBlob() {
  console.log("Testing Vercel Blob put...");
  console.log("Token exists?", !!process.env.BLOB_READ_WRITE_TOKEN);
  try {
    const blob = await put("test-blob.json", JSON.stringify({ hello: "world" }), {
      access: "private",
      contentType: "application/json",
      addRandomSuffix: false,
      token: process.env.BLOB_READ_WRITE_TOKEN
    });
    console.log("Success:", blob.url);
  } catch (error) {
    console.error("Error:", error);
  }
}

testBlob();
