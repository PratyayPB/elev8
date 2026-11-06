import {
  __name,
  init_esm
} from "./chunk-OA5TDGRQ.mjs";

// node_modules/@puppeteer/browsers/lib/main.js
init_esm();

// node_modules/@puppeteer/browsers/lib/launch.js
init_esm();
import childProcess from "node:child_process";
import { EventEmitter } from "node:events";
import { accessSync } from "node:fs";
import os4 from "node:os";
import readline from "node:readline";

// node_modules/@puppeteer/browsers/lib/browser-data/browser-data.js
init_esm();

// node_modules/@puppeteer/browsers/lib/browser-data/chrome-headless-shell.js
init_esm();
import path2 from "node:path";

// node_modules/@puppeteer/browsers/lib/browser-data/chrome.js
init_esm();
import { execSync } from "node:child_process";
import os from "node:os";
import path from "node:path";

// node_modules/@puppeteer/browsers/lib/httpUtil.js
init_esm();
import { createHash } from "node:crypto";
import { createWriteStream, unlinkSync } from "node:fs";
import * as http from "node:http";
import * as https from "node:https";
import { URL as URL2, urlToHttpOptions } from "node:url";
async function headHttpRequest(url) {
  return await new Promise((resolve2) => {
    httpRequest(url, "HEAD", (response) => {
      response.resume();
      resolve2(response.statusCode === 200);
    }, false).then((request3) => {
      request3.on("error", () => {
        resolve2(false);
      });
    }).catch(() => {
      resolve2(false);
    });
  });
}
__name(headHttpRequest, "headHttpRequest");
async function httpRequest(url, method, response, keepAlive = true) {
  let agent;
  try {
    const { ProxyAgent } = await import("proxy-agent");
    agent = new ProxyAgent();
  } catch {
  }
  const options = {
    protocol: url.protocol,
    hostname: url.hostname,
    port: url.port,
    path: url.pathname + url.search,
    method,
    headers: keepAlive ? { Connection: "keep-alive" } : void 0,
    auth: urlToHttpOptions(url).auth,
    agent
  };
  const requestCallback = /* @__PURE__ */ __name((res) => {
    if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      void httpRequest(new URL2(res.headers.location), method, response);
      res.resume();
    } else {
      response(res);
    }
  }, "requestCallback");
  const request3 = options.protocol === "https:" ? https.request(options, requestCallback) : http.request(options, requestCallback);
  request3.end();
  return request3;
}
__name(httpRequest, "httpRequest");
var HashVerifier = class {
  static {
    __name(this, "HashVerifier");
  }
  #hash = createHash("sha256");
  update(chunk) {
    this.#hash.update(chunk);
  }
  verify(url, destinationPath, expectedHash) {
    const actualHash = this.#hash.digest("hex");
    if (actualHash !== expectedHash.toLowerCase()) {
      try {
        unlinkSync(destinationPath);
      } catch {
      }
      throw new Error(`Integrity check failed for downloaded browser archive.
  URL:      ${url}
  Expected: ${expectedHash.toLowerCase()}
  Actual:   ${actualHash}`);
    }
  }
};
function downloadFile(url, destinationPath, progressCallback, expectedHash) {
  return new Promise(async (resolve2, reject) => {
    let downloadedBytes = 0;
    let totalBytes = 0;
    const verifier = expectedHash ? new HashVerifier() : null;
    try {
      const request3 = await httpRequest(url, "GET", (response) => {
        if (response.statusCode !== 200) {
          const error = new Error(`Download failed: server returned code ${response.statusCode}. URL: ${url}`);
          response.resume();
          reject(error);
          return;
        }
        const file = createWriteStream(destinationPath);
        file.on("close", () => {
          if (verifier && expectedHash) {
            try {
              verifier.verify(url, destinationPath, expectedHash);
            } catch (err) {
              reject(err);
              return;
            }
          }
          return resolve2();
        });
        file.on("error", (error) => {
          return reject(error);
        });
        totalBytes = parseInt(response.headers["content-length"], 10);
        response.on("data", (chunk) => {
          downloadedBytes += chunk.length;
          verifier?.update(chunk);
          if (progressCallback) {
            progressCallback(downloadedBytes, totalBytes);
          }
        });
        response.pipe(file);
      });
      request3.on("error", (error) => {
        return reject(error);
      });
    } catch (error) {
      reject(error);
    }
  });
}
__name(downloadFile, "downloadFile");
async function getJSON(url) {
  const text = await getText(url);
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Could not parse JSON from " + url.toString());
  }
}
__name(getJSON, "getJSON");
function getText(url) {
  return new Promise(async (resolve2, reject) => {
    try {
      const request3 = await httpRequest(url, "GET", (response) => {
        let data = "";
        if (response.statusCode && response.statusCode >= 400) {
          return reject(new Error(`Got status code ${response.statusCode}`));
        }
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          try {
            return resolve2(String(data));
          } catch {
            return reject(new Error(`Failed to read text response from ${url}`));
          }
        });
      }, false);
      request3.on("error", (err) => {
        reject(err);
      });
    } catch (err) {
      reject(err);
    }
  });
}
__name(getText, "getText");

// node_modules/@puppeteer/browsers/lib/browser-data/types.js
init_esm();
var Browser;
(function(Browser2) {
  Browser2["CHROME"] = "chrome";
  Browser2["CHROMEHEADLESSSHELL"] = "chrome-headless-shell";
  Browser2["CHROMIUM"] = "chromium";
  Browser2["FIREFOX"] = "firefox";
  Browser2["CHROMEDRIVER"] = "chromedriver";
})(Browser || (Browser = {}));
var BrowserPlatform;
(function(BrowserPlatform2) {
  BrowserPlatform2["LINUX"] = "linux";
  BrowserPlatform2["LINUX_ARM"] = "linux_arm";
  BrowserPlatform2["MAC"] = "mac";
  BrowserPlatform2["MAC_ARM"] = "mac_arm";
  BrowserPlatform2["WIN32"] = "win32";
  BrowserPlatform2["WIN64"] = "win64";
})(BrowserPlatform || (BrowserPlatform = {}));
var BrowserTag;
(function(BrowserTag2) {
  BrowserTag2["CANARY"] = "canary";
  BrowserTag2["NIGHTLY"] = "nightly";
  BrowserTag2["BETA"] = "beta";
  BrowserTag2["DEV"] = "dev";
  BrowserTag2["DEVEDITION"] = "devedition";
  BrowserTag2["STABLE"] = "stable";
  BrowserTag2["ESR"] = "esr";
  BrowserTag2["LATEST"] = "latest";
})(BrowserTag || (BrowserTag = {}));
var ChromeReleaseChannel;
(function(ChromeReleaseChannel2) {
  ChromeReleaseChannel2["STABLE"] = "stable";
  ChromeReleaseChannel2["DEV"] = "dev";
  ChromeReleaseChannel2["CANARY"] = "canary";
  ChromeReleaseChannel2["BETA"] = "beta";
})(ChromeReleaseChannel || (ChromeReleaseChannel = {}));
function verifyChromeReleaseChannel(value) {
  if (Object.values(ChromeReleaseChannel).includes(value)) {
    return value;
  }
  throw new Error(`Invalid Chrome channel: ${value}`);
}
__name(verifyChromeReleaseChannel, "verifyChromeReleaseChannel");

// node_modules/@puppeteer/browsers/lib/browser-data/chrome.js
function folder(platform, buildId) {
  switch (platform) {
    case BrowserPlatform.LINUX_ARM:
      if (buildId && compareVersions(buildId, "153.0.8001.0") < 0) {
        return "linux64";
      }
      return "linux-arm64";
    case BrowserPlatform.LINUX:
      return "linux64";
    case BrowserPlatform.MAC_ARM:
      return "mac-arm64";
    case BrowserPlatform.MAC:
      return "mac-x64";
    case BrowserPlatform.WIN32:
      return "win32";
    case BrowserPlatform.WIN64:
      return "win64";
  }
}
__name(folder, "folder");
function resolveDownloadUrl(platform, buildId, baseUrl = "https://storage.googleapis.com/chrome-for-testing-public") {
  return `${baseUrl}/${resolveDownloadPath(platform, buildId).join("/")}`;
}
__name(resolveDownloadUrl, "resolveDownloadUrl");
function resolveDownloadPath(platform, buildId) {
  return [
    buildId,
    folder(platform, buildId),
    `chrome-${folder(platform, buildId)}.zip`
  ];
}
__name(resolveDownloadPath, "resolveDownloadPath");
function relativeExecutablePath(platform, buildId) {
  switch (platform) {
    case BrowserPlatform.MAC:
    case BrowserPlatform.MAC_ARM:
      return path.join("chrome-" + folder(platform, buildId), "Google Chrome for Testing.app", "Contents", "MacOS", "Google Chrome for Testing");
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      return path.join("chrome-" + folder(platform, buildId), "chrome");
    case BrowserPlatform.WIN32:
    case BrowserPlatform.WIN64:
      return path.join("chrome-" + folder(platform, buildId), "chrome.exe");
  }
}
__name(relativeExecutablePath, "relativeExecutablePath");
var baseVersionUrl = "https://googlechromelabs.github.io/chrome-for-testing";
async function getLastKnownGoodReleaseForChannel(channel) {
  const data = await getJSON(new URL(`${baseVersionUrl}/last-known-good-versions.json`));
  for (const channel2 of Object.keys(data.channels)) {
    data.channels[channel2.toLowerCase()] = data.channels[channel2];
    delete data.channels[channel2];
  }
  return data.channels[channel];
}
__name(getLastKnownGoodReleaseForChannel, "getLastKnownGoodReleaseForChannel");
async function getLastKnownGoodReleaseForMilestone(milestone) {
  const data = await getJSON(new URL(`${baseVersionUrl}/latest-versions-per-milestone.json`));
  return data.milestones[milestone];
}
__name(getLastKnownGoodReleaseForMilestone, "getLastKnownGoodReleaseForMilestone");
async function getLastKnownGoodReleaseForBuild(buildPrefix) {
  const data = await getJSON(new URL(`${baseVersionUrl}/latest-patch-versions-per-build.json`));
  return data.builds[buildPrefix];
}
__name(getLastKnownGoodReleaseForBuild, "getLastKnownGoodReleaseForBuild");
async function resolveBuildId(channel) {
  if (Object.values(ChromeReleaseChannel).includes(channel)) {
    return (await getLastKnownGoodReleaseForChannel(channel)).version;
  }
  if (channel.match(/^\d+$/)) {
    return (await getLastKnownGoodReleaseForMilestone(channel))?.version;
  }
  if (channel.match(/^\d+\.\d+\.\d+$/)) {
    return (await getLastKnownGoodReleaseForBuild(channel))?.version;
  }
  return;
}
__name(resolveBuildId, "resolveBuildId");
var WINDOWS_ENV_PARAM_NAMES = [
  "PROGRAMFILES",
  "ProgramW6432",
  "ProgramFiles(x86)",
  // https://source.chromium.org/chromium/chromium/src/+/main:chrome/installer/mini_installer/README.md
  "LOCALAPPDATA"
];
function getChromeWindowsLocation(channel, locationsPrefixes) {
  if (locationsPrefixes.size === 0) {
    throw new Error("Non of the common Windows Env variables were set");
  }
  let suffix;
  switch (channel) {
    case ChromeReleaseChannel.STABLE:
      suffix = "Google\\Chrome\\Application\\chrome.exe";
      break;
    case ChromeReleaseChannel.BETA:
      suffix = "Google\\Chrome Beta\\Application\\chrome.exe";
      break;
    case ChromeReleaseChannel.CANARY:
      suffix = "Google\\Chrome SxS\\Application\\chrome.exe";
      break;
    case ChromeReleaseChannel.DEV:
      suffix = "Google\\Chrome Dev\\Application\\chrome.exe";
      break;
  }
  return [...locationsPrefixes.values()].map((l) => {
    return path.win32.join(l, suffix);
  });
}
__name(getChromeWindowsLocation, "getChromeWindowsLocation");
function getWslVariable(variable) {
  try {
    const result = execSync(`cmd.exe /c echo %${variable.toLocaleUpperCase()}%`, {
      // We need to ignore the stderr as cmd.exe
      // prints a message about wrong UNC path not supported.
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf-8"
    }).trim();
    if (result) {
      return result;
    }
  } catch {
  }
  return;
}
__name(getWslVariable, "getWslVariable");
function getWslLocation(channel) {
  const wslVersion = execSync("wslinfo --version", {
    stdio: ["ignore", "pipe", "ignore"],
    encoding: "utf-8"
  }).trim();
  if (!wslVersion) {
    throw new Error("Not in WSL or unsupported version of WSL.");
  }
  const wslPrefixes = /* @__PURE__ */ new Set();
  for (const name of WINDOWS_ENV_PARAM_NAMES) {
    const wslPrefix = getWslVariable(name);
    if (wslPrefix) {
      wslPrefixes.add(wslPrefix);
    }
  }
  const windowsPath = getChromeWindowsLocation(channel, wslPrefixes);
  return windowsPath.map((path10) => {
    return execSync(`wslpath "${path10}"`).toString().trim();
  });
}
__name(getWslLocation, "getWslLocation");
function getChromeLinuxOrWslLocation(channel) {
  const locations = [];
  switch (channel) {
    case ChromeReleaseChannel.STABLE:
      locations.push("/opt/google/chrome/chrome");
      break;
    case ChromeReleaseChannel.BETA:
      locations.push("/opt/google/chrome-beta/chrome");
      break;
    case ChromeReleaseChannel.CANARY:
      locations.push("/opt/google/chrome-canary/chrome");
      break;
    case ChromeReleaseChannel.DEV:
      locations.push("/opt/google/chrome-unstable/chrome");
      break;
  }
  try {
    const wslPath = getWslLocation(channel);
    if (wslPath) {
      locations.push(...wslPath);
    }
  } catch {
  }
  return locations;
}
__name(getChromeLinuxOrWslLocation, "getChromeLinuxOrWslLocation");
function resolveSystemExecutablePaths(platform, channel) {
  switch (platform) {
    case BrowserPlatform.WIN64:
    case BrowserPlatform.WIN32:
      const prefixLocation = new Set(WINDOWS_ENV_PARAM_NAMES.map((name) => {
        return process.env[name];
      }).filter((l) => {
        return !!l;
      }));
      prefixLocation.add("C:\\Program Files");
      prefixLocation.add("C:\\Program Files (x86)");
      prefixLocation.add("D:\\Program Files");
      prefixLocation.add("D:\\Program Files (x86)");
      return getChromeWindowsLocation(channel, prefixLocation);
    case BrowserPlatform.MAC_ARM:
    case BrowserPlatform.MAC:
      switch (channel) {
        case ChromeReleaseChannel.STABLE:
          return [
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
          ];
        case ChromeReleaseChannel.BETA:
          return [
            "/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta"
          ];
        case ChromeReleaseChannel.CANARY:
          return [
            "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
          ];
        case ChromeReleaseChannel.DEV:
          return [
            "/Applications/Google Chrome Dev.app/Contents/MacOS/Google Chrome Dev"
          ];
      }
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      return getChromeLinuxOrWslLocation(channel);
  }
}
__name(resolveSystemExecutablePaths, "resolveSystemExecutablePaths");
function resolveDefaultUserDataDir(platform, channel) {
  switch (platform) {
    case BrowserPlatform.WIN64:
    case BrowserPlatform.WIN32:
      switch (channel) {
        case ChromeReleaseChannel.STABLE:
          return path.join(getLocalAppDataWin(), "Google", "Chrome", "User Data");
        case ChromeReleaseChannel.BETA:
          return path.join(getLocalAppDataWin(), "Google", "Chrome Beta", "User Data");
        case ChromeReleaseChannel.CANARY:
          return path.join(getLocalAppDataWin(), "Google", "Chrome SxS", "User Data");
        case ChromeReleaseChannel.DEV:
          return path.join(getLocalAppDataWin(), "Google", "Chrome Dev", "User Data");
      }
    case BrowserPlatform.MAC_ARM:
    case BrowserPlatform.MAC:
      switch (channel) {
        case ChromeReleaseChannel.STABLE:
          return path.join(getBaseUserDataDirPathMac(), "Chrome");
        case ChromeReleaseChannel.BETA:
          return path.join(getBaseUserDataDirPathMac(), "Chrome Beta");
        case ChromeReleaseChannel.DEV:
          return path.join(getBaseUserDataDirPathMac(), "Chrome Dev");
        case ChromeReleaseChannel.CANARY:
          return path.join(getBaseUserDataDirPathMac(), "Chrome Canary");
      }
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      switch (channel) {
        case ChromeReleaseChannel.STABLE:
          return path.join(getConfigHomeLinux(), "google-chrome");
        case ChromeReleaseChannel.BETA:
          return path.join(getConfigHomeLinux(), "google-chrome-beta");
        case ChromeReleaseChannel.CANARY:
          return path.join(getConfigHomeLinux(), "google-chrome-canary");
        case ChromeReleaseChannel.DEV:
          return path.join(getConfigHomeLinux(), "google-chrome-unstable");
      }
  }
}
__name(resolveDefaultUserDataDir, "resolveDefaultUserDataDir");
function getLocalAppDataWin() {
  return process.env["LOCALAPPDATA"] || path.join(os.homedir(), "AppData", "Local");
}
__name(getLocalAppDataWin, "getLocalAppDataWin");
function getConfigHomeLinux() {
  return process.env["CHROME_CONFIG_HOME"] || process.env["XDG_CONFIG_HOME"] || path.join(os.homedir(), ".config");
}
__name(getConfigHomeLinux, "getConfigHomeLinux");
function getBaseUserDataDirPathMac() {
  return path.join(os.homedir(), "Library", "Application Support", "Google");
}
__name(getBaseUserDataDirPathMac, "getBaseUserDataDirPathMac");
function compareVersions(a, b) {
  const cleanA = a.trim();
  const cleanB = b.trim();
  const versionRegex = /^\d+(?:\.\d+){0,3}$/;
  if (!versionRegex.test(cleanA)) {
    throw new Error(`Version ${a} is not a valid Chrome version`);
  }
  if (!versionRegex.test(cleanB)) {
    throw new Error(`Version ${b} is not a valid Chrome version`);
  }
  const aParts = cleanA.split(".").map(Number);
  const bParts = cleanB.split(".").map(Number);
  for (let i = 0; i < 4; i++) {
    const aPart = aParts[i] ?? 0;
    const bPart = bParts[i] ?? 0;
    if (aPart > bPart) {
      return 1;
    }
    if (aPart < bPart) {
      return -1;
    }
  }
  return 0;
}
__name(compareVersions, "compareVersions");

// node_modules/@puppeteer/browsers/lib/browser-data/chrome-headless-shell.js
function folder2(platform, buildId) {
  switch (platform) {
    case BrowserPlatform.LINUX_ARM:
      if (buildId && compareVersions(buildId, "153.0.8001.0") < 0) {
        return "linux64";
      }
      return "linux-arm64";
    case BrowserPlatform.LINUX:
      return "linux64";
    case BrowserPlatform.MAC_ARM:
      return "mac-arm64";
    case BrowserPlatform.MAC:
      return "mac-x64";
    case BrowserPlatform.WIN32:
      return "win32";
    case BrowserPlatform.WIN64:
      return "win64";
  }
}
__name(folder2, "folder");
function resolveDownloadUrl2(platform, buildId, baseUrl = "https://storage.googleapis.com/chrome-for-testing-public") {
  return `${baseUrl}/${resolveDownloadPath2(platform, buildId).join("/")}`;
}
__name(resolveDownloadUrl2, "resolveDownloadUrl");
function resolveDownloadPath2(platform, buildId) {
  return [
    buildId,
    folder2(platform, buildId),
    `chrome-headless-shell-${folder2(platform, buildId)}.zip`
  ];
}
__name(resolveDownloadPath2, "resolveDownloadPath");
function relativeExecutablePath2(platform, buildId) {
  switch (platform) {
    case BrowserPlatform.MAC:
    case BrowserPlatform.MAC_ARM:
      return path2.join("chrome-headless-shell-" + folder2(platform, buildId), "chrome-headless-shell");
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      return path2.join("chrome-headless-shell-" + folder2(platform, buildId), "chrome-headless-shell");
    case BrowserPlatform.WIN32:
    case BrowserPlatform.WIN64:
      return path2.join("chrome-headless-shell-" + folder2(platform, buildId), "chrome-headless-shell.exe");
  }
}
__name(relativeExecutablePath2, "relativeExecutablePath");

// node_modules/@puppeteer/browsers/lib/browser-data/chromedriver.js
init_esm();
import path3 from "node:path";
function folder3(platform, buildId) {
  switch (platform) {
    case BrowserPlatform.LINUX_ARM:
      if (buildId && compareVersions(buildId, "153.0.8001.0") < 0) {
        return "linux64";
      }
      return "linux-arm64";
    case BrowserPlatform.LINUX:
      return "linux64";
    case BrowserPlatform.MAC_ARM:
      return "mac-arm64";
    case BrowserPlatform.MAC:
      return "mac-x64";
    case BrowserPlatform.WIN32:
      return "win32";
    case BrowserPlatform.WIN64:
      return "win64";
  }
}
__name(folder3, "folder");
function resolveDownloadUrl3(platform, buildId, baseUrl = "https://storage.googleapis.com/chrome-for-testing-public") {
  return `${baseUrl}/${resolveDownloadPath3(platform, buildId).join("/")}`;
}
__name(resolveDownloadUrl3, "resolveDownloadUrl");
function resolveDownloadPath3(platform, buildId) {
  return [
    buildId,
    folder3(platform, buildId),
    `chromedriver-${folder3(platform, buildId)}.zip`
  ];
}
__name(resolveDownloadPath3, "resolveDownloadPath");
function relativeExecutablePath3(platform, buildId) {
  switch (platform) {
    case BrowserPlatform.MAC:
    case BrowserPlatform.MAC_ARM:
      return path3.join("chromedriver-" + folder3(platform, buildId), "chromedriver");
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      return path3.join("chromedriver-" + folder3(platform, buildId), "chromedriver");
    case BrowserPlatform.WIN32:
    case BrowserPlatform.WIN64:
      return path3.join("chromedriver-" + folder3(platform, buildId), "chromedriver.exe");
  }
}
__name(relativeExecutablePath3, "relativeExecutablePath");

// node_modules/@puppeteer/browsers/lib/browser-data/chromium.js
init_esm();
import path4 from "node:path";
function archive(platform, buildId) {
  switch (platform) {
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      return "chrome-linux";
    case BrowserPlatform.MAC_ARM:
    case BrowserPlatform.MAC:
      return "chrome-mac";
    case BrowserPlatform.WIN32:
    case BrowserPlatform.WIN64:
      return parseInt(buildId, 10) > 591479 ? "chrome-win" : "chrome-win32";
  }
}
__name(archive, "archive");
function folder4(platform) {
  switch (platform) {
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      return "Linux_x64";
    case BrowserPlatform.MAC_ARM:
      return "Mac_Arm";
    case BrowserPlatform.MAC:
      return "Mac";
    case BrowserPlatform.WIN32:
      return "Win";
    case BrowserPlatform.WIN64:
      return "Win_x64";
  }
}
__name(folder4, "folder");
function resolveDownloadUrl4(platform, buildId, baseUrl = "https://storage.googleapis.com/chromium-browser-snapshots") {
  return `${baseUrl}/${resolveDownloadPath4(platform, buildId).join("/")}`;
}
__name(resolveDownloadUrl4, "resolveDownloadUrl");
function resolveDownloadPath4(platform, buildId) {
  return [folder4(platform), buildId, `${archive(platform, buildId)}.zip`];
}
__name(resolveDownloadPath4, "resolveDownloadPath");
function relativeExecutablePath4(platform, _buildId) {
  switch (platform) {
    case BrowserPlatform.MAC:
    case BrowserPlatform.MAC_ARM:
      return path4.join("chrome-mac", "Chromium.app", "Contents", "MacOS", "Chromium");
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      return path4.join("chrome-linux", "chrome");
    case BrowserPlatform.WIN32:
    case BrowserPlatform.WIN64:
      return path4.join("chrome-win", "chrome.exe");
  }
}
__name(relativeExecutablePath4, "relativeExecutablePath");
async function resolveBuildId2(platform) {
  return await getText(new URL(`https://storage.googleapis.com/chromium-browser-snapshots/${folder4(platform)}/LAST_CHANGE`));
}
__name(resolveBuildId2, "resolveBuildId");
function compareVersions2(a, b) {
  return Number(a) - Number(b);
}
__name(compareVersions2, "compareVersions");

// node_modules/@puppeteer/browsers/lib/browser-data/firefox.js
init_esm();
import fs from "node:fs";
import path5 from "node:path";
function getFormat(buildId) {
  const majorVersion = Number(buildId.split(".").shift());
  return majorVersion >= 135 ? "xz" : "bz2";
}
__name(getFormat, "getFormat");
function archiveNightly(platform, buildId) {
  switch (platform) {
    case BrowserPlatform.LINUX:
      return `firefox-${buildId}.en-US.linux-x86_64.tar.${getFormat(buildId)}`;
    case BrowserPlatform.LINUX_ARM:
      return `firefox-${buildId}.en-US.linux-aarch64.tar.${getFormat(buildId)}`;
    case BrowserPlatform.MAC_ARM:
    case BrowserPlatform.MAC:
      return `firefox-${buildId}.en-US.mac.dmg`;
    case BrowserPlatform.WIN32:
    case BrowserPlatform.WIN64:
      return `firefox-${buildId}.en-US.${platform}.zip`;
  }
}
__name(archiveNightly, "archiveNightly");
function archive2(platform, buildId) {
  switch (platform) {
    case BrowserPlatform.LINUX_ARM:
    case BrowserPlatform.LINUX:
      return `firefox-${buildId}.tar.${getFormat(buildId)}`;
    case BrowserPlatform.MAC_ARM:
    case BrowserPlatform.MAC:
      return `Firefox ${buildId}.dmg`;
    case BrowserPlatform.WIN32:
    case BrowserPlatform.WIN64:
      return `Firefox Setup ${buildId}.exe`;
  }
}
__name(archive2, "archive");
function platformName(platform) {
  switch (platform) {
    case BrowserPlatform.LINUX:
      return `linux-x86_64`;
    case BrowserPlatform.LINUX_ARM:
      return `linux-aarch64`;
    case BrowserPlatform.MAC_ARM:
    case BrowserPlatform.MAC:
      return `mac`;
    case BrowserPlatform.WIN32:
    case BrowserPlatform.WIN64:
      return platform;
  }
}
__name(platformName, "platformName");
function parseBuildId(buildId) {
  for (const value of Object.values(FirefoxChannel)) {
    if (buildId.startsWith(value + "_")) {
      buildId = buildId.substring(value.length + 1);
      return [value, buildId];
    }
  }
  return [FirefoxChannel.NIGHTLY, buildId];
}
__name(parseBuildId, "parseBuildId");
function resolveDownloadUrl5(platform, buildId, baseUrl) {
  const [channel] = parseBuildId(buildId);
  switch (channel) {
    case FirefoxChannel.NIGHTLY:
      baseUrl ??= "https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central";
      break;
    case FirefoxChannel.DEVEDITION:
      baseUrl ??= "https://archive.mozilla.org/pub/devedition/releases";
      break;
    case FirefoxChannel.BETA:
    case FirefoxChannel.STABLE:
    case FirefoxChannel.ESR:
      baseUrl ??= "https://archive.mozilla.org/pub/firefox/releases";
      break;
  }
  return `${baseUrl}/${resolveDownloadPath5(platform, buildId).join("/")}`;
}
__name(resolveDownloadUrl5, "resolveDownloadUrl");
function resolveDownloadPath5(platform, buildId) {
  const [channel, resolvedBuildId] = parseBuildId(buildId);
  switch (channel) {
    case FirefoxChannel.NIGHTLY:
      return [archiveNightly(platform, resolvedBuildId)];
    case FirefoxChannel.DEVEDITION:
    case FirefoxChannel.BETA:
    case FirefoxChannel.STABLE:
    case FirefoxChannel.ESR:
      return [
        resolvedBuildId,
        platformName(platform),
        "en-US",
        archive2(platform, resolvedBuildId)
      ];
  }
}
__name(resolveDownloadPath5, "resolveDownloadPath");
function relativeExecutablePath5(platform, buildId) {
  const [channel] = parseBuildId(buildId);
  switch (channel) {
    case FirefoxChannel.NIGHTLY:
      switch (platform) {
        case BrowserPlatform.MAC_ARM:
        case BrowserPlatform.MAC:
          return path5.join("Firefox Nightly.app", "Contents", "MacOS", "firefox");
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
          return path5.join("firefox", "firefox");
        case BrowserPlatform.WIN32:
        case BrowserPlatform.WIN64:
          return path5.join("firefox", "firefox.exe");
      }
    case FirefoxChannel.BETA:
    case FirefoxChannel.DEVEDITION:
    case FirefoxChannel.ESR:
    case FirefoxChannel.STABLE:
      switch (platform) {
        case BrowserPlatform.MAC_ARM:
        case BrowserPlatform.MAC:
          return path5.join("Firefox.app", "Contents", "MacOS", "firefox");
        case BrowserPlatform.LINUX_ARM:
        case BrowserPlatform.LINUX:
          return path5.join("firefox", "firefox");
        case BrowserPlatform.WIN32:
        case BrowserPlatform.WIN64:
          return path5.join("core", "firefox.exe");
      }
  }
}
__name(relativeExecutablePath5, "relativeExecutablePath");
var FirefoxChannel;
(function(FirefoxChannel2) {
  FirefoxChannel2["STABLE"] = "stable";
  FirefoxChannel2["ESR"] = "esr";
  FirefoxChannel2["DEVEDITION"] = "devedition";
  FirefoxChannel2["BETA"] = "beta";
  FirefoxChannel2["NIGHTLY"] = "nightly";
})(FirefoxChannel || (FirefoxChannel = {}));
var baseVersionUrl2 = "https://product-details.mozilla.org/1.0";
async function resolveBuildId3(channel = FirefoxChannel.NIGHTLY) {
  const channelToVersionKey = {
    [FirefoxChannel.ESR]: "FIREFOX_ESR",
    [FirefoxChannel.STABLE]: "LATEST_FIREFOX_VERSION",
    [FirefoxChannel.DEVEDITION]: "FIREFOX_DEVEDITION",
    [FirefoxChannel.BETA]: "FIREFOX_DEVEDITION",
    [FirefoxChannel.NIGHTLY]: "FIREFOX_NIGHTLY"
  };
  const versions = await getJSON(new URL(`${baseVersionUrl2}/firefox_versions.json`));
  const version = versions[channelToVersionKey[channel]];
  if (!version) {
    throw new Error(`Channel ${channel} is not found.`);
  }
  return channel + "_" + version;
}
__name(resolveBuildId3, "resolveBuildId");
async function createProfile(options) {
  if (!fs.existsSync(options.path)) {
    await fs.promises.mkdir(options.path, {
      recursive: true
    });
  }
  await syncPreferences({
    preferences: {
      ...defaultProfilePreferences(options.preferences),
      ...options.preferences
    },
    path: options.path
  });
}
__name(createProfile, "createProfile");
function defaultProfilePreferences(extraPrefs) {
  const server = "dummy.test";
  const defaultPrefs = {
    // Make sure Shield doesn't hit the network.
    "app.normandy.api_url": "",
    // Disable Firefox old build background check
    "app.update.checkInstallTime": false,
    // Disable automatically upgrading Firefox
    "app.update.disabledForTesting": true,
    // Increase the APZ content response timeout to 1 minute
    "apz.content_response_timeout": 6e4,
    // Prevent various error message on the console
    // jest-puppeteer asserts that no error message is emitted by the console
    "browser.contentblocking.features.standard": "-tp,tpPrivate,cookieBehavior0,-cryptoTP,-fp",
    // Enable the dump function: which sends messages to the system
    // console
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1543115
    "browser.dom.window.dump.enabled": true,
    // Disable topstories
    "browser.newtabpage.activity-stream.feeds.system.topstories": false,
    // Always display a blank page
    "browser.newtabpage.enabled": false,
    // Background thumbnails in particular cause grief: and disabling
    // thumbnails in general cannot hurt
    "browser.pagethumbnails.capturing_disabled": true,
    // Disable safebrowsing components.
    "browser.safebrowsing.blockedURIs.enabled": false,
    "browser.safebrowsing.downloads.enabled": false,
    "browser.safebrowsing.malware.enabled": false,
    "browser.safebrowsing.phishing.enabled": false,
    // Disable updates to search engines.
    "browser.search.update": false,
    // Do not restore the last open set of tabs if the browser has crashed
    "browser.sessionstore.resume_from_crash": false,
    // Skip check for default browser on startup
    "browser.shell.checkDefaultBrowser": false,
    // Disable newtabpage
    "browser.startup.homepage": "about:blank",
    // Do not redirect user when a milstone upgrade of Firefox is detected
    "browser.startup.homepage_override.mstone": "ignore",
    // Start with a blank page about:blank
    "browser.startup.page": 0,
    // Do not allow background tabs to be zombified on Android: otherwise for
    // tests that open additional tabs: the test harness tab itself might get
    // unloaded
    "browser.tabs.disableBackgroundZombification": false,
    // Do not warn when closing all other open tabs
    "browser.tabs.warnOnCloseOtherTabs": false,
    // Do not warn when multiple tabs will be opened
    "browser.tabs.warnOnOpen": false,
    // Do not automatically offer translations, as tests do not expect this.
    "browser.translations.automaticallyPopup": false,
    // Disable the UI tour.
    "browser.uitour.enabled": false,
    // Turn off search suggestions in the location bar so as not to trigger
    // network connections.
    "browser.urlbar.suggest.searches": false,
    // Disable first run splash page on Windows 10
    "browser.usedOnWindows10.introURL": "",
    // Do not warn on quitting Firefox
    "browser.warnOnQuit": false,
    // Defensively disable data reporting systems
    "datareporting.healthreport.documentServerURI": `http://${server}/dummy/healthreport/`,
    "datareporting.healthreport.logging.consoleEnabled": false,
    "datareporting.healthreport.service.enabled": false,
    "datareporting.healthreport.service.firstRun": false,
    "datareporting.healthreport.uploadEnabled": false,
    // Do not show datareporting policy notifications which can interfere with tests
    "datareporting.policy.dataSubmissionEnabled": false,
    "datareporting.policy.dataSubmissionPolicyBypassNotification": true,
    // DevTools JSONViewer sometimes fails to load dependencies with its require.js.
    // This doesn't affect Puppeteer but spams console (Bug 1424372)
    "devtools.jsonview.enabled": false,
    // Disable popup-blocker
    "dom.disable_open_during_load": false,
    // Enable the support for File object creation in the content process
    // Required for |Page.setFileInputFiles| protocol method.
    "dom.file.createInChild": true,
    // Disable the ProcessHangMonitor
    "dom.ipc.reportProcessHangs": false,
    // Disable slow script dialogues
    "dom.max_chrome_script_run_time": 0,
    "dom.max_script_run_time": 0,
    // Only load extensions from the application and user profile
    // AddonManager.SCOPE_PROFILE + AddonManager.SCOPE_APPLICATION
    "extensions.autoDisableScopes": 0,
    "extensions.enabledScopes": 5,
    // Disable metadata caching for installed add-ons by default
    "extensions.getAddons.cache.enabled": false,
    // Disable installing any distribution extensions or add-ons.
    "extensions.installDistroAddons": false,
    // Turn off extension updates so they do not bother tests
    "extensions.update.enabled": false,
    // Turn off extension updates so they do not bother tests
    "extensions.update.notifyUser": false,
    // Make sure opening about:addons will not hit the network
    "extensions.webservice.discoverURL": `http://${server}/dummy/discoveryURL`,
    // Allow the application to have focus even it runs in the background
    "focusmanager.testmode": true,
    // Disable useragent updates
    "general.useragent.updates.enabled": false,
    // Always use network provider for geolocation tests so we bypass the
    // macOS dialog raised by the corelocation provider
    "geo.provider.testing": true,
    // Do not scan Wifi
    "geo.wifi.scan": false,
    // No hang monitor
    "hangmonitor.timeout": 0,
    // Show chrome errors and warnings in the error console
    "javascript.options.showInConsole": true,
    // Disable download and usage of OpenH264: and Widevine plugins
    "media.gmp-manager.updateEnabled": false,
    // Disable the GFX sanity window
    "media.sanity-test.disabled": true,
    // Disable experimental feature that is only available in Nightly
    "network.cookie.sameSite.laxByDefault": false,
    // Do not prompt for temporary redirects
    "network.http.prompt-temp-redirect": false,
    // Disable speculative connections so they are not reported as leaking
    // when they are hanging around
    "network.http.speculative-parallel-limit": 0,
    // Do not automatically switch between offline and online
    "network.manage-offline-status": false,
    // Make sure SNTP requests do not hit the network
    "network.sntp.pools": server,
    // Disable Flash.
    "plugin.state.flash": 0,
    "privacy.trackingprotection.enabled": false,
    // Can be removed once Firefox 89 is no longer supported
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1710839
    "remote.enabled": true,
    // Until Bug 1999693 is resolved, this preference needs to be set to allow
    // Webdriver BiDi to automatically dismiss file pickers.
    "remote.bidi.dismiss_file_pickers.enabled": true,
    // Disabled screenshots component
    "screenshots.browser.component.enabled": false,
    // Don't do network connections for mitm priming
    "security.certerrors.mitm.priming.enabled": false,
    // Local documents have access to all other local documents,
    // including directory listings
    "security.fileuri.strict_origin_policy": false,
    // Do not wait for the notification button security delay
    "security.notification_enable_delay": 0,
    // Ensure blocklist updates do not hit the network
    "services.settings.server": `http://${server}/dummy/blocklist/`,
    // Do not automatically fill sign-in forms with known usernames and
    // passwords
    "signon.autofillForms": false,
    // Disable password capture, so that tests that include forms are not
    // influenced by the presence of the persistent doorhanger notification
    "signon.rememberSignons": false,
    // Disable first-run welcome page
    "startup.homepage_welcome_url": "about:blank",
    // Disable first-run welcome page
    "startup.homepage_welcome_url.additional": "",
    // Disable browser animations (tabs, fullscreen, sliding alerts)
    "toolkit.cosmeticAnimations.enabled": false,
    // Prevent starting into safe mode after application crashes
    "toolkit.startup.max_resumed_crashes": -1
  };
  return Object.assign(defaultPrefs, extraPrefs);
}
__name(defaultProfilePreferences, "defaultProfilePreferences");
async function backupFile(input2) {
  if (!fs.existsSync(input2)) {
    return;
  }
  await fs.promises.copyFile(input2, input2 + ".puppeteer");
}
__name(backupFile, "backupFile");
async function syncPreferences(options) {
  const prefsPath = path5.join(options.path, "prefs.js");
  const userPath = path5.join(options.path, "user.js");
  const lines = Object.entries(options.preferences).map(([key, value]) => {
    return `user_pref(${JSON.stringify(key)}, ${JSON.stringify(value)});`;
  });
  const result = await Promise.allSettled([
    backupFile(userPath).then(async () => {
      await fs.promises.writeFile(userPath, lines.join("\n"));
    }),
    backupFile(prefsPath)
  ]);
  for (const command of result) {
    if (command.status === "rejected") {
      throw command.reason;
    }
  }
}
__name(syncPreferences, "syncPreferences");
function compareVersions3(a, b) {
  return parseInt(a.replace(".", ""), 16) - parseInt(b.replace(".", ""), 16);
}
__name(compareVersions3, "compareVersions");

// node_modules/@puppeteer/browsers/lib/browser-data/browser-data.js
var downloadUrls = {
  [Browser.CHROMEDRIVER]: resolveDownloadUrl3,
  [Browser.CHROMEHEADLESSSHELL]: resolveDownloadUrl2,
  [Browser.CHROME]: resolveDownloadUrl,
  [Browser.CHROMIUM]: resolveDownloadUrl4,
  [Browser.FIREFOX]: resolveDownloadUrl5
};
var downloadPaths = {
  [Browser.CHROMEDRIVER]: resolveDownloadPath3,
  [Browser.CHROMEHEADLESSSHELL]: resolveDownloadPath2,
  [Browser.CHROME]: resolveDownloadPath,
  [Browser.CHROMIUM]: resolveDownloadPath4,
  [Browser.FIREFOX]: resolveDownloadPath5
};
var executablePathByBrowser = {
  [Browser.CHROMEDRIVER]: relativeExecutablePath3,
  [Browser.CHROMEHEADLESSSHELL]: relativeExecutablePath2,
  [Browser.CHROME]: relativeExecutablePath,
  [Browser.CHROMIUM]: relativeExecutablePath4,
  [Browser.FIREFOX]: relativeExecutablePath5
};
var versionComparators = {
  [Browser.CHROMEDRIVER]: compareVersions,
  [Browser.CHROMEHEADLESSSHELL]: compareVersions,
  [Browser.CHROME]: compareVersions,
  [Browser.CHROMIUM]: compareVersions2,
  [Browser.FIREFOX]: compareVersions3
};
async function resolveBuildIdForBrowserTag(browser, platform, tag) {
  switch (browser) {
    case Browser.FIREFOX:
      switch (tag) {
        case BrowserTag.LATEST:
          return await resolveBuildId3(FirefoxChannel.NIGHTLY);
        case BrowserTag.BETA:
          return await resolveBuildId3(FirefoxChannel.BETA);
        case BrowserTag.NIGHTLY:
          return await resolveBuildId3(FirefoxChannel.NIGHTLY);
        case BrowserTag.DEVEDITION:
          return await resolveBuildId3(FirefoxChannel.DEVEDITION);
        case BrowserTag.STABLE:
          return await resolveBuildId3(FirefoxChannel.STABLE);
        case BrowserTag.ESR:
          return await resolveBuildId3(FirefoxChannel.ESR);
        case BrowserTag.CANARY:
        case BrowserTag.DEV:
          throw new Error(`${tag.toUpperCase()} is not available for Firefox`);
      }
    case Browser.CHROME: {
      switch (tag) {
        case BrowserTag.LATEST:
          return await resolveBuildId(ChromeReleaseChannel.CANARY);
        case BrowserTag.BETA:
          return await resolveBuildId(ChromeReleaseChannel.BETA);
        case BrowserTag.CANARY:
          return await resolveBuildId(ChromeReleaseChannel.CANARY);
        case BrowserTag.DEV:
          return await resolveBuildId(ChromeReleaseChannel.DEV);
        case BrowserTag.STABLE:
          return await resolveBuildId(ChromeReleaseChannel.STABLE);
        case BrowserTag.NIGHTLY:
        case BrowserTag.DEVEDITION:
        case BrowserTag.ESR:
          throw new Error(`${tag.toUpperCase()} is not available for Chrome`);
      }
    }
    case Browser.CHROMEDRIVER: {
      switch (tag) {
        case BrowserTag.LATEST:
        case BrowserTag.CANARY:
          return await resolveBuildId(ChromeReleaseChannel.CANARY);
        case BrowserTag.BETA:
          return await resolveBuildId(ChromeReleaseChannel.BETA);
        case BrowserTag.DEV:
          return await resolveBuildId(ChromeReleaseChannel.DEV);
        case BrowserTag.STABLE:
          return await resolveBuildId(ChromeReleaseChannel.STABLE);
        case BrowserTag.NIGHTLY:
        case BrowserTag.DEVEDITION:
        case BrowserTag.ESR:
          throw new Error(`${tag.toUpperCase()} is not available for ChromeDriver`);
      }
    }
    case Browser.CHROMEHEADLESSSHELL: {
      switch (tag) {
        case BrowserTag.LATEST:
        case BrowserTag.CANARY:
          return await resolveBuildId(ChromeReleaseChannel.CANARY);
        case BrowserTag.BETA:
          return await resolveBuildId(ChromeReleaseChannel.BETA);
        case BrowserTag.DEV:
          return await resolveBuildId(ChromeReleaseChannel.DEV);
        case BrowserTag.STABLE:
          return await resolveBuildId(ChromeReleaseChannel.STABLE);
        case BrowserTag.NIGHTLY:
        case BrowserTag.DEVEDITION:
        case BrowserTag.ESR:
          throw new Error(`${tag} is not available for chrome-headless-shell`);
      }
    }
    case Browser.CHROMIUM:
      switch (tag) {
        case BrowserTag.LATEST:
          return await resolveBuildId2(platform);
        case BrowserTag.NIGHTLY:
        case BrowserTag.CANARY:
        case BrowserTag.DEV:
        case BrowserTag.DEVEDITION:
        case BrowserTag.BETA:
        case BrowserTag.STABLE:
        case BrowserTag.ESR:
          throw new Error(`${tag} is not supported for Chromium. Use 'latest' instead.`);
      }
  }
}
__name(resolveBuildIdForBrowserTag, "resolveBuildIdForBrowserTag");
async function resolveBuildId4(browser, platform, tag) {
  const browserTag = tag;
  if (Object.values(BrowserTag).includes(browserTag)) {
    return await resolveBuildIdForBrowserTag(browser, platform, browserTag);
  }
  switch (browser) {
    case Browser.FIREFOX:
      return tag;
    case Browser.CHROME:
      const chromeResult = await resolveBuildId(tag);
      if (chromeResult) {
        return chromeResult;
      }
      return tag;
    case Browser.CHROMEDRIVER:
      const chromeDriverResult = await resolveBuildId(tag);
      if (chromeDriverResult) {
        return chromeDriverResult;
      }
      return tag;
    case Browser.CHROMEHEADLESSSHELL:
      const chromeHeadlessShellResult = await resolveBuildId(tag);
      if (chromeHeadlessShellResult) {
        return chromeHeadlessShellResult;
      }
      return tag;
    case Browser.CHROMIUM:
      return tag;
  }
}
__name(resolveBuildId4, "resolveBuildId");
async function createProfile2(browser, opts) {
  switch (browser) {
    case Browser.FIREFOX:
      return await createProfile(opts);
    case Browser.CHROME:
    case Browser.CHROMIUM:
      throw new Error(`Profile creation is not support for ${browser} yet`);
  }
}
__name(createProfile2, "createProfile");
function resolveDefaultUserDataDir2(browser, platform, channel) {
  switch (browser) {
    case Browser.CHROMEDRIVER:
    case Browser.CHROMEHEADLESSSHELL:
    case Browser.FIREFOX:
    case Browser.CHROMIUM:
      throw new Error(`Default user dir detection is not supported for ${browser} yet.`);
    case Browser.CHROME:
      return resolveDefaultUserDataDir(platform, channel);
  }
}
__name(resolveDefaultUserDataDir2, "resolveDefaultUserDataDir");
function resolveSystemExecutablePaths2(browser, platform, channel) {
  switch (browser) {
    case Browser.CHROMEDRIVER:
    case Browser.CHROMEHEADLESSSHELL:
    case Browser.FIREFOX:
    case Browser.CHROMIUM:
      throw new Error(`System browser detection is not supported for ${browser} yet.`);
    case Browser.CHROME:
      return resolveSystemExecutablePaths(platform, channel);
  }
}
__name(resolveSystemExecutablePaths2, "resolveSystemExecutablePaths");
function getVersionComparator(browser) {
  return versionComparators[browser];
}
__name(getVersionComparator, "getVersionComparator");

// node_modules/@puppeteer/browsers/lib/Cache.js
init_esm();
import fs2 from "node:fs";
import os3 from "node:os";
import path6 from "node:path";

// node_modules/@puppeteer/browsers/lib/debug.js
init_esm();
import { debuglog } from "node:util";
var DEBUG_PREFIXES = {
  cache: "puppeteer:browsers:cache",
  fileUtil: "puppeteer:browsers:fileUtil",
  install: "puppeteer:browsers:install",
  launcher: "puppeteer:browsers:launcher"
};
var debug = /* @__PURE__ */ __name((prefix) => {
  const log = debuglog(prefix);
  return log.enabled ? log : void 0;
}, "debug");

// node_modules/@puppeteer/browsers/lib/detectPlatform.js
init_esm();
import os2 from "node:os";
function detectBrowserPlatform() {
  const platform = os2.platform();
  const arch = os2.arch();
  switch (platform) {
    case "darwin":
      return arch === "arm64" ? BrowserPlatform.MAC_ARM : BrowserPlatform.MAC;
    case "linux":
      return arch === "arm64" ? BrowserPlatform.LINUX_ARM : BrowserPlatform.LINUX;
    case "win32":
      return arch === "x64" || // Windows 11 for ARM supports x64 emulation
      arch === "arm64" && isWindows11(os2.release()) ? BrowserPlatform.WIN64 : BrowserPlatform.WIN32;
    default:
      return void 0;
  }
}
__name(detectBrowserPlatform, "detectBrowserPlatform");
function isWindows11(version) {
  const parts = version.split(".");
  if (parts.length > 2) {
    const major = parseInt(parts[0], 10);
    const minor = parseInt(parts[1], 10);
    const patch = parseInt(parts[2], 10);
    return major > 10 || major === 10 && minor > 0 || major === 10 && minor === 0 && patch >= 22e3;
  }
  return false;
}
__name(isWindows11, "isWindows11");

// node_modules/@puppeteer/browsers/lib/Cache.js
var InstalledBrowser = class {
  static {
    __name(this, "InstalledBrowser");
  }
  browser;
  buildId;
  platform;
  executablePath;
  #cache;
  /**
   * @internal
   */
  constructor(cache, browser, buildId, platform) {
    this.#cache = cache;
    this.browser = browser;
    this.buildId = buildId;
    this.platform = platform;
    this.executablePath = cache.computeExecutablePath({
      browser,
      buildId,
      platform
    });
  }
  /**
   * Path to the root of the installation folder. Use
   * {@link computeExecutablePath} to get the path to the executable binary.
   */
  get path() {
    return this.#cache.installationDir(this.browser, this.platform, this.buildId);
  }
  readMetadata() {
    return this.#cache.readMetadata(this.browser);
  }
  writeMetadata(metadata) {
    this.#cache.writeMetadata(this.browser, metadata);
  }
};
var Cache = class {
  static {
    __name(this, "Cache");
  }
  #rootDir;
  #logger;
  constructor(rootDir, logger) {
    this.#rootDir = rootDir;
    this.#logger = logger?.(DEBUG_PREFIXES.cache);
  }
  /**
   * @internal
   */
  get rootDir() {
    return this.#rootDir;
  }
  browserRoot(browser) {
    return path6.join(this.#rootDir, browser);
  }
  metadataFile(browser) {
    return path6.join(this.browserRoot(browser), ".metadata");
  }
  readMetadata(browser) {
    const metatadaPath = this.metadataFile(browser);
    if (!fs2.existsSync(metatadaPath)) {
      return { aliases: {} };
    }
    const data = JSON.parse(fs2.readFileSync(metatadaPath, "utf8"));
    if (typeof data !== "object") {
      throw new Error(".metadata is not an object");
    }
    return data;
  }
  writeMetadata(browser, metadata) {
    const metatadaPath = this.metadataFile(browser);
    fs2.mkdirSync(path6.dirname(metatadaPath), { recursive: true });
    fs2.writeFileSync(metatadaPath, JSON.stringify(metadata, null, 2));
  }
  readExecutablePath(browser, platform, buildId) {
    const metadata = this.readMetadata(browser);
    const key = `${platform}-${buildId}`;
    return metadata.executablePaths?.[key] ?? null;
  }
  writeExecutablePath(browser, platform, buildId, executablePath) {
    const metadata = this.readMetadata(browser);
    if (!metadata.executablePaths) {
      metadata.executablePaths = {};
    }
    const key = `${platform}-${buildId}`;
    metadata.executablePaths[key] = executablePath;
    this.writeMetadata(browser, metadata);
  }
  resolveAlias(browser, alias) {
    const metadata = this.readMetadata(browser);
    if (alias === "latest") {
      return Object.values(metadata.aliases || {}).sort(getVersionComparator(browser)).at(-1);
    }
    return metadata.aliases[alias];
  }
  installationDir(browser, platform, buildId) {
    return path6.join(this.browserRoot(browser), `${platform}-${buildId}`);
  }
  clear() {
    fs2.rmSync(this.#rootDir, {
      force: true,
      recursive: true,
      maxRetries: 10,
      retryDelay: 500
    });
  }
  uninstall(browser, platform, buildId) {
    const metadata = this.readMetadata(browser);
    for (const alias of Object.keys(metadata.aliases)) {
      if (metadata.aliases[alias] === buildId) {
        delete metadata.aliases[alias];
      }
    }
    const key = `${platform}-${buildId}`;
    if (metadata.executablePaths?.[key]) {
      delete metadata.executablePaths[key];
      this.writeMetadata(browser, metadata);
    }
    fs2.rmSync(this.installationDir(browser, platform, buildId), {
      force: true,
      recursive: true,
      maxRetries: 10,
      retryDelay: 500
    });
  }
  getInstalledBrowsers() {
    if (!fs2.existsSync(this.#rootDir)) {
      return [];
    }
    const types = fs2.readdirSync(this.#rootDir);
    const browsers = types.filter((t) => {
      return Object.values(Browser).includes(t);
    });
    return browsers.flatMap((browser) => {
      const files = fs2.readdirSync(this.browserRoot(browser));
      return files.map((file) => {
        const result = parseFolderPath(path6.join(this.browserRoot(browser), file));
        if (!result) {
          return null;
        }
        return new InstalledBrowser(this, browser, result.buildId, result.platform);
      }).filter((item) => {
        return item !== null;
      });
    });
  }
  computeExecutablePath(options) {
    options.platform ??= detectBrowserPlatform();
    if (!options.platform) {
      throw new Error(`Cannot download a binary for the provided platform: ${os3.platform()} (${os3.arch()})`);
    }
    try {
      options.buildId = this.resolveAlias(options.browser, options.buildId) ?? options.buildId;
    } catch {
      this.#logger?.("could not read .metadata file for the browser");
    }
    const installationDir = this.installationDir(options.browser, options.platform, options.buildId);
    const storedExecutablePath = this.readExecutablePath(options.browser, options.platform, options.buildId);
    if (storedExecutablePath) {
      return path6.join(installationDir, storedExecutablePath);
    }
    return path6.join(installationDir, executablePathByBrowser[options.browser](options.platform, options.buildId));
  }
};
function parseFolderPath(folderPath) {
  const name = path6.basename(folderPath);
  const splits = name.split("-");
  if (splits.length !== 2) {
    return;
  }
  const [platform, buildId] = splits;
  if (!buildId || !platform) {
    return;
  }
  return { platform, buildId };
}
__name(parseFolderPath, "parseFolderPath");

// node_modules/@puppeteer/browsers/lib/launch.js
function computeExecutablePath(options) {
  if (options.cacheDir === null) {
    options.platform ??= detectBrowserPlatform();
    if (options.platform === void 0) {
      throw new Error(`No platform specified. Couldn't auto-detect browser platform.`);
    }
    return executablePathByBrowser[options.browser](options.platform, options.buildId);
  }
  return new Cache(options.cacheDir).computeExecutablePath(options);
}
__name(computeExecutablePath, "computeExecutablePath");
function computeSystemExecutablePath(options) {
  options.platform ??= detectBrowserPlatform();
  if (!options.platform) {
    throw new Error(`Cannot download a binary for the provided platform: ${os4.platform()} (${os4.arch()})`);
  }
  const paths = resolveSystemExecutablePaths2(options.browser, options.platform, options.channel);
  for (const path10 of paths) {
    try {
      accessSync(path10);
      return path10;
    } catch {
    }
  }
  throw new Error(`Could not find Google Chrome executable for channel '${options.channel}' at:${paths.map((path10) => {
    return `
 - ${path10}`;
  })}.`);
}
__name(computeSystemExecutablePath, "computeSystemExecutablePath");
function launch(opts) {
  return new Process({
    ...opts,
    logger: opts.logger ?? debug
  });
}
__name(launch, "launch");
var CDP_WEBSOCKET_ENDPOINT_REGEX = /^DevTools listening on (ws:\/\/.*)$/;
var WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX = /^WebDriver BiDi listening on (ws:\/\/.*)$/;
var processListeners = /* @__PURE__ */ new Map();
var dispatchers = {
  exit: /* @__PURE__ */ __name((...args) => {
    processListeners.get("exit")?.forEach((handler) => {
      return handler(...args);
    });
  }, "exit"),
  SIGINT: /* @__PURE__ */ __name((...args) => {
    processListeners.get("SIGINT")?.forEach((handler) => {
      return handler(...args);
    });
  }, "SIGINT"),
  SIGHUP: /* @__PURE__ */ __name((...args) => {
    processListeners.get("SIGHUP")?.forEach((handler) => {
      return handler(...args);
    });
  }, "SIGHUP"),
  SIGTERM: /* @__PURE__ */ __name((...args) => {
    processListeners.get("SIGTERM")?.forEach((handler) => {
      return handler(...args);
    });
  }, "SIGTERM")
};
function subscribeToProcessEvent(event, handler) {
  const listeners = processListeners.get(event) || [];
  if (listeners.length === 0) {
    process.on(event, dispatchers[event]);
  }
  listeners.push(handler);
  processListeners.set(event, listeners);
}
__name(subscribeToProcessEvent, "subscribeToProcessEvent");
function unsubscribeFromProcessEvent(event, handler) {
  const listeners = processListeners.get(event) || [];
  const existingListenerIdx = listeners.indexOf(handler);
  if (existingListenerIdx === -1) {
    return;
  }
  listeners.splice(existingListenerIdx, 1);
  processListeners.set(event, listeners);
  if (listeners.length === 0) {
    process.off(event, dispatchers[event]);
  }
}
__name(unsubscribeFromProcessEvent, "unsubscribeFromProcessEvent");
var Process = class {
  static {
    __name(this, "Process");
  }
  #executablePath;
  #args;
  #logger;
  #browserProcess;
  #exited = false;
  // The browser process can be closed externally or from the driver process. We
  // need to invoke the hooks only once though but we don't know how many times
  // we will be invoked.
  #hooksRan = false;
  #onExitHook = /* @__PURE__ */ __name(async () => {
  }, "#onExitHook");
  #browserProcessExiting;
  #logs = [];
  #maxLogLinesSize = 1e3;
  #lineEmitter = new EventEmitter();
  #onAbort = /* @__PURE__ */ __name(() => {
    this.kill();
  }, "#onAbort");
  #signal;
  constructor(opts) {
    this.#executablePath = opts.executablePath;
    this.#args = opts.args ?? [];
    this.#logger = opts.logger?.(DEBUG_PREFIXES.launcher);
    this.#signal = opts.signal;
    if (this.#signal?.aborted) {
      throw new Error(this.#signal.reason ? this.#signal.reason : "Launch aborted");
    }
    this.#signal?.addEventListener("abort", this.#onAbort, { once: true });
    opts.pipe ??= false;
    opts.dumpio ??= false;
    opts.handleSIGINT ??= true;
    opts.handleSIGTERM ??= true;
    opts.handleSIGHUP ??= true;
    opts.detached ??= process.platform !== "win32";
    const stdio = this.#configureStdio({
      pipe: opts.pipe
    });
    const env = opts.env || {};
    this.#logger?.(`Launching ${this.#executablePath} ${this.#args.join(" ")}`, {
      detached: opts.detached,
      env: Object.keys(env).reduce((res, key) => {
        if (key.toLowerCase().startsWith("puppeteer_")) {
          res[key] = env[key];
        }
        return res;
      }, {}),
      stdio
    });
    this.#browserProcess = childProcess.spawn(this.#executablePath, this.#args, {
      detached: opts.detached,
      env,
      stdio
    });
    this.#recordStream(this.#browserProcess.stderr);
    this.#recordStream(this.#browserProcess.stdout);
    this.#logger?.(`Launched ${this.#browserProcess.pid}`);
    if (opts.dumpio) {
      this.#browserProcess.stderr?.pipe(process.stderr);
      this.#browserProcess.stdout?.pipe(process.stdout);
    }
    subscribeToProcessEvent("exit", this.#onDriverProcessExit);
    if (opts.handleSIGINT) {
      subscribeToProcessEvent("SIGINT", this.#onDriverProcessSignal);
    }
    if (opts.handleSIGTERM) {
      subscribeToProcessEvent("SIGTERM", this.#onDriverProcessSignal);
    }
    if (opts.handleSIGHUP) {
      subscribeToProcessEvent("SIGHUP", this.#onDriverProcessSignal);
    }
    if (opts.onExit) {
      this.#onExitHook = opts.onExit;
    }
    this.#browserProcessExiting = new Promise((resolve2, reject) => {
      this.#browserProcess.once("exit", async () => {
        this.#logger?.(`Browser process ${this.#browserProcess.pid} onExit`);
        this.#clearListeners();
        this.#exited = true;
        try {
          await this.#runHooks();
        } catch (err) {
          reject(err);
          return;
        }
        resolve2();
      });
    });
  }
  async #runHooks() {
    if (this.#hooksRan) {
      return;
    }
    this.#hooksRan = true;
    await this.#onExitHook();
  }
  get nodeProcess() {
    return this.#browserProcess;
  }
  #configureStdio(opts) {
    if (opts.pipe) {
      return ["pipe", "pipe", "pipe", "pipe", "pipe"];
    } else {
      return ["pipe", "pipe", "pipe"];
    }
  }
  #clearListeners() {
    unsubscribeFromProcessEvent("exit", this.#onDriverProcessExit);
    unsubscribeFromProcessEvent("SIGINT", this.#onDriverProcessSignal);
    unsubscribeFromProcessEvent("SIGTERM", this.#onDriverProcessSignal);
    unsubscribeFromProcessEvent("SIGHUP", this.#onDriverProcessSignal);
    this.#signal?.removeEventListener("abort", this.#onAbort);
  }
  #onDriverProcessExit = /* @__PURE__ */ __name((_code) => {
    this.kill();
  }, "#onDriverProcessExit");
  #onDriverProcessSignal = /* @__PURE__ */ __name((signal) => {
    switch (signal) {
      case "SIGINT":
        this.kill();
        process.exit(130);
      case "SIGTERM":
      case "SIGHUP":
        void this.close();
        break;
    }
  }, "#onDriverProcessSignal");
  async close() {
    await this.#runHooks();
    if (!this.#exited) {
      this.kill();
    }
    return await this.#browserProcessExiting;
  }
  hasClosed() {
    return this.#browserProcessExiting;
  }
  kill() {
    this.#logger?.(`Trying to kill ${this.#browserProcess.pid}`);
    if (this.#browserProcess && this.#browserProcess.pid && pidExists(this.#browserProcess.pid)) {
      try {
        this.#logger?.(`Browser process ${this.#browserProcess.pid} exists`);
        if (process.platform === "win32") {
          try {
            childProcess.execSync(`taskkill /pid ${this.#browserProcess.pid} /T /F`);
          } catch (error) {
            this.#logger?.(`Killing ${this.#browserProcess.pid} using taskkill failed`, error);
            this.#browserProcess.kill();
          }
        } else {
          const processGroupId = -this.#browserProcess.pid;
          try {
            process.kill(processGroupId, "SIGKILL");
          } catch (error) {
            this.#logger?.(`Killing ${this.#browserProcess.pid} using process.kill failed`, error);
            this.#browserProcess.kill("SIGKILL");
          }
        }
      } catch (error) {
        throw new Error(`${PROCESS_ERROR_EXPLANATION}
Error cause: ${isErrorLike(error) ? error.stack : error}`);
      }
    }
    this.#clearListeners();
  }
  #recordStream(stream) {
    const rl = readline.createInterface(stream);
    const cleanup = /* @__PURE__ */ __name(() => {
      rl.off("line", onLine);
      rl.off("close", onClose);
      try {
        rl.close();
      } catch {
      }
    }, "cleanup");
    const onLine = /* @__PURE__ */ __name((line) => {
      if (line.trim() === "") {
        return;
      }
      this.#logs.push(line);
      const delta = this.#logs.length - this.#maxLogLinesSize;
      if (delta) {
        this.#logs.splice(0, delta);
      }
      this.#lineEmitter.emit("line", line);
    }, "onLine");
    const onClose = /* @__PURE__ */ __name(() => {
      cleanup();
    }, "onClose");
    rl.on("line", onLine);
    rl.on("close", onClose);
  }
  /**
   * Get recent logs (stderr + stdout) emitted by the browser.
   *
   * @public
   */
  getRecentLogs() {
    return [...this.#logs];
  }
  waitForLineOutput(regex, timeout = 0) {
    return new Promise((resolve2, reject) => {
      const onClose = /* @__PURE__ */ __name((errorOrCode) => {
        cleanup();
        reject(new Error([
          `Failed to launch the browser process: ${errorOrCode instanceof Error ? ` ${errorOrCode.message}` : ` Code: ${errorOrCode}`}`,
          "",
          `stderr:`,
          this.getRecentLogs().join("\n"),
          "",
          "TROUBLESHOOTING: https://pptr.dev/troubleshooting",
          ""
        ].join("\n")));
      }, "onClose");
      this.#browserProcess.on("exit", onClose);
      this.#browserProcess.on("error", onClose);
      const timeoutId = timeout > 0 ? setTimeout(onTimeout, timeout) : void 0;
      this.#lineEmitter.on("line", onLine);
      const cleanup = /* @__PURE__ */ __name(() => {
        clearTimeout(timeoutId);
        this.#lineEmitter.off("line", onLine);
        this.#browserProcess.off("exit", onClose);
        this.#browserProcess.off("error", onClose);
      }, "cleanup");
      function onTimeout() {
        cleanup();
        reject(new TimeoutError(`Timed out after ${timeout} ms while waiting for the WS endpoint URL to appear in stdout!`));
      }
      __name(onTimeout, "onTimeout");
      for (const line of this.#logs) {
        onLine(line);
      }
      function onLine(line) {
        const match = line.match(regex);
        if (!match) {
          return;
        }
        cleanup();
        resolve2(match[1]);
      }
      __name(onLine, "onLine");
    });
  }
};
var PROCESS_ERROR_EXPLANATION = `Puppeteer was unable to kill the process which ran the browser binary.
This means that, on future Puppeteer launches, Puppeteer might not be able to launch the browser.
Please check your open processes and ensure that the browser processes that Puppeteer launched have been killed.
If you think this is a bug, please report it on the Puppeteer issue tracker.`;
function pidExists(pid) {
  try {
    return process.kill(pid, 0);
  } catch (error) {
    if (isErrnoException(error)) {
      if (error.code && error.code === "ESRCH") {
        return false;
      }
    }
    throw error;
  }
}
__name(pidExists, "pidExists");
function isErrorLike(obj) {
  return typeof obj === "object" && obj !== null && "name" in obj && "message" in obj;
}
__name(isErrorLike, "isErrorLike");
function isErrnoException(obj) {
  return isErrorLike(obj) && ("errno" in obj || "code" in obj || "path" in obj || "syscall" in obj);
}
__name(isErrnoException, "isErrnoException");
var TimeoutError = class extends Error {
  static {
    __name(this, "TimeoutError");
  }
  /**
   * @internal
   */
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
};

// node_modules/@puppeteer/browsers/lib/install.js
init_esm();
import assert from "node:assert";
import { spawnSync as spawnSync2 } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { mkdir as mkdir2, unlink } from "node:fs/promises";
import os5 from "node:os";
import path8 from "node:path";

// node_modules/@puppeteer/browsers/lib/DefaultProvider.js
init_esm();
var DefaultProvider = class {
  static {
    __name(this, "DefaultProvider");
  }
  #baseUrl;
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }
  supports(_options) {
    return true;
  }
  getDownloadUrl(options) {
    return this.#getDownloadUrl(options.browser, options.platform, options.buildId);
  }
  #getDownloadUrl(browser, platform, buildId) {
    return new URL(downloadUrls[browser](platform, buildId, this.#baseUrl));
  }
  getExecutablePath(options) {
    return executablePathByBrowser[options.browser](options.platform, options.buildId);
  }
  getName() {
    return "DefaultProvider";
  }
};

// node_modules/@puppeteer/browsers/lib/fileUtil.js
init_esm();
import { spawnSync, spawn, execFile } from "node:child_process";
import { constants, createReadStream, createWriteStream as createWriteStream2 } from "node:fs";
import { mkdir, readdir, symlink } from "node:fs/promises";
import * as path7 from "node:path";
import { Stream, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { promisify } from "node:util";
var execFileAsync = promisify(execFile);
async function unpackArchive(archivePath, folderPath, logger) {
  if (!path7.isAbsolute(folderPath)) {
    folderPath = path7.resolve(process.cwd(), folderPath);
  }
  if (archivePath.endsWith(".zip")) {
    await mkdir(folderPath, { recursive: true });
    await extractZip(archivePath, folderPath, logger);
  } else if (archivePath.endsWith(".tar.bz2")) {
    await extractTar(archivePath, folderPath, "bzip2", logger);
  } else if (archivePath.endsWith(".dmg")) {
    await mkdir(folderPath);
    await installDMG(archivePath, folderPath);
  } else if (archivePath.endsWith(".exe")) {
    const result = spawnSync(archivePath, [`/ExtractDir=${folderPath}`], {
      env: {
        __compat_layer: "RunAsInvoker"
      }
    });
    if (result.status !== 0) {
      throw new Error(`Failed to extract ${archivePath} to ${folderPath}: ${result.output}`);
    }
  } else if (archivePath.endsWith(".tar.xz")) {
    await extractTar(archivePath, folderPath, "xz");
  } else {
    throw new Error(`Unsupported archive format: ${archivePath}`);
  }
}
__name(unpackArchive, "unpackArchive");
function createTransformStream(child) {
  const stream = new Stream.Transform({
    transform(chunk, encoding, callback) {
      if (!child.stdin.write(chunk, encoding)) {
        child.stdin.once("drain", callback);
      } else {
        callback();
      }
    },
    flush(callback) {
      if (child.stdout.destroyed) {
        callback();
      } else {
        child.stdin.end();
        child.stdout.on("close", callback);
      }
    }
  });
  child.stdin.on("error", (e) => {
    if ("code" in e && e.code === "EPIPE") {
      stream.emit("end");
    } else {
      stream.destroy(e);
    }
  });
  child.stdout.on("data", (data) => {
    return stream.push(data);
  }).on("error", (e) => {
    return stream.destroy(e);
  });
  child.once("close", () => {
    return stream.end();
  });
  return stream;
}
__name(createTransformStream, "createTransformStream");
var internalConstantsForTesting = {
  xz: "xz",
  bzip2: "bzip2"
};
async function extractTar(tarPath, folderPath, decompressUtilityName, logger) {
  const { unpackTar } = await import("./fs-HGLDZXEV.mjs");
  return await new Promise((fulfill, reject) => {
    function handleError(utilityName) {
      return (error) => {
        if ("code" in error && error.code === "ENOENT") {
          error = new Error(`\`${utilityName}\` utility is required to unpack this archive`, {
            cause: error
          });
        }
        reject(error);
      };
    }
    __name(handleError, "handleError");
    const unpack = spawn(internalConstantsForTesting[decompressUtilityName], ["-d"], {
      stdio: ["pipe", "pipe", "inherit"]
    }).once("error", handleError(decompressUtilityName)).once("exit", (code) => {
      logger?.(DEBUG_PREFIXES.fileUtil)?.(`${decompressUtilityName} exited, code=${code}`);
    });
    const tar = unpackTar(folderPath);
    tar.once("error", handleError("tar"));
    tar.once("finish", fulfill);
    createReadStream(tarPath).pipe(createTransformStream(unpack)).pipe(tar);
  });
}
__name(extractTar, "extractTar");
async function installDMG(dmgPath, folderPath) {
  const { stdout } = await execFileAsync("hdiutil", [
    "attach",
    "-nobrowse",
    "-noautoopen",
    dmgPath
  ]);
  const volumes = stdout.match(/\/Volumes\/(.*)/m);
  if (!volumes) {
    throw new Error(`Could not find volume path in ${stdout}`);
  }
  const mountPath = volumes[0];
  try {
    const fileNames = await readdir(mountPath);
    const appName = fileNames.find((item) => {
      return typeof item === "string" && item.endsWith(".app");
    });
    if (!appName) {
      throw new Error(`Cannot find app in ${mountPath}`);
    }
    const mountedPath = path7.join(mountPath, appName);
    await execFileAsync("cp", ["-R", mountedPath, folderPath]);
  } finally {
    await execFileAsync("hdiutil", ["detach", mountPath, "-quiet"]);
  }
}
__name(installDMG, "installDMG");
var ArchiverUnavailableError = class extends Error {
  static {
    __name(this, "ArchiverUnavailableError");
  }
};
async function extractZip(archivePath, folderPath, logger) {
  for (const extract of [extractZipWithCli, extractZipWithYauzl]) {
    try {
      await extract(archivePath, folderPath, logger);
      return;
    } catch (error) {
      if (!(error instanceof ArchiverUnavailableError)) {
        throw error;
      }
    }
  }
  throw new Error(`Extraction failed: no zip archiver is available. Install \`unzip\` (or \`tar.exe\`/Powershell on Windows), or add the optional \`yauzl\` dependency.`);
}
__name(extractZip, "extractZip");
async function extractZipWithYauzl(archivePath, folderPath, _logger) {
  const { default: yauzl } = await import(
    /* webpackIgnore: true */
    "yauzl"
  ).catch(() => {
    throw new ArchiverUnavailableError("Extraction failed: The optional `yauzl` dependency is not installed.");
  });
  const open = promisify(yauzl.open);
  try {
    const zipFile = await open(archivePath, { lazyEntries: true });
    await new Promise((resolve2, reject) => {
      zipFile.on("error", reject).on("end", resolve2).on("entry", (entry) => {
        extractZipEntry(zipFile, entry, folderPath).then(() => {
          zipFile.readEntry();
        }, reject);
      }).readEntry();
    });
  } catch (error) {
    throw new Error(`Extraction failed: ${archivePath}`, { cause: error });
  }
}
__name(extractZipWithYauzl, "extractZipWithYauzl");
async function extractZipWithCli(archivePath, folderPath, logger) {
  try {
    if (process.platform === "win32") {
      const systemRoot = process.env["SystemRoot"] ?? process.env["SYSTEMROOT"] ?? "C:\\Windows";
      try {
        const systemTar = `${systemRoot}\\System32\\tar.exe`;
        await execFileAsync(systemTar, ["-xf", archivePath, "-C", folderPath]);
        return;
      } catch (tarError) {
        logger?.(DEBUG_PREFIXES.fileUtil)?.(`tar.exe extraction failed: ${tarError}`);
      }
      try {
        await execFileAsync("powershell.exe", [
          "-NoProfile",
          "-NonInteractive",
          "-Command",
          "& { Expand-Archive -LiteralPath $args[0] -DestinationPath $args[1] -Force }",
          archivePath,
          folderPath
        ]);
        return;
      } catch (powershellError) {
        logger?.(DEBUG_PREFIXES.fileUtil)?.(`powershell.exe extraction failed: ${powershellError}`);
      }
      await execFileAsync("pwsh.exe", [
        "-NoProfile",
        "-NonInteractive",
        "-Command",
        "& { Expand-Archive -LiteralPath $args[0] -DestinationPath $args[1] -Force }",
        archivePath,
        folderPath
      ]);
    } else {
      await execFileAsync("unzip", ["-o", archivePath, "-d", folderPath]);
    }
  } catch (error) {
    if (error?.code === "ENOENT") {
      throw new ArchiverUnavailableError(`Extraction failed: Required native binary ('tar.exe', 'powershell.exe', 'pwsh.exe' or 'unzip') was not found in the system PATH.`);
    }
    throw new Error(`Extraction failed: ${error?.stderr?.toString() || error?.message}`);
  }
}
__name(extractZipWithCli, "extractZipWithCli");
function isInsideDirectory(directory, candidate) {
  const resolvedDirectory = path7.resolve(directory);
  const resolvedCandidate = path7.resolve(candidate);
  return resolvedCandidate === resolvedDirectory || resolvedCandidate.startsWith(resolvedDirectory + path7.sep);
}
__name(isInsideDirectory, "isInsideDirectory");
async function extractZipEntry(zipFile, entry, folderPath) {
  const { S_IFMT, S_IFDIR, S_IFLNK } = constants;
  const unixMode = entry.externalFileAttributes >>> 16;
  const isDirectory = (unixMode & S_IFMT) === S_IFDIR || entry.fileName.endsWith("/") || entry.versionMadeBy >> 8 === 0 && entry.externalFileAttributes === 16;
  const isSymlink = (unixMode & S_IFMT) === S_IFLNK;
  const mode = unixMode === 0 ? isDirectory ? 493 : 420 : unixMode & 511;
  const destination = path7.join(folderPath, entry.fileName);
  if (isDirectory) {
    await mkdir(destination, { recursive: true, mode });
    return;
  }
  await mkdir(path7.dirname(destination), { recursive: true });
  const readStream = await promisify(zipFile.openReadStream.bind(zipFile))(entry);
  if (isSymlink) {
    const chunks = [];
    await pipeline(readStream, new Writable({
      write(chunk, _encoding, callback) {
        if (chunk instanceof Buffer) {
          chunks.push(chunk);
        }
        callback();
      }
    }));
    const linkTarget = Buffer.concat(chunks).toString();
    const resolvedLinkTarget = path7.resolve(path7.dirname(destination), linkTarget);
    if (!isInsideDirectory(folderPath, resolvedLinkTarget)) {
      throw new Error(`Zip symlink "${entry.fileName}" would point outside of the target directory.`);
    }
    await symlink(linkTarget, destination);
    return;
  }
  await pipeline(readStream, createWriteStream2(destination, { mode }));
}
__name(extractZipEntry, "extractZipEntry");

// node_modules/@puppeteer/browsers/lib/ProgressBar.js
init_esm();
var activeBar = null;
var ProgressBar = class _ProgressBar {
  static {
    __name(this, "ProgressBar");
  }
  #stream;
  #totalRows = 0;
  #doneCount = 0;
  #bars = [];
  #renderScheduled = false;
  #lastRenderTime = 0;
  #allDone = false;
  constructor(stream) {
    this.#stream = stream;
  }
  /**
   * Returns a `tick(delta)` function for a new progress bar. If another bar
   * is already active on the same stream, the new bar appears on the next line
   * and both update in place. The trailing newline is emitted automatically
   * once every bar in the session has reached 100%.
   */
  static createBarTicker(title, total, stream = process.stderr) {
    if (!activeBar || activeBar.#stream !== stream) {
      activeBar = new _ProgressBar(stream);
    }
    return activeBar.#addBar(title, total);
  }
  #claimRow() {
    const row = this.#totalRows++;
    if (row > 0 && this.#stream.isTTY) {
      this.#stream.write("\n");
    }
    return row;
  }
  #addBar(title, total) {
    const row = this.#claimRow();
    this.#bars.push({
      title,
      total,
      downloaded: 0,
      startTime: 0,
      lastRendered: ""
    });
    let doneNotified = false;
    return (delta) => {
      const bar = this.#bars[row];
      if (bar.startTime === 0) {
        bar.startTime = Date.now();
      }
      bar.downloaded += delta;
      const isDone = bar.downloaded >= bar.total;
      if (isDone || Date.now() - this.#lastRenderTime >= 100) {
        this.#scheduleRender();
      }
      if (isDone && !doneNotified) {
        doneNotified = true;
        this.#onBarDone();
      }
    };
  }
  // Defers to a microtask so multiple ticks in the same turn share one render
  // pass and the cursor only moves once.
  #scheduleRender() {
    if (!this.#renderScheduled) {
      this.#renderScheduled = true;
      queueMicrotask(() => {
        this.#renderScheduled = false;
        this.#lastRenderTime = Date.now();
        this.#renderAll();
      });
    }
  }
  #computeRendered(row) {
    const bar = this.#bars[row];
    const ratio = Math.min(1, Math.max(0, bar.downloaded / bar.total));
    const percent = Math.round(ratio * 100);
    const elapsedMs = bar.startTime > 0 ? Date.now() - bar.startTime : 0;
    const rate = elapsedMs > 0 ? bar.downloaded / elapsedMs : 0;
    const etaSec = rate > 0 ? (bar.total - bar.downloaded) / rate / 1e3 : 0;
    const width = 20;
    const completeCount = Math.round(width * ratio);
    const barStr = "=".repeat(completeCount) + " ".repeat(width - completeCount);
    const status = ratio >= 1 ? "unpacking" : `${percent}% ${etaSec.toFixed(1)}s`;
    return `${bar.title} [${barStr}] ${status} `;
  }
  // Invariant: cursor is at col 0 of the bottom row before and after this call.
  // Single top-down pass: go up to bar 0, render each bar, come back to bottom.
  #renderAll() {
    if (!this.#stream.isTTY) {
      return;
    }
    const N = this.#totalRows;
    if (N === 0) {
      return;
    }
    if (N > 1) {
      this.#stream.moveCursor(0, -(N - 1));
    }
    for (let row = 0; row < N; row++) {
      const rendered = this.#computeRendered(row);
      if (rendered !== this.#bars[row].lastRendered) {
        this.#stream.cursorTo(0);
        this.#stream.write(rendered);
        this.#stream.clearLine(1);
        this.#bars[row].lastRendered = rendered;
      }
      if (row < N - 1) {
        this.#stream.moveCursor(0, 1);
      }
    }
    this.#stream.cursorTo(0);
    if (this.#allDone) {
      activeBar = null;
      this.#stream.write("\n");
    }
  }
  #onBarDone() {
    this.#doneCount++;
    if (this.#doneCount >= this.#totalRows && this.#totalRows > 0) {
      this.#allDone = true;
    }
  }
};

// node_modules/@puppeteer/browsers/lib/install.js
var times = /* @__PURE__ */ new Map();
function debugTime(label) {
  times.set(label, process.hrtime());
}
__name(debugTime, "debugTime");
function debugTimeEnd(label, logger) {
  const end = process.hrtime();
  const start = times.get(label);
  if (!start) {
    return;
  }
  const duration = end[0] * 1e3 + end[1] / 1e6 - (start[0] * 1e3 + start[1] / 1e6);
  logger?.(DEBUG_PREFIXES.install)?.(`Duration for ${label}: ${duration}ms`);
}
__name(debugTimeEnd, "debugTimeEnd");
async function installWithProviders(options) {
  if (!options.platform) {
    throw new Error("Platform must be defined");
  }
  const logger = options.logger;
  const cache = new Cache(options.cacheDir, options.logger);
  const browserRoot = cache.browserRoot(options.browser);
  const providers = [...options.providers || []];
  if (options.baseUrl) {
    providers.push(new DefaultProvider(options.baseUrl));
  }
  if (!options.baseUrl || options.forceFallbackForTesting) {
    providers.push(new DefaultProvider());
  }
  const downloadOptions = {
    browser: options.browser,
    platform: options.platform,
    buildId: options.buildId,
    progressCallback: options.downloadProgressCallback === "default" ? await makeProgressCallback(options.browser, options.buildIdAlias ?? options.buildId) : options.downloadProgressCallback
  };
  const errors = [];
  for (const provider of providers) {
    try {
      if (!await provider.supports(downloadOptions)) {
        logger?.(DEBUG_PREFIXES.install)?.(`Provider ${provider.getName()} does not support ${options.browser} on ${options.platform}`);
        continue;
      }
      if (!(provider instanceof DefaultProvider)) {
        logger?.(DEBUG_PREFIXES.install)?.(`⚠️  Using custom downloader: ${provider.getName()}`);
        logger?.(DEBUG_PREFIXES.install)?.(`⚠️  Puppeteer does not guarantee compatibility with non-default providers`);
      }
      logger?.(DEBUG_PREFIXES.install)?.(`Trying provider: ${provider.getName()} for ${options.browser} ${options.buildId}`);
      const url = await provider.getDownloadUrl(downloadOptions);
      if (!url) {
        logger?.(DEBUG_PREFIXES.install)?.(`Provider ${provider.getName()} returned no URL for ${options.browser} ${options.buildId}`);
        continue;
      }
      logger?.(DEBUG_PREFIXES.install)?.(`Successfully got URL from ${provider.getName()}: ${url}`);
      if (!existsSync(browserRoot)) {
        await mkdir2(browserRoot, { recursive: true });
      }
      return await installUrl(url, options, provider, logger);
    } catch (err) {
      logger?.(DEBUG_PREFIXES.install)?.(`Provider ${provider.getName()} failed: ${err.message}`);
      errors.push({
        providerName: provider.getName(),
        error: err
      });
    }
  }
  const errorDetails = errors.map((e) => {
    return `  - ${e.providerName}: ${e.error.message}`;
  }).join("\n");
  throw new Error(`All providers failed for ${options.browser} ${options.buildId}:
${errorDetails}`);
}
__name(installWithProviders, "installWithProviders");
async function install(options) {
  options.platform ??= detectBrowserPlatform();
  options.unpack ??= true;
  options.logger ??= debug;
  if (!options.platform) {
    throw new Error(`Cannot download a binary for the provided platform: ${os5.platform()} (${os5.arch()})`);
  }
  options.providers ??= [];
  return await installWithProviders(options);
}
__name(install, "install");
async function installDeps(installedBrowser, logger) {
  if (process.platform !== "linux" || installedBrowser.platform !== BrowserPlatform.LINUX && installedBrowser.platform !== BrowserPlatform.LINUX_ARM) {
    return;
  }
  const depsPath = path8.join(path8.dirname(installedBrowser.executablePath), "deb.deps");
  if (!existsSync(depsPath)) {
    logger?.(DEBUG_PREFIXES.install)?.(`deb.deps file was not found at ${depsPath}`);
    return;
  }
  const data = readFileSync(depsPath, "utf-8").split("\n").join(",");
  if (process.getuid?.() !== 0) {
    throw new Error("Installing system dependencies requires root privileges");
  }
  let result = spawnSync2("apt-get", ["-v"]);
  if (result.status !== 0) {
    throw new Error("Failed to install system dependencies: apt-get does not seem to be available");
  }
  logger?.(DEBUG_PREFIXES.install)?.(`Trying to install dependencies: ${data}`);
  result = spawnSync2("apt-get", [
    "satisfy",
    "-y",
    data,
    "--no-install-recommends"
  ]);
  if (result.status !== 0) {
    throw new Error(`Failed to install system dependencies: status=${result.status},error=${result.error},stdout=${result.stdout.toString("utf8")},stderr=${result.stderr.toString("utf8")}`);
  }
  logger?.(DEBUG_PREFIXES.install)?.(`Installed system dependencies ${data}`);
}
__name(installDeps, "installDeps");
async function installUrl(url, options, provider, logger) {
  if (!provider) {
    throw new Error("Provider is required for installation");
  }
  options.platform ??= detectBrowserPlatform();
  if (!options.platform) {
    throw new Error(`Cannot download a binary for the provided platform: ${os5.platform()} (${os5.arch()})`);
  }
  let downloadProgressCallback = options.downloadProgressCallback;
  if (downloadProgressCallback === "default") {
    downloadProgressCallback = await makeProgressCallback(options.browser, options.buildIdAlias ?? options.buildId);
  }
  const fileName = decodeURIComponent(url.toString()).split("/").pop();
  assert(fileName, `A malformed download URL was found: ${url}.`);
  const cache = new Cache(options.cacheDir, options.logger);
  const browserRoot = cache.browserRoot(options.browser);
  const archivePath = path8.join(browserRoot, `${options.buildId}-${fileName}`);
  if (!existsSync(browserRoot)) {
    await mkdir2(browserRoot, { recursive: true });
  }
  if (options.expectedHash) {
    logger?.(DEBUG_PREFIXES.install)?.(`Using provided checksum for ${fileName}: ${options.expectedHash}`);
  }
  if (!options.unpack) {
    if (existsSync(archivePath)) {
      return archivePath;
    }
    logger?.(DEBUG_PREFIXES.install)?.(`Downloading binary from ${url}`);
    debugTime("download");
    await downloadFile(url, archivePath, downloadProgressCallback, options.expectedHash);
    debugTimeEnd("download", logger);
    return archivePath;
  }
  const outputPath = cache.installationDir(options.browser, options.platform, options.buildId);
  const relativeExecutablePath6 = await provider.getExecutablePath({
    browser: options.browser,
    buildId: options.buildId,
    platform: options.platform
  });
  logger?.(DEBUG_PREFIXES.install)?.(`Using executable path from provider: ${relativeExecutablePath6}`);
  const installedBrowser = new InstalledBrowser(cache, options.browser, options.buildId, options.platform);
  if (!(provider instanceof DefaultProvider)) {
    cache.writeExecutablePath(options.browser, options.platform, options.buildId, relativeExecutablePath6);
  }
  try {
    if (existsSync(outputPath)) {
      if (!existsSync(installedBrowser.executablePath)) {
        throw new Error(`The browser folder (${outputPath}) exists but the executable (${installedBrowser.executablePath}) is missing`);
      }
      await runSetup(installedBrowser, logger);
      if (options.installDeps) {
        await installDeps(installedBrowser, logger);
      }
      return installedBrowser;
    }
    if (!existsSync(archivePath)) {
      logger?.(DEBUG_PREFIXES.install)?.(`Downloading binary from ${url}`);
      try {
        debugTime("download");
        await downloadFile(url, archivePath, downloadProgressCallback, options.expectedHash);
      } finally {
        debugTimeEnd("download", logger);
      }
    } else {
      logger?.(DEBUG_PREFIXES.install)?.(`Using existing archive at ${archivePath}`);
    }
    logger?.(DEBUG_PREFIXES.install)?.(`Installing ${archivePath} to ${outputPath}`);
    try {
      debugTime("extract");
      await unpackArchive(archivePath, outputPath, options.logger);
    } finally {
      debugTimeEnd("extract", logger);
    }
    if (options.buildIdAlias) {
      const metadata = installedBrowser.readMetadata();
      metadata.aliases[options.buildIdAlias] = options.buildId;
      installedBrowser.writeMetadata(metadata);
    }
    await runSetup(installedBrowser, logger);
    if (options.installDeps) {
      await installDeps(installedBrowser, logger);
    }
    return installedBrowser;
  } finally {
    if (existsSync(archivePath)) {
      await unlink(archivePath);
    }
  }
}
__name(installUrl, "installUrl");
async function runSetup(installedBrowser, logger) {
  if ((installedBrowser.platform === BrowserPlatform.WIN32 || installedBrowser.platform === BrowserPlatform.WIN64) && installedBrowser.browser === Browser.CHROME && installedBrowser.platform === detectBrowserPlatform()) {
    try {
      debugTime("permissions");
      const browserDir = path8.dirname(installedBrowser.executablePath);
      const setupExePath = path8.join(browserDir, "setup.exe");
      if (!existsSync(setupExePath)) {
        return;
      }
      spawnSync2(path8.join(browserDir, "setup.exe"), [`--configure-browser-in-directory=` + browserDir], {
        shell: false
      });
    } finally {
      debugTimeEnd("permissions", logger);
    }
  }
}
__name(runSetup, "runSetup");
async function uninstall(options) {
  options.platform ??= detectBrowserPlatform();
  if (!options.platform) {
    throw new Error(`Cannot detect the browser platform for: ${os5.platform()} (${os5.arch()})`);
  }
  new Cache(options.cacheDir).uninstall(options.browser, options.platform, options.buildId);
}
__name(uninstall, "uninstall");
async function getInstalledBrowsers(options) {
  return new Cache(options.cacheDir).getInstalledBrowsers();
}
__name(getInstalledBrowsers, "getInstalledBrowsers");
async function canDownload(options) {
  options.platform ??= detectBrowserPlatform();
  if (!options.platform) {
    throw new Error(`Cannot download a binary for the provided platform: ${os5.platform()} (${os5.arch()})`);
  }
  const providers = [
    ...options.providers || [],
    new DefaultProvider(options.baseUrl)
  ];
  const downloadOptions = {
    browser: options.browser,
    platform: options.platform,
    buildId: options.buildId
  };
  for (const provider of providers) {
    if (!await provider.supports(downloadOptions)) {
      continue;
    }
    const url = await provider.getDownloadUrl(downloadOptions);
    if (url && await headHttpRequest(url)) {
      return true;
    }
  }
  return false;
}
__name(canDownload, "canDownload");
function getDownloadUrl(browser, platform, buildId, baseUrl) {
  return new URL(downloadUrls[browser](platform, buildId, baseUrl));
}
__name(getDownloadUrl, "getDownloadUrl");
async function makeProgressCallback(browser, buildId) {
  let ticker;
  let lastDownloadedBytes = 0;
  return (downloadedBytes, totalBytes) => {
    if (!ticker) {
      ticker = ProgressBar.createBarTicker(`Downloading ${browser} ${buildId} - ${toMegabytes(totalBytes)}`, totalBytes);
    }
    const delta = downloadedBytes - lastDownloadedBytes;
    lastDownloadedBytes = downloadedBytes;
    ticker(delta);
  };
}
__name(makeProgressCallback, "makeProgressCallback");
function toMegabytes(bytes) {
  const mb = bytes / 1e3 / 1e3;
  return `${Math.round(mb * 10) / 10} MB`;
}
__name(toMegabytes, "toMegabytes");

// node_modules/@puppeteer/browsers/lib/CLI.js
init_esm();
import { spawn as spawn2 } from "node:child_process";
import fs3 from "node:fs";
import os6 from "node:os";
import path9 from "node:path";
import { stdin as input, stdout as output } from "node:process";
import * as readline2 from "node:readline";
function isValidBrowser(browser) {
  return Object.values(Browser).includes(browser);
}
__name(isValidBrowser, "isValidBrowser");
function isValidPlatform(platform) {
  return Object.values(BrowserPlatform).includes(platform);
}
__name(isValidPlatform, "isValidPlatform");
var packageVersion = "3.2.0";
var CLI = class {
  static {
    __name(this, "CLI");
  }
  #cachePath;
  #rl;
  #scriptName;
  #version;
  #allowCachePathOverride;
  #pinnedBrowsers;
  #prefixCommand;
  constructor(opts, rl) {
    if (!opts) {
      opts = {};
    }
    if (typeof opts === "string") {
      opts = {
        cachePath: opts
      };
    }
    this.#cachePath = opts.cachePath ?? process.cwd();
    this.#rl = rl;
    this.#scriptName = opts.scriptName ?? "@puppeteer/browsers";
    this.#version = opts.version ?? packageVersion;
    this.#allowCachePathOverride = opts.allowCachePathOverride ?? true;
    this.#pinnedBrowsers = opts.pinnedBrowsers;
    this.#prefixCommand = opts.prefixCommand;
  }
  #defineBrowserParameter(yargs, required) {
    return yargs.positional("browser", {
      description: "Which browser to install <browser>[@<buildId|latest>]. `latest` will try to find the latest available build. `buildId` is a browser-specific identifier such as a version or a revision.",
      type: "string",
      coerce: /* @__PURE__ */ __name((opt) => {
        const browser = {
          name: this.#parseBrowser(opt),
          buildId: this.#parseBuildId(opt)
        };
        if (!isValidBrowser(browser.name)) {
          throw new Error(`Unsupported browser '${browser.name}'`);
        }
        return browser;
      }, "coerce"),
      demandOption: required
    });
  }
  #definePlatformParameter(yargs) {
    return yargs.option("platform", {
      type: "string",
      desc: "Platform that the binary needs to be compatible with.",
      choices: Object.values(BrowserPlatform),
      default: detectBrowserPlatform(),
      coerce: /* @__PURE__ */ __name((platform) => {
        if (!isValidPlatform(platform)) {
          throw new Error(`Unsupported platform '${platform}'`);
        }
        return platform;
      }, "coerce"),
      defaultDescription: "Auto-detected"
    });
  }
  #definePathParameter(yargs, required = false) {
    if (!this.#allowCachePathOverride) {
      return yargs;
    }
    return yargs.option("path", {
      type: "string",
      desc: "Path to the root folder for the browser downloads and installation. If a relative path is provided, it will be resolved relative to the current working directory. The installation folder structure is compatible with the cache structure used by Puppeteer.",
      defaultDescription: "Current working directory",
      ...required ? {} : { default: process.cwd() },
      demandOption: required
    });
  }
  async run(argv) {
    const { default: yargs } = await import("./yargs-YUHTCWY7.mjs");
    const { hideBin } = await import("./helpers-PMGIPBSI.mjs");
    const yargsInstance = yargs(hideBin(argv));
    let target = yargsInstance.scriptName(this.#scriptName).version(this.#version);
    if (this.#prefixCommand) {
      target = target.command(this.#prefixCommand.cmd, this.#prefixCommand.description, (yargs2) => {
        return this.#build(yargs2);
      });
    } else {
      target = this.#build(target);
    }
    await target.demandCommand(1).help().wrap(Math.min(120, yargsInstance.terminalWidth())).parseAsync();
  }
  #build(yargs) {
    const latestOrPinned = this.#pinnedBrowsers ? "pinned" : "latest";
    const browserArgType = this.#pinnedBrowsers ? "[browser]" : "<browser>";
    return yargs.command(`install ${browserArgType}`, "Download and install the specified browser. If successful, the command outputs the actual browser buildId that was installed and the absolute path to the browser executable (see --format).", (yargs2) => {
      if (this.#pinnedBrowsers) {
        yargs2.example("$0 install", "Install all pinned browsers");
      }
      yargs2.example("$0 install chrome", `Install the ${latestOrPinned} available build of the Chrome browser.`).example("$0 install chrome@latest", "Install the latest available build for the Chrome browser.").example("$0 install chrome@stable", "Install the latest available build for the Chrome browser from the stable channel.").example("$0 install chrome@beta", "Install the latest available build for the Chrome browser from the beta channel.").example("$0 install chrome@dev", "Install the latest available build for the Chrome browser from the dev channel.").example("$0 install chrome@canary", "Install the latest available build for the Chrome Canary browser.").example("$0 install chrome@115", "Install the latest available build for Chrome 115.").example("$0 install chromedriver@canary", "Install the latest available build for ChromeDriver Canary.").example("$0 install chromedriver@115", "Install the latest available build for ChromeDriver 115.").example("$0 install chromedriver@115.0.5790", "Install the latest available patch (115.0.5790.X) build for ChromeDriver.").example("$0 install chrome-headless-shell", "Install the latest available chrome-headless-shell build.").example("$0 install chrome-headless-shell@beta", "Install the latest available chrome-headless-shell build corresponding to the Beta channel.").example("$0 install chrome-headless-shell@118", "Install the latest available chrome-headless-shell 118 build.").example("$0 install chromium@1083080", "Install the revision 1083080 of the Chromium browser.").example("$0 install firefox", "Install the latest nightly available build of the Firefox browser.").example("$0 install firefox@stable", "Install the latest stable build of the Firefox browser.").example("$0 install firefox@beta", "Install the latest beta build of the Firefox browser.").example("$0 install firefox@devedition", "Install the latest devedition build of the Firefox browser.").example("$0 install firefox@esr", "Install the latest ESR build of the Firefox browser.").example("$0 install firefox@nightly", "Install the latest nightly build of the Firefox browser.").example("$0 install firefox@stable_111.0.1", "Install a specific version of the Firefox browser.").example("$0 install firefox --platform mac", "Install the latest Mac (Intel) build of the Firefox browser.");
      if (this.#allowCachePathOverride) {
        yargs2.example("$0 install firefox --path /tmp/my-browser-cache", "Install to the specified cache directory.");
      }
      const yargsWithBrowserParam = this.#defineBrowserParameter(yargs2, !Boolean(this.#pinnedBrowsers));
      const yargsWithPlatformParam = this.#definePlatformParameter(yargsWithBrowserParam);
      return this.#definePathParameter(yargsWithPlatformParam, false).option("base-url", {
        type: "string",
        desc: "Base URL to download from"
      }).option("install-deps", {
        type: "boolean",
        desc: "Whether to attempt installing system dependencies (only supported on Linux, requires root privileges).",
        default: false
      }).option("format", {
        type: "string",
        desc: "Format to use for the output. Supported placeholders: {{browser}}, {{buildId}}, {{path}}, {{platform}}",
        default: "{{browser}}@{{buildId}} {{path}}"
      });
    }, async (args) => {
      if (this.#pinnedBrowsers && !args.browser) {
        const result = await Promise.allSettled(Object.entries(this.#pinnedBrowsers).map(async ([browser, options]) => {
          if (options.skipDownload) {
            return;
          }
          await this.#install({
            ...args,
            browser: {
              name: browser,
              buildId: options.buildId
            }
          });
        }));
        for (const install2 of result) {
          if (install2.status === "rejected") {
            throw install2.reason;
          }
        }
      } else {
        await this.#install(args);
      }
    }).command("launch <browser>", "Launch the specified browser", (yargs2) => {
      yargs2.example("$0 launch chrome@115.0.5790.170", "Launch Chrome 115.0.5790.170").example("$0 launch firefox@112.0a1", "Launch the Firefox browser identified by the milestone 112.0a1.").example("$0 launch chrome@115.0.5790.170 --detached", "Launch the browser but detach the sub-processes.").example("$0 launch chrome@canary --system", "Try to locate the Canary build of Chrome installed on the system and launch it.").example("$0 launch chrome@115.0.5790.170 -- --version", "Launch Chrome 115.0.5790.170 and pass custom argument to the binary.");
      const yargsWithExtraAgs = yargs2.parserConfiguration({
        "populate--": true
        // Yargs does not have the correct overload for this.
      });
      const yargsWithBrowserParam = this.#defineBrowserParameter(yargsWithExtraAgs, true);
      const yargsWithPlatformParam = this.#definePlatformParameter(yargsWithBrowserParam);
      return this.#definePathParameter(yargsWithPlatformParam).option("detached", {
        type: "boolean",
        desc: "Detach the child process.",
        default: false
      }).option("system", {
        type: "boolean",
        desc: "Search for a browser installed on the system instead of the cache folder.",
        default: false
      }).option("dumpio", {
        type: "boolean",
        desc: "Forwards the browser's process stdout and stderr",
        default: false
      });
    }, async (args) => {
      const extraArgs = args["--"]?.filter((arg) => {
        return typeof arg === "string";
      });
      args.browser.buildId = this.#resolvePinnedBrowserIfNeeded(args.browser.buildId, args.browser.name);
      const executablePath = args.system ? computeSystemExecutablePath({
        browser: args.browser.name,
        channel: verifyChromeReleaseChannel(args.browser.buildId),
        platform: args.platform
      }) : computeExecutablePath({
        browser: args.browser.name,
        buildId: args.browser.buildId,
        cacheDir: args.path ?? this.#cachePath,
        platform: args.platform
      });
      launch({
        args: extraArgs,
        executablePath,
        dumpio: args.dumpio,
        detached: args.detached
      });
    }).command("clear", this.#allowCachePathOverride ? "Removes all installed browsers from the specified cache directory" : `Removes all installed browsers from ${this.#cachePath}`, (yargs2) => {
      return this.#definePathParameter(yargs2, true);
    }, async (args) => {
      const cacheDir = args.path ?? this.#cachePath;
      const rl = this.#rl ?? readline2.createInterface({ input, output });
      rl.question(`Do you want to permanently and recursively delete the content of ${cacheDir} (yes/No)? `, (answer) => {
        rl.close();
        if (!["y", "yes"].includes(answer.toLowerCase().trim())) {
          console.log("Cancelled.");
          return;
        }
        const cache = new Cache(cacheDir);
        cache.clear();
        console.log(`${cacheDir} cleared.`);
      });
    }).command("list", "List all installed browsers in the cache directory", (yargs2) => {
      yargs2.example("$0 list", "List all installed browsers in the cache directory");
      if (this.#allowCachePathOverride) {
        yargs2.example("$0 list --path /tmp/my-browser-cache", "List browsers installed in the specified cache directory");
      }
      return this.#definePathParameter(yargs2);
    }, async (args) => {
      const cacheDir = args.path ?? this.#cachePath;
      const cache = new Cache(cacheDir);
      const browsers = cache.getInstalledBrowsers();
      for (const browser of browsers) {
        console.log(`${browser.browser}@${browser.buildId} (${browser.platform}) ${browser.executablePath}`);
      }
    }).command("bisect <path>", "(experimental) Bisect Chrome for Testing using the specified script. Downloads https://chromium.googlesource.com/chromium/src.git/+/main/tools/bisect-builds.py to ~/bisect-builds.py if needed.", (yargs2) => {
      return yargs2.positional("path", {
        type: "string",
        description: "Path to a script or test name to bisect.",
        demandOption: true
      }).option("good", {
        type: "string",
        alias: "g",
        demandOption: true,
        desc: "Last known good version"
      }).option("bad", {
        type: "string",
        alias: "b",
        demandOption: true,
        desc: "First known bad version"
      }).option("cft", {
        type: "boolean",
        desc: "Use -cft",
        default: true
      });
    }, async (args) => {
      const isScript = args.path.endsWith(".mjs") || args.path.endsWith(".cjs") || args.path.endsWith(".js");
      const testCommand = isScript ? `PUPPETEER_EXECUTABLE_PATH=%p node ${args.path}` : `BINARY=%p npm run ${args.path}`;
      const bisectScriptPath = path9.join(os6.homedir(), "bisect-builds.py");
      if (!fs3.existsSync(bisectScriptPath)) {
        console.log("Downloading bisect-builds.py...");
        const response = await fetch("https://chromium.googlesource.com/chromium/src.git/+/main/tools/bisect-builds.py?format=TEXT");
        if (!response.ok) {
          throw new Error(`Failed to download bisect-builds.py: ${response.statusText}`);
        }
        const base64Text = await response.text();
        const decodedText = Buffer.from(base64Text, "base64").toString("utf-8");
        fs3.writeFileSync(bisectScriptPath, decodedText, { mode: 493 });
        console.log(`Saved bisect-builds.py to ${bisectScriptPath}`);
      }
      const pythonExecutable = "python3";
      const bisectArgs = [
        bisectScriptPath,
        "-g",
        args.good,
        "-b",
        args.bad,
        args.cft ? "-cft" : "-s",
        "-v",
        "--verify-range",
        "--not-interactive",
        "-c",
        testCommand
      ];
      await new Promise((resolve2, reject) => {
        const createProcess = spawn2(pythonExecutable, bisectArgs, {
          stdio: "inherit"
        });
        createProcess.on("error", (message) => {
          reject(message);
        });
        createProcess.on("exit", (code) => {
          if (code !== 0) {
            reject(new Error(`Process exited with code ${code}`));
          } else {
            resolve2();
          }
        });
      });
    }).demandCommand(1).help();
  }
  #parseBrowser(version) {
    return version.split("@").shift();
  }
  #parseBuildId(version) {
    const parts = version.split("@");
    return parts.length === 2 ? parts[1] : this.#pinnedBrowsers ? "pinned" : "latest";
  }
  #resolvePinnedBrowserIfNeeded(buildId, browserName) {
    if (buildId === "pinned") {
      const options = this.#pinnedBrowsers?.[browserName];
      if (!options || !options.buildId) {
        throw new Error(`No pinned version found for ${browserName}`);
      }
      return options.buildId;
    }
    return buildId;
  }
  async #install(args) {
    if (!args.browser) {
      throw new Error(`No browser arg provided`);
    }
    if (!args.platform) {
      throw new Error(`Could not resolve the current platform`);
    }
    args.browser.buildId = this.#resolvePinnedBrowserIfNeeded(args.browser.buildId, args.browser.name);
    const originalBuildId = args.browser.buildId;
    args.browser.buildId = await resolveBuildId4(args.browser.name, args.platform, args.browser.buildId);
    await install({
      browser: args.browser.name,
      buildId: args.browser.buildId,
      platform: args.platform,
      cacheDir: args.path ?? this.#cachePath,
      downloadProgressCallback: "default",
      baseUrl: args.baseUrl,
      buildIdAlias: originalBuildId !== args.browser.buildId ? originalBuildId : void 0,
      installDeps: args.installDeps
    });
    const executablePath = computeExecutablePath({
      browser: args.browser.name,
      buildId: args.browser.buildId,
      cacheDir: args.path ?? this.#cachePath,
      platform: args.platform
    });
    console.log(args.format.replace(/{{browser}}/g, args.browser.name).replace(/{{buildId}}/g, args.browser.buildId).replace(/{{path}}/g, executablePath).replace(/{{platform}}/g, args.platform));
  }
};

// node_modules/@puppeteer/browsers/lib/provider.js
init_esm();
function buildArchiveFilename(browser, platform, buildId, extension = "zip") {
  return `${browser}-${platform}-${buildId}.${extension}`;
}
__name(buildArchiveFilename, "buildArchiveFilename");

export {
  Browser,
  BrowserPlatform,
  BrowserTag,
  ChromeReleaseChannel,
  resolveBuildId4 as resolveBuildId,
  createProfile2 as createProfile,
  resolveDefaultUserDataDir2 as resolveDefaultUserDataDir,
  getVersionComparator,
  detectBrowserPlatform,
  InstalledBrowser,
  Cache,
  computeExecutablePath,
  computeSystemExecutablePath,
  launch,
  CDP_WEBSOCKET_ENDPOINT_REGEX,
  WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX,
  Process,
  TimeoutError,
  DefaultProvider,
  install,
  uninstall,
  getInstalledBrowsers,
  canDownload,
  getDownloadUrl,
  CLI,
  buildArchiveFilename
};
/*! Bundled license information:

@puppeteer/browsers/lib/httpUtil.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/browser-data/types.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/browser-data/chrome.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/browser-data/chrome-headless-shell.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/browser-data/chromedriver.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/browser-data/chromium.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/browser-data/firefox.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/browser-data/browser-data.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/debug.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/detectPlatform.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/Cache.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/launch.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/DefaultProvider.js:
  (**
   * @license
   * Copyright 2026 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/fileUtil.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/ProgressBar.js:
  (**
   * @license
   * Copyright 2026 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/install.js:
  (**
   * @license
   * Copyright 2017 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/CLI.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/provider.js:
  (**
   * @license
   * Copyright 2026 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)

@puppeteer/browsers/lib/main.js:
  (**
   * @license
   * Copyright 2023 Google Inc.
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=chunk-VWBOMHCV.mjs.map
