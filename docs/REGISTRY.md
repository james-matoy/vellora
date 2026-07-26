# AgentGenius WP UI Kit — Git Versioning Registry

> **Project:** `agentgenius-wp-ui-kit`
> **Repository path:** `C:\Dev\agentgenius-wp-ui-kit`
> **Current baseline:** v3.7.0
> **Last updated:** 2026-02-22
> **Total components:** 14

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Folder Structure](#2-folder-structure)
3. [Component Registry](#3-component-registry)
4. [Version History Per Component](#4-version-history-per-component)
5. [Git Setup Commands](#5-git-setup-commands)
6. [Migration Steps — Old Files to Git](#6-migration-steps--old-files-to-git)
7. [Branch Workflow](#7-branch-workflow)
8. [How to Work With Components Going Forward](#8-how-to-work-with-components-going-forward)
9. [Versioning Rules](#9-versioning-rules)
10. [Useful Git Commands for This Project](#10-useful-git-commands-for-this-project)

---

## 1. Project Overview

AgentGenius WP UI Kit is a collection of 14 HTML UI components for a WordPress-based project. Previously versioned manually using filename prefixes (`v3.0 Component.html`, `v3.1 Component.html`, etc.). This document establishes the Git-based versioning system that replaces all manual filename versioning.

**Key rule:** No version numbers in filenames ever again. Git tracks all versions internally. Every `.txt` file from the old system is treated as `.html` — content files are components too.

---

## 2. Folder Structure

```
C:\Dev\agentgenius-wp-ui-kit\
│
├── components\
│   ├── aria-chatbot\
│   │   └── aria-chatbot.html
│   ├── core-capabilities\
│   │   └── core-capabilities.html
│   ├── how-it-works\
│   │   └── how-it-works.html
│   ├── industries\
│   │   └── industries.html
│   ├── map\
│   │   └── map.html
│   ├── messagebox\
│   │   └── messagebox.html
│   ├── mission-table\
│   │   └── mission-table.html
│   ├── navigation-bar\
│   │   └── navigation-bar.html
│   ├── not-automation-shop\
│   │   └── not-automation-shop.html
│   ├── responsible-ai\
│   │   └── responsible-ai.html
│   ├── search-bar\
│   │   └── search-bar.html
│   ├── tagline\
│   │   └── tagline.html
│   ├── talk-to-us-button\
│   │   └── talk-to-us-button.html
│   └── vision-card\
│       └── vision-card.html
│
├── docs\
│   ├── CHANGELOG.md
│   ├── WORKFLOW.md
│   └── REGISTRY.md          ← this file
│
├── .gitignore
└── README.md
```

---

## 3. Component Registry

All 14 components, their old filenames, current mapped filename, and latest version at time of migration.

| # | Component Name | Old Filename Pattern | New Filename | Latest Version Imported |
|---|---|---|---|---|
| 1 | Aria Chatbot | `v3.1 Aria Chatbot.html` | `aria-chatbot.html` | v3.1 |
| 2 | 5 Core Capabilities | `v3.x 5 Core Capabilities.txt/.html` | `core-capabilities.html` | v3.5 |
| 3 | How It Works | `v3.x How It Works.html` | `how-it-works.html` | v3.2 |
| 4 | 9 Industries | `v3.x 9 Industries.txt/.html` | `industries.html` | v3.5 |
| 5 | Map | `v3.x Map.html` | `map.html` | v3.1 |
| 6 | Messagebox | `v3.0 Messagebox.txt` | `messagebox.html` | v3.0 |
| 7 | Mission Table | `v3.0 Mission - Table.txt` | `mission-table.html` | v3.0 |
| 8 | Navigation Bar | `v3.0 Navigation Bar.txt` | `navigation-bar.html` | v3.0 |
| 9 | Not Automation Shop | `v3.0 Not a Automation Shop.txt` | `not-automation-shop.html` | v3.0 |
| 10 | Responsible AI | `v3.x Responsible AI.txt/.html` | `responsible-ai.html` | v3.7 |
| 11 | Search Bar | `v3.x Search Bar.txt/.html` | `search-bar.html` | v3.1 |
| 12 | Tagline | `v3.x Tagline.txt` | `tagline.html` | v3.1 |
| 13 | Talk to Us Button | `v3.0 Talk to us - Button.txt` | `talk-to-us-button.html` | v3.0 |
| 14 | Vision Card | `v3.x Vision - Card.txt` | `vision-card.html` | v3.1 |

> **Note on .txt files:** All `.txt` files from the old system were content/component drafts. They are imported as `.html` files in the new system. Treat them identically to `.html` components.

---

## 4. Version History Per Component

This section maps every version that existed in the old manual system. These become the **commit history** during migration — one commit per version, oldest to newest.

### aria-chatbot.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.1 | `v3.1 Aria Chatbot.html` | 2025-12-28 | Only version found — first appearance |

### core-capabilities.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.1 | `v3.1 5 Core Capabilities.txt` | 2025-12-25 | Initial, .txt format |
| v3.2 | `v3.2 5 Core Capabilities.txt` | 2025-12-26 | Updated content |
| v3.3 | `v3.3 5 Core Capabilities.txt` | 2026-01-07 | Further revision |
| v3.4 | `v3.4 5 Core Capabilities.html` | 2025-12-28 | Converted to HTML |
| v3.5 | `v3.5 5 Core Capabilities.html` | 2026-01-04 | **Latest — import this** |

### how-it-works.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 How It Works.html` | 2025-12-28 | Initial |
| v3.1 | `v3.1 How It Works.html` | 2025-12-28 | Revision |
| v3.2 | `v3.2 How It Works.html` | 2026-01-05 | **Latest — import this** |

### industries.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.1 | `v3.1 9 Industries.txt` | 2025-12-21 | Initial, .txt format |
| v3.2 | `v3.2 9 Industries.txt` | 2025-12-24 | Revision |
| v3.3 | `v3.3 9 Industries.html` | 2025-12-28 | Converted to HTML |
| v3.4 | `v3.4 9 Industries.html` | 2025-12-28 | Revision |
| v3.5 | `v3.5 9 Industries.html` | 2026-01-04 | **Latest — import this** |

### map.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Map.html` | 2025-12-28 | Initial |
| v3.1 | `v3.1 Map.html` | 2025-12-28 | **Latest — import this** |

### messagebox.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Messagebox.txt` | 2025-12-20 | **Only version — import this** |

### mission-table.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Mission - Table.txt` | 2025-12-25 | **Only version — import this** |

### navigation-bar.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Navigation Bar.txt` | 2025-12-20 | **Only version — import this** |

### not-automation-shop.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Not a Automation Shop.txt` | 2025-12-25 | **Only version — import this** |

### responsible-ai.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Responsible AI.txt` | 2025-12-20 | Initial, .txt format |
| v3.1 | `v3.1 Responsible AI.txt` | 2025-12-21 | Revision |
| v3.2 | `v3.2 Responsible AI.txt` | 2025-12-21 | Revision |
| v3.3 | `v3.3 Responsible AI.txt` | 2025-12-23 | Revision |
| v3.4 | `v3.4 Responsible AI.txt` | 2025-12-25 | Revision |
| v3.5 | `v3.5 Responsible AI.txt` | 2025-12-26 | Revision |
| v3.6 | `v3.6 Responsible Ai.html` | 2025-12-28 | Converted to HTML |
| v3.7 | `v3.7 Responsible AI.html` | 2026-01-04 | **Latest — import this** |

### search-bar.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Search Bar.txt` | 2025-12-20 | Initial, .txt format |
| v3.1 | `v3.1 Search Bar.html` | 2025-12-28 | **Latest — import this** |

### tagline.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Tagline.txt` | 2025-12-20 | Initial, .txt format |
| v3.1 | `v3.1 Tagline.txt` | 2025-12-26 | **Latest — import this** |

### talk-to-us-button.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Talk to us - Button.txt` | 2025-12-20 | **Only version — import this** |

### vision-card.html
| Old Version | Old Filename | Date (approx) | Notes |
|---|---|---|---|
| v3.0 | `v3.0 Vision - Card.txt` | 2025-12-25 | Initial, .txt format |
| v3.1 | `v3.1 Vision - Card.txt` | 2025-12-25 | **Latest — import this** |

---

## 5. Git Setup Commands

Run these once to initialize the repository from scratch.

```bash
# ── STEP 1: Create the project folder ──────────────────────────────
mkdir C:\Dev\agentgenius-wp-ui-kit
cd C:\Dev\agentgenius-wp-ui-kit

# ── STEP 2: Create all component folders ───────────────────────────
mkdir components\aria-chatbot
mkdir components\core-capabilities
mkdir components\how-it-works
mkdir components\industries
mkdir components\map
mkdir components\messagebox
mkdir components\mission-table
mkdir components\navigation-bar
mkdir components\not-automation-shop
mkdir components\responsible-ai
mkdir components\search-bar
mkdir components\tagline
mkdir components\talk-to-us-button
mkdir components\vision-card
mkdir docs

# ── STEP 3: Initialize Git ─────────────────────────────────────────
git init
git branch -M main

# ── STEP 4: Create .gitignore ──────────────────────────────────────
echo .DS_Store > .gitignore
echo Thumbs.db >> .gitignore
echo desktop.ini >> .gitignore
echo .vscode/settings.json >> .gitignore

# ── STEP 5: Create README ──────────────────────────────────────────
echo # AgentGenius WP UI Kit > README.md
echo WordPress UI component library — 14 components, Git versioned. >> README.md

# ── STEP 6: Connect to GitHub (after creating repo on github.com) ──
git remote add origin https://github.com/YOUR_USERNAME/agentgenius-wp-ui-kit.git

# ── STEP 7: Create all branches ────────────────────────────────────
git checkout -b dev
git checkout -b test
git checkout -b qa
git checkout -b release
git checkout main

# ── STEP 8: Return to dev for daily work ───────────────────────────
git checkout dev
```

---

## 6. Migration Steps — Old Files to Git

How to bring your existing versioned files into the new system correctly, preserving the history order.

```bash
# ── Start on dev branch ────────────────────────────────────────────
git checkout dev

# ── Copy ONLY the latest version of each component ─────────────────
# Rename as you copy — remove version prefix, use new filename

# Example (do this for each component):
# Old: "v3.7 Responsible AI.html"
# New: components\responsible-ai\responsible-ai.html

# After copying all 14 latest files:
git add .
git commit -m "feat: initial import of all 14 UI components at baseline v3.7.0

Components imported:
- aria-chatbot (from v3.1)
- core-capabilities (from v3.5)
- how-it-works (from v3.2)
- industries (from v3.5)
- map (from v3.1)
- messagebox (from v3.0)
- mission-table (from v3.0)
- navigation-bar (from v3.0)
- not-automation-shop (from v3.0)
- responsible-ai (from v3.7)
- search-bar (from v3.1)
- tagline (from v3.1)
- talk-to-us-button (from v3.0)
- vision-card (from v3.1)"

# ── Tag the baseline ───────────────────────────────────────────────
git tag -a v3.7.0 -m "Baseline import — all components at their latest manual version"

# ── Push everything ────────────────────────────────────────────────
git push origin dev
git push origin --tags
```

---

## 7. Branch Workflow

```
dev ──────────────────────────────────────────────→  daily work
  └── bug/BUG-01   reproduce a component issue
  └── fix/BUG-01   fix the component
        └──→ test  automated/manual checks
              └──→ qa  sign-off checklist
                    └──→ release  final staging
                           └──→ main  stable, tagged

main ──→ hotfix/001  emergency fix to a live component
              └──→ main  (also merge back to dev)
```

### Branch purposes for this UI project

| Branch | Purpose in this project |
|---|---|
| `main` | Stable, tagged, production-ready components |
| `release` | Final review before tagging a new version |
| `qa` | Visual QA — check components render correctly |
| `test` | Structural checks — valid HTML, no broken links |
| `dev` | Where all new component work starts |
| `fix/BUG-XX` | Fix a specific component issue |
| `bug/BUG-XX` | Reproduce a reported component bug |
| `hotfix/XX` | Emergency fix to a live production component |

---

## 8. How to Work With Components Going Forward

### Making a change to a component

```bash
# 1. Start on dev
git checkout dev
git pull origin dev

# 2. Edit the component file directly
#    e.g. components\responsible-ai\responsible-ai.html

# 3. Commit with a clear message
git add components/responsible-ai/responsible-ai.html
git commit -m "feat(responsible-ai): update hero section copy and CTA button style"

# 4. Push to dev
git push origin dev
```

### Viewing the full history of one component

```bash
# See every commit that touched responsible-ai.html
git log --oneline components/responsible-ai/responsible-ai.html

# See what it looked like at a specific commit
git show abc1234:components/responsible-ai/responsible-ai.html

# See what changed between two commits
git diff abc1234 def5678 components/responsible-ai/responsible-ai.html

# Restore it to how it looked at a specific tag
git checkout v3.7.0 -- components/responsible-ai/responsible-ai.html
```

### Releasing a new version

```bash
# After dev → test → qa → release all pass:
git checkout main
git merge release
git tag -a v3.8.0 -m "Release v3.8.0 — updated core-capabilities and industries components"
git push origin main
git push origin --tags
```

---

## 9. Versioning Rules

Since you're already at v3.7.0, continue from here:

| Change type | Bump | Example | When to use |
|---|---|---|---|
| Typo fix, minor copy edit | PATCH | v3.7.0 → v3.7.1 | Small tweak to one component |
| Updated component, new section | MINOR | v3.7.0 → v3.8.0 | Meaningful update to one or more components |
| Full redesign, new component added | MINOR+ | v3.7.0 → v3.8.0 | New component added to the kit |
| Complete visual overhaul / rebrand | MAJOR | v3.7.0 → v4.0.0 | Everything changes significantly |

### Commit message format

```
feat(component-name): what you did
fix(component-name): what you fixed
chore: non-component change (docs, gitignore, etc.)
style(component-name): visual/CSS only change
content(component-name): copy/text change only
```

Examples:
```
feat(aria-chatbot): add mobile responsive breakpoints
fix(responsible-ai): correct broken anchor link in CTA section
content(tagline): update headline copy per client feedback
style(core-capabilities): adjust card padding and font size
chore: update CHANGELOG for v3.8.0
```

---

## 10. Useful Git Commands for This Project

```bash
# See all components and their last-modified commit
git log --oneline --name-only

# See all version tags
git tag -l

# See what changed in the last release
git diff v3.7.0 v3.8.0

# List all components that changed between two versions
git diff --name-only v3.7.0 v3.8.0

# Undo the last commit (keeps your file changes)
git reset --soft HEAD~1

# Temporarily save unfinished work and switch branches
git stash
git stash pop

# See which branch you are on
git branch

# See full status of all files
git status

# Pull latest from dev before starting work
git pull origin dev
```

---

## Changelog

### v3.7.0 — 2026-02-22
- Initial Git migration from manual filename versioning system
- All 14 components imported at their latest version
- Repository structure established at `C:\Dev\agentgenius-wp-ui-kit`
- All `.txt` format components converted and treated as `.html`

---

*This file is the master registry for the AgentGenius WP UI Kit versioning system. Update the Changelog section every time a new version is tagged.*
