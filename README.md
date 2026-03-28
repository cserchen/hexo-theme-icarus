# Icarus

A clean, responsive Hexo blog theme. [Live preview](http://ppoffice.github.io/hexo-theme-icarus/)

![Preview](http://ppoffice.github.io/hexo-theme-icarus/gallery/preview.jpg)

## Requirements

- [Hexo](https://hexo.io/) 3.0+
- Node.js 16+

---

## Installation

```bash
git clone https://github.com/ppoffice/hexo-theme-icarus.git themes/icarus
```

---

## Setup

1. Copy the theme config:
   ```bash
   cp themes/icarus/_config.yml.example themes/icarus/_config.yml
   ```
2. Copy the site config to your blog root:
   ```bash
   cp themes/icarus/_config.yml.site.example _config.yml
   ```
3. Set `theme: icarus` in your blog's `_config.yml`.

### Enable Categories & Tags pages

Copy the bundled pages into your site's `source/` directory:

```bash
cp -r themes/icarus/_source/categories source/
cp -r themes/icarus/_source/tags source/
```

Then make sure `Categories` and `Tags` are listed in your theme's `_config.yml` menu.

### Update

```bash
cd themes/icarus && git pull
```

---

## Configuration

### Theme (`themes/icarus/_config.yml`)

| Key | Description |
|-----|-------------|
| `logo` | Path to header logo image |
| `menu` | Navigation links (key: label, value: path) |
| `excerpt_link` | "Read More" link text |
| `fancybox` | Enable image lightbox (`true`/`false`) |
| `profile` | Show profile card in header |
| `gravatar` | Use Gravatar instead of local avatar |
| `sidebar` | Sidebar position: `right`, `bottom`, or `false` |
| `widgets` | List of sidebar widgets (see below) |
| `thumbnail` | Show post thumbnails in sidebar/archives |
| `contacts` | Social links shown as icons |
| `links` | External links in the links widget |
| `google_analytics` | GA4 Measurement ID (e.g. `G-XXXXXXXXXX`) |
| `favicon` | Path to favicon file |

**Available widgets:** `recent_posts`, `category`, `tag`, `tagcloud`, `archive`, `links`

### Site (`_config.yml`)

| Key | Description |
|-----|-------------|
| `author` | Your name |
| `author_title` | Your occupation/title |
| `avatar` | Path to avatar image |
| `location` | Your location |
| `follow` | URL for the Follow button |
| `since` | Copyright start year |
| `disqus_shortname` | Your Disqus shortname (for comments) |

---

## Post Front-matter

### Thumbnail & Banner

```yaml
title: My Post
date: 2024-01-01
thumbnail: /images/thumb.jpg
banner: /images/banner.jpg
```

### Table of Contents

```yaml
toc: true
```

### Disable Comments

```yaml
comments: false
```

---

## Features

- **Responsive layout** — adapts to mobile, tablet, and desktop screens
- **Profile sidebar** — shows avatar, stats, and social links
- **Fancybox lightbox** — wrap images in Markdown or use the `{% fancybox %}` tag
- **Google Analytics 4** — add your GA4 Measurement ID to the theme config
- **Disqus comments** — add your Disqus shortname to the site config
- **i18n** — English, Simplified Chinese, Japanese, Indonesian

### Fancybox tag

```
{% fancybox /path/to/image [/path/to/thumbnail] [title] %}
```

---

## Development

Install build tools:

```bash
npm install
```

Build tasks (downloads Font Awesome and Fancybox from GitHub):

| Task | Description |
|------|-------------|
| `grunt` | Download all dependencies |
| `grunt fontawesome` | Download Font Awesome only |
| `grunt fancybox` | Download Fancybox only |
| `grunt clean` | Remove downloaded assets |

---

## License

MIT © [Tommy Chen](https://github.com/ppoffice)
