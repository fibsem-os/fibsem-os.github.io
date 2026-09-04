import type { MetaRecord } from "nextra";

// The user guide, in reading order. Sections are separators; every entry
// below one is a folder under src/app/docs/ with a page.mdx in it.
const meta: MetaRecord = {
  // no breadcrumb: it repeated the page title in small type above the heading
  "*": { theme: { breadcrumb: false } },
  index: "Overview",
  "-- start": { type: "separator", title: "Start here" },
  installation: "Installation",
  "getting-started": "Getting started",
  "-- microscope": { type: "separator", title: "Microscope Control" },
  imaging: "Image acquisition",
  movement: "Stage movement",
  milling: "Milling",
  "sample-holder": "Sample holder",
  fluorescence: "Fluorescence imaging",
  "-- autolamella": { type: "separator", title: "AutoLamella" },
  experiments: "Experiments",
  protocols: "Protocols",
  overview: "Overview acquisition",
  "-- legacy": { type: "separator", title: "Older pages" },
  walkthrough: "Walkthrough (legacy)",
};

export default meta;
