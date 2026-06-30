export type FreeProToolCategory =
  | "PDF Tools"
  | "Image Tools"
  | "SVG Tools"
  | "Document Tools"
  | "Data Tools"
  | "Developer Tools";

export type FreeProToolMetadata = {
  name: string;
  slug: string;
  category: FreeProToolCategory;
  url: string;
  description: string;
  inputFormats: string[];
  outputFormats: string[];
  runsLocally: boolean;
  keywords: string[];
};
