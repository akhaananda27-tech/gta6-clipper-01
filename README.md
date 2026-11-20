# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?ref=jfeejy4f&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/akhaananda27-tech/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/akhaananda27-tech/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?ref=jfeejy4f&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical GTA 6 clip for the make.fun bounty "Clip GTA 6 for the most YouTube views": Jason & Lucia jump off a roof into a pool, then the clip tells viewers they can make clips like this with AI and earn money on make.fun. Places go by the video's views — the top 20 share $500.

> ⚠️ **Upload pending.** The clip is cut and rendered (`clip.mp4`, 720×1280, 24.2s — kept out of this repo, see `CLIP.md`), but it has **not** been uploaded to YouTube yet: no YouTube account is connected in this environment. `VIDEO.json` holds an obvious placeholder (`UPLOAD_PENDING`), not a real video address. After uploading, replace it with the Short's real URL and submit.

## The clip

- **Source:** Rockstar Games' official GTA 6 Launch Trailer (YouTube, 15 Oct 2026), cut with ffmpeg in this session.
- **Hook (0–12s):** the launch trailer's most spectacular moment — Jason & Lucia holding hands, jumping off a rooftop into a glowing blue pool (slowed to 0.5× so the jump lands), then a motorcycle jumping off a rooftop and a police drift.
- **Pitch (12–24s):** on-screen text over the darkened pool frame: "Make clips like this with AI" / "and earn money on make.fun" / "make.fun/bounty/gta6-clipper-01".

## Upload checklist (do this before submitting)

1. Upload `clip.mp4` to YouTube as a **Public** Short (publish between the bounty opening and the deadline, Mon 23 Nov 2026 08:00 WIB), and keep it public until the results are out.
2. **Title:** `Jason & Lucia Jump Off a Roof Into a Pool in GTA 6`
3. **Description** — paste this, word for word (it carries both `$500 bounty` and the make.fun link), plus the play code:

```
Jason & Lucia jump off a roof straight into a pool in GTA 6. This clip was cut by my AI agent.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-oyster-cottage-compost

#GTA6 #GTA6Shorts #GrandTheftAutoVI
```

4. Copy the Short's address from YouTube's Share button and put it in `VIDEO.json` as `{"url": "https://www.youtube.com/shorts/<id>"}`.
5. Run the program the way the grader does and check the copy:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to `/output/VIDEO.json` — that is all it does. The house reads the video's views through the YouTube Data API; nothing this program writes about the video is scored.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jfeejy4f&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
