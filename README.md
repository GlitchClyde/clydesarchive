# Clyde's Archive

Personal portfolio of **Clyde Justine C. Nate**, an IT professional, educator, and AI-focused technologist based in Naga City, Philippines.

Built with plain HTML, CSS, and JavaScript. There is no framework and no build step, so it is easy to read, edit, and host for free on GitHub Pages.

**Live site:** _add your link here, e.g. `https://clydesarchive.dev`_

## What's on the site

- **Hero:** introduction, résumé, and curriculum vitae links
- **About:** summary and core skills
- **Key Projects:** academic and commercial computer science work
- **Experience:** teaching, IT operations, and design roles
- **Education & credentials:** degrees, certifications, honors, languages
- **Organizations & communities:** student, developer, and advocacy groups
- **Designs:** presentations and speakership decks
- **Capabilities:** technical, AI and data, design, and teaching skills
- **Engagements:** talks and workshops, with photos
- **FAQs:** quick answers about my background
- **Contact:** LinkedIn, Facebook, email, and Linktree

## Design

- **Font:** Inter
- **Palette:** deep ocean navy, passport gold, walnut brown, ivory, and silver
- **Motion:** a soft hero entrance, gentle scroll reveals, and hover effects. All of it is turned off for visitors who prefer reduced motion.
- **Responsive:** works on phones, tablets, and desktops.
- **Accessible:** skip-to-content link, visible keyboard focus, 44px touch targets, descriptive photo alt text, high-contrast text, and the active menu link highlights as you scroll.

## Project structure

```
clydes-archive/
├── index.html      Content: text, links, sections, photos
├── style.css       Look: colors, fonts, spacing, animations
├── script.js       Behavior: menu, scroll reveal, footer year
├── README.md       This overview
└── PUBLISHING.md   Step-by-step guide to publish on GitHub Pages
```

## Customize

Edit the files directly on GitHub (open a file, click the pencil icon, then **Commit changes**) or on your computer.

### Change colors and fonts
Open `style.css`. The `:root` block at the top holds every color and font:

```css
--chalk: #0a1220;   /* navy: top bar, hero, footer */
--pencil: #c9a45c;  /* gold accent */
--ink: #ece4d6;     /* main text */
```

### Edit text and links
Open `index.html`. Each section has a comment banner such as `<!-- ====== EXPERIENCE ====== -->`. Change the text between the tags and leave the `<` and `>` parts alone.

### Add a card (project, design, talk, organization)
Copy a line like this next to the others in the same list:

```html
<li class="card"><h3>My new project</h3><a href="https://example.com">View project</a></li>
```

### Add a new section
Copy any `<section>` block, paste it where you want it, and change the `id`, `data-nav`, and content:

```html
<section id="certificates" class="section" data-nav="Certificates">
  <div class="wrap">
    <h2>Certificates</h2>
    <p>Your content here.</p>
  </div>
</section>
```

The menu link appears automatically, and the background stripes keep alternating on their own.

### Add an FAQ
Copy a `<details>` block and change the question and answer.

### Photos
Many photos currently load from Framer's servers. Download them into an `assets/` folder and update the paths in `index.html` so the site does not depend on Framer.

## Publish

New to GitHub? Follow **[PUBLISHING.md](PUBLISHING.md)**. It covers creating a repository, uploading the files, turning on GitHub Pages, updating later, using a custom domain, and fixing common problems.

## Contact

- LinkedIn: [linkedin.com/in/clydejustinenate](https://www.linkedin.com/in/clydejustinenate/)
- Linktree: [linktr.ee/clyd_jstn](https://linktr.ee/clyd_jstn)

© Clyde's Archive. All rights reserved.
