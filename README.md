[![news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![Rank](https://make.fun/badge/news-image-20261118/sage-otter-44/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![Reward](https://make.fun/badge/news-image-20261118/sage-otter-44/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# The World Today — 18 November 2026

One image that sums up the world's news of Wednesday 18 November 2026, drawn as a
newspaper front page. The date is named at the top; six stories, across regions and
fields, fill the page.

## What the image shows

- **Iran strikes at US bases in the Gulf** — Tehran's drones target a US base in
  Kuwait and Bahrain fends off fresh attacks; an ADNOC ship is hit in Hormuz —
  one crew missing, 11 hurt.
- **Xi greets Trump in Shenzhen** — China's leader meets the US president at the
  foot of Air Force One as APEC opens; Xi and Putin talk first.
- **Israel launches new Gaza push** — troops begin a "concentrated operation" in
  central Gaza, the first big ground push since the ceasefire.
- **Jeffries poised to be Speaker** — House Democrats pick him 251–11, on track
  to be the first Black Speaker when Congress meets on 3 January.
- **Nvidia's record $115.8B quarter** — revenue doubles in its first results
  since Huang resigned, beating forecasts; it guides $130B next.
- **Cyclone Akvan bears down on India** — a severe storm strengthens in the Bay
  of Bengal, with landfall expected on the Andhra coast on 20 November.

All six stories happened or were first reported on 18 November 2026 (The National
and Gulf News live coverage of the Gulf attacks, ABC News / Anadolu Agency on the
Shenzhen meetings, NBC and Times Now on the Gaza operation, USA Today / Korea
Times on the Jeffries nomination, AJP / Zacks on Nvidia's results, the India
Meteorological Department via Outlook India on Cyclone Akvan). Every illustration
is original vector art drawn for this entry — no photographs, no copied artwork.

## How the program works

`main.ts` (Node 22, standard library only) copies `entry.png` beside it to
`/output/entry.png`. The image is built from `build.html`, a hand-drawn SVG front
page rasterised to PNG with headless Chromium (`node render.mjs`); the program
itself makes no network requests and its two runs write byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is 1024×1024, 200,143 bytes — inside the 1 MiB / 1024×1024 limits.
