# Chat to AI

This repo shows how to implement a simple chat bot using Next.js, API Routes, and [OpenAI ChatGPT API](https://beta.openai.com/docs/api-reference/completions/create).

### Components

- Next.js
- TailwindCSS
- OpenAI API (ChatGPT) - streaming
- API Routes (Edge runtime) - streaming

### Download or clone repo

#### Set up environment variables

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `OPENAI_API_KEY` with your [OpenAI](https://beta.openai.com/account/api-keys) secret key.

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

The app should be up and running at http://localhost:3000.
