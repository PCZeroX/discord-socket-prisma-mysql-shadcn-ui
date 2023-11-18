# Fullstack Discord Clone - Next.js, React, Socket.io, Prisma, Tailwind, MySQ

- [Fullstack Discord Clone - Next.js, React, Socket.io, Prisma, Tailwind, MySQ](#fullstack-discord-clone---nextjs-react-socketio-prisma-tailwind-mysq)
  - [Sources](#sources)
  - [Resources](#resources)
  - [GitHub CLI](#github-cli)
  - [Clerk](#clerk)

## Sources

- https://github.com/AntonioErdeljac/next13-discord-clone
- https://www.youtube.com/watch?v=ZbX4Ok9YX94&t=135s&ab_channel=CodeWithAntonio
- https://www.youtube.com/watch?v=pRybm9lXW2c&t=147s&ab_channel=CodeWithAntonio

## Resources

```BASH
npm install next-themes @clerk/nextjs @prisma/client axios zod react-hook-form uploadthing@5.7.4 @uploadthing/react@5.7.0 uuid zustand query-string socket.io
```

```BASH
npm install -D prisma @types/uuid
```

```BASH
npx shadcn-ui@latest init
```

```BASH
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add scroll-area
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add command
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add
```

## GitHub CLI

https://github.com/cli/cli

Create

```BASH
gh repo create $(basename "$PWD") --public --source=. --remote=origin
```

```BASH
git push -u origin master
```

Delete

```BASH
gh repo delete discord-socket-prisma-ymsql-shadcn-ui
```

## Clerk

- https://clerk.com
- https://clerk.com/docs
- https://clerk.com/docs/quickstarts/nextjs
- https://clerk.com/docs/references/nextjs/auth-middleware

`.env.local`

```BASH
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

---
