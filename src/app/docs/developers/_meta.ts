import type { MetaRecord } from "nextra";

// The developer documentation, in reading order. Every page.mdx in this folder
// is written by scripts/sync-developer-docs.mjs from a fibsem-os checkout
// before each build; only this file is committed.
const meta: MetaRecord = {
  // generated files have no git history, so no "last updated" line
  "*": { theme: { timestamp: false } },
  index: "Overview",
  "getting-started": "Getting started",
  contributing: "Contributing",
  extending: "Extending fibsemOS",
  scripting: "Scripting experiments",
  simulator: "The simulator",
  "screenshot-harness": "The screenshot harness",
};

export default meta;
