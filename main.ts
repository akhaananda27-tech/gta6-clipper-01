// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a public YouTube Short cut from Rockstar's
// official GTA 6 Launch Trailer, carrying make.fun's pitch on screen. This
// program only copies VIDEO.json from the repository root to /output, where
// the house reads it and then reads the video's views through the YouTube
// Data API. Nothing written here about the video is scored.
//
// VIDEO.json currently holds a placeholder: the clip has been cut and
// rendered (see CLIP.md) but not yet uploaded to YouTube. Replace the URL
// with the real Short's address (https://www.youtube.com/shorts/<id>)
// before submitting.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
