# Saji Society landing page

Clone the structure and feel of [Front Room Bali](https://www.frontroombali.com/) for [SAJI_SOCIETY](https://www.instagram.com/saji_society/). Copy the layout, not their words, photos, or brand.

Front Room’s only video is the full-screen hero (`/video/front-room-hero.mp4`). That slot becomes a still image. Every image on this site comes from `@saji_society` and is saved in this repo. Instagram CDN links expire, so the site must not hotlink them.

When Instagram and another source disagree, use Instagram. Maps fills in only what the profile does not say (area, pin, days of the week).

## Open questions

Answer these before copy and menu work. Image download can start from the public grid without them.

1. **Official name.** Instagram’s profile title is `SAJI_SOCIETY`, so that is the name to print. Maps calls the pin **SAJI Coffee & Space**. Say if the header should use the Maps name instead.
2. **Headline and story.** Front Room uses a two-line hero (“Come for coffee. / Stay for the feeling.”) plus a short origin story. Public copy we have is only the bio and Linktree line: “Coffee lovers, get ready”, “Your next hangout spot in Bali”, and “Where good coffee meets great moments. Thoughtfully brewed, warmly served.” Do we write new lines in that voice, or will you supply the headline, eyebrow, and story?
3. **Language.** Front Room is English. Should this page be English, Indonesian, or both?
4. **Menu.** There is an Instagram highlight named “Our Menu”, and Front Room has a separate `/menu` page (food, coffee, matcha, juices, kids) plus four priced cards on the homepage. We cannot read highlight stories or prices without access. Can you share the menu (photos, PDF, or a list with names, descriptions, and prices)? Until then the homepage shows four image cards with no invented prices, and `/menu` stays a placeholder.
5. **Which numbered image goes where.** Files are `img-00.jpg`, `img-01.jpg`, and so on. After you review them, say which number is the hero, which are the four cards, and which fill gallery, team, hospitality, and visit. Until then the page uses a random assignment. Reposts from other accounts are not downloaded.
6. **WhatsApp and email.** Hours follow the Instagram bio: **10.00 AM–01.00 AM**. Maps says 08.00–01.00; do not print that. WhatsApp number and email are still missing. The Maps listing has no phone and no website.
7. **GitHub Pages URL.** Default is a project site at `https://<user>.github.io/saji-society/`. What is the GitHub username or org, and is the repo name `saji-society`? A user site (`<user>.github.io`) or a custom domain would use `base: '/'` instead.

## What we already know

- Instagram: [instagram.com/saji_society](https://www.instagram.com/saji_society/) — coffee hangout in Bali.
- Place name to print: **SAJI_SOCIETY** (Instagram). Maps label, not used unless you say so: SAJI Coffee & Space.
- Hours to print: **10.00 AM–01.00 AM**, from the Instagram bio. Maps says 08.00–01.00 every day; keep “every day” from Maps, because the bio does not name the days.
- Address: Jalan Tukad Barito No. 16 (Instagram). Maps adds the area the bio leaves out: Panjer, Denpasar Selatan, Kota Denpasar, Bali 80225.
- Maps: [SAJI Coffee & Space](https://www.google.com/maps/place/SAJI+Coffee+%26+Space/@-8.6846071,115.2283471,17z) (from [this share link](https://share.google/KNTSHVxtsWbWjWZPo)). Coordinates `-8.6846071, 115.2283471`. Plus code `868H+58` Dauh Puri Klod.
- Maps also lists a price range and a few dishes. Do not put those on the menu. Menu copy waits on Instagram.
- Bio: “Coffee lovers, get ready ☕ / Your next hangout spot in Bali / Opening : 10.00 AM - 01.00 AM / Jalan Tukad Barito No. 16”.
- Linktree: [linktr.ee/saji_society](https://linktr.ee/saji_society) — WhatsApp, Instagram, Location. Tagline: “Where good coffee meets great moments.”
- Threads: `@saji_society`.
- Highlight: “Our Menu”.
- Reference page background is warm paper (`#faf8f1`) with near-black text, a serif wordmark, pill buttons, and a sticky header.

## Reference layout to rebuild

Single scrolling homepage, same section order as Front Room. Desktop nav: Story, Menu, Gallery, Visit. Mobile: wordmark and a “View menu” pill.

1. **Header** — wordmark, anchor links, “View menu” button.
2. **Hero** (`#top`) — full-viewport still (not video), location eyebrow “Panjer · Denpasar”, two-line headline, one-sentence subcopy, “Explore the menu” and “Find us”. Hours chip: “Open daily 10 AM–1 AM”.
3. **Story** (`#story`) — small kicker (“Coffee · …”), two-line heading, two short paragraphs.
4. **Coffee feature** — label, heading, short paragraph, photo, link to the drinks part of the menu.
5. **Kitchen** (`#menu`) — heading, “Full menu” link, four cards (photo, name, one-line description, price when we have it).
6. **Team banner** — wide photo, overlay kicker and heading.
7. **Gallery** (`#gallery`) — heading and four photos (interior, outdoor, drink, detail).
8. **Hospitality** — photo, short paragraph, “Follow @saji_society”.
9. **Visit** (`#visit`) — photo, hours, street address, Google Maps and Instagram.
10. **Footer** — short tagline, Menu, WhatsApp or email, Instagram, Maps, copyright.

Also build `/menu` in the same visual system once menu content exists. Front Room’s menu is one long page grouped as brunch plates, coffee, other drinks, and smaller plates, with a tax note. Match that only with real Saji items.

Hero motion on the reference is a muted autoplay video. Use one downloaded still, full-bleed, with the same type stacked on top. No `<video>`.

## Images

Save files under `public/images/`. Prefer the largest JPG Instagram will serve for each post (cover frame for Reels). Do not label files by what they show. Number them in grid order:

- `img-01.jpg`, `img-02.jpg`, `img-03.jpg`, …
- Profile picture: `img-00.jpg`
- `public/images/manifest.json` lists number, filename, post URL, and date only. No subject, alt guess, or slot.

Skip reposts from other accounts. Keep text-heavy covers; do not drop a file because it looks like a meme.

For this first build, assign downloaded files to hero, cards, gallery, and the other photo slots at random. You will say later which number belongs in which slot. Until then, do not try to match a photo to a section.

## Stack

[Astro](https://astro.build/). Static output, no client framework. Pages live in `src/pages/` (`index.astro` and `menu.astro`). Shared chrome in `src/layouts/` and `src/components/`. Global styles in `src/styles/`. Downloaded photos stay in `public/images/` and are referenced as `/images/...`.

## GitHub Pages

The built site is committed so Pages can serve it later with no build step on GitHub. Publish from the `main` branch, folder `/docs`.

- Set `outDir: 'docs'` in `astro.config`. Do not gitignore `docs/`.
- Put an empty `public/.nojekyll` so Astro’s `_astro` assets are not dropped by Jekyll.
- Assume a project site: `base: '/saji-society/'` and `site: 'https://<github-user>.github.io'`. Links, images, and `/menu` must use that base (Astro’s `import.meta.env.BASE_URL`).
- After the page looks right locally, run `npm run build` and commit `docs/` with the source. Rebuild and commit `docs/` again whenever the page changes.

## Build tasks

- [x] Confirm open questions 1–7, or proceed with the defaults below where they are marked.
- [x] Download the image set from `@saji_society` into `public/images/` and write `manifest.json`.
- [x] Scaffold an Astro project (`npm create astro@latest`) with `src/pages/index.astro`, `src/pages/menu.astro`, a base layout, and `src/styles/global.css`.
- [x] Configure `astro.config` for GitHub Pages: `outDir: 'docs'`, `base: '/saji-society/'`, `site` set once the GitHub user is known. Add `public/.nojekyll`. Keep `docs/` out of `.gitignore`.
- [x] Recreate header, hero, story, coffee, four menu cards, team banner, gallery, hospitality, visit, and footer as Astro components.
- [x] Point every photo at a local file. Hero is an `<img>`, not a video.
- [x] Wire anchors (`#story`, `#menu`, `#gallery`, `#visit`), “View menu” / “Explore the menu” to `/menu`, Instagram to `https://www.instagram.com/saji_society/`, and Maps / WhatsApp once those URLs are known.
- [x] Menu page: real items if provided; otherwise a short “menu coming from the highlight” state that still links to Instagram and WhatsApp.
- [x] Mobile and desktop: header collapse, hero type size, card stack, gallery stack. Check both widths in the browser (`npm run dev`).
- [x] Page title, meta description, and alt text written for Saji, not Front Room.
- [x] Run `npm run build` and commit `docs/` along with the source so GitHub Pages can publish the `/docs` folder on `main`.

## Defaults if you want build to start before every answer

- Name in the UI: **SAJI_SOCIETY**. Handle stays `@saji_society`.
- English page.
- Hero headline drafted from the bio and Linktree, easy to replace: “Come for coffee.” / “Stay for the moment.” Subcopy: “Thoughtfully brewed, warmly served. Your next hangout spot in Bali.”
- Address: Jalan Tukad Barito No. 16, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80225. Maps link as above.
- Hours: open daily, 10.00 AM–01.00 AM (Instagram for the clock, Maps for “daily”).
- No prices until you send them.
- Stills from `@saji_society` posts only, not reposts.
- Astro static site. Built files committed in `docs/` for GitHub Pages (project site, base `/saji-society/`).
