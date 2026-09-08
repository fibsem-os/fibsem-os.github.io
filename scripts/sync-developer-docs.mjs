// Copy the developer documentation out of a fibsem-os checkout into the site.
//
// The developer pages live with the code (docs/developers/, docs/simulator.md,
// CONTRIBUTING.md, SCRIPTING.md): two of them are partly generated from it, and
// they name modules that get renamed. So the repository stays the source of
// truth and this script, run before every build, writes the site's copies:
//
//   src/app/docs/developers/<slug>/page.mdx   (gitignored)
//   public/doc/img/developers/<image>          (gitignored)
//
// Relative links between the pages become site routes, links into the code
// become GitHub links at the ref the docs came from, and the few characters
// MDX treats as JSX are escaped outside code.
//
// Where the checkout is: $FIBSEM_OS_DIR, else ../fibsem-os beside this repo.
// $FIBSEM_OS_REF (default "main") only decides where the GitHub links point.
// With no checkout and no $FIBSEM_OS_DIR the script warns and writes nothing,
// so a site-only change still builds locally; CI always sets both.

import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, rmSync } from "node:fs";
import { dirname, join, resolve, posix, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const site = resolve(here, "..");
const explicit = process.env.FIBSEM_OS_DIR;
const source = resolve(explicit || join(site, "..", "fibsem-os"));
const ref = process.env.FIBSEM_OS_REF || "main";
const github = `https://github.com/fibsem-os/fibsem-os/blob/${ref}`;

// slug -> source file (repo-relative) and sidebar title, in reading order
const PAGES = [
  ["index", "docs/developers/README.md", "Developer documentation"],
  ["getting-started", "docs/developers/getting-started.md", "Getting started"],
  ["contributing", "CONTRIBUTING.md", "Contributing"],
  ["extending", "docs/developers/extending.md", "Extending fibsemOS"],
  ["scripting", "SCRIPTING.md", "Scripting experiments"],
  ["simulator", "docs/simulator.md", "The simulator"],
  ["screenshot-harness", "docs/developers/screenshot-harness.md", "The screenshot harness"],
];
const routeOf = new Map(PAGES.map(([slug, src]) => [src, slug === "index" ? "/docs/developers/" : `/docs/developers/${slug}/`]));

const pagesDir = join(site, "src", "app", "docs", "developers");
const imgDir = join(site, "public", "doc", "img", "developers");
const IMAGE = new Set([".png", ".jpg", ".jpeg", ".gif", ".svg", ".webp"]);

if (!existsSync(join(source, "docs", "developers"))) {
  const msg = `sync-developer-docs: no fibsem-os checkout at ${source}`;
  if (explicit) throw new Error(msg);
  console.warn(`${msg}; developer pages not generated (set FIBSEM_OS_DIR).`);
  process.exit(0);
}

rmSync(imgDir, { recursive: true, force: true });
mkdirSync(imgDir, { recursive: true });

/** Rewrite one link target, relative to the page that holds it. */
function rewrite(target, fromFile) {
  if (/^(https?:|mailto:|#)/.test(target)) return target;
  const [path, anchor = ""] = target.split("#");
  const repoPath = posix.normalize(posix.join(posix.dirname(fromFile), path));
  const hash = anchor ? `#${anchor}` : "";
  if (routeOf.has(repoPath)) return routeOf.get(repoPath) + hash;
  if (IMAGE.has(extname(repoPath).toLowerCase())) {
    const name = basename(repoPath);
    copyFileSync(join(source, repoPath), join(imgDir, name));
    return `/doc/img/developers/${name}`;
  }
  return `${github}/${repoPath}${hash}`;
}

/** Escape what MDX would read as JSX, leaving code fences and spans alone.
 *  HTML comments (the generated-table markers in simulator.md) are dropped:
 *  MDX has no HTML comments, only JSX ones. */
function escapeProse(text) {
  return text
    .replace(/<!--.*?-->/g, "")
    .replace(/[{}]/g, (c) => `\\${c}`)
    .replace(/<(?=[A-Za-z/])/g, "&lt;");
}
function escapeMdx(md) {
  const out = [];
  let inFence = false;
  for (const line of md.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; out.push(line); continue; }
    if (inFence) { out.push(line); continue; }
    // keep inline code spans verbatim
    out.push(line.split(/(`[^`\n]*`)/).map((part, i) => (i % 2 ? part : escapeProse(part))).join(""));
  }
  return out.join("\n");
}

let written = 0;
for (const [slug, src, title] of PAGES) {
  const file = join(source, src);
  if (!existsSync(file)) throw new Error(`sync-developer-docs: ${src} missing from ${source}`);
  let md = readFileSync(file, "utf8");
  md = md.replace(/\]\(([^)\s]+)\)/g, (_m, target) => `](${rewrite(target, src)})`);
  md = escapeMdx(md);
  const note =
    `> Generated from [\`${src}\`](${github}/${src}) in fibsem-os at build time. ` +
    `Edit it there; changes here are overwritten.\n\n`;
  // the note goes under the H1 so the page still opens with its title
  const body = md.replace(/^(# .*\n\n?)/, (h1) => `${h1}${note}`);
  const text = `---\ntitle: ${JSON.stringify(title)}\n---\n\n${body}`;
  const dest = slug === "index" ? join(pagesDir, "page.mdx") : join(pagesDir, slug, "page.mdx");
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, text);
  written += 1;
}
console.log(`sync-developer-docs: ${written} pages from ${source} (links at ${ref})`);
