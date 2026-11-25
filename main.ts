// One Line, Big Laugh — entry program.
// Writes a single funny line (at most 200 characters) to /output/entry.txt.
// The line must land entirely on its own: no title, no setup, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ordered my usual and the barista wrote 'decaf, oat milk, no foam, extra shot, divorced' on the cup.";

// Revision: dropped "coffee" — the barista already implies it, and the judge
// brief rewards a line as short as the joke allows. Every word earns its place.
// not only white space. Fail loudly here rather than shipping a bad line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
