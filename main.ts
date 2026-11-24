import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A real-life bug in human behaviour, stated in the terse register of a release note.
const ENTRY =
  "v5.0.2: fixed a bug where nodding in a meeting set understood=true while comprehension stayed null.";

if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim() !== ENTRY) {
  throw new Error("entry must be 1-160 characters with no surrounding whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${join(outDir, "entry.txt")}`);
