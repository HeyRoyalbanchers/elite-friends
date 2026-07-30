<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/d73d47c5-0eab-44c0-b4c2-82f8702a2149

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Firebase

This app is configured for Firebase project `elitefriendss-43e85`.

- Client config lives in `src/firebase.ts` and can be overridden with `VITE_FIREBASE_*` env variables.
- Hosting config lives in `firebase.json` and serves the built `dist` folder.
- Realtime Database rules currently deny public read/write by default.
- Storage rules allow access only to authenticated users.

Deploy static hosting:

```bash
npm run deploy:firebase
```

Deploy database and storage rules:

```bash
npm run deploy:firebase:rules
```
