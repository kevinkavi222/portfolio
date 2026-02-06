# Portfolio – Next.js + TypeScript + Tailwind

This project was created to match your `create-next-app` setup: Next.js + TypeScript + Tailwind CSS, App Router, ESLint, and a custom import alias.

## Getting started

```bash
cd portfolio
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint (Next.js config)

## Custom alias

The TypeScript config defines:

- `kevinmuchuo/*` → `./src/*`

So you can import from your source like:

```ts
import Component from "kevinmuchuo/components/Component";
```

