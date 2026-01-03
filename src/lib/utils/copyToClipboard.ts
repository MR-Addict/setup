/**
 * 复制文本到剪贴板
 *
 * @param text 要复制的文本
 * @returns 是否复制成功
 */
export default function copyToClipboard(text: string): boolean {
  if (typeof navigator !== "undefined" && navigator.clipboard) {
    navigator.clipboard.writeText(text);
    return true;
  } else {
    try {
      const body = document.querySelector("body");
      if (!body) return false;

      const textarea = document.createElement("textarea");
      body.appendChild(textarea);

      textarea.value = text;
      textarea.select();

      const success = document.execCommand("copy");
      body.removeChild(textarea);

      return success;
    } catch (e) {
      return false;
    }
  }
}
