# Clyde's Archive

My personal portfolio website, built with plain HTML, CSS, and JavaScript and hosted for free on GitHub Pages.

This README is a step-by-step guide for beginners. Follow the chapters in order the first time. Later, jump to the chapter you need.

## Contents

1. [What's in this project](#chapter-1-whats-in-this-project)
2. [Preview the site on your computer](#chapter-2-preview-the-site-on-your-computer)
3. [Create your GitHub repository](#chapter-3-create-your-github-repository)
4. [Upload the files](#chapter-4-upload-the-files)
5. [Turn on GitHub Pages](#chapter-5-turn-on-github-pages)
6. [Update the site later](#chapter-6-update-the-site-later)
7. [Customize the site](#chapter-7-customize-the-site)
8. [Use a custom domain](#chapter-8-use-a-custom-domain)
9. [Troubleshooting](#chapter-9-troubleshooting)

---

## Chapter 1: What's in this project

| File | What it does |
|---|---|
| `index.html` | All the content: text, links, sections, photos |
| `style.css` | How it looks: colors, fonts, spacing, animations |
| `script.js` | Small behaviors: menu, scroll reveal, footer year |
| `README.md` | This guide (visitors don't see it on the site) |

Keep the three site files in the **same folder**. Don't rename them, or the page will lose its styling.

---

## Chapter 2: Preview the site on your computer

Before publishing, check that everything looks right.

1. Put all the files in one folder.
2. Double-click `index.html`. It opens in your browser.
3. Click through the menu and resize the window to see the phone layout.

You don't need to install anything. After every change, refresh the page to see it.

---

## Chapter 3: Create your GitHub repository

A **repository** (repo) is a folder on GitHub that holds your website files.

1. Go to [github.com](https://github.com) and sign up, or log in.
2. Click the **+** at the top right, then **New repository**.
3. Fill in:
   - **Repository name:** `clydesarchive`
   - **Visibility:** Public (GitHub Pages is free for public repos)
   - Leave the other boxes unticked.
4. Click **Create repository**.

> **Tip: a cleaner link.** If you name the repo exactly `<your-username>.github.io`, your site loads at `https://<your-username>.github.io`. Any other name gives `https://<your-username>.github.io/<repo-name>/`. Both work.

---

## Chapter 4: Upload the files

1. On your new repo page, click **uploading an existing file**. (Later it's under **Add file → Upload files**.)
2. Drag in `index.html`, `style.css`, `script.js`, and `README.md`.
3. Scroll down and click **Commit changes**.

> GitHub does **not** unzip uploads. Drag in the files themselves, not a `.zip`.

A **commit** is just a saved version of your files, with a short note about what changed.

---

## Chapter 5: Turn on GitHub Pages

1. In your repo, click **Settings** (top row of tabs).
2. In the left sidebar, click **Pages**. (Don't use "Branches". It's for something else.)
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
5. Wait 1 to 2 minutes, then refresh the Pages screen. A box appears: **"Your site is live at …"**
6. Click **Visit site**.

Your portfolio is now online. Put the link on your LinkedIn, résumé, and social profiles.

---

## Chapter 6: Update the site later

### Edit one file
1. Open your repo and click the file, for example `index.html`.
2. Click the **pencil icon** (Edit this file).
3. Make your change.
4. Click **Commit changes**, then **Commit changes** again.
5. Wait 1 to 2 minutes, then hard refresh your site (**Ctrl + Shift + R**, or **Cmd + Shift + R** on Mac).

### Replace a whole file or add photos
1. Click **Add file → Upload files**.
2. Drag in the files. A file with the same name replaces the old one.
3. Click **Commit changes**.

### Keep photos in a folder
Create an `assets` folder by typing `assets/` before a filename when you upload, or by dragging in a folder. Then use `assets/photo.jpg` in your HTML.

> Right now many photos load from Framer's servers. Download them into `assets/` and update the paths so the site keeps working if you cancel Framer.

### Undo a mistake
Open the file, click **History**, find an earlier version, and copy the old text back in. GitHub keeps every version.

---

## Chapter 7: Customize the site

### Change colors and fonts
Open `style.css`. At the top is a block called `:root` with named colors:

```css
--chalk: #0a1220;   /* navy: top bar, hero, footer */
--pencil: #c9a45c;  /* gold accent */
--ink: #ece4d6;     /* main text */
```

Change a value, commit, and the whole site updates. Fonts are set in `--head` and `--body` (currently Inter).

### Edit text and links
Open `index.html`. Each section has a comment banner, like `<!-- ============ EXPERIENCE ============ -->`. Find your section and edit the text between the tags. Leave the `<` and `>` parts alone.

### Add a card (project, design, talk, organization)
Copy one line like this and paste it next to the others in the same list:

```html
<li class="card"><h3>My new project</h3><a href="https://example.com">View project</a></li>
```

### Add a whole new section
1. Copy any `<section> … </section>` block in `index.html`.
2. Paste it where you want it.
3. Change the `id` and `data-nav`, then write your content:

```html
<section id="certificates" class="section" data-nav="Certificates">
  <div class="wrap">
    <h2>Certificates</h2>
    <p>Your content here.</p>
  </div>
</section>
```

The menu link appears automatically, and the background stripes alternate on their own.

### Add an FAQ
Copy a `<details>` block and change the question and answer.

---

## Chapter 8: Use a custom domain

Your site already works on the free `github.io` address. A custom domain is optional.

### Option A: Free, `is-a.dev` subdomain
Gives you something like `clydenate.is-a.dev`.
1. Read the instructions at `docs.is-a.dev`.
2. Fork the `is-a-dev/register` repo on GitHub, add a small JSON file with your chosen name that points to `<your-username>.github.io`, and open a pull request. Write it yourself from the docs, since they ask applicants not to use AI-generated requests.
3. After it's merged, go to your repo's **Settings → Pages → Custom domain**, enter the new name, and **Save**.
4. Tick **Enforce HTTPS** when it becomes available.

### Option B: Buy a domain (for example `clydenate.dev`)
1. Buy the domain from a registrar such as Cloudflare, Porkbun, or Namecheap.
2. In your repo, go to **Settings → Pages → Custom domain**, type the domain, and **Save**. Do this **before** changing DNS.
3. At your registrar, open **DNS settings** and add:

| Type | Name/Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<your-username>.github.io` |

   Check these four addresses against GitHub's page *"Managing a custom domain for your GitHub Pages site"* in case they've changed. Delete any conflicting old records, such as a parking page.
4. Wait from a few minutes up to 24 hours. When GitHub shows a green check, tick **Enforce HTTPS**. (`.dev` domains require HTTPS.)
5. Optional but recommended: verify your domain in your GitHub profile settings (**Pages → Add a domain**) to prevent others from claiming it.

GitHub adds a file called `CNAME` to your repo. Don't delete it.

---

## Chapter 9: Troubleshooting

| Problem | Try this |
|---|---|
| Page shows a 404 | Check **Settings → Pages** is set to `main` and `/ (root)`, and that `index.html` is in the root of the repo (not inside a folder). |
| Page has no styling | `style.css` and `script.js` must be in the same place as `index.html`, with those exact names. |
| My change doesn't show | Wait 2 minutes, then hard refresh (Ctrl + Shift + R). |
| Photos are missing | Check the file name and path. Names are case-sensitive: `Photo.jpg` is not `photo.jpg`. |
| "Domain's DNS record could not be retrieved" | DNS can take up to 24 hours. Recheck the records in Chapter 8. |
| I broke something | Open the file's **History** and copy back an earlier version. |
| Menu link missing for a new section | Make sure the `<section>` has both an `id` and a `data-nav`. |

---

© Clyde's Archive. Edit freely.
