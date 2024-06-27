# T3 Gallery

The codebase from Theo's T3 App Router Tutorial on YouTube

## TODO

- [ ] Make it deploy (vercel)
- [ ] Scaffold basic ui with mock data
- [ ] Tidy up build process
- [ ] Actually set up a database (vercel postgres)
- [ ] Attach database to UI
- [ ] Add authentication (w/ clerk)
- [ ] Add image upload
- [ ] "taint" (server-only)
- [ ] Use Next/Image component
- [ ] Error management (w/ Sentry)
- [ ] Routing/image page (parallel route)
- [ ] Update upload button to be less cringe
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
