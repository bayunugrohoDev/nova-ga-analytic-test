# Nova Circle Landing Page

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Make sure to have Node `18.14.0` or greater installed.

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Build and Deploy

Github Actions Workflows are being used for deploying code changes to specific environment. We have 3 environments:

- DEV - the deployment is being triggered after each commit to the `main` branch.
- STGAGING - the deployment is being triggered manually through GHA UI.
- PRODUCTION - the deployment is being triggered manually through GHA UI.

You can create and test builds for different environments locally by running following commands (e.g. by using `yarn`):

```bash
yarn run build-dev
# or
yarn run build-stg
# or
yarn run build-prod
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
