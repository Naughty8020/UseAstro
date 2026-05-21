# Yusuke Tamura | Portfolio

Welcome to the repository for my personal portfolio website, built with [Astro](https://astro.build). 

🔗 **Live Site:** [Your Vercel/Cloudflare URL here]
🐙 **Repository:** [Naughty8020/UseAstro](https://github.com/Naughty8020/UseAstro)

## 🚀 Overview

This portfolio showcases my projects, skills, and background as a software engineer. It is designed with a focus on a minimalist aesthetic and high performance, leveraging Astro's powerful static site generation.

## 🛠 Tech Stack

* **Framework:** [Astro](https://astro.build/)
* **Package Manager:** [Bun](https://bun.sh/)
* **Styling:** *(e.g., Tailwind CSS - add if used)*
* **UI Components:** *(e.g., React - add if used)*
* **Deployment:** *(e.g., Vercel / Cloudflare - add if used)*

## 💻 Local Development

To run this project locally, clone the repository and run the following commands from the root directory in your terminal:

| Command | Action |
| :--- | :--- |
| `bun install` | Installs dependencies |
| `bun dev` | Starts local dev server at `localhost:4321` |
| `bun build` | Builds the production site to `./dist/` |
| `bun preview` | Previews your build locally before deploying |
| `bun astro ...` | Runs CLI commands like `astro add`, `astro check` |

## 📁 Project Structure

The project relies on Astro's standard routing and file structure:

```text
/
├── public/       # Static assets (fonts, favicons, etc.)
├── src/
│   ├── assets/   # Processed image assets
│   ├── components/ # Reusable UI components
│   ├── layouts/  # Page layouts and wrappers
│   └── pages/    # File-based routing (e.g., index.astro)
└── package.json
