# Icarus — Hexo Theme

A clean, responsive blog theme for [Hexo](https://hexo.io/).
Maintained by **cser** · Original design by [PPOffice](https://github.com/ppoffice)

简洁、响应式的 [Hexo](https://hexo.io/) 博客主题。
由 **cser** 维护 · 原始设计作者 [PPOffice](https://github.com/ppoffice)

---

## Table of Contents · 目录

- [Requirements · 环境要求](#requirements--环境要求)
- [Quick Start · 快速开始](#quick-start--快速开始)
- [Directory Structure · 目录结构](#directory-structure--目录结构)
- [Theme Configuration · 主题配置](#theme-configuration--主题配置)
- [Site Configuration · 站点配置](#site-configuration--站点配置)
- [Post Front-matter · 文章头信息](#post-front-matter--文章头信息)
- [Sidebar Widgets · 侧边栏组件](#sidebar-widgets--侧边栏组件)
- [Features · 功能说明](#features--功能说明)
- [Customization · 自定义](#customization--自定义)
- [i18n · 国际化](#i18n--国际化)
- [Development · 开发](#development--开发)
- [Troubleshooting · 常见问题](#troubleshooting--常见问题)
- [License · 许可证](#license--许可证)

---

## Requirements · 环境要求

| Dependency · 依赖 | Minimum version · 最低版本 |
|-------------------|--------------------------|
| [Hexo](https://hexo.io/) | 3.0 |
| Node.js | 16.0 |
| npm | 8.0 |

---

## Quick Start · 快速开始

### 1. Install the theme · 安装主题

Run from the **root of your Hexo blog** · 在 **Hexo 博客根目录**下执行：

```bash
git clone https://github.com/cserchen/hexo-theme-icarus.git themes/icarus
```

### 2. Copy the config files · 复制配置文件

```bash
# Theme config · 主题配置
cp themes/icarus/_config.yml.example themes/icarus/_config.yml

# Site config · 站点配置（如已有 _config.yml 请先备份）
cp themes/icarus/_config.yml.site.example _config.yml
```

### 3. Enable the theme · 启用主题

Open `_config.yml` (blog root) and set · 打开博客根目录的 `_config.yml`，设置：

```yaml
theme: icarus
```

### 4. Enable Categories & Tags pages · 启用分类和标签页

```bash
cp -r themes/icarus/_source/categories source/
cp -r themes/icarus/_source/tags source/
```

Ensure `Categories` and `Tags` are in the theme `_config.yml` menu (default: already included).
确保主题 `_config.yml` 的 menu 中包含 `Categories` 和 `Tags`（默认已包含）。

### 5. Start the server · 启动服务

```bash
hexo server
```

Open · 打开 `http://localhost:4000` to preview · 预览博客。

### Update the theme · 更新主题

```bash
cd themes/icarus
git pull
```

---

## Directory Structure · 目录结构

```
themes/icarus/
├── _config.yml.example        # Theme config template · 主题配置模板，复制为 _config.yml 使用
├── _config.yml.site.example   # Site config template  · 站点配置模板，复制到博客根目录使用
├── _source/                   # Bundled page stubs · 内置页面模板
│   ├── categories/index.md    # Categories page · 分类页
│   └── tags/index.md          # Tags page · 标签页
├── languages/                 # i18n translations · 国际化翻译文件
│   ├── en.yml                 # English · 英语
│   ├── zh-CN.yml              # Simplified Chinese · 简体中文
│   ├── ja.yml                 # Japanese · 日语
│   └── id.yml                 # Indonesian · 印度尼西亚语
├── layout/                    # EJS templates · EJS 模板
│   ├── layout.ejs             # Master layout · 主布局框架
│   ├── index.ejs              # Homepage · 首页
│   ├── post.ejs               # Single post · 单篇文章
│   ├── page.ejs               # Static page · 静态页面
│   ├── archive.ejs            # Archive list · 归档列表
│   ├── category.ejs           # Posts in a category · 分类文章列表
│   ├── tag.ejs                # Posts with a tag · 标签文章列表
│   ├── categories.ejs         # All categories · 所有分类
│   ├── tags.ejs               # Tag cloud page · 标签云页面
│   ├── _partial/              # Reusable fragments · 可复用模板片段
│   │   ├── head.ejs           # <head> meta & styles · 头部元数据与样式
│   │   ├── header.ejs         # Site header & nav · 导航栏
│   │   ├── footer.ejs         # Site footer · 页脚
│   │   ├── after-footer.ejs   # Scripts & comments · 脚本与评论
│   │   ├── article.ejs        # Article layout · 文章布局
│   │   ├── archive.ejs        # Archive layout · 归档布局
│   │   ├── archive-post.ejs   # Archive list item · 归档列表条目
│   │   ├── profile.ejs        # Profile sidebar · 个人资料侧栏
│   │   ├── sidebar.ejs        # Sidebar wrapper · 侧边栏容器
│   │   ├── google-analytics.ejs # GA4 snippet · GA4 统计代码
│   │   └── post/              # Per-post sub-partials · 文章子模板
│   └── _widget/               # Sidebar widget templates · 侧边栏组件模板
├── scripts/
│   └── fancybox.js            # {% fancybox %} Hexo tag · 自定义 Hexo 标签
└── source/
    ├── css/                   # Stylus stylesheets · Stylus 样式文件（自动编译）
    ├── js/script.js           # Theme JavaScript · 主题脚本
    ├── fancybox/              # Fancybox lightbox library · 图片灯箱库
    └── font-awesome/          # Font Awesome icon fonts · 图标字体
```

---

## Theme Configuration · 主题配置

File · 文件：`themes/icarus/_config.yml`

### Header · 头部

```yaml
# Path to the logo image displayed in the header.
# Leave blank to show only the site title text.
# 头部显示的 Logo 图片路径。留空则只显示文字标题。
logo: css/images/logo.png

# Navigation menu. Each entry: "Label: path"
# Use "/" for the homepage. Paths are relative to the site root.
# 导航菜单，格式为"显示名称: 路径"。首页用 "/"，其余为相对路径。
menu:
  Home: /
  Archives: archives
  Categories: categories    # Requires categories page · 需要先创建分类页（见快速开始第4步）
  Tags: tags                # Requires tags page · 需要先创建标签页（见快速开始第4步）
  About: about
```

### Content · 内容

```yaml
# Text of the "Read More" link shown after post excerpts.
# Requires <!-- more --> marker in the post body.
# "阅读更多"链接文字，需在文章中插入 <!-- more --> 标记。
excerpt_link: Read More

# Enable Fancybox image lightbox on all article images.
# 为文章中的所有图片启用 Fancybox 灯箱效果。
fancybox: true
```

### Profile · 个人资料

```yaml
# Show the profile card (avatar, name, stats, contacts) in the header.
# 在页头显示个人资料卡片（头像、姓名、统计、社交链接）。
profile: true

# Set to true to load the avatar from Gravatar using the email field below.
# Set to false to use the local avatar image defined in the site config.
# true = 使用 Gravatar 头像（需填写 email）；false = 使用站点配置中的本地头像。
gravatar: false
# email: your@email.com   # Required when gravatar: true · gravatar: true 时必填
```

### Sidebar · 侧边栏

```yaml
# Sidebar position · 侧边栏位置：
#   right   — fixed right column (default) · 右侧固定列（默认）
#   bottom  — below main content · 主内容下方
#   false   — disable sidebar · 禁用侧边栏
sidebar: right

# Widgets displayed in the sidebar, top to bottom.
# Available: recent_posts | category | tag | tagcloud | archive | links
# 侧边栏显示的组件（从上到下）。可选值见上方。
widgets:
  - recent_posts
  - category
  - tag
  - tagcloud
  - archive

# Show post thumbnail images in the sidebar and archive pages.
# 在侧边栏和归档页显示文章缩略图。
thumbnail: true
```

### Contacts · 社交联系

```yaml
# Social links shown as Font Awesome icon buttons in the profile card.
# Key = Font Awesome icon name (github, twitter, facebook, weibo, instagram, …)
# Value = full URL
# 个人资料卡片中的社交图标链接。
# Key = Font Awesome 图标名（github、twitter、facebook、weibo、instagram 等）
# Value = 完整 URL
contacts:
  github: https://github.com/cser
  twitter: https://twitter.com/cser
  facebook: https://facebook.com/cser
  rss: atom.xml
```

### Links Widget · 友情链接

```yaml
# External links displayed in the "links" sidebar widget.
# Only shown when non-empty AND "links" is in the widgets list.
# 侧边栏"链接"组件显示的外部链接。
# 仅当此处有内容且 widgets 列表中包含 "links" 时才显示。
links:
  Hexo: https://hexo.io
```

### Miscellaneous · 杂项

```yaml
# Google Analytics 4 Measurement ID · GA4 跟踪 ID
# Format · 格式: G-XXXXXXXXXX
# Leave blank to disable · 留空则不启用
google_analytics:

# Browser favicon path (relative to theme source/) · 网站图标路径（相对于主题 source/ 目录）
favicon: favicon.png

# Custom stylesheet path (relative to source/css/) · 自定义样式表路径（相对于 source/css/）
# Loaded after the main stylesheet, rules here override defaults.
# 在主样式表之后加载，此处规则会覆盖默认样式。
# customstylesheet: custom.css
```

---

## Site Configuration · 站点配置

File · 文件：`_config.yml`（blog root · 博客根目录）

### Author & Profile · 作者与个人资料

```yaml
title: My Blog
subtitle:
description: A short description of your blog   # 博客简介

author: cser                           # Shown in profile card and footer · 显示在资料卡和页脚
author_title: 'Web Developer & Designer'
avatar: css/images/avatar.png          # Relative to theme source/ · 相对于主题 source/ 目录
location: 'Your City, Country'
follow: https://github.com/cser        # Follow button URL · 关注按钮链接
language: en                           # en | zh-CN | ja | id
since: 2024                            # Copyright start year · 版权起始年份
```

### URL

```yaml
url: https://cser.github.io
root: /

# Subdirectory deployment example · 子目录部署示例:
#   url: https://cser.github.io/blog
#   root: /blog/
```

### Pagination · 分页

```yaml
per_page: 6    # Posts per page · 每页文章数。设为 0 则禁用分页。
```

### Comments · 评论（Disqus）

```yaml
# Uncomment and fill in your Disqus shortname to enable comments.
# 取消注释并填入 Disqus shortname 以启用评论功能。
# disqus_shortname: your-shortname
```

> Once set, comments are enabled on all posts by default.
> To disable on a specific post, add `comments: false` to its front-matter.
>
> 设置后，所有文章默认开启评论。若要在某篇文章中关闭，在其头信息中添加 `comments: false`。

### Deployment · 部署

```bash
npm install hexo-deployer-git --save
```

```yaml
deploy:
  type: git
  repository: https://github.com/cser/cser-blog.git
  branch: gh-pages
```

---

## Post Front-matter · 文章头信息

All fields are optional unless marked required · 除标注"必填"外均为可选：

```yaml
---
title: My Post Title        # (required · 必填) Post title · 文章标题
date: 2024-06-01            # (required · 必填) Publication date · 发布日期
updated: 2024-06-15         # Last updated date · 最后更新日期
categories:
  - Tech                    # Category · 分类（支持多级嵌套）
tags:
  - hexo
  - tutorial
thumbnail: /images/thumb.jpg   # Thumbnail in sidebar & archive · 侧边栏和归档页缩略图
banner: /images/banner.jpg     # Full-width banner at post top · 文章顶部横幅图
toc: true                      # Show Table of Contents · 显示目录（默认 false）
comments: false                # Disable comments · 关闭评论（默认 true）
---
```

### Excerpt · 文章摘要

Insert `<!-- more -->` to define the excerpt break.
Only content before the marker appears on index pages.

在文章中插入 `<!-- more -->` 定义摘要截断位置，首页仅显示截断前的内容。

```markdown
This paragraph appears on the index page.
此段内容显示在首页列表中。

<!-- more -->

This paragraph only appears on the full post page.
此段内容仅在文章详情页显示。
```

### Photo Gallery · 相册

Add a `photos` list to show an inline gallery at the top of the post.
在头信息中添加 `photos` 列表，即可在文章顶部显示内联相册。

```yaml
photos:
  - /images/photo1.jpg
  - /images/photo2.jpg
  - /images/photo3.jpg
```

### Link Post · 外链文章

The post title will link directly to the external URL.
文章标题将直接链接到该外部地址。

```yaml
link: https://example.com
```

---

## Sidebar Widgets · 侧边栏组件

Edit the `widgets` list in `themes/icarus/_config.yml` to enable, disable, or reorder.
在 `themes/icarus/_config.yml` 的 `widgets` 列表中增减或调整顺序。

| Widget · 组件 | Description · 说明 |
|--------------|-------------------|
| `recent_posts` | Last 5 posts with thumbnail, category, date · 最近 5 篇文章（含缩略图、分类、日期） |
| `category` | Hierarchical category list with counts · 层级分类列表（含文章数） |
| `tag` | Flat tag list with counts · 标签列表（含文章数） |
| `tagcloud` | Tag cloud, font size scaled by post count · 标签云（字号按文章数缩放） |
| `archive` | Monthly archive navigation · 按月归档导航 |
| `links` | External links from the `links` config · 来自配置的友情链接 |

Example — minimal sidebar · 最简侧边栏示例：

```yaml
widgets:
  - recent_posts
  - category
  - archive
```

Disable sidebar entirely · 完全禁用侧边栏：

```yaml
sidebar: false
```

---

## Features · 功能说明

### Responsive Layout · 响应式布局

| Breakpoint · 断点 | Width · 宽度 | Layout · 布局 |
|-------------------|-------------|--------------|
| Mini | < 560 px | Single column, stacked nav · 单列，折叠导航 |
| Mobile | 560 – 799 px | Single column · 单列 |
| Tablet | 800 – 1199 px | Two-column (main + sidebar) · 双列（主内容 + 侧边栏） |
| Normal | ≥ 1200 px | Three-column (profile + main + sidebar) · 三列（资料 + 主内容 + 侧边栏） |

### Profile Card · 个人资料卡

On desktop (≥ 1200 px): fixed left column.
On all sizes: dropdown from the avatar icon in the top-right corner.

桌面端（≥ 1200 px）：固定左侧列；任意尺寸均可点击右上角头像展开下拉卡片。

显示内容：
- Avatar (local or Gravatar) · 头像（本地图片或 Gravatar）
- Name, title, location · 姓名、职称、所在地
- Post and tag counts · 文章数、标签数
- Social contact icons · 社交图标链接

### Image Lightbox · 图片灯箱（Fancybox）

When `fancybox: true`, all article images are automatically wrapped in Fancybox links.
设置 `fancybox: true` 后，文章中所有图片自动启用灯箱效果。

**Standard Markdown · 标准 Markdown：**

```markdown
![Caption · 图注](/images/photo.jpg)
```

**Fancybox tag · 自定义标签（支持缩略图）：**

```
{% fancybox /images/full.jpg /images/thumb.jpg Optional caption · 可选标题 %}
```

| Argument · 参数 | Required · 必填 | Description · 说明 |
|----------------|----------------|--------------------|
| `image` | Yes · 是 | Full-size image URL · 原图 URL |
| `thumbnail` | No · 否 | Thumbnail URL; defaults to `image` · 缩略图 URL，省略则使用原图 |
| `title` | No · 否 | Caption text · 图注文字 |

### Table of Contents · 文章目录

Add `toc: true` to a post's front-matter.
Headings `h1`–`h6` are indexed automatically above the article body.

在文章头信息中添加 `toc: true`，自动在文章内容顶部生成目录（索引 h1–h6 所有标题）。

### Share · 分享

Each post has a Share button that opens a popup with links to:
每篇文章底部有"分享"按钮，点击弹出分享链接：

- Twitter
- Facebook
- Pinterest

### Google Analytics 4

Add the GA4 Measurement ID to the theme config:
在主题配置中填写 GA4 跟踪 ID：

```yaml
google_analytics: G-XXXXXXXXXX
```

The tracking snippet is automatically injected into every page's `<head>`.
统计代码自动注入所有页面的 `<head>`。

### Comments · 评论（Disqus）

Add your Disqus shortname to the site config:
在站点配置中填写 Disqus shortname：

```yaml
disqus_shortname: your-shortname
```

The comment thread appears at the bottom of every post (unless `comments: false`).
评论区自动出现在所有文章底部（除非设置了 `comments: false`）。

### Syntax Highlighting · 代码高亮

Code blocks use the **Tomorrow Night** colour scheme (dark background).
No extra configuration required — Hexo's built-in highlighter handles it.

代码块使用 **Tomorrow Night** 配色（深色背景），由 Hexo 内置高亮器处理，无需额外配置。

---

## Customization · 自定义

### Custom Avatar · 自定义头像

Replace `themes/icarus/source/css/images/avatar.png` with your own (recommended 256 × 256 px),
or set a URL in the site config:

替换 `themes/icarus/source/css/images/avatar.png`（推荐 256 × 256 px），
或在站点配置中填写 URL：

```yaml
avatar: https://example.com/your-avatar.jpg
```

### Custom Logo · 自定义 Logo

Replace `themes/icarus/source/css/images/logo.png`, or point the theme config elsewhere:
替换 `themes/icarus/source/css/images/logo.png`，或在主题配置中指向其他路径：

```yaml
logo: css/images/logo.png
```

Leave `logo:` blank to show only the site title text.
`logo:` 留空则只显示文字标题。

### Custom Stylesheet · 自定义样式

1. Create · 新建 `themes/icarus/source/css/custom.css`
2. Reference it in the theme config · 在主题配置中引用：

```yaml
customstylesheet: custom.css
```

Loaded after the main stylesheet — rules here override defaults.
在主样式表之后加载，此处规则会覆盖默认样式。

### Adding a Language · 添加语言

1. Copy `themes/icarus/languages/en.yml` to a new file · 复制为新文件，如 `fr.yml`
2. Translate all values · 翻译所有值
3. Set the language in your site config · 在站点配置中指定语言：

```yaml
language: fr
```

---

## i18n · 国际化

| Code · 语言代码 | Language · 语言 |
|----------------|----------------|
| `en` | English · 英语（默认） |
| `zh-CN` | Simplified Chinese · 简体中文 |
| `ja` | Japanese · 日语 |
| `id` | Indonesian · 印度尼西亚语 |

Set the active language in `_config.yml` · 在站点 `_config.yml` 中设置：

```yaml
language: zh-CN
```

Translation keys are defined in · 翻译键值文件位于 `themes/icarus/languages/<code>.yml`。

---

## Development · 开发

### Install build tools · 安装构建工具

```bash
cd themes/icarus
npm install
```

### Grunt tasks · Grunt 构建任务

Downloads Font Awesome and Fancybox from GitHub and copies them into the theme.
从 GitHub 下载 Font Awesome 和 Fancybox 并复制到主题目录。

| Command · 命令 | Description · 说明 |
|---------------|-------------------|
| `npx grunt` | Download all dependencies · 下载所有依赖 |
| `npx grunt fontawesome` | Download Font Awesome only · 仅下载 Font Awesome |
| `npx grunt fancybox` | Download Fancybox only · 仅下载 Fancybox |
| `npx grunt clean` | Remove all downloaded assets · 清除已下载的资源 |

> **Note · 注意：** Font Awesome and Fancybox are already included in the repository.
> Only run Grunt if you need to update them to a newer version.
>
> Font Awesome 和 Fancybox 已包含在仓库中，仅在需要更新版本时运行 Grunt。

### Project conventions · 项目规范

- Templates · 模板：EJS (`.ejs`)，2 空格缩进
- Styles · 样式：Stylus (`.styl`)，Hexo 自动编译为 `source/css/style.css`
- JavaScript：ES5 IIFE 写法，唯一外部依赖为 jQuery 3.x
- All external URLs must use HTTPS · 所有外部链接必须使用 HTTPS

---

## Troubleshooting · 常见问题

**Home link works but other menu paths are wrong · 首页正常但其他菜单路径不对**

Make sure `root` in `_config.yml` matches your deployment path.
For a subdirectory deploy (e.g. GitHub Pages project site):

确认 `_config.yml` 中的 `root` 与部署路径一致。子目录部署示例（如 GitHub Pages 项目页）：

```yaml
url: https://cser.github.io/myblog
root: /myblog/
```

---

**Categories or Tags pages return 404 · 分类或标签页面 404**

Copy the bundled page stubs · 复制内置页面模板：

```bash
cp -r themes/icarus/_source/categories source/
cp -r themes/icarus/_source/tags source/
```

---

**Fonts not loading · 字体无法加载**

The theme loads Open Sans and Source Code Pro from Google Fonts.
If Google Fonts is blocked on your network, replace the `<link>` tags in
`layout/_partial/head.ejs` with a self-hosted or alternative CDN.

主题从 Google Fonts 加载字体。若网络无法访问 Google Fonts，
请将 `layout/_partial/head.ejs` 中的 `<link>` 标签替换为自托管或其他 CDN 地址。

---

**Avatar not showing · 头像不显示**

Verify the path in `avatar:` is relative to the theme `source/` directory.
Default: `css/images/avatar.png` → `themes/icarus/source/css/images/avatar.png`

确认 `avatar:` 的路径相对于主题 `source/` 目录。
默认值 `css/images/avatar.png` 对应文件 `themes/icarus/source/css/images/avatar.png`。

---

**Gravatar not loading · Gravatar 头像不显示**

Set `gravatar: true` and add `email: your@email.com` in the theme `_config.yml`.
Make sure the address is registered on [gravatar.com](https://gravatar.com).

在主题 `_config.yml` 中设置 `gravatar: true`，并填写 `email: your@email.com`。
确认该邮箱已在 [gravatar.com](https://gravatar.com) 注册。

---

**Google Analytics not tracking · Google Analytics 无数据**

Confirm the Measurement ID starts with `G-` (GA4 format).
Legacy `UA-` IDs are no longer supported (Google shut down Universal Analytics in July 2023).

确认 ID 以 `G-` 开头（GA4 格式）。
旧版 `UA-` 格式的通用分析已于 2023 年 7 月停止服务。

---

**Comments not showing · 评论区不显示**

Verify `disqus_shortname` is set in `_config.yml` and that the post's
front-matter does not contain `comments: false`.

确认站点 `_config.yml` 中已设置 `disqus_shortname`，
且该文章头信息中没有 `comments: false`。

---

## License · 许可证

MIT © [Tommy Chen](https://github.com/ppoffice) — see [LICENSE](LICENSE) for details.

MIT 许可证 © [Tommy Chen](https://github.com/ppoffice) — 详见 [LICENSE](LICENSE) 文件。
