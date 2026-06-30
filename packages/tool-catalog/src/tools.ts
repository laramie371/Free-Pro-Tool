import type { FreeProToolMetadata } from "./schema";

export const tools: FreeProToolMetadata[] = [
  {
    name: "Merge PDF",
    slug: "merge-pdf",
    category: "PDF Tools",
    url: "https://freeprotool.com/tools/merge-pdf",
    description: "Merge multiple PDF files into one PDF in your browser.",
    inputFormats: ["pdf"],
    outputFormats: ["pdf"],
    runsLocally: true,
    keywords: ["merge pdf", "combine pdf", "join pdf files"]
  }
];
