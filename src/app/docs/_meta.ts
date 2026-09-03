import type { MetaRecord } from "nextra";

// The user guide, in reading order. Sections are separators; every entry
// below one is a folder under src/app/docs/ with a page.mdx in it.
const meta: MetaRecord = {
  index: "Overview",
  "-- start": { type: "separator", title: "Start here" },
  installation: "Installation",
  "getting-started": "Getting started",
  "-- legacy": { type: "separator", title: "Older pages" },
  walkthrough: "Walkthrough (legacy)",
};

export default meta;
