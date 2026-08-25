# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static personal portfolio site for Manish Jha (Unity/game developer). Next.js 15 App Router
+ React 18 + TypeScript, exported as a static site and deployed to GitHub Pages at
`https://psychicDree.github.io/manish-portfolio/`.

This repo is **not** a Nexenova studio project — the studio-wide Unity/UGS/Cloudflare
conventions in the global `CLAUDE.md` do not apply here.

## Commands

```bash
npm install
npm run dev      # dev server on http://localhost:3000 (no basePath applied at runtime paths — see below)
npm run build    # static export -> ./out  (`npm run export` is an alias for the same command)
```

There is no lint script, no test suite, and no test framework installed. `npm start`
exists in package.json but is meaningless with `output: 'export'`. Type checking only
happens as part of `next build`.

## Deployment

`.github/workflows/` builds on every push to `main` (Node 18, `npm ci`, `npm run build`)
and uploads `./out` via `actions/upload-pages-artifact` → `actions/deploy-pages`.
Nothing else triggers a deploy; there is no preview environment.

## Architecture

Two route groups: the scroll page at `/`, and one static case-study page per project at
`/work/<slug>/`.

`src/app/page.tsx` is a `'use client'` component that stacks every
section (`Home`, `About`, `Skills`, `Work`, `Contact`, `Footer`) into one scroll page and
derives `activeSection` from a scroll listener, which it passes to `Sidebar` for the
active-link highlight. Section ids are hardcoded in that listener: `home, about, skills,
work, contact` — adding a section means editing both the JSX and that array.

`src/app/work/[slug]/page.tsx` is a server component with `generateStaticParams` +
`dynamicParams = false`, so `next build` emits one prerendered page per entry in
`portfolioItems`. It has no sidebar — the only nav back is the `Work index` link. The one
interactive part, the click-to-load trailer facade, is split into
`src/components/ProjectTrailer.tsx` (`'use client'`) so the page itself stays static.

`src/app/layout.tsx` holds all metadata (Open Graph/Twitter URLs are absolute and include
the `/manish-portfolio/` path), loads both fonts through `next/font` — Inter as
`--font-body`, JetBrains Mono as `--font-mono`, both self-hosted, no CDN font CSS — and
pulls three icon/CSS libraries from CDNs (Unicons, Boxicons, Swiper). `page.tsx` additionally injects MixItUp and Swiper `<script>` tags imperatively
in a `useEffect`. Icons are plain `<i className="uil uil-...">` strings — many of them
come from the JSON data file, so icon class names are content, not code.

All styling is one stylesheet: `src/styles/globals.css`. There is no CSS-in-JS, no
Tailwind, no module CSS. Component files contain only class names.

The file is in two halves. Lines 1-~1830 are the original template. Everything after the
`Technical theme layer` banner is the current design: Inter for headings and prose,
JetBrains Mono for every label/date/metric/spec row, hairline borders instead of glow,
numbered left-aligned section headings driven by a CSS counter, and status colour used as
data. It is a trailing layer on purpose — the template underneath stays diffable, and the
layer wins on source order rather than on specificity hacks. Restyle by editing the layer,
not the template.

### The basePath duplication — read before touching any asset path

`next.config.js` sets `basePath: '/manish-portfolio'` and `assetPrefix`. Because the site
uses raw `<img>`/`<a href>` (not `next/image`; `images.unoptimized` is true), Next does not
rewrite those URLs, so `src/utils/paths.ts` re-implements the prefix by hand:

```ts
export function getAssetPath(path) // prepends BASE_PATH ('/manish-portfolio') unconditionally
```

It is unconditional on purpose: Next serves `public/` under the basePath in dev too, so the
earlier `NODE_ENV === 'production'` gate 404'd every image and the resume PDF under
`npm run dev`.

The repo name appears in **three** places — `next.config.js` (twice), `src/utils/paths.ts`,
and the absolute URLs in `layout.tsx` metadata. Renaming the repo or moving to a custom
domain requires changing all of them. Any new static asset reference must go through
`getAssetPath()` or it will 404 on GitHub Pages while working fine in dev.

### Content lives in two places

- `src/data/personalInfo.json` — top-level keys `personal, social, messaging, resume,
  skills, references, about`. Consumed by `Home`, `Footer`, `Skills`, `About`. Nothing in
  those components is hardcoded any more: `about.experience[]` and `about.education[]` are
  arrays the timelines map over, and `skills.matrix[]` drives the whole Skills section.
  Each `skills.matrix` entry is `{ id, title, icon, tech[], applied }` — `applied` names
  where the tech was actually used and is not optional; a domain without one is filler.
  `skills.categories` (the old percentage bars) is now unused data.
- `src/data/projects.ts` — `portfolioItems`, the typed project list, plus
  `getProjectBySlug`. Consumed by `Work.tsx`, the `/work/[slug]` route, and `Home` (which
  derives the "shipped titles" count from it rather than hardcoding a number).

Resume/bio copy goes in the JSON; anything about a project goes in `projects.ts`. Nothing
about a project is hardcoded in a component any more.

`PortfolioItem` carries `slug` (the route), `year`, `platform`, `status`
(`Released | Alpha | Open source`, which also drives the Work filter tabs and the status
pill colour), optional `featured`, `image` + `imageFit`, `video`, `gallery`, and an
optional `caseStudy`.

`caseStudy` is the case-study page body: `headline`, `context`, `challenge`,
`contributions[]`, optional `outcomes[]`, and a `stack` key/value list. Provenance for that
copy is the LinkedIn profile at `linkedin.com/in/gamedev-manishjha`, each Nexenova title's
own `CLAUDE.md` under `~/Nexenova/Games/`, and the public store listings — **do not invent
case-study content or metrics**. Items without a `caseStudy` (the GitHub repos) fall back
to rendering `details.description` under an "Overview" heading, and their spec table falls
back to `technologies` + `role`.

**Resolved**: LinkedIn names the 2022-2024 and 2021-2022 roles after the products
(*Warlands NFT*, *Khiladi Adda*); the resume names the employers (*SwordField
Technologies*, *TechBeliever Pvt. Ltd.*). The timeline now shows both — `company` plus
`project` — and dates follow LinkedIn throughout, matching `projects.ts`.

**Still unverified**: `about.education[0].period` is `2016`, the same year the high-school
entry ends. One of the two is wrong; neither LinkedIn nor the resume PDF settles it.

The Work section renders three bands off one filtered list: a `work-featured-row` of
half-width cards for `featured` items, a `work-scroller` holding the rest as a horizontal
strip, and `work-index`, a dense table of every visible project. Cards and table rows both
link to `/work/<slug>`. `.work-container` and its responsive rules are dead CSS — the old
single grid is gone. So is the whole `.portfolio-popup*` block: the popup was replaced by
real pages, and its markup no longer exists in any component.

Filter tabs are generated from `status`, so a tab can never render an empty section — the
old hardcoded `Mobile`/`VR` tabs matched no item and always did.

Media lives under `public/games/` — `gallery/` and `video/` subfolders — and is scraped
third-party material, not first-party assets: in-engine screenshots from the Warlands
GitBook whitepaper (`docs.warlands.io`, served through Firebase Storage with a download
token) and the Steam `appdetails` API for app 2602510, plus promotional art from both
titles' own sites. The card feature graphic for each is a native 16:9 in-game capture.
Last Turn uses its real 1024x500 Play feature graphic (hence `imageFit: 'contain'` —
cropping it to 16:9 would cut the logo); Park Escape and Endless Merge have no published
feature graphic, so their cards are 3-up phone composites built from Play screenshots with
Pillow.

Galleries and trailer posters load only on the case-study page, so the scroll page's
initial weight is unaffected. The trailer is a click-to-load facade: a local poster image,
swapped for a `youtube-nocookie.com` iframe on click, so no request reaches YouTube until
the visitor presses play.

## Types

`types/react-shim.d.ts` declares `react`, `react-dom`, and `react/jsx-runtime` as loose
`any` modules to work around a type-resolution failure. While it is present, React APIs are
effectively untyped and `strict: true` in tsconfig buys much less than it appears to.
Some components also carry a `/// <reference types="react" />` line. If you fix type
resolution properly, delete the shim rather than extending it.

## Known dead weight

`manish-portfolio-website/` is an empty directory. `next.config.js` carries a large webpack
`resolve.fallback` block disabling Node core modules that nothing in the current dependency
tree needs.

In `globals.css`: the `.portfolio-popup*`, `.work-container`, `.services-*`,
`.testimonial-*`, `.swiper-*` and the old `.skills-header` / `.skills-bar` /
`.skills-percentage` blocks all style markup that no component renders.

`page.tsx` still injects MixItUp and Swiper `<script>` tags in a `useEffect`. Nothing uses
either — filtering is React state and there is no carousel.
