import {
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/modern-tar/dist/fs/index.js
init_esm();

// node_modules/modern-tar/dist/packer-kJPaRbFA.js
init_esm();
var FILE = "file";
var LINK = "link";
var SYMLINK = "symlink";
var DIRECTORY = "directory";
var TYPEFLAG = {
  file: "0",
  link: "1",
  symlink: "2",
  "character-device": "3",
  "block-device": "4",
  directory: "5",
  fifo: "6",
  "pax-header": "x",
  "pax-global-header": "g",
  "gnu-long-name": "L",
  "gnu-long-link-name": "K"
};
var FLAGTYPE = {
  "0": FILE,
  "1": LINK,
  "2": SYMLINK,
  "3": "character-device",
  "4": "block-device",
  "5": DIRECTORY,
  "6": "fifo",
  x: "pax-header",
  g: "pax-global-header",
  L: "gnu-long-name",
  K: "gnu-long-link-name"
};
var ZERO_BLOCK = /* @__PURE__ */ new Uint8Array(512);
var EMPTY = /* @__PURE__ */ new Uint8Array(0);
var encoder = new TextEncoder();
var decoder = new TextDecoder();
function writeString(view, offset, size, value) {
  if (!value) return;
  for (let i = 0; i < value.length && i < size; i++) {
    const charCode = value.charCodeAt(i);
    if (charCode > 127) {
      encoder.encodeInto(value, view.subarray(offset, offset + size));
      return;
    }
    view[offset + i] = charCode;
  }
}
__name(writeString, "writeString");
function writeOctal(view, offset, size, value) {
  if (value === void 0) return;
  let remaining = value;
  for (let i = offset + size - 2; i >= offset; i--) {
    view[i] = 48 + remaining % 8;
    remaining = Math.floor(remaining / 8);
  }
  if (remaining === 0 && value % 1 === 0) return;
  encoder.encodeInto(value.toString(8).padStart(size - 1, "0"), view.subarray(offset, offset + size - 1));
}
__name(writeOctal, "writeOctal");
function readString(view, offset, size) {
  if (view[offset] === 0) return "";
  const end = view.indexOf(0, offset);
  const sliceEnd = end === -1 || end > offset + size ? offset + size : end;
  return decoder.decode(view.subarray(offset, sliceEnd));
}
__name(readString, "readString");
function readOctal(view, offset, size) {
  let value = 0;
  const end = offset + size;
  for (let i = offset; i < end; i++) {
    const charCode = view[i];
    if (charCode === 0) break;
    if (charCode === 32) continue;
    value = value * 8 + (charCode - 48);
  }
  return value;
}
__name(readOctal, "readOctal");
function readNumeric(view, offset, size) {
  if (view[offset] & 128) {
    let result = 0;
    result = view[offset] & 127;
    for (let i = 1; i < size; i++) result = result * 256 + view[offset + i];
    if (!Number.isSafeInteger(result)) throw new Error("TAR number too large");
    return result;
  }
  return readOctal(view, offset, size);
}
__name(readNumeric, "readNumeric");
var isBodyless = /* @__PURE__ */ __name((header) => header.type === "directory" || header.type === "symlink" || header.type === "link" || header.type === "character-device" || header.type === "block-device" || header.type === "fifo", "isBodyless");
async function normalizeBody(body) {
  if (body === null || body === void 0) return EMPTY;
  if (body instanceof Uint8Array) return body;
  if (typeof body === "string") return encoder.encode(body);
  if (body instanceof ArrayBuffer) return new Uint8Array(body);
  if (body instanceof Blob) return new Uint8Array(await body.arrayBuffer());
  throw new TypeError("Unsupported content type for entry body.");
}
__name(normalizeBody, "normalizeBody");
var stripPath = /* @__PURE__ */ __name((p, n) => {
  const parts = p.split("/").filter(Boolean);
  return n >= parts.length ? "" : parts.slice(n).join("/");
}, "stripPath");
function transformHeader(header, options) {
  const { strip, filter, map } = options;
  if (!strip && !filter && !map) return header;
  const h = { ...header };
  if (strip && strip > 0) {
    const newName = stripPath(h.name, strip);
    if (!newName) return null;
    h.name = h.type === "directory" && !newName.endsWith("/") ? `${newName}/` : newName;
    if (h.linkname) {
      const isAbsolute2 = h.linkname.startsWith("/");
      if (isAbsolute2 || h.type === "link") {
        const stripped = stripPath(h.linkname, strip);
        h.linkname = isAbsolute2 ? `/${stripped}` || "/" : stripped;
      }
    }
  }
  if (filter?.(h) === false) return null;
  const result = map ? map(h) : h;
  if (result && (!result.name?.trim() || result.name === "." || result.name === "/")) return null;
  return result;
}
__name(transformHeader, "transformHeader");
var INITIAL_CAPACITY = 256;
function createChunkQueue() {
  let chunks = new Array(INITIAL_CAPACITY);
  let capacityMask = chunks.length - 1;
  let head = 0;
  let tail = 0;
  let totalAvailable = 0;
  const consumeFromHead = /* @__PURE__ */ __name((count) => {
    const chunk = chunks[head];
    if (count === chunk.length) {
      chunks[head] = EMPTY;
      head = head + 1 & capacityMask;
    } else chunks[head] = chunk.subarray(count);
    totalAvailable -= count;
    if (totalAvailable === 0 && chunks.length > INITIAL_CAPACITY) {
      chunks = new Array(INITIAL_CAPACITY);
      capacityMask = 255;
      head = 0;
      tail = 0;
    }
  }, "consumeFromHead");
  function pull(bytes, callback) {
    if (callback) {
      let fed = 0;
      let remaining2 = Math.min(bytes, totalAvailable);
      while (remaining2 > 0) {
        const chunk = chunks[head];
        const toFeed = Math.min(remaining2, chunk.length);
        const segment = toFeed === chunk.length ? chunk : chunk.subarray(0, toFeed);
        consumeFromHead(toFeed);
        remaining2 -= toFeed;
        fed += toFeed;
        if (!callback(segment)) break;
      }
      return fed;
    }
    if (totalAvailable < bytes) return null;
    if (bytes === 0) return EMPTY;
    const firstChunk = chunks[head];
    if (firstChunk.length >= bytes) {
      const view = firstChunk.length === bytes ? firstChunk : firstChunk.subarray(0, bytes);
      consumeFromHead(bytes);
      return view;
    }
    const result = new Uint8Array(bytes);
    let copied = 0;
    let remaining = bytes;
    while (remaining > 0) {
      const chunk = chunks[head];
      const toCopy = Math.min(remaining, chunk.length);
      result.set(toCopy === chunk.length ? chunk : chunk.subarray(0, toCopy), copied);
      copied += toCopy;
      remaining -= toCopy;
      consumeFromHead(toCopy);
    }
    return result;
  }
  __name(pull, "pull");
  return {
    push: /* @__PURE__ */ __name((chunk) => {
      if (chunk.length === 0) return;
      let nextTail = tail + 1 & capacityMask;
      if (nextTail === head) {
        const oldLen = chunks.length;
        const newLen = oldLen * 2;
        const newChunks = new Array(newLen);
        const count = tail - head + oldLen & oldLen - 1;
        if (head < tail) for (let i = 0; i < count; i++) newChunks[i] = chunks[head + i];
        else {
          const firstPart = oldLen - head;
          for (let i = 0; i < firstPart; i++) newChunks[i] = chunks[head + i];
          for (let i = 0; i < tail; i++) newChunks[firstPart + i] = chunks[i];
        }
        chunks = newChunks;
        capacityMask = newLen - 1;
        head = 0;
        tail = count;
        nextTail = tail + 1 & capacityMask;
      }
      chunks[tail] = chunk;
      tail = nextTail;
      totalAvailable += chunk.length;
    }, "push"),
    available: /* @__PURE__ */ __name(() => totalAvailable, "available"),
    peek: /* @__PURE__ */ __name((bytes) => {
      if (totalAvailable < bytes) return null;
      if (bytes === 0) return EMPTY;
      const firstChunk = chunks[head];
      if (firstChunk.length >= bytes) return firstChunk.length === bytes ? firstChunk : firstChunk.subarray(0, bytes);
      const result = new Uint8Array(bytes);
      let copied = 0;
      let index = head;
      while (copied < bytes) {
        const chunk = chunks[index];
        const toCopy = Math.min(bytes - copied, chunk.length);
        if (toCopy === chunk.length) result.set(chunk, copied);
        else result.set(chunk.subarray(0, toCopy), copied);
        copied += toCopy;
        index = index + 1 & capacityMask;
      }
      return result;
    }, "peek"),
    discard: /* @__PURE__ */ __name((bytes) => {
      if (bytes > totalAvailable) throw new Error("Too many bytes consumed");
      if (bytes === 0) return;
      let remaining = bytes;
      while (remaining > 0) {
        const chunk = chunks[head];
        const toConsume = Math.min(remaining, chunk.length);
        consumeFromHead(toConsume);
        remaining -= toConsume;
      }
    }, "discard"),
    pull
  };
}
__name(createChunkQueue, "createChunkQueue");
var CHECKSUM_SPACE = 32;
var ASCII_ZERO = 48;
function validateChecksum(block) {
  const stored = readOctal(block, 148, 8);
  let sum = 0;
  for (let i = 0; i < block.length; i++) if (i >= 148 && i < 156) sum += CHECKSUM_SPACE;
  else sum += block[i];
  return stored === sum;
}
__name(validateChecksum, "validateChecksum");
function writeChecksum(block) {
  block.fill(CHECKSUM_SPACE, 148, 156);
  let checksum = 0;
  for (let i = block.length; i > 0; ) checksum += block[--i];
  for (let i = 153; i >= 148; i--) {
    block[i] = (checksum & 7) + ASCII_ZERO;
    checksum >>= 3;
  }
  block[154] = 0;
  block[155] = CHECKSUM_SPACE;
}
__name(writeChecksum, "writeChecksum");
var USTAR_SPLIT_MAX_SIZE = 256;
var NON_ASCII = /[^\x00-\x7f]/;
function isUtf8TooLong(value, limit) {
  if (value.length * 3 <= limit) return false;
  if (value.length > limit) return true;
  if (!NON_ASCII.test(value)) return false;
  return encoder.encode(value).length > limit;
}
__name(isUtf8TooLong, "isUtf8TooLong");
function generatePax(header) {
  const paxRecords = {};
  if (isUtf8TooLong(header.name, 100)) {
    if (findUstarSplit(header.name) === null) paxRecords.path = header.name;
  }
  if (header.linkname && isUtf8TooLong(header.linkname, 100)) paxRecords.linkpath = header.linkname;
  if (header.uname && isUtf8TooLong(header.uname, 32)) paxRecords.uname = header.uname;
  if (header.gname && isUtf8TooLong(header.gname, 32)) paxRecords.gname = header.gname;
  if (header.uid != null && header.uid > 2097151) paxRecords.uid = String(header.uid);
  if (header.gid != null && header.gid > 2097151) paxRecords.gid = String(header.gid);
  if (header.size != null && header.size > 8589934591) paxRecords.size = String(header.size);
  if (header.pax) Object.assign(paxRecords, header.pax);
  const paxEntries = Object.entries(paxRecords);
  if (paxEntries.length === 0) return null;
  const paxBody = encoder.encode(paxEntries.map(([key, value]) => {
    const record = `${key}=${value}
`;
    const partLength = encoder.encode(record).length + 1;
    let totalLength = partLength + String(partLength).length;
    totalLength = partLength + String(totalLength).length;
    return `${totalLength} ${record}`;
  }).join(""));
  return {
    paxHeader: createTarHeader({
      name: decoder.decode(encoder.encode(`PaxHeader/${header.name}`).slice(0, 100)),
      size: paxBody.length,
      type: "pax-header",
      mode: 420,
      mtime: header.mtime,
      uname: header.uname,
      gname: header.gname,
      uid: header.uid,
      gid: header.gid
    }),
    paxBody
  };
}
__name(generatePax, "generatePax");
function findUstarSplit(path2) {
  if (!isUtf8TooLong(path2, 100) || isUtf8TooLong(path2, USTAR_SPLIT_MAX_SIZE)) return null;
  for (let i = path2.length - 1; i > 0; i--) {
    if (path2[i] !== "/") continue;
    const prefix = path2.slice(0, i);
    const name = path2.slice(i + 1);
    if (!isUtf8TooLong(prefix, 155) && !isUtf8TooLong(name, 100)) return {
      prefix,
      name
    };
  }
  return null;
}
__name(findUstarSplit, "findUstarSplit");
function createTarHeader(header) {
  const view = /* @__PURE__ */ new Uint8Array(512);
  const size = isBodyless(header) ? 0 : header.size ?? 0;
  let name = header.name;
  let prefix = "";
  if (!header.pax?.path) {
    const split = findUstarSplit(name);
    if (split) {
      name = split.name;
      prefix = split.prefix;
    }
  }
  writeString(view, 0, 100, name);
  writeOctal(view, 100, 8, header.mode ?? (header.type === "directory" ? 493 : 420));
  writeOctal(view, 108, 8, header.uid ?? 0);
  writeOctal(view, 116, 8, header.gid ?? 0);
  writeOctal(view, 124, 12, size);
  writeOctal(view, 136, 12, Math.floor((header.mtime?.getTime() ?? Date.now()) / 1e3));
  writeString(view, 156, 1, TYPEFLAG[header.type ?? "file"]);
  writeString(view, 157, 100, header.linkname);
  writeString(view, 257, 6, "ustar\0");
  writeString(view, 263, 2, "00");
  writeString(view, 265, 32, header.uname);
  writeString(view, 297, 32, header.gname);
  writeString(view, 345, 155, prefix);
  writeChecksum(view);
  return view;
}
__name(createTarHeader, "createTarHeader");
function parseUstarHeader(block, strict) {
  if (strict && !validateChecksum(block)) throw new Error("Invalid tar header checksum.");
  const typeflag = readString(block, 156, 1);
  const header = {
    name: readString(block, 0, 100),
    mode: readOctal(block, 100, 8),
    uid: readNumeric(block, 108, 8),
    gid: readNumeric(block, 116, 8),
    size: readNumeric(block, 124, 12),
    mtime: /* @__PURE__ */ new Date(readNumeric(block, 136, 12) * 1e3),
    type: FLAGTYPE[typeflag] || "file",
    linkname: readString(block, 157, 100)
  };
  const magic = readString(block, 257, 6);
  if (magic.trim() === "ustar") {
    header.uname = readString(block, 265, 32);
    header.gname = readString(block, 297, 32);
  }
  if (magic === "ustar") header.prefix = readString(block, 345, 155);
  return header;
}
__name(parseUstarHeader, "parseUstarHeader");
var PAX_MAPPING = {
  path: ["name", (v) => v],
  linkpath: ["linkname", (v) => v],
  size: ["size", (v) => /^\d+$/.test(v) && Number.isSafeInteger(+v) ? +v : NaN],
  mtime: ["mtime", parseFloat],
  uid: ["uid", (v) => parseInt(v, 10)],
  gid: ["gid", (v) => parseInt(v, 10)],
  uname: ["uname", (v) => v],
  gname: ["gname", (v) => v]
};
function parsePax(buffer) {
  const overrides = /* @__PURE__ */ Object.create(null);
  const pax = /* @__PURE__ */ Object.create(null);
  let isPax = false;
  let offset = 0;
  while (offset < buffer.length) {
    const spaceIndex = buffer.indexOf(32, offset);
    if (spaceIndex === -1) break;
    const length = parseInt(decoder.decode(buffer.subarray(offset, spaceIndex)), 10);
    if (!(length > 0)) break;
    const recordEnd = offset + length;
    const recordStr = decoder.decode(buffer.subarray(spaceIndex + 1, recordEnd - 1));
    const equalsIndex = recordStr.indexOf("=");
    if (equalsIndex > 0) {
      const key = recordStr.slice(0, equalsIndex);
      const value = recordStr.slice(equalsIndex + 1);
      pax[key] = value;
      isPax = true;
      if (Object.hasOwn(PAX_MAPPING, key)) {
        const [targetKey, parser] = PAX_MAPPING[key];
        const parsedValue = parser(value);
        if (typeof parsedValue === "string" || !Number.isNaN(parsedValue)) overrides[targetKey] = parsedValue;
      }
    }
    offset = recordEnd;
  }
  if (isPax) overrides.pax = pax;
  return overrides;
}
__name(parsePax, "parsePax");
function applyOverrides(header, overrides) {
  if (overrides.name !== void 0) header.name = overrides.name;
  if (overrides.linkname !== void 0) header.linkname = overrides.linkname;
  if (overrides.size !== void 0) header.size = overrides.size;
  if (overrides.mtime !== void 0) header.mtime = /* @__PURE__ */ new Date(overrides.mtime * 1e3);
  if (overrides.uid !== void 0) header.uid = overrides.uid;
  if (overrides.gid !== void 0) header.gid = overrides.gid;
  if (overrides.uname !== void 0) header.uname = overrides.uname;
  if (overrides.gname !== void 0) header.gname = overrides.gname;
  if (overrides.pax) header.pax = Object.assign({}, header.pax ?? {}, overrides.pax);
}
__name(applyOverrides, "applyOverrides");
function getMetaParser(type) {
  switch (type) {
    case "pax-global-header":
    case "pax-header":
      return parsePax;
    case "gnu-long-name":
      return (data) => ({ name: readString(data, 0, data.length) });
    case "gnu-long-link-name":
      return (data) => ({ linkname: readString(data, 0, data.length) });
    default:
      return;
  }
}
__name(getMetaParser, "getMetaParser");
function getHeaderBlocks(header) {
  const base = createTarHeader(header);
  const pax = generatePax(header);
  if (!pax) return [base];
  const paxPadding = -pax.paxBody.length & 511;
  const paddingBlocks = paxPadding > 0 ? [ZERO_BLOCK.subarray(0, paxPadding)] : [];
  return [
    pax.paxHeader,
    pax.paxBody,
    ...paddingBlocks,
    base
  ];
}
__name(getHeaderBlocks, "getHeaderBlocks");
var STATE_HEADER = 0;
var STATE_BODY = 1;
var MAX_META_SIZE = 8388608;
var truncateErr = /* @__PURE__ */ new Error("Tar archive is truncated.");
function createUnpacker(options = {}) {
  const strict = options.strict ?? false;
  const { available, peek, push, discard, pull } = createChunkQueue();
  let state = STATE_HEADER;
  let ended = false;
  let done = false;
  let eof = false;
  let currentEntry = null;
  const paxGlobals = {};
  let nextEntryOverrides = {};
  const unpacker = {
    isEntryActive: /* @__PURE__ */ __name(() => state === STATE_BODY, "isEntryActive"),
    isBodyComplete: /* @__PURE__ */ __name(() => !currentEntry || currentEntry.remaining === 0, "isBodyComplete"),
    canFinish: /* @__PURE__ */ __name(() => !currentEntry || available() >= currentEntry.remaining + currentEntry.padding, "canFinish"),
    bodyBytes: /* @__PURE__ */ __name(() => currentEntry && currentEntry.remaining > 0 ? Math.min(currentEntry.remaining, available()) : 0, "bodyBytes"),
    available,
    write(chunk) {
      if (ended) throw new Error("Archive already ended.");
      push(chunk);
    },
    end() {
      ended = true;
    },
    readHeader() {
      if (state !== STATE_HEADER) throw new Error("Cannot read header while an entry is active");
      if (done) return void 0;
      while (!done) {
        if (available() < 512) {
          if (ended) {
            if (available() > 0 && strict) throw truncateErr;
            done = true;
            return;
          }
          return null;
        }
        const headerBlock = peek(512);
        if (isZeroBlock(headerBlock)) {
          if (available() < 1024) {
            if (ended) {
              if (strict) throw truncateErr;
              done = true;
              return;
            }
            return null;
          }
          if (isZeroBlock(peek(1024).subarray(512))) {
            discard(1024);
            done = true;
            eof = true;
            return;
          }
          if (strict) throw new Error("Invalid tar header.");
          discard(512);
          continue;
        }
        let internalHeader;
        try {
          internalHeader = parseUstarHeader(headerBlock, strict);
        } catch (err) {
          if (strict) throw err;
          discard(512);
          continue;
        }
        const metaParser = getMetaParser(internalHeader.type);
        if (metaParser) {
          if (internalHeader.size > MAX_META_SIZE) throw new Error("Tar metadata entry exceeds maximum size.");
          const paddedSize = internalHeader.size + (-internalHeader.size & 511);
          if (available() < 512 + paddedSize) {
            if (ended && strict) throw truncateErr;
            return null;
          }
          discard(512);
          const overrides = metaParser(pull(paddedSize).subarray(0, internalHeader.size));
          if (nextEntryOverrides.pax) nextEntryOverrides = {};
          const target = internalHeader.type === "pax-global-header" ? paxGlobals : nextEntryOverrides;
          for (const key in overrides) target[key] = overrides[key];
          continue;
        }
        discard(512);
        const header = internalHeader;
        if (internalHeader.prefix) header.name = `${internalHeader.prefix}/${header.name}`;
        applyOverrides(header, paxGlobals);
        applyOverrides(header, nextEntryOverrides);
        let archiveSize = header.size;
        if (isBodyless(header)) {
          archiveSize = 0;
          header.size = 0;
        } else if (header.name.endsWith("/") && header.type === "file") {
          header.type = DIRECTORY;
          header.size = 0;
        }
        nextEntryOverrides = {};
        currentEntry = {
          header,
          remaining: archiveSize,
          padding: -archiveSize & 511
        };
        state = STATE_BODY;
        return header;
      }
    },
    streamBody(callback) {
      if (state !== STATE_BODY || !currentEntry || currentEntry.remaining === 0) return 0;
      const bytesToFeed = Math.min(currentEntry.remaining, available());
      if (bytesToFeed === 0) return 0;
      const fed = pull(bytesToFeed, callback);
      currentEntry.remaining -= fed;
      return fed;
    },
    skipPadding() {
      if (state !== STATE_BODY || !currentEntry) return true;
      if (currentEntry.remaining > 0) throw new Error("Body not fully consumed");
      if (available() < currentEntry.padding) return false;
      discard(currentEntry.padding);
      currentEntry = null;
      state = STATE_HEADER;
      return true;
    },
    skipEntry() {
      if (state !== STATE_BODY || !currentEntry) return true;
      const toDiscard = Math.min(currentEntry.remaining, available());
      if (toDiscard > 0) {
        discard(toDiscard);
        currentEntry.remaining -= toDiscard;
      }
      if (currentEntry.remaining > 0) return false;
      return unpacker.skipPadding();
    },
    validateEOF() {
      if (strict) {
        if (!eof) throw truncateErr;
        if (available() > 0) {
          if (pull(available()).some((byte) => byte !== 0)) throw new Error("Invalid EOF.");
        }
      }
    }
  };
  return unpacker;
}
__name(createUnpacker, "createUnpacker");
function isZeroBlock(block) {
  if (block[0] !== 0) return false;
  if (block.byteOffset % 8 === 0) {
    const view = new BigUint64Array(block.buffer, block.byteOffset, block.length / 8);
    for (let i = 0; i < view.length; i++) if (view[i] !== 0n) return false;
    return true;
  }
  for (let i = 0; i < block.length; i++) if (block[i] !== 0) return false;
  return true;
}
__name(isZeroBlock, "isZeroBlock");
var EOF_BUFFER = /* @__PURE__ */ new Uint8Array(1024);
function createTarPacker(onData) {
  let currentHeader = null;
  let bytesWritten = 0;
  let finalized = false;
  const fail = /* @__PURE__ */ __name((message) => {
    throw new Error(message);
  }, "fail");
  return {
    add(header) {
      if (finalized) fail("No new tar entries after finalize.");
      if (currentHeader !== null) fail("Previous entry must be completed before adding a new one");
      const size = isBodyless(header) ? 0 : header.size;
      if (!Number.isSafeInteger(size) || size < 0) fail("Invalid tar entry size.");
      const headerBlocks = getHeaderBlocks({
        ...header,
        size
      });
      for (const block of headerBlocks) onData(block);
      currentHeader = {
        ...header,
        size
      };
      bytesWritten = 0;
    },
    write(chunk) {
      if (!currentHeader) fail("No active tar entry.");
      if (finalized) fail("Cannot write data after finalize.");
      const newTotal = bytesWritten + chunk.length;
      if (newTotal > currentHeader.size) fail(`"${currentHeader.name}" exceeds given size of ${currentHeader.size} bytes.`);
      bytesWritten = newTotal;
      onData(chunk);
    },
    endEntry() {
      if (!currentHeader) fail("No active entry to end.");
      if (finalized) fail("Cannot end entry after finalize.");
      if (bytesWritten !== currentHeader.size) fail(`Size mismatch for "${currentHeader.name}".`);
      const paddingSize = -currentHeader.size & 511;
      if (paddingSize > 0) onData(new Uint8Array(paddingSize));
      currentHeader = null;
      bytesWritten = 0;
    },
    finalize() {
      if (finalized) fail("Archive has already been finalized");
      if (currentHeader !== null) fail("Cannot finalize while an entry is still active");
      onData(EOF_BUFFER);
      finalized = true;
    }
  };
}
__name(createTarPacker, "createTarPacker");

// node_modules/modern-tar/dist/fs/index.js
import * as fs from "node:fs";
import * as fsp from "node:fs/promises";
import { cpus } from "node:os";
import * as path from "node:path";
import { Readable, Writable } from "node:stream";
function validateBounds(targetPath, destDir, errorMessage) {
  const target = path.resolve(targetPath);
  const dest = path.resolve(destDir);
  if (target !== dest && !target.startsWith(dest + path.sep)) throw new Error(errorMessage);
}
__name(validateBounds, "validateBounds");
var win32Reserved = {
  ":": "",
  "<": "",
  ">": "",
  "|": "",
  "?": "",
  "*": "",
  '"': ""
};
var pathAlias = /\/\/|(?:^|\/)\.(?:\/|$)/;
function normalizeName(name) {
  const path2 = name.replace(/\\/g, "/");
  if (path2.split("/").includes("..") || /^[a-zA-Z]:\.\./.test(path2)) throw new Error(`${name} points outside extraction directory`);
  let relative2 = path2;
  if (/^[a-zA-Z]:/.test(relative2)) relative2 = relative2.replace(/^[a-zA-Z]:[/\\]?/, "");
  else if (relative2.startsWith("/")) relative2 = relative2.replace(/^\/+/, "");
  if (process.platform === "win32") return relative2.replace(/[<>:"|?*]/g, (char) => win32Reserved[char]);
  return relative2;
}
__name(normalizeName, "normalizeName");
var normalizeHeaderName = /* @__PURE__ */ __name((s) => {
  const name = normalizeName(s.replace(/[\\/]+$/, ""));
  return pathAlias.test(name) ? path.posix.normalize(name) : name;
}, "normalizeHeaderName");
var BIGINT_STAT = { bigint: true };
var WITH_FILE_TYPES = { withFileTypes: true };
var packTarSources = packTar;
function packTar(sources, options = {}) {
  const results = /* @__PURE__ */ new Map();
  const fileHandles = /* @__PURE__ */ new Map();
  const bodyStreams = /* @__PURE__ */ new Set();
  let resume = null;
  let drain = null;
  let resumeWriter = null;
  let cancelError;
  const unblock = /* @__PURE__ */ __name(() => {
    const resolve2 = resume;
    resume = null;
    drain = null;
    resolve2?.();
  }, "unblock");
  const wakeWriter = /* @__PURE__ */ __name(() => {
    resumeWriter?.();
    resumeWriter = null;
  }, "wakeWriter");
  const destroyBody = /* @__PURE__ */ __name((body, reason) => {
    bodyStreams.delete(body);
    body.destroy(reason);
  }, "destroyBody");
  const closeHandle = /* @__PURE__ */ __name((handle) => {
    const closing = fileHandles.get(handle);
    if (closing !== null) return closing;
    const promise = handle.close().finally(() => fileHandles.delete(handle));
    fileHandles.set(handle, promise);
    return promise;
  }, "closeHandle");
  const stop = /* @__PURE__ */ __name(async (reason) => {
    for (const body of bodyStreams) destroyBody(body, reason);
    const closing = Promise.allSettled([...fileHandles.keys()].map(closeHandle));
    results.clear();
    wakeWriter();
    for (const result of await closing) if (result.status === "rejected") throw result.reason;
  }, "stop");
  const stream = new Readable({
    highWaterMark: 8388608,
    read: unblock,
    destroy(error, callback) {
      cancelError = error ?? AbortSignal.abort().reason;
      unblock();
      stop(cancelError).then(() => callback(error), (closeError) => callback(error ?? closeError));
    }
  });
  const onError = /* @__PURE__ */ __name((error) => stream.destroy(error), "onError");
  const packer = createTarPacker((chunk) => {
    if (stream.destroyed) throw cancelError;
    if (!stream.push(Buffer.from(chunk)) && !drain) drain = new Promise((resolve2) => {
      resume = resolve2;
    });
  });
  (async () => {
    const { dereference = false, filter, map, baseDir, concurrency = cpus().length || 8 } = options;
    let directoryPath;
    let realBaseDir;
    let jobs;
    if (typeof sources === "string") {
      const source = path.resolve(sources);
      directoryPath = source;
      const before = await fsp.stat(source, BIGINT_STAT);
      if (stream.destroyed) return;
      const entries = await fsp.readdir(source, WITH_FILE_TYPES);
      if (stream.destroyed) return;
      const after = await fsp.stat(source, BIGINT_STAT);
      if (stream.destroyed) return;
      jobs = before.dev === after.dev && before.ino === after.ino ? entries.map((entry) => ({
        type: entry.isDirectory() ? DIRECTORY : FILE,
        source: path.join(source, entry.name),
        target: entry.name
      })) : [];
    } else jobs = sources.map((source) => ({ ...source }));
    const seenHardlinks = /* @__PURE__ */ new Map();
    let jobIndex = 0;
    let writeIndex = 0;
    let activeWorkers = 0;
    let allJobsQueued = false;
    const writeStreamBody = /* @__PURE__ */ __name(async (body) => {
      try {
        for await (const chunk of body) {
          if (stream.destroyed) return;
          packer.write(chunk instanceof Uint8Array ? chunk : Buffer.from(chunk));
          if (drain) await drain;
        }
      } finally {
        body.off("error", onError);
        bodyStreams.delete(body);
      }
    }, "writeStreamBody");
    const writer = /* @__PURE__ */ __name(async () => {
      const readBufferSmall = Buffer.alloc(65536);
      let readBufferLarge = null;
      while (true) {
        if (stream.destroyed) return;
        if (allJobsQueued && writeIndex >= jobs.length) break;
        if (!results.has(writeIndex)) {
          await new Promise((resolve2) => {
            resumeWriter = resolve2;
          });
          continue;
        }
        const result = results.get(writeIndex);
        results.delete(writeIndex);
        if (!result) {
          writeIndex++;
          controller();
          continue;
        }
        if (result.hardlinkId) {
          const originalName = result.header.name;
          const hardlinkTarget = seenHardlinks.get(result.hardlinkId);
          if (hardlinkTarget) {
            if (result.body && !(result.body instanceof Uint8Array) && !(result.body instanceof Readable)) await closeHandle(result.body.handle);
            result.body = void 0;
            result.header.type = LINK;
            result.header.linkname = hardlinkTarget.originalName;
            result.header.size = 0;
          }
          if (map) result.header = map(result.header);
          if (hardlinkTarget) {
            if (result.header.linkname === hardlinkTarget.originalName) result.header.linkname = hardlinkTarget.mappedName;
          } else seenHardlinks.set(result.hardlinkId, {
            originalName,
            mappedName: result.header.name
          });
        }
        packer.add(result.header);
        if (drain) await drain;
        if (stream.destroyed) return;
        if (result.body) if (result.body instanceof Uint8Array) {
          if (result.body.length > 0) {
            packer.write(result.body);
            if (drain) await drain;
          }
        } else if (result.body instanceof Readable) await writeStreamBody(result.body);
        else {
          const { handle, size } = result.body;
          const readBuffer = size > 1048576 ? readBufferLarge ??= Buffer.alloc(1048576) : readBufferSmall;
          try {
            let bytesLeft = size;
            while (bytesLeft > 0 && !stream.destroyed) {
              const { bytesRead } = await handle.read(readBuffer, 0, Math.min(bytesLeft, readBuffer.length), null);
              if (bytesRead === 0) break;
              packer.write(readBuffer.subarray(0, bytesRead));
              bytesLeft -= bytesRead;
              if (drain) await drain;
            }
          } finally {
            await closeHandle(handle);
          }
        }
        if (stream.destroyed) return;
        packer.endEntry();
        if (drain) await drain;
        writeIndex++;
        controller();
      }
    }, "writer");
    const controller = /* @__PURE__ */ __name(() => {
      if (stream.destroyed || allJobsQueued) return;
      while (activeWorkers < concurrency && jobIndex < jobs.length && jobIndex - writeIndex < concurrency) {
        activeWorkers++;
        const currentIndex = jobIndex++;
        processJob(jobs[currentIndex], currentIndex).catch(onError).finally(() => {
          activeWorkers--;
          controller();
        });
      }
      if (activeWorkers === 0 && jobIndex >= jobs.length) {
        allJobsQueued = true;
        wakeWriter();
      }
    }, "controller");
    const processJob = /* @__PURE__ */ __name(async (job, index) => {
      let jobResult = null;
      const target = normalizeName(job.target);
      try {
        if (job.type === "content" || job.type === "stream") {
          let body2;
          let size;
          const isDir = target.endsWith("/");
          if (job.type === "stream") {
            if (!isDir && job.size <= 0 || isDir && job.size !== 0) throw new Error(isDir ? "Streams for directories must have size 0." : "Streams require a positive size.");
            size = job.size;
          } else {
            const content = await normalizeBody(job.content);
            size = content.length;
            body2 = content;
          }
          const stat3 = {
            size: isDir ? 0 : size,
            isFile: /* @__PURE__ */ __name(() => !isDir, "isFile"),
            isDirectory: /* @__PURE__ */ __name(() => isDir, "isDirectory"),
            isSymbolicLink: /* @__PURE__ */ __name(() => false, "isSymbolicLink"),
            mode: job.mode,
            mtime: job.mtime ?? /* @__PURE__ */ new Date(),
            uid: job.uid ?? 0,
            gid: job.gid ?? 0
          };
          if (stream.destroyed) return;
          if (filter && !filter(target, stat3)) return;
          if (stream.destroyed) return;
          let header2 = {
            name: target,
            type: isDir ? DIRECTORY : FILE,
            size: isDir ? 0 : size,
            mode: stat3.mode,
            mtime: stat3.mtime,
            uid: stat3.uid,
            gid: stat3.gid,
            uname: job.uname,
            gname: job.gname
          };
          if (map) header2 = map(header2);
          if (stream.destroyed) return;
          if (!isDir && job.type === "stream") {
            body2 = job.content instanceof Readable ? job.content : Readable.fromWeb(job.content);
            body2.once("error", onError);
            bodyStreams.add(body2);
          }
          jobResult = {
            header: header2,
            body: isDir ? void 0 : body2
          };
          return;
        }
        let source = job.source;
        let stat2 = await fsp.lstat(source, BIGINT_STAT);
        if (stream.destroyed) return;
        if (dereference && stat2.isSymbolicLink()) {
          source = await fsp.realpath(source);
          if (stream.destroyed) return;
          realBaseDir ??= await fsp.realpath(baseDir ?? directoryPath ?? process.cwd());
          if (stream.destroyed) return;
          const relativeToBase = path.relative(realBaseDir, source);
          if (relativeToBase === ".." || relativeToBase.startsWith(".." + path.sep) || path.isAbsolute(relativeToBase)) return;
          stat2 = await fsp.lstat(source, BIGINT_STAT);
          if (stat2.isSymbolicLink()) return;
        }
        if (stream.destroyed) return;
        if (filter && !filter(job.source, stat2)) return;
        if (stream.destroyed) return;
        let header = {
          name: target,
          size: 0,
          mode: (job.mode ?? Number(stat2.mode)) & 4095,
          mtime: job.mtime === void 0 ? stat2.mtime : new Date(job.mtime.getTime()),
          uid: job.uid ?? Number(stat2.uid),
          gid: job.gid ?? Number(stat2.gid),
          uname: job.uname,
          gname: job.gname,
          type: FILE
        };
        let body;
        let hardlinkId;
        if (stat2.isDirectory()) {
          header.type = DIRECTORY;
          header.name = target.endsWith("/") ? target : `${target}/`;
          try {
            const entries = await fsp.readdir(source, WITH_FILE_TYPES);
            if (stream.destroyed) return;
            const after = await fsp.lstat(source, BIGINT_STAT);
            if (stream.destroyed || !after.isDirectory() || stat2.dev !== after.dev || stat2.ino !== after.ino) return;
            for (const d of entries) jobs.push({
              type: d.isDirectory() ? DIRECTORY : FILE,
              source: path.join(source, d.name),
              target: `${header.name}${d.name}`,
              mtime: job.mtime,
              uid: job.uid,
              gid: job.gid,
              uname: job.uname,
              gname: job.gname,
              mode: job.mode
            });
          } catch (error) {
            const code = error.code;
            if (code !== "ENOENT" && code !== "ENOTDIR") throw error;
          }
        } else if (stat2.isSymbolicLink()) {
          header.type = SYMLINK;
          header.linkname = await fsp.readlink(job.source);
        } else if (stat2.isFile()) {
          header.size = Number(stat2.size);
          let handleToClose;
          if (stat2.nlink > 1n && (process.platform !== "win32" || stat2.dev !== 0n && stat2.ino !== -1n)) hardlinkId = `${stat2.dev}:${stat2.ino}`;
          try {
            let after;
            try {
              if (header.size === 0) after = await fsp.lstat(source, BIGINT_STAT);
              else {
                handleToClose = await fsp.open(source, fs.constants.O_NOFOLLOW ?? 0);
                fileHandles.set(handleToClose, null);
              }
            } catch (error) {
              const code = error.code;
              if (code === "ELOOP" || code === "ENOENT") return;
              throw error;
            }
            if (stream.destroyed) return;
            if (after) {
              if (!after.isFile() || stat2.dev !== after.dev || stat2.ino !== after.ino) return;
            } else {
              const { dev, ino } = await handleToClose.stat(BIGINT_STAT);
              if (stream.destroyed) return;
              if (stat2.dev !== dev || stat2.ino !== ino) return;
            }
            if (header.size > 0) {
              const handle = handleToClose;
              if (header.size < 32768) {
                const buffer = Buffer.allocUnsafe(header.size);
                let offset = 0;
                while (offset < buffer.length && !stream.destroyed) {
                  const { bytesRead } = await handle.read(buffer, offset, buffer.length - offset, offset);
                  if (bytesRead === 0) break;
                  offset += bytesRead;
                }
                body = offset === buffer.length ? buffer : buffer.subarray(0, offset);
              } else {
                body = {
                  handle,
                  size: header.size
                };
                handleToClose = void 0;
              }
            }
          } finally {
            if (handleToClose) await closeHandle(handleToClose);
          }
        } else return;
        if (stream.destroyed) return;
        if (hardlinkId) jobResult = {
          header,
          body,
          hardlinkId
        };
        else {
          if (map) header = map(header);
          jobResult = {
            header,
            body
          };
        }
      } finally {
        if (stream.destroyed) {
          if (jobResult?.body instanceof Readable) destroyBody(jobResult.body, cancelError);
          else if (jobResult?.body && !(jobResult.body instanceof Uint8Array)) await closeHandle(jobResult.body.handle);
        } else {
          results.set(index, jobResult);
          if (index === writeIndex) wakeWriter();
        }
      }
    }, "processJob");
    controller();
    await writer();
    if (!stream.destroyed) {
      packer.finalize();
      stream.push(null);
    }
  })().catch(onError);
  return stream;
}
__name(packTar, "packTar");
var createOperationQueue = /* @__PURE__ */ __name((concurrency) => {
  let active = 0;
  const tasks = [];
  let head = 0;
  let idle = null;
  let resolveIdle = null;
  const ensureIdle = /* @__PURE__ */ __name(() => idle ??= new Promise((resolve2) => resolveIdle = resolve2), "ensureIdle");
  const flush = /* @__PURE__ */ __name(() => {
    while (active < concurrency && head < tasks.length) {
      const task = tasks[head++];
      active++;
      task().finally(() => {
        active--;
        flush();
      });
    }
    if (head === tasks.length) {
      tasks.length = 0;
      head = 0;
      if (active === 0 && resolveIdle) {
        resolveIdle();
        idle = null;
        resolveIdle = null;
      }
    }
  }, "flush");
  return {
    add(op) {
      const wasIdle = active === 0 && head === tasks.length;
      return new Promise((resolve2, reject) => {
        tasks.push(() => Promise.resolve().then(op).then(resolve2, reject));
        if (wasIdle) ensureIdle();
        flush();
      });
    },
    onIdle() {
      return active === 0 && head === tasks.length ? Promise.resolve() : ensureIdle();
    }
  };
}, "createOperationQueue");
var BATCH_BYTES = 262144;
var BUFFER_LIMIT = 8388608;
var MAX_WRITE_VECTORS = 1024;
var CREATE_FLAGS = fs.constants.O_WRONLY | fs.constants.O_CREAT | fs.constants.O_TRUNC | (fs.constants.O_NOFOLLOW ?? 0) | fs.constants.O_EXCL;
var STATE_OPENING = 1;
var STATE_OPEN = 2;
var STATE_CLOSED = 3;
var STATE_FAILED = 4;
var DRAINED_PROMISE = Promise.resolve();
var discardFile = /* @__PURE__ */ __name((fd) => fs.ftruncate(fd, 0, () => fs.close(fd)), "discardFile");
function createFileSink(path2, { mode = 438, mtime } = {}, onError) {
  let state = STATE_OPENING;
  let flushing = false;
  let fd = null;
  let queue = [];
  let spare = [];
  let bytes = 0;
  let storedError = null;
  let failedFd = null;
  let endPromise = null;
  let endResolve = null;
  let endReject = null;
  let drainPromise = null;
  let drainResolve = null;
  let drainReject = null;
  const settleDrain = /* @__PURE__ */ __name((error) => {
    if (!drainPromise) return;
    const resolve2 = drainResolve;
    const reject = drainReject;
    drainPromise = null;
    drainResolve = null;
    drainReject = null;
    if (error) reject?.(error);
    else resolve2?.();
  }, "settleDrain");
  const resetBuffers = /* @__PURE__ */ __name(() => {
    bytes = 0;
    queue.length = 0;
    spare.length = 0;
  }, "resetBuffers");
  const finish = /* @__PURE__ */ __name(() => {
    if (state === STATE_FAILED) return;
    state = STATE_CLOSED;
    endResolve?.();
    settleDrain();
  }, "finish");
  const fail = /* @__PURE__ */ __name((error) => {
    if (storedError) return;
    storedError = error;
    state = STATE_FAILED;
    const writePending = flushing;
    resetBuffers();
    const fdToClose = fd;
    fd = null;
    if (fdToClose !== null) if (writePending) failedFd = fdToClose;
    else discardFile(fdToClose);
    flushing = false;
    if (endReject) endReject(error);
    else onError?.(error);
    settleDrain(error);
  }, "fail");
  const close2 = /* @__PURE__ */ __name(() => {
    if (fd === null) {
      finish();
      return;
    }
    const fdToClose = fd;
    fd = null;
    if (mtime) fs.futimes(fdToClose, mtime, mtime, (err) => {
      if (state !== STATE_OPEN) {
        fs.close(fdToClose);
        return;
      }
      if (err) {
        fs.close(fdToClose, () => fail(err));
        return;
      }
      fs.close(fdToClose, (closeErr) => {
        if (state !== STATE_OPEN) return;
        if (closeErr) fail(closeErr);
        else finish();
      });
    });
    else fs.close(fdToClose, (err) => {
      if (state !== STATE_OPEN) return;
      if (err) fail(err);
      else finish();
    });
  }, "close");
  const flush = /* @__PURE__ */ __name(() => {
    if (flushing || queue.length === 0 || state !== STATE_OPEN) return;
    flushing = true;
    let bufs = queue;
    queue = spare;
    spare = bufs;
    queue.length = 0;
    let pendingBytes = bytes;
    const onDone = /* @__PURE__ */ __name((err, written = 0) => {
      if (state !== STATE_OPEN) {
        if (failedFd !== null) {
          const fdToClose = failedFd;
          failedFd = null;
          discardFile(fdToClose);
        }
        return;
      }
      if (err) {
        flushing = false;
        fail(err);
        return;
      }
      if (written <= 0 || written > pendingBytes) {
        flushing = false;
        fail(/* @__PURE__ */ new Error("File write made no progress."));
        return;
      }
      bytes -= written;
      pendingBytes -= written;
      if (pendingBytes > 0) {
        let skipped = written;
        let index = 0;
        while (skipped >= bufs[index].length) skipped -= bufs[index++].length;
        bufs = bufs.slice(index);
        if (skipped > 0) bufs[0] = bufs[0].subarray(skipped);
        if (bufs.length === 1) {
          const buf = bufs[0];
          fs.write(fd, buf, 0, buf.length, null, onDone);
        } else fs.writev(fd, bufs, onDone);
        return;
      }
      flushing = false;
      spare.length = 0;
      if (bytes < BUFFER_LIMIT) settleDrain();
      if (queue.length > 0) flush();
      else if (endResolve) close2();
    }, "onDone");
    if (bufs.length === 1) {
      const buf = bufs[0];
      fs.write(fd, buf, 0, buf.length, null, onDone);
    } else fs.writev(fd, bufs, onDone);
  }, "flush");
  const onOpen = /* @__PURE__ */ __name((err, openFd) => {
    if (err) return fail(err);
    if (state >= STATE_CLOSED) {
      fs.close(openFd);
      return;
    }
    fd = openFd;
    state = STATE_OPEN;
    if (endResolve) if (queue.length > 0) flush();
    else close2();
    else if (bytes >= BATCH_BYTES || queue.length >= MAX_WRITE_VECTORS) flush();
    else settleDrain();
  }, "onOpen");
  const write2 = /* @__PURE__ */ __name((chunk) => {
    if (state >= STATE_CLOSED || endResolve) return false;
    queue.push(chunk);
    bytes += chunk.length;
    if (state === STATE_OPEN && !flushing && (bytes >= BATCH_BYTES || queue.length >= MAX_WRITE_VECTORS)) flush();
    return bytes < BUFFER_LIMIT && queue.length < MAX_WRITE_VECTORS;
  }, "write");
  const waitDrain = /* @__PURE__ */ __name(() => {
    if (storedError) return Promise.reject(storedError);
    if (state === STATE_OPENING || state === STATE_OPEN && (bytes >= BUFFER_LIMIT || queue.length >= MAX_WRITE_VECTORS)) return drainPromise ??= new Promise((resolve2, reject) => {
      drainResolve = resolve2;
      drainReject = reject;
    });
    return DRAINED_PROMISE;
  }, "waitDrain");
  const end = /* @__PURE__ */ __name(() => {
    if (storedError) return Promise.reject(storedError);
    if (state >= STATE_CLOSED) return DRAINED_PROMISE;
    if (endPromise) return endPromise;
    endPromise = new Promise((resolve2, reject) => {
      endResolve = resolve2;
      endReject = reject;
      if (state === STATE_OPEN && !flushing) if (queue.length > 0) flush();
      else close2();
    });
    return endPromise;
  }, "end");
  const destroy = /* @__PURE__ */ __name((error) => {
    if (error) {
      fail(error);
      return;
    }
    if (state >= STATE_CLOSED) return;
    resetBuffers();
    flushing = false;
    if (fd !== null) {
      const fdToClose = fd;
      fd = null;
      fs.close(fdToClose);
    }
    finish();
  }, "destroy");
  fs.open(path2, CREATE_FLAGS, mode, (err, openFd) => {
    if (err?.code !== "EEXIST") return onOpen(err, openFd);
    if (state !== STATE_OPENING) return;
    fs.rm(path2, { force: true }, (rmErr) => {
      if (rmErr) return fail(rmErr);
      if (state !== STATE_OPENING) return;
      fs.open(path2, CREATE_FLAGS, mode, onOpen);
    });
  });
  return {
    write: write2,
    end,
    destroy,
    waitDrain
  };
}
__name(createFileSink, "createFileSink");
var createCache = /* @__PURE__ */ __name(() => {
  const m = /* @__PURE__ */ new Map();
  return {
    get(k) {
      const v = m.get(k);
      if (m.delete(k)) m.set(k, v);
      return v;
    },
    set(k, v) {
      if (m.set(k, v).size > 1e4) m.delete(m.keys().next().value);
    },
    clear() {
      m.clear();
    }
  };
}, "createCache");
var ENOENT = "ENOENT";
var MAX_SYMLINKS = 64;
var linkSep = process.platform === "win32" ? /[/\\]/ : "/";
var linkParts = /* @__PURE__ */ __name((linkname) => linkname.split(linkSep).filter((part) => part && part !== "."), "linkParts");
var createPathCache = /* @__PURE__ */ __name((destDirPath, options, opQueue, concurrency) => {
  const { maxDepth = 1024, dmode } = options;
  const dirPromises = createCache();
  const pathConflicts = /* @__PURE__ */ new Map();
  const deferredLinks = [];
  let symlinks;
  const realDirCache = createCache();
  const initializeDestDir = /* @__PURE__ */ __name(async (destDirPath2) => {
    const symbolic = path.resolve(destDirPath2);
    try {
      await fsp.mkdir(symbolic, { recursive: true });
    } catch (err) {
      if (err.code === ENOENT) {
        const parentDir = path.dirname(symbolic);
        if (parentDir === symbolic) throw err;
        await fsp.mkdir(parentDir, { recursive: true });
        await fsp.mkdir(symbolic, { recursive: true });
      } else throw err;
    }
    try {
      return {
        symbolic,
        real: await fsp.realpath(symbolic)
      };
    } catch (err) {
      if (err.code === ENOENT) return {
        symbolic,
        real: symbolic
      };
      throw err;
    }
  }, "initializeDestDir");
  const destDirPromise = initializeDestDir(destDirPath);
  destDirPromise.catch(() => {
  });
  const getRealDir = /* @__PURE__ */ __name(async (dirPath, errorMessage) => {
    const destDir = await destDirPromise;
    if (dirPath === destDir.symbolic) return destDir.real;
    let promise = realDirCache.get(dirPath);
    if (!promise) {
      promise = fsp.realpath(dirPath).then((realPath) => {
        validateBounds(realPath, destDir.real, errorMessage);
        return realPath;
      });
      realDirCache.set(dirPath, promise);
    }
    return promise;
  }, "getRealDir");
  const prepareDirectory = /* @__PURE__ */ __name(async (dirPath, mode) => {
    let promise = dirPromises.get(dirPath);
    if (promise) return promise;
    promise = (async () => {
      if (dirPath === (await destDirPromise).symbolic) return;
      await prepareDirectory(path.dirname(dirPath));
      try {
        const stat2 = await fsp.lstat(dirPath);
        if (stat2.isDirectory()) return;
        if (stat2.isSymbolicLink()) try {
          const realPath = await getRealDir(dirPath, `Symlink "${dirPath}" points outside the extraction directory.`);
          if ((await fsp.stat(realPath)).isDirectory()) return;
        } catch (err) {
          if (err.code === ENOENT) throw new Error(`Symlink "${dirPath}" points outside the extraction directory.`);
          throw err;
        }
        throw new Error(`"${dirPath}" is not a valid directory component.`);
      } catch (err) {
        if (err.code === ENOENT) {
          await fsp.mkdir(dirPath, { mode: mode ?? options.dmode });
          return;
        }
        throw err;
      }
    })();
    dirPromises.set(dirPath, promise);
    return promise;
  }, "prepareDirectory");
  return {
    async ready() {
      await destDirPromise;
    },
    async preparePath(header) {
      const { name, linkname, type, mode, mtime } = header;
      const normalizedName = normalizeHeaderName(name);
      const destDir = await destDirPromise;
      const outPath = path.join(destDir.symbolic, normalizedName);
      if (maxDepth !== Infinity) {
        let depth = 1;
        for (const char of normalizedName) if (char === "/" && ++depth > maxDepth) throw new Error("Tar exceeds max specified depth.");
      }
      const prevOp = pathConflicts.get(normalizedName);
      if (prevOp) {
        if (prevOp === "directory" && type !== "directory" || prevOp !== "directory" && type === "directory") throw new Error(`Path conflict ${type} over existing ${prevOp} at "${name}"`);
        return;
      }
      const parentDir = path.dirname(outPath);
      switch (type) {
        case DIRECTORY: {
          pathConflicts.set(normalizedName, DIRECTORY);
          const safeMode = mode === void 0 ? void 0 : mode & 511;
          await prepareDirectory(outPath, dmode ?? safeMode);
          if (mtime) await fsp.lutimes(outPath, mtime, mtime).catch(() => {
          });
          return;
        }
        case FILE:
          pathConflicts.set(normalizedName, FILE);
          await prepareDirectory(parentDir);
          return path.join(await getRealDir(parentDir, `File "${name}" points outside the extraction directory.`), path.basename(outPath));
        case SYMLINK: {
          pathConflicts.set(normalizedName, SYMLINK);
          if (!linkname) return;
          validateBounds(path.resolve(parentDir, linkname), destDir.symbolic, `Symlink "${linkname}" points outside the extraction directory.`);
          await prepareDirectory(parentDir);
          const realParentDir = await fsp.realpath(parentDir);
          validateBounds(realParentDir, destDir.real, "Symlink parent changed.");
          validateBounds(path.resolve(realParentDir, linkname), destDir.real, `Symlink "${linkname}" points outside the extraction directory.`);
          const realOutPath = path.join(realParentDir, path.basename(outPath));
          try {
            await fsp.symlink(linkname, realOutPath);
          } catch (err) {
            if (err.code !== "EEXIST") throw err;
            await fsp.rm(realOutPath, { force: true });
            if (await fsp.realpath(parentDir) !== realParentDir) throw new Error("Symlink parent changed.");
            await fsp.symlink(linkname, realOutPath);
          }
          (symlinks ??= []).push([normalizedName, linkname]);
          dirPromises.clear();
          realDirCache.clear();
          if (mtime) await fsp.lutimes(outPath, mtime, mtime).catch(() => {
          });
          return;
        }
        case LINK: {
          pathConflicts.set(normalizedName, LINK);
          if (!linkname) return;
          if (path.isAbsolute(linkname)) throw new Error(`Hardlink "${linkname}" points outside the extraction directory.`);
          const linkTarget = path.join(destDir.symbolic, linkname);
          validateBounds(linkTarget, destDir.symbolic, `Hardlink "${linkname}" points outside the extraction directory.`);
          await prepareDirectory(parentDir);
          if (linkTarget !== outPath) deferredLinks.push({
            linkTarget,
            outPath
          });
          return;
        }
        default:
          return;
      }
    },
    async checkSymlinks() {
      if (!symlinks) return;
      const { symbolic: dest, real } = await destDirPromise;
      const realPrefix = real + path.sep;
      const root = path.parse(real).root;
      const depth = linkParts(real.slice(root.length)).length;
      const targetParts = /* @__PURE__ */ __name((linkname, resolvedParts, message) => {
        if (!path.isAbsolute(linkname)) return linkParts(linkname);
        validateBounds(linkname, real, message);
        resolvedParts.length = 0;
        const parts = linkParts(linkname.slice(root.length));
        parts.splice(0, depth);
        return parts;
      }, "targetParts");
      const getSymlinkError = /* @__PURE__ */ __name(async ([name, storedLinkname]) => {
        const outPath = path.join(dest, name);
        try {
          try {
            const resolved = await fsp.realpath(outPath);
            if (resolved !== real && !resolved.startsWith(realPrefix)) throw new Error(`Symlink "${storedLinkname}" points outside the extraction directory.`);
            return;
          } catch (err) {
            if (err.code !== ENOENT) throw err;
          }
          if (!(await fsp.lstat(outPath)).isSymbolicLink()) return;
          const linkname = await fsp.readlink(outPath);
          const message = `Symlink "${linkname}" points outside the extraction directory.`;
          const realParent = await fsp.realpath(path.dirname(outPath));
          validateBounds(realParent, real, message);
          const resolvedParts = linkParts(path.relative(real, realParent));
          const pendingParts = targetParts(linkname, resolvedParts, message);
          let followedSymlinks = 0;
          for (let i = 0; i < pendingParts.length; i++) {
            const part = pendingParts[i];
            if (part === "..") {
              if (!resolvedParts.length) throw new Error(message);
              resolvedParts.pop();
              continue;
            }
            resolvedParts.push(part);
            const nextPath = path.join(real, ...resolvedParts);
            let nextStat;
            try {
              nextStat = await fsp.lstat(nextPath);
            } catch (err) {
              if (err.code === ENOENT) continue;
              throw err;
            }
            if (!nextStat.isSymbolicLink()) continue;
            if (++followedSymlinks > MAX_SYMLINKS) throw new Error(message);
            const nextLink = await fsp.readlink(nextPath);
            resolvedParts.pop();
            pendingParts.splice(i + 1, 0, ...targetParts(nextLink, resolvedParts, message));
          }
        } catch (err) {
          if (err.code !== ENOENT) return err;
        }
      }, "getSymlinkError");
      for (let start = 0; start < symlinks.length; start += concurrency) {
        const batch = symlinks.slice(start, start + concurrency);
        const errors = await Promise.all(batch.map((symlink2) => opQueue.add(() => getSymlinkError(symlink2))));
        for (const [i, error] of errors.entries()) {
          if (error === void 0) continue;
          await fsp.rm(path.join(dest, batch[i][0]), { force: true });
          throw error;
        }
      }
    },
    async applyLinks() {
      const destRoot = (await destDirPromise).real;
      for (const { linkTarget, outPath } of deferredLinks) try {
        const realTargetDir = await fsp.realpath(path.dirname(linkTarget));
        validateBounds(realTargetDir, destRoot, `Hardlink "${linkTarget}" points outside the extraction directory.`);
        const realTarget = path.join(realTargetDir, path.basename(linkTarget));
        const [targetResult, outDirResult] = await Promise.allSettled([opQueue.add(() => fsp.lstat(realTarget)), opQueue.add(() => fsp.realpath(path.dirname(outPath)))]);
        if (targetResult.status === "rejected") throw targetResult.reason;
        const targetStat = targetResult.value;
        if (targetStat.isSymbolicLink()) throw new Error(`Hardlink "${linkTarget}" is a symlink.`);
        if (outDirResult.status === "rejected") throw outDirResult.reason;
        const realOutDir = outDirResult.value;
        validateBounds(realOutDir, destRoot, `Hardlink "${outPath}" points outside the extraction directory.`);
        const realOutPath = path.join(realOutDir, path.basename(outPath));
        try {
          await fsp.link(realTarget, realOutPath);
        } catch (err) {
          const code = err.code;
          if (code !== "EEXIST" && code !== ENOENT) throw err;
          try {
            const outStat = await fsp.lstat(realOutPath);
            if (outStat.dev === targetStat.dev && outStat.ino === targetStat.ino) continue;
            await fsp.rm(realOutPath, { force: true });
          } catch (err2) {
            if (err2.code !== ENOENT) throw err2;
          }
          await fsp.link(realTarget, realOutPath);
        }
        const linkStat = await fsp.lstat(realOutPath);
        if (linkStat.dev !== targetStat.dev || linkStat.ino !== targetStat.ino) {
          await fsp.rm(realOutPath, { force: true });
          throw new Error(`Hardlink target "${linkTarget}" changed during creation for link at "${outPath}".`);
        }
      } catch (err) {
        if (err.code === ENOENT) throw new Error(`Hardlink target "${linkTarget}" does not exist for link at "${outPath}".`);
        throw err;
      }
    }
  };
}, "createPathCache");
function unpackTar(directoryPath, options = {}) {
  const unpacker = createUnpacker(options);
  const concurrency = options.concurrency || cpus().length || 8;
  const opQueue = createOperationQueue(concurrency);
  let cancelError;
  const pathCache = createPathCache(directoryPath, options, opQueue, concurrency);
  let currentFileStream = null;
  const fileStreams = /* @__PURE__ */ new Set();
  let needsDrain = false;
  const writeCurrent = /* @__PURE__ */ __name((chunk) => {
    const writeOk = currentFileStream.write(chunk);
    if (!writeOk) needsDrain = true;
    return writeOk;
  }, "writeCurrent");
  const onFileError = /* @__PURE__ */ __name((err) => {
    if (!writable.destroyed) writable.destroy(err);
  }, "onFileError");
  const closeCurrent = /* @__PURE__ */ __name(() => {
    const stream = currentFileStream;
    currentFileStream = null;
    opQueue.add(() => stream.end()).then(() => fileStreams.delete(stream), (err) => {
      fileStreams.delete(stream);
      onFileError(err);
    });
  }, "closeCurrent");
  const writable = new Writable({
    async write(chunk, _, cb) {
      let pendingFileOpens;
      let writeError;
      try {
        unpacker.write(chunk);
        if (unpacker.isEntryActive()) {
          if (currentFileStream) {
            while (!unpacker.isBodyComplete()) {
              needsDrain = false;
              const fed = unpacker.streamBody(writeCurrent);
              if (needsDrain) await currentFileStream.waitDrain();
              else if (fed === 0) return;
            }
            if (!unpacker.skipPadding()) return;
            closeCurrent();
          } else if (!unpacker.skipEntry()) return;
        }
        while (true) {
          const header = unpacker.readHeader();
          if (header === void 0 || header === null) return;
          const transformedHeader = transformHeader(header, options);
          if (!transformedHeader) {
            if (!unpacker.skipEntry()) return;
            continue;
          }
          const outPath = await opQueue.add(() => pathCache.preparePath(transformedHeader));
          if (cancelError) throw cancelError;
          if (outPath) {
            const safeMode = transformedHeader.mode === void 0 ? void 0 : transformedHeader.mode & 511;
            currentFileStream = createFileSink(outPath, {
              mode: options.fmode ?? safeMode,
              mtime: transformedHeader.mtime ?? void 0
            }, onFileError);
            fileStreams.add(currentFileStream);
            (pendingFileOpens ??= []).push(currentFileStream.waitDrain().catch((error) => error));
            while (!unpacker.isBodyComplete()) {
              needsDrain = false;
              const fed = unpacker.streamBody(writeCurrent);
              if (needsDrain) await currentFileStream.waitDrain();
              else if (fed === 0) return;
            }
            if (!unpacker.skipPadding()) return;
            closeCurrent();
          } else if (!unpacker.skipEntry()) return;
        }
      } catch (err) {
        writeError = err;
      } finally {
        const openError = pendingFileOpens ? (await Promise.all(pendingFileOpens)).find((error) => error) : void 0;
        cb(cancelError ?? openError ?? writeError);
      }
    },
    async final(cb) {
      try {
        unpacker.end();
        unpacker.validateEOF();
        if (currentFileStream) closeCurrent();
        await pathCache.ready();
        await opQueue.onIdle();
        if (cancelError) throw cancelError;
        await pathCache.checkSymlinks();
        await pathCache.applyLinks();
        cb();
      } catch (err) {
        cb(err);
      }
    },
    destroy(error, callback) {
      const hasWork = fileStreams.size > 0 || writable.writableLength > 0 || writable.writableEnded && !writable.writableFinished;
      if (!error && !hasWork) {
        callback(null);
        return;
      }
      cancelError = error ?? AbortSignal.abort().reason;
      for (const stream of fileStreams) stream.destroy(cancelError);
      fileStreams.clear();
      currentFileStream = null;
      callback(cancelError);
    }
  });
  return writable;
}
__name(unpackTar, "unpackTar");
export {
  packTar,
  packTarSources,
  unpackTar
};
//# sourceMappingURL=fs-HGLDZXEV.mjs.map
