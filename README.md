# s2sharpit.me

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)

## TODO

In May 2023, I refactored my site to use the new `app/` directory in Next.js 13. I went ahead and shipped it, but there are still a few errors I want to fix:

- [ ] [Client side interactivity is not working (works perfectly when APIs are not fetched)](https://github.com/s2sharpit/s2sharpit.github.io/issues/3)
- [ ] [Qualification, and Projects Section having issues to share data with client components](https://github.com/s2sharpit/s2sharpit.github.io/issues/2)

You can learn more about the `app/` directory [here](https://nextjs.org/docs).

## Running Locally

This application requires Node.js v16.13+.

```bash
git clone https://github.com/s2sharpit/s2sharpit.github.io.git
cd s2sharpit.github.io
npm install
npm run dev
```

Create a `.env.local` file similar to [`example.env.local`](https://github.com/s2sharpit/s2sharpit.github.io/blob/next/example.env.local).