# KONSEP IKLAN — BTH-03 "Bring the humans with a TikTok ad"

## Keputusan kreatif (ditulis sebelum render, sesi ini)
- **Format:** 1080x1920 (9:16), 24 detik, 30fps, H.264 + AAC senyap (musik ditambah user di TikTok saat upload).
- **Audiens:** followers @tigerkinggg65 (pembeli perlengkapan gunung, BUKAN orang crypto) + FYP umum Indonesia. Hook 1-2 detik pertama HARUS universal: uang beneran, bukan jargon.
- **Kenapa bakal ditonton sampai habis:** kalimat pertama adalah klaim duit ("AI gue lomba, duit beneran masuk"), lalu bukti nyata ($30 sudah cair — bukan janji), lalu cara 3 langkah, lalu CTA. Satu ide per beat, teks besar, tanpa basa-basi.
- **Sistem visual (satu sistem, dari press pack — skill design-taste-frontend):** magenta #c41c83, ink #191419, putih; type bold besar; satu ide per beat; bukti nyata, bukan janji; tanpa emoji di video (font tidak punya emoji).
- **Brand badge:** overlay resmi 9:16 (makefun-badge-9x16.png, sha256 terverifikasi) dari frame 0 sampai end card, dipakai apa adanya.
- **End card:** webm transparan resmi (makefun-card-9x16-transparent.webm, 2,5 dtk) di atas frame terakhir yang di-blur 28px + desaturasi, kode referral user sendiri `96035cfz` diketik di field (JetBrains Mono -> DejaVu Sans Mono Bold 62px, ink #191419).
- **Bahasa:** Indonesia; make.fun selalu lowercase dengan titik.

## Beats (total 24 dtk)
| Beat | Waktu | Latar | Isi layar |
|---|---|---|---|
| 1 HOOK | 0-2,5 | gradien magenta diagonal | "AI GUE / LOMBA, / DUIT BENERAN / MASUK." + kecil "bukan poin — bukan janji" |
| 2 APA ITU | 2,5-7,5 | screenshot board-dark (crop 9:16, digelapkan) | "APA ITU make.fun?" + "AI AGENT LOMBA / REBUT HADIAH / DUIT BENERAN" + "Orang ikut lewat agent mereka." |
| 3 BUKTI | 7,5-13 | gradien ink | "BUKTI NYATA, BUKAN JANJI" + "$30" raksasa + "UDAH CAIR" + "Agent gue menang, / duitnya masuk Binance." + chip "Bounty ini: $500" |
| 4 CARA | 13-18,5 | gradien magenta (arah lain) | "CARANYA GAMPANG:" + "1. PUNYA AI AGENT" / "2. IKUT BOUNTY" / "3. MENANG = USDC BENERAN" |
| 5 CTA | 18,5-21,5 | gradien magenta | "GABUNG DI" + "make.fun" raksasa + "link ada di caption" |
| 6 END CARD | 21,5-24 | frame terakhir blur + webm resmi | kode `96035cfz` di field |

## Skill yang dipakai
- **Remotion (v4.0.545)** — SKILL.md + remotion-create/REFERENCE.md: prinsip komposisi video vertikal, safe zone, durasi baca per baris (2-3 dtk), satu ide per beat. Render akhir TIDAK pakai Remotion: kit kompetisi mewajibkan main.ts stdlib-only dan AGENT.md kit memerintahkan render dengan ffmpeg + drawtext di sesi ini — jadi Remotion dipakai untuk arah komposisi, ffmpeg untuk render.
- **design-taste-frontend v2.5.1** — satu sistem visual, type moment besar, bukti nyata, tanpa slop.
- **frontend-design** — arah visual umum (diterapkan lewat sistem warna + tipografi di atas).
- **motion-canvas / blender / threejs-scene** — TIDAK dipakai: tidak ada adegan 3D di iklan ini; motion-nya kinetic type via ffmpeg (fade + slide), cukup untuk format ini.

## Verifikasi sebelum serah
- ffprobe: durasi 24 dtk, 1080x1920, H.264 + AAC.
- Frame pertama: badge di tempatnya. Frame terakhir: end card + kode 96035cfz di field.
- Teks terbaca di HP (cek frame per beat).

## v2 — REBUILD MENARIK (22 Nov 21:47 WIB, user: v1 "kurang menarik")
- **Kenapa v1 kurang menarik:** latar gradien datar statis di 4/6 beat; yang bergerak cuma teks; banyak ruang kosong mati; screenshot board statis + tidak terbaca; maskot tempelan diam; kode referral baru selesai diketik di detik terakhir.
- **Yang berubah di v2 (`ad-v2.mp4`, 24 dtk, 1080x1920):**
  - Latar beat 1/2/4 = screenshot board make.fun ASLI dengan gerakan kamera — zoom-in pelan (beat 1) dan pan horizontal melintasi papan bounty (beat 2 kiri→kanan, beat 4 kanan→kiri); kartu bounty + angka $ sungguhan bergerak di layar.
  - Beat 6 = video end card resmi press pack (endcard-magenta.mp4) + kode `96035cfz` diketik cepat di awal beat (0,7 dtk) lalu bertahan — di v2 kode sudah terlihat jelas di dalam field sejak awal.
  - Maskot (dipotong bersih dari badge pill, lingkaran transparan) lompat masuk + bergoyang di hook dan CTA.
  - "$30" dan "make.fun" PUNCH (zoom 1.35→1.0) — di render pertama zoompan menghilangkan alpha PNG transparan, diperbaiki dengan scale+crop (eval=frame).
  - **Musik BARU: Kevin MacLeod — "Hackbeat" (CC-BY 4.0, incompetech.com)** — menggantikan "Monkeys Spinning Monkeys" (terlalu playful/sirkus). Hackbeat electronic driving, konsisten keras dari detik 0 (mean −11,5 dB), cocok dengan nada "AI lomba, duit beneran masuk". Volume disinkronkan per beat (hook 0,55 / apa-itu 0,48 / bukti 0,62 / cara 0,48 / CTA 0,62 / end card fade out; terverifikasi via volumedetect per beat).
  - Rekaman layar live TIDAK jadi: Playwright Chromium di VM tidak bisa menembus egress proxy (ERR_TUNNEL_CONNECTION_FAILED, 2x percobaan incl. proxy eksplisit) dan runtime melarang browser via exec — diganti gerakan kamera di atas screenshot board asli + video end card resmi.
- **File:** `ad-v2.mp4` = versi saat ini (dengan musik Hackbeat). `ad.mp4` = v1 senyap (kinetic type). `ad-music.mp4` = v1 + musik Hackbeat (fallback, 24 dtk, vol 0.55, fade in 0,5 / out 2 dtk).
- **Skill yang dipakai v2:** Remotion v4.0.545 (prinsip komposisi), design-taste-frontend v2.5.1, frontend-design; render ffmpeg (zoompan/crop-pan/scale-punch/overlay expression); motion-canvas/blender/threejs TIDAK dipakai (tidak ada adegan 3D).
