# Anant Pandey — Portfolio

A responsive React portfolio for showcasing software engineering projects, skills, and experience.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Deploy to GitHub Pages

This project is intended for the
[`anantpandey877/Portfolio`](https://github.com/anantpandey877/Portfolio)
repository. Keep the project files, including `.github/workflows`, at that
repository's root. The workflow builds and deploys it to:

https://anantpandey877.github.io/Portfolio/

After pushing the project:

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to the `main` branch, or run **Actions → Deploy Anant Portfolio → Run workflow**.
4. Wait for the workflow to finish, then open the URL above.

The workflow uses the repository's default `GITHUB_TOKEN`; no extra deployment
secret is required.
