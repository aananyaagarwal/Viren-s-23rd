# Viren’s 23rd — a little birthday world ♡

A personalized password-protected Next.js birthday website using Viren’s childhood portrait, a ten-word interconnected crossword, the complete four original stories, and the supplied recordings.

## Start locally

1. Install Node.js 20 or later.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and edit both values. Use a strong unique `SESSION_SECRET` (32+ random characters) and choose a private birthday password.
4. Run `npm run dev` and visit `http://localhost:3000`.

## Deploy to Vercel

Upload this project to GitHub, import the repository in Vercel, and set the two environment variables from `.env.example`. Deploy from there. **Do not commit `.env.local`.** The `private/` folder is server-only: it is not the public asset directory. Because these personal source assets are included in the deployment bundle, ensure the GitHub repository remains PRIVATE and restrict collaborators.

## Included media

- `private/viren-childhood.png`: crop from the supplied passport photo (only the portrait, no document identity fields).
- `private/letter.m4a`: audio extracted from the supplied MP4; its original video is also available for the finale. Confirm whether this is the intended *first letter*, since its content has not been assigned by the filename.
- `private/story-1.m4a` through `story-4.m4a`: supplied story introductions, placed before their corresponding story text.
- `private/outro.m4a`: supplied outro, placed after the four stories.
- `private/bonus-video.mp4`: supplied video, placed in the finale.

**Important:** The final version currently uses the same uploaded video's sound for the initial letter and its video for the finale, because no distinct third non-story recording was included. You can replace `letter.m4a` with your intended initial audio when available.

## Customize

- Edit `content/stories.json` to change the stories. They are transcribed verbatim from the supplied DOCX.
- Edit `lib/puzzle.ts` for crossword geometry/clues and `lib/answers.ts` for the private server-only solution.
- Replace `private/viren-childhood.png` with a professional transparent face/body cutout to improve the opening collage.
- Replace files in `private/` while keeping filenames unchanged.
- Change colors, paper decorations, animations and fonts in `app/globals.css`.

## Security & limitations

The password is checked on the server with a constant-time comparison and short-term per-process attempt limiting. Session cookies are signed (HMAC), HttpOnly, same-site and secure under HTTPS. The story chapters are rendered only for authenticated sessions that completed the crossword; audio and photographs are served through authenticated API routes. The crossword's solutions are server-only. This is a personal gift website, **not a fully security-audited identity system**. For stronger abuse protection on Vercel, replace the in-memory rate limiter with a shared durable service (e.g. Upstash Redis). All visitors with the password will have their own browser session, and puzzle entry persistence uses the local browser.

`outro.m4a` is placed immediately after the stories; the additional MP4 is displayed on the last page with a video player. Check the assigned media before you share.
