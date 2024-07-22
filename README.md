# T3 Gallery

The codebase from Theo's T3 App Router Tutorial on YouTube

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tidy up build process
- [x] Actually set up a database (vercel postgres)
- [x] Attach database to UI
- [x] Add authentication (w/ clerk)
- [x] Add image upload
- [x] Connect users to images
- [x] Add server-only queries
- [ ] Use Next/Image component
- [x] Error management (w/ Sentry)
- [x] Routing/image page (parallel route)
- [x] Update upload button to be less cringe
- [x] ShadUI
- [ ] Analytics (posthog)
- [ ] Delete button (w/ Server Actions)
- [ ] Ratelimiting (upstash)

A challenge

- [ ] Fix the page layout for images of different resolutions
- [ ] "Selecting" images on the gallery page
- [ ] "infinite scroll"
- [ ] Folders/albums

```bash
bun install
```

```bash
bun dev
```

```bash
bun lint
```

```bash
bun run build
```

```bash
bun start
```

```bash
bun run db:generate
```

```bash
bun run db:migrate
```

```bash
bun db:push
```

```bash
bun db:studio
```
