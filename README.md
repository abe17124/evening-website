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

## Notes

- Telegram and GitHub CTAs use `#telegram` / `#github` placeholders until real URLs exist.
- Do not invent pricing or bot handles on this site.
- Main story is GPU orchestration from Telegram, not API aggregation.
