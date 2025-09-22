This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Overview

A full-stack Todo app built with Next.js 15 (App Router), React 19, Prisma, SQLite, Tailwind.
CRUD is implemented with Server Actions; revalidatePath('/') keeps UI and DB in sync.
Server Component for the page; Client Component for each row.

Live Demo: <your Vercel URL>

Tech Stack

Frontend: Next.js 15, React 19, TailwindCSS

Data: Prisma ORM, SQLite (switchable to Postgres)

Runtime: Node ≥ 18.18 (20 LTS recommended)

Features

Add / Toggle / Delete / Rename todos

Type-safe Prisma queries & dev-time connection reuse

# Quick Start

npm i
npx prisma migrate dev --name init
npm run dev        # http://localhost:3000

#Production
npm run build && npm start

.env:
DATABASE_URL="file:./prisma/dev.db"

# Troubleshooting

No effect on Edit/Save → 'use server' at the top of actions.ts, 'use client' at top of TodoRow.tsx, type="submit" on Save.

Unexpected any → remove manual annotations; keep Prisma default output; npx prisma generate.

IDE cannot find npm → load nvm in shell / set Node interpreter.
