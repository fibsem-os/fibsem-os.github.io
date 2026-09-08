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
  "first-lamella": "Your first lamella",
  experiments: "Experiments",
  protocols: "Protocols",
  overview: "Overview acquisition",
  lamella: "Lamella",
  tasks: "Tasks",
  workflows: "Workflows",
  // built and reviewable by URL, hidden until features.grid_workflow is on by default
  "grid-workflow": { title: "Grid workflow", display: "hidden" },
  "-- developers": { type: "separator", title: "Developers" },
  // These seven are written from a fibsem-os checkout by
  // scripts/sync-developer-docs.mjs before every build and are gitignored; the
  // slugs here match its PAGES table. No timestamps: generated files have no
  // git history.
  developers: { title: "Overview", theme: { timestamp: false } },
  "developer-setup": { title: "Getting started", theme: { timestamp: false } },
  contributing: { title: "Contributing", theme: { timestamp: false } },
  extending: { title: "Extending fibsemOS", theme: { timestamp: false } },
  scripting: { title: "Scripting experiments", theme: { timestamp: false } },
  simulator: { title: "The simulator", theme: { timestamp: false } },
  "screenshot-harness": { title: "The screenshot harness", theme: { timestamp: false } },
};

export default meta;
