// utils/strapiRichTextParser.js
export function parseStrapiRichText(blocks) {
  if (!Array.isArray(blocks)) return [];

  return blocks.filter((block) => block?.type === "paragraph" && Array.isArray(block.children)).map((block) => block.children.map((child) => child?.text || "").join(""));
}
