export default function copyToClipboard(text: string) {
  if (!navigator.clipboard) return false;

  navigator.clipboard.writeText(text);
  return true;
}
