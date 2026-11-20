# The clip — creative notes and upload checklist

## What I chose, and why

Leaderboard top-1 is "GTA 6 Ending: Jason & Lucia Jump Off a Roof Into a Pool"
(lucky-badger-57); rank-2 is a stolen-supercar beach chase; rank-50 sits at
1,236 views. The winning shape is a short vertical clip (<60s, 9:16) that opens
on one dramatic, almost-impossible GTA 6 moment, then turns to make.fun.

I cut the clip from Rockstar Games' **official GTA 6 Launch Trailer**
(YouTube, 15 Oct 2026 — the newest official footage, launch week), downloaded
with yt-dlp in this session. The moment I picked is the trailer's own
roof-into-pool beat: at ~73–75s Jason & Lucia hold hands and jump off a
rooftop into a glowing blue pool at night, silhouetted mid-air. It is the
same moment the top-1 entry is built on, from the freshest official source.
A second beat — a motorcycle jumping off a rooftop plus a police drift
(~46.5–51.5s) — keeps the middle moving before the pitch.

No text-to-speech tool exists in this environment, so the make.fun pitch is
on-screen text only (the rules allow text, voice, or both).

## How it was cut (all commands run in this session)

Build script: `/tmp/gta6/build_clip.sh` (kept outside the repo).

1. Pool jump, 73.0–76.0s of the trailer, slowed to 0.5× (6s), center-cropped
   to vertical 720×1280, hook text overlaid 0–3.5s:
   "JASON & LUCIA / JUMP OFF A ROOF / INTO A POOL".
2. Supercar + police drift + motorcycle rooftop jump, 46.5–51.5s (5s),
   text "HE JUMPED A BIKE / OFF A ROOF" 1.0–4.5s.
3. Lucia firing with an explosion behind her, 71.8–73.0s (1.2s), bridge beat.
4. Outro, 12s: the pool-jump frame heavily blurred and darkened as a blue
   glow background, pitch in three 4s screens:
   "Make clips like this / with AI" → "and earn money / on make.fun" →
   "make.fun/bounty/ / gta6-clipper-01".
5. Concatenated with ffmpeg (`concat`), libx264 + AAC, faststart.

## The rendered file

- Path: `~/workspace/makefun/builds/gta6-clipper-01/clip.mp4`
  (kept out of git via `.gitignore` — never committed)
- Resolution: 720×1280 (9:16 vertical), 30 fps, H.264 + AAC
- Duration: 24.23 seconds (<60s, so it posts as a Short)
- Size: ~3.9 MB
- Audio: the trailer's original audio (music), kept throughout

## Upload checklist (for the person uploading)

1. Upload `clip.mp4` to YouTube as a **Public** Short, published at/after the
   bounty opening and before the deadline **Mon 23 Nov 2026 08:00 WIB**
   (01:00 UTC). Keep it public until the results are out.
2. Title: `Jason & Lucia Jump Off a Roof Into a Pool in GTA 6`
3. Description (exact line + play code — see README.md for the full block):

   `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`

   Play code: `makefun-oyster-cottage-compost`
4. Put the Short's real URL in `VIDEO.json` (currently the obvious
   placeholder `https://www.youtube.com/shorts/UPLOAD_PENDING`), then commit
   and submit. Do not submit with the placeholder: the gate refuses it.
