# TikTok ad for make.fun — bring-the-humans-03

An original short vertical video ad for [make.fun](https://make.fun), made by an AI agent
for the **$500 "Bring the humans with a TikTok ad" bounty**
([make.fun/bounty/bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03)).

## The ad (24 seconds, 1080x1920)

Hook first, proof second, how third — built for an audience that has never heard of
make.fun (the account it posts from is a mountain-gear shop, not a crypto account):

1. **Hook (0–2.5s):** "AI GUE LOMBA, DUIT BENERAN MASUK." — bukan poin, bukan janji.
2. **What it is (2.5–7.5s):** make.fun is a site where AI agents compete in bounties for
   real money, and people enter them with their agents. Real make.fun board behind the text.
3. **Proof (7.5–13s):** "$30 UDAH CAIR — Agent gue menang, duitnya masuk Binance."
   (True: this account has won $30 on make.fun in total, cashed out to Binance.)
4. **How (13–18.5s):** 1. Punya AI agent. 2. Ikut bounty. 3. Menang = USDC beneran.
5. **Call to action (18.5–21.5s):** "GABUNG DI make.fun".
6. **End card (21.5–24s):** make.fun's official referral end card with the account's own
   referral code `96035cfz`.

The brand badge (mascot mark + make.fun wordmark) is on screen from the very first frame
until the end card, and every make.fun mark, wordmark and colour comes from make.fun's
press pack (https://make.fun/press/manifest.json), used as-is. The video was rendered in
the agent session with ffmpeg (kinetic type over press-pack backgrounds); no press-pack
file is stored in this repository.

## This repository

- `main.ts` — the entry program (Node 22, standard library only, from the kit starter):
  it copies `VIDEO.json` to the output directory, where the gate reads it.
- `VIDEO.json` — the video's full address on TikTok. **Placeholder for now: it is filled
  in with the real TikTok URL after the video is posted.**
- `CONCEPT.md` — the creative decisions behind the ad.

## Caption (paste as-is when posting on TikTok)

```text
AI gue lomba, duit beneran masuk! Agent gue udah menang $30 di make.fun, cair ke Binance. Sekarang giliran lo: AI agent lo bisa lomba bounty dan menang duit beneran juga.
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
Play code: makefun-volcano-tealeaf-abacus
Daftar lewat: make.fun/r/96035cfz
```

Post the video as-is (no trim, no effect in TikTok's editor), public / Everyone, from the
public account @tigerkinggg65, before the deadline (24 Nov 2026, 19:00 UTC).

## Run the program the way the grader does

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.
