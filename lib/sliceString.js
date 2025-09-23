export function sliceString(text = "", limit = 100) {
  if (!text || typeof text !== "string") return "";
  if (text.length <= limit) return text;

  const truncated = text.substring(0, limit);
  const lastSpace = truncated.lastIndexOf(" ");
  return (
    (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated).trim() +
    "..."
  );
}
