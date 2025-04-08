export type Platform = {
  os: "windows" | "mac" | "linux" | "other";
  browser: "chrome" | "firefox" | "safari" | "edge" | "other";
};

export function getUserPlatform(userAgent?: string): Platform {
  if (!userAgent) userAgent = navigator.userAgent;

  let os: Platform["os"] = "other";
  let browser: Platform["browser"] = "other";

  // Detect OS
  if (/windows nt/i.test(userAgent)) os = "windows";
  else if (/mac os x/i.test(userAgent)) os = "mac";
  else if (/linux/i.test(userAgent) && !/android/i.test(userAgent)) os = "linux";

  // Detect Browser
  if (/edg/i.test(userAgent)) browser = "edge";
  else if (/chrome|crios/i.test(userAgent) && !/edg/i.test(userAgent)) browser = "chrome";
  else if (/firefox|fxios/i.test(userAgent)) browser = "firefox";
  else if (/safari/i.test(userAgent) && !/chrome|crios/i.test(userAgent)) browser = "safari";

  return { os, browser };
}
