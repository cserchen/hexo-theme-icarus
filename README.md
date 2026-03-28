# Icarus — Hexo Theme

A clean, responsive blog theme for [Hexo](https://hexo.io/).
Maintained by **cser** · Original design by [PPOffice](https://github.com/ppoffice)

---

## Table of Contents

- [Requirements](#requirements)
- [Quick Start](#quick-start)
- [Directory Structure](#directory-structure)
- [Theme Configuration](#theme-configuration)
- [Site Configuration](#site-configuration)
- [Post Front-matter](#post-front-matter)
- [Sidebar Widgets](#sidebar-widgets)
- [Features](#features)
- [Customization](#customization)
- [i18n — Internationalization](#i18n--internationalization)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Requirements

| Dependency | Minimum version |
|------------|----------------|
| [Hexo](https://hexo.io/) | 3.0 |
| Node.js | 16.0 |
| npm | 8.0 |

---

## Quick Start

### 1. Install the theme

Run this command from the **root of your Hexo blog**:

```bash
git clone https://github.com/cserchen/hexo-theme-icarus.git themes/icarus
```

### 2. Copy the config files

```bash
# Theme config
cp themes/icarus/_config.yml.example themes/icarus/_config.yml

# Site config (overwrites the default Hexo one — back it up first if needed)
cp themes/icarus/_config.yml.site.example _config.yml
```

### 3. Enable the theme

Open `_config.yml` (your blog root) and set:

```yaml
theme: icarus
```

### 4. Enable Categories & Tags pages

```bash
cp -r themes/icarus/_source/categories source/
cp -r themes/icarus/_source/tags source/
```

Make sure `Categories` and `Tags` are present in your theme `_config.yml` menu (they are by default).

### 5. Start the server

```bash
hexo server
```

Open `http://localhost:4000` to preview your blog.

### Update the theme

```bash
cd themes/icarus
git pull
```

---

## Directory Structure

```
themes/icarus/
├── _config.yml.example        # Theme configuration template → copy to _config.yml
├── _config.yml.site.example   # Site configuration template  → copy to blog root _config.yml
├── _source/                   # Bundled page stubs
│   ├── categories/index.md    # Categories listing page
│   └── tags/index.md          # Tags listing page
├── languages/                 # i18n translation files
│   ├── en.yml
│   ├── zh-CN.yml
│   ├── ja.yml
│   └── id.yml
├── layout/                    # EJS templates
│   ├── layout.ejs             # Master layout wrapper
│   ├── index.ejs              # Homepage
│   ├── post.ejs               # Single post
│   ├── page.ejs               # Static page
│   ├── archive.ejs            # Archive list
│   ├── category.ejs           # Posts in a category
│   ├── tag.ejs                # Posts with a tag
│   ├── categories.ejs         # All categories
│   ├── tags.ejs               # Tag cloud page
│   ├── _partial/              # Reusable template fragments
│   │   ├── head.ejs
│   │   ├── header.ejs
│   │   ├── footer.ejs
│   │   ├── after-footer.ejs
│   │   ├── article.ejs
│   │   ├── archive.ejs
│   │   ├── archive-post.ejs
│   │   ├── profile.ejs
│   │   ├── sidebar.ejs
│   │   ├── google-analytics.ejs
│   │   └── post/              # Per-post sub-partials
│   └── _widget/               # Sidebar widget templates
├── scripts/
│   └── fancybox.js            # Custom {% fancybox %} Hexo tag
└── source/
    ├── css/                   # Stylus stylesheets (compiled to style.css)
    ├── js/script.js           # Theme JavaScript
    ├── fancybox/              # Fancybox lightbox library
    └── font-awesome/          # Font Awesome icon fonts
```

---

## Theme Configuration

File: `themes/icarus/_config.yml`

### Header

```yaml
# Path to the logo image displayed in the header.
# Leave blank to show only the site title text.
logo: css/images/logo.png

# Navigation menu. Each entry is "Label: path".
# Use "/" for the homepage. Relative paths resolve from the site root.
menu:
  Home: /
  Archives: archives
  Categories: categories    # Requires the categories page in source/ (see Quick Start)
  Tags: tags                # Requires the tags page in source/ (see Quick Start)
  About: about
```

### Content

```yaml
# Text of the "Read More" link shown after post excerpts (requires <!-- more --> in the post).
excerpt_link: Read More

# Set to true to enable the Fancybox image lightbox on article images.
fancybox: true
```

### Profile

```yaml
# Show the profile card (avatar, name, stats, contacts) in the header.
profile: true

# Set to true to load the avatar from Gravatar using the email field below.
# Set to false to use the avatar image path defined in the site config.
gravatar: false
# email: your@email.com   # Required only when gravatar: true
```

### Sidebar

```yaml
# Sidebar position. Accepted values:
#   right   — fixed sidebar on the right (default)
#   bottom  — sidebar below the main content
#   false   — disable the sidebar entirely
sidebar: right

# Widgets to display in the sidebar, in order.
# Available: recent_posts | category | tag | tagcloud | archive | links
widgets:
  - recent_posts
  - category
  - tag
  - tagcloud
  - archive

# Show post thumbnail images in the sidebar and archive pages.
thumbnail: true
```

### Contacts

```yaml
# Social links shown as Font Awesome icon buttons in the profile card.
# Key = Font Awesome icon name (e.g. github, twitter, facebook, weibo, instagram).
# Value = full URL.
contacts:
  github: https://github.com/cser
  twitter: https://twitter.com/cser
  facebook: https://facebook.com/cser
  rss: atom.xml
```

### Links Widget

```yaml
# External links displayed in the "links" sidebar widget.
# Only shown when this section is non-empty AND "links" is in the widgets list.
links:
  Hexo: https://hexo.io
```

### Miscellaneous

```yaml
# Google Analytics 4 Measurement ID.
# Format: G-XXXXXXXXXX
# Leave blank to disable analytics.
google_analytics:

# Path to the browser favicon (relative to the theme source/ directory).
favicon: favicon.png

# Path to a custom stylesheet (relative to source/css/).
# Loaded after the main stylesheet, so rules here override the defaults.
# customstylesheet: custom.css
```

---

## Site Configuration

File: `_config.yml` (blog root)

### Author & Profile

```yaml
title: My Blog
subtitle:
description: A short description of your blog

author: cser                          # Displayed in the profile card and footer
author_title: 'Web Developer & Designer'
avatar: css/images/avatar.png         # Relative to the theme source/ directory
location: 'Your City, Country'
follow: https://github.com/cser       # URL linked from the Follow button
language: en                          # en | zh-CN | ja | id
since: 2024                           # Copyright start year shown in the footer
```

### URL

```yaml
url: https://cser.github.io
root: /

# Subdirectory deployment example:
#   url: https://cser.github.io/blog
#   root: /blog/
```

### Pagination

```yaml
per_page: 6    # Posts per page. Set to 0 to disable pagination.
```

### Comments (Disqus)

```yaml
# Uncomment and fill in your Disqus shortname to enable comments on posts.
# disqus_shortname: your-shortname
```

> Comments are enabled per-post by default once a shortname is set.
> To disable comments on a specific post, add `comments: false` to its front-matter.

### Deployment

```yaml
deploy:
  type: git
  repository: https://github.com/cser/cser-blog.git
  branch: gh-pages
```

Requires `hexo-deployer-git`:

```bash
npm install hexo-deployer-git --save
```

---

## Post Front-matter

All fields are optional unless noted.

```yaml
---
title: My Post Title        # Post title (required)
date: 2024-06-01            # Publication date (required)
updated: 2024-06-15         # Last updated date
categories:
  - Tech                    # Category (supports nesting with multiple levels)
tags:
  - hexo
  - tutorial
thumbnail: /images/thumb.jpg   # Small image shown in sidebar and archive list
banner: /images/banner.jpg     # Full-width banner at the top of the post
toc: true                      # Show a Table of Contents (default: false)
comments: false                # Disable comments for this post (default: true)
---
```

### Excerpt

Insert `<!-- more -->` anywhere in your post body to define the excerpt boundary.
Only content before the marker is shown on the index page; the rest appears after "Read More".

```markdown
This paragraph appears on the index page.

<!-- more -->

This paragraph only appears on the full post page.
```

### Gallery

Add a `photos` list to show an inline photo gallery at the top of the post:

```yaml
photos:
  - /images/photo1.jpg
  - /images/photo2.jpg
  - /images/photo3.jpg
```

### Link Post

For link-type posts (the title links to an external URL):

```yaml
link: https://example.com
```

---

## Sidebar Widgets

Enable or reorder widgets by editing the `widgets` list in `themes/icarus/_config.yml`.

| Widget | Description |
|--------|-------------|
| `recent_posts` | Last 5 posts with optional thumbnail, category, and date |
| `category` | Hierarchical category list with post counts |
| `tag` | Flat tag list with post counts |
| `tagcloud` | Tag cloud with font-size scaled by post count |
| `archive` | Monthly archive navigation |
| `links` | External links (populated from the `links` config key) |

Example — show only essential widgets:

```yaml
widgets:
  - recent_posts
  - category
  - archive
```

To disable the sidebar entirely:

```yaml
sidebar: false
```

---

## Features

### Responsive Layout

The theme adapts to four screen sizes:

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mini | < 560 px | Single column, stacked nav |
| Mobile | 560 – 799 px | Single column |
| Tablet | 800 – 1199 px | Two-column (main + sidebar) |
| Normal | ≥ 1200 px | Three-column (profile + main + sidebar) |

### Profile Card

Shown on desktop (≥ 1200 px) as a fixed left column, and on all screen sizes as a dropdown from the avatar in the top-right corner.

Displays:
- Avatar (local image or Gravatar)
- Name, title, and location
- Post and tag counts
- Social contact icons

Configure in the site `_config.yml` (`author`, `avatar`, `location`, `follow`) and theme `_config.yml` (`contacts`).

### Image Lightbox (Fancybox)

When `fancybox: true` in the theme config, all `<img>` tags inside article content are automatically wrapped in Fancybox links.

**Standard Markdown:**

```markdown
![Caption text](/images/photo.jpg)
```

**Fancybox tag (optional thumbnail):**

```
{% fancybox /images/full.jpg /images/thumb.jpg Optional caption %}
```

| Argument | Required | Description |
|----------|----------|-------------|
| `image` | Yes | Full-size image URL |
| `thumbnail` | No | Thumbnail URL; falls back to `image` if omitted |
| `title` | No | Caption text |

### Table of Contents

Add `toc: true` to a post's front-matter to render a collapsible table of contents above the article body. Headings `h1`–`h6` are indexed automatically.

### Share

Each post has a Share button that opens a popup with links to:
- Twitter
- Facebook
- Pinterest

### Google Analytics 4

Add your GA4 Measurement ID to the theme config:

```yaml
google_analytics: G-XXXXXXXXXX
```

The tracking snippet is injected into every page's `<head>` automatically.

### Comments (Disqus)

Add your Disqus shortname to the site config:

```yaml
disqus_shortname: your-shortname
```

The comment thread is embedded at the bottom of every post where `comments` is not `false`.

### Syntax Highlighting

Code blocks are styled with the **Tomorrow Night** colour scheme (dark background).
Hexo's built-in highlighter is used — no extra configuration required.

---

## Customization

### Custom Avatar

Replace `themes/icarus/source/css/images/avatar.png` with your own image (recommended: 256 × 256 px).
Or set a URL in the site config:

```yaml
avatar: https://example.com/your-avatar.jpg
```

### Custom Logo

Replace `themes/icarus/source/css/images/logo.png`, or point the theme config to another path:

```yaml
logo: css/images/logo.png
```

Set `logo:` to blank to show only the site title text.

### Custom Stylesheet

1. Create `themes/icarus/source/css/custom.css`.
2. Reference it in the theme config:

```yaml
customstylesheet: custom.css
```

Your custom CSS is loaded after the main stylesheet, so any rule here overrides the defaults.

### Adding a Language

1. Copy `themes/icarus/languages/en.yml` to a new file, e.g. `themes/icarus/languages/fr.yml`.
2. Translate all values.
3. Set the language in your site config:

```yaml
language: fr
```

---

## i18n — Internationalization

The theme ships with four languages:

| Code | Language |
|------|----------|
| `en` | English (default) |
| `zh-CN` | Simplified Chinese |
| `ja` | Japanese |
| `id` | Indonesian |

Set the active language in your blog's `_config.yml`:

```yaml
language: zh-CN
```

Translation keys are defined in `themes/icarus/languages/<code>.yml`.

---

## Development

### Install build tools

From the theme directory:

```bash
cd themes/icarus
npm install
```

### Grunt tasks

The Grunt build downloads Font Awesome and Fancybox from GitHub and copies them into the theme.

| Command | Description |
|---------|-------------|
| `npx grunt` | Download and install all dependencies |
| `npx grunt fontawesome` | Download Font Awesome only |
| `npx grunt fancybox` | Download Fancybox only |
| `npx grunt clean` | Remove all downloaded assets |

> **Note:** Font Awesome and Fancybox are already included in the repository.
> Only run Grunt if you need to update them to a newer version.

### Project conventions

- Templates: EJS (`.ejs`), indented with 2 spaces
- Styles: Stylus (`.styl`), compiled to `source/css/style.css` by Hexo automatically
- JavaScript: plain ES5 wrapped in an IIFE, jQuery 3.x as the only dependency
- All external URLs must use HTTPS

---

## Troubleshooting

**Site title links go to `/` but other menu items show the wrong path**
Make sure `root` in your site `_config.yml` matches your deployment path.
For a subdirectory deploy (e.g. GitHub Pages project site), set both `url` and `root`:

```yaml
url: https://cser.github.io/myblog
root: /myblog/
```

**Categories or Tags pages return 404**
Run the setup step to copy the bundled page stubs:

```bash
cp -r themes/icarus/_source/categories source/
cp -r themes/icarus/_source/tags source/
```

**Fonts not loading**
The theme loads Open Sans and Source Code Pro from Google Fonts. If your users are behind a network that blocks Google Fonts, replace the `<link>` tags in `layout/_partial/head.ejs` with a self-hosted or alternative CDN.

**Avatar not showing in profile**
Check that the path in `avatar:` is correct relative to the theme `source/` directory.
Default: `css/images/avatar.png` → file lives at `themes/icarus/source/css/images/avatar.png`.

**Gravatar not loading**
Set `gravatar: true` and add `email: your@email.com` to the theme `_config.yml`.
Make sure the email address is registered on [gravatar.com](https://gravatar.com).

**Google Analytics not tracking**
Confirm the Measurement ID starts with `G-` (GA4 format).
Legacy `UA-` IDs from Universal Analytics are no longer supported (Google shut down UA in July 2023).

**Comments not showing**
Verify `disqus_shortname` is set in the site `_config.yml` and that the post's front-matter does not contain `comments: false`.

---

## License

MIT © [Tommy Chen](https://github.com/ppoffice) — see [LICENSE](LICENSE) for details.
