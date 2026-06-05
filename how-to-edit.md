# Ritesh's Website - Future Editing Guide

This guide explains how you can edit your website's text, update projects, modify the daily rotating prompts, and host the site for free.

---

## 1. File Structure Overview

* **`index.html`**: The home page (the exact layout and features of "Coding is Love", with the Daily Motivation Banner integrated).
* **`portfolio.html`**: Your portfolio page (biography, skills list, project cards, and contact form).
* **`automation-hub.html`**: The AI & Automation Hub page (daily prompts, summaries, PC/Android macro corners).
* **`Style.css`**: The original stylesheet from your dashboard.
* **`Style-hub.css`**: The stylesheet managing the command palette, terminal overlay, daily banner, and new responsive grid designs.
* **`Script-hub.js`**: The javascript engine. **This contains the daily rotating content database (quotes, prompts, macros, and summaries).**

---

## 2. Editing the Daily Rotating Content

To add new prompts, quotes, or macros that rotate automatically, open **`Script-hub.js`** in your text editor. Near the top of the file, you will find the `dailyDatabase` object:

```javascript
const dailyDatabase = {
  quotes: [
    { text: "Your quote text here...", challenge: "Challenge text here..." },
    ...
  ],
  prompts: [
    [
      { category: "Daily Life Work Automation", title: "Title...", prompt: "Prompt text..." },
      { category: "AI Trending Image Generator", title: "Title...", prompt: "Prompt text..." },
      { category: "New Trending Technology / MCP", title: "Title...", prompt: "Prompt text..." }
    ],
    ...
  ],
  summaries: [
    [
      { title: "Summary 1 Title...", text: "Summary text..." },
      { title: "Summary 2 Title...", text: "Summary text..." }
    ],
    ...
  ],
  macros: [
    {
      pc: { title: "Title...", desc: "Description...", code: "Code block...", difficulty: 3 },
      android: { title: "Title...", desc: "Description...", code: "Code block...", difficulty: 2 }
    },
    ...
  ]
};
```

### To add items:
1. **Quotes**: Add a new `{ text: "...", challenge: "..." }` object inside the `quotes` array.
2. **Prompts**: Add a new block containing exactly **3 prompt objects** inside the `prompts` array.
3. **Summaries**: Add a new block containing exactly **2 summary objects** inside the `summaries` array.
4. **Macros**: Add a new block containing both a `pc` and `android` macro object inside the `macros` array.

The JavaScript code automatically calculates the day of the year (`dayOfYear % length`) to cycle through the items, meaning your additions will automatically distribute across the calendar days!

---

## 3. Editing Projects and Biography (HTML)

To update your profile text, projects, or skills in the portfolio:
1. Open **`portfolio.html`**.
2. Scroll to the tab views:
   * **Biography**: Find the section with `id="about-view"` and edit the `<p>` text tags.
   * **Skills**: Find `id="skills-view"` and update or add `.skill-card` blocks.
   * **Projects**: Find `id="projects-view"` and add a new `<article class="glass-card project-card">` block. You can change titles, description texts, and tag elements directly.
   * **Social Accounts**: In both `index.html` (lines 85–106) and `portfolio.html` (lines 40–54), locate the links inside `<div class="social-dock">` and replace the placeholder `href="..."` with your actual profile links.

---

## 4. Hosting Your Website for Free (No-Cost Hosting)

Because your website is built with native HTML, CSS, and JS (static assets), you can host it **100% free** with premium performance using one of these options:

### Option A: GitHub Pages (Recommended)
1. Sign up for a free account at [github.com](https://github.com).
2. Create a new repository (e.g., named `ritesh-website`).
3. Upload all the files from your workspace directory (`index.html`, `portfolio.html`, `automation-hub.html`, `Style.css`, `Style-hub.css`, `Script-hub.js`, and the font/icon stylesheets) to the repository.
4. Go to your Repository **Settings** -> **Pages** (under Code and Automation).
5. Set the Source to **Deploy from a branch**, select the **main** branch, and select `/ (root)` folder. Click **Save**.
6. Within a minute, GitHub will give you a live HTTPS link (e.g., `https://yourusername.github.io/ritesh-website/`).

### Option B: Netlify (Drag & Drop)
1. Go to [netlify.com](https://www.netlify.com) and create a free account.
2. Go to the dashboard and locate the **"Drag and drop your site folder here"** deployment box.
3. Drag your entire workspace folder into the box.
4. Netlify will publish it immediately and give you a free, customizable subdomain (e.g., `ritesh-automation.netlify.app`).

### Why Avoid Google Sites for custom code?
Google Sites is optimized for no-code blocks. It encapsulates HTML embedding in insulated sandboxed `iframes`. This isolation breaks responsiveness, cuts off dropdown palettes, prevents browser local storage theme syncing, and strips smooth micro-animations. GitHub Pages and Netlify run your code natively, preserving the premium eye-soothing experience.
