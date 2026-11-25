// Entry program for the make.fun bounty
// "Museum of the Year 3000"
// (u-donrulezz-museum-of-the-year-3000-b727a0bb).
//
// The whole entry is one museum label, under 200 characters:
// the label a museum in the year 3000 puts beside an ordinary
// object from today. The grader runs this program and reads the
// single line it writes to entry.txt in the output directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line: same sacred-text misreading, tightened into
// two short label sentences. Dropping "A" and splitting the
// sentence makes it read like a real museum label — straight
// faced and confident — and the punchline "obeyed in none"
// lands on its own, with no explanation around it.
export const ENTRY_LINE =
  "Wall sign, c. 2023. Sacred household text commanding its owners to live, laugh and love. Displayed in every home, obeyed in none.";

// Self-check gate: the sealed scorer only judges UTF-8 text of
// 1 to 200 characters, so refuse to write anything outside that.
if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${ENTRY_LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
