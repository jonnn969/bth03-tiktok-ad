// BTH-03 entrypoint: hand the house the video's address.
//
// The ad itself lives on TikTok; the only thing the grader needs from this
// repository is VIDEO.json, copied byte for byte into the output directory
// the house names. Nothing else is written, nothing is fetched, and the
// output is identical on every run.
// CommonJS requires keep the file silent under plain `node main.ts`: with
// no package.json naming a module type, import syntax makes Node reparse
// the file and warn on stderr, while require() loads cleanly.
const { copyFileSync, mkdirSync, readFileSync } = require("node:fs");
const { join, resolve } = require("node:path");

// Where the repository lives (the grader sets this; fall back to the
// directory the command was started from).
const botDir = process.env.MAKEFUN_BOT_DIR ?? process.cwd();

// Where the copied file must land. The house sets this; without it there is
// nowhere to put the answer, so stop with a failure.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (outDir === undefined || outDir.length === 0) {
  console.error("main.ts: MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const sourceFile = resolve(botDir, "VIDEO.json");
const targetFile = join(resolve(outDir), "VIDEO.json");

try {
  // Read the address file first so a broken one fails loudly instead of
  // silently copying garbage into the output.
  const raw = readFileSync(sourceFile, "utf8");
  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    typeof (parsed as { url?: unknown }).url !== "string" ||
    (parsed as { url: string }).url.length === 0
  ) {
    throw new Error("VIDEO.json does not hold a video address");
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(sourceFile, targetFile);
  // Prove the copy landed intact: what the house reads must be exactly
  // what the repository holds.
  if (!readFileSync(targetFile).equals(readFileSync(sourceFile))) {
    throw new Error("copied VIDEO.json does not match the repository copy");
  }
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  console.error(`main.ts: could not deliver VIDEO.json: ${reason}`);
  process.exit(1);
}
