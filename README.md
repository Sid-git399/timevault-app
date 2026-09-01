# TimeVault

A curated pre-owned watch marketplace. Unlike a generic e-commerce checkout, buying
here is inquiry-based — the way real pre-owned watch platforms actually work: a buyer
expresses interest with a message, rather than an instant "add to cart" purchase.

## Architecture overview

Next.js 14 App Router, Server Components for reads, API routes for writes:

- **Reads** (browsing, filtering, watch detail, favorites list, inquiry history) are
  Server Components querying Prisma directly.
- **Writes** (`/api/register`, `/api/favorites`, `/api/inquiries`) are API routes,
  each validating input with Zod and re-checking authorization server-side.
- **Auth**: NextAuth Credentials provider, JWT sessions, bcrypt-hashed passwords.
  `src/middleware.ts` blocks `/favorites` and `/inquiries` for unauthenticated
  requests server-side.
- **Ownership**: every favorite/inquiry read or write is filtered by
  `session.user.id` — not by an id supplied from the client — so one user can never
  see or modify another user's data. The `Favorite` model has a unique
  `(userId, watchId)` constraint, enforced at the database level, not just in
  application code.

```
timevault/
├── prisma/
│   ├── schema.prisma       # User, Watch, Favorite, Inquiry
│   └── seed.ts             # Demo watch catalog
├── src/
│   ├── middleware.ts
│   ├── lib/                # prisma, auth, password, validations, format
│   ├── components/         # Header, Footer, WatchCard, FavoriteButton, InquiryForm
│   └── app/
│       ├── page.tsx                 # Home
│       ├── watches/page.tsx         # Collection, with brand/condition/price filters
│       ├── watches/[slug]/page.tsx  # Watch detail + spec sheet
│       ├── favorites/page.tsx       # Protected
│       ├── inquiries/page.tsx       # Protected
│       ├── login/, register/
│       └── api/
│           ├── auth/[...nextauth]/route.ts
│           ├── register/route.ts
│           ├── favorites/route.ts
│           └── inquiries/route.ts
└── docs/
    └── COMMIT_PLAN.md
```

## Prerequisites

- Node.js 18.18 or later
- npm

## Installation

```bash
npm install
cp .env.example .env
openssl rand -base64 32   # put the output in NEXTAUTH_SECRET
npx prisma migrate dev --name init
npx prisma db seed
```

## Development

```bash
npm run dev
```

Visit http://localhost:3000. Register an account to save favorites or send an
inquiry on a watch.

## Build

```bash
npm run build
npm run start
```

## Moving to production

- **Database**: switch `provider = "sqlite"` to `provider = "postgresql"` in
  `prisma/schema.prisma`, point `DATABASE_URL` at a real Postgres instance, and
  re-run migrations.
- **Images**: product photography uses `picsum.photos` placeholders keyed by
  `imageSeed` — swap for real photos.
- **Inquiries**: currently just stored in the database for the buyer to see their
  own status. A real deployment would need a notification path (email/Slack) to
  alert a human seller when a new inquiry comes in.
- **Admin**: the `Role` enum on `User` is defined but unused — a natural next step
  is an admin view for managing watch listings and responding to inquiries..

