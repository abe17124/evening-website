# Evening — marketing site

Landing page for **Evening**: spin up RunPod + headless ComfyUI video gen from Telegram — prebuilt workflows, auto-stop pods, open-source core. Premium/hosted is a secondary zero-setup path.

Vite + React + TypeScript. No backend.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Preview with an explicit host/port:

```bash
npm run preview -- --host 127.0.0.1 --port 4173
```

Then open http://127.0.0.1:4173

## Content structure

Current sections (updated per competitor value prop document):
1. Hero with painkiller framing + dual CTA + chips
2. Telegram chat mock (full flow: prompt → cost confirm → pod → MP4 → stopped)
3. Honest vs Unsloth comparison
4. The setup tax (headache math)
5. How it works (3 steps)
6. Three paths (OSS BYO RunPod, Premium, Hosted)
7. What we are not
8. FAQ
9. Final dual CTA

## Notes

- Telegram and GitHub CTAs use `#telegram` / `#github` placeholders until real URLs exist.
- Do not invent pricing or bot handles on this site.
- Main story is GPU orchestration from Telegram, not API aggregation.
- Design: light sparse maker aesthetic (paper background, IBM Plex, mono accents only).
