// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var CaseStudy = defineDocumentType(() => ({
  name: "CaseStudy",
  filePathPattern: `case-studies/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    sector: { type: "enum", options: ["pharma", "beauty", "fmcg", "other"], required: true },
    cover: { type: "string", required: true },
    date: { type: "date", required: true },
    kpis: {
      type: "list",
      of: {
        type: "object",
        fields: {
          label: { type: "string", required: true },
          value: { type: "string", required: true }
        }
      }
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("case-studies/", "")
    }
  }
}));
var News = defineDocumentType(() => ({
  name: "News",
  filePathPattern: `news/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    category: { type: "enum", options: ["pharma", "decorative", "tech", "events"], required: true },
    cover: { type: "string", required: true },
    date: { type: "date", required: true }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("news/", "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [CaseStudy, News]
});
export {
  CaseStudy,
  News,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4UTH7UPT.mjs.map
