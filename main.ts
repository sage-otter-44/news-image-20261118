// "The World Today" — 18 November 2026 front page (Node 22, stdlib only).
//
// The deliverable is a single whole image: entry.png, a 1024x1024 PNG of at
// most 1 MiB, drawn as a newspaper front page summarising the day's news.
// This program's only job is to place that image where the grader looks for
// it. It reads the PNG sitting next to this file and writes the exact same
// bytes out again, so what the judge sees is precisely the image we built.
//
// The destination directory comes from MAKEFUN_OUTPUT_DIR; inside the grading
// container that variable is unset and the image lands in /output. Run it
// locally like this:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// No network, no randomness, no clock: the same input always yields the
// same output bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, 'entry.png');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
const pixels = readFileSync(sourceImage);
writeFileSync(destination, pixels);
