/**
 * Build script — concatenates component files into dist/index.html.
 * Run: node build.js
 * Open dist/index.html for SEO/perf testing or deploy to Cloudflare Pages / Vercel.
 */

const fs = require('fs');
const path = require('path');

const HOME_DIR = path.join(__dirname, '.src', '01-Home');
const HOME_FILE = path.join(HOME_DIR, 'home.html');
const DIST_DIR = path.join(__dirname, 'dist');
const DIST_FILE = path.join(DIST_DIR, 'index.html');

const COMPONENTS = [
  { id: 'hero-section',          file: '01 Hero.html'                  },
  { id: 'five-capabilities',     file: '02 Five Core Capabilities.html' },
  { id: 'nine-industries',       file: '04 Nine Industries.html'        },
  { id: 'how-it-works',          file: '05 How It Works.html'           },
  { id: 'responsible-ai',        file: '06 Responsible AI.html'         },
  { id: 'faq',                   file: '07 FAQ.html'                    },
  { id: 'testimonials',          file: '08 What People Say.html'        },
  { id: 'talk-to-us',            file: '11 Talk to Us.html'             },
  { id: 'footer-section',        file: '../00-Global/footer.html'       },
];

function extractBodyContent(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  // Extract styles
  const styles = [];
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  while ((match = styleRegex.exec(html)) !== null) {
    styles.push(match[1]);
  }

  // Extract scripts (that aren't tailwind or google fonts)
  const scripts = [];
  const scriptRegex = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
  while ((match = scriptRegex.exec(html)) !== null) {
    const attrs = match[1] || '';
    const code = match[2] || '';
    if (code.trim()) {
      scripts.push({ attrs, code });
    }
  }

  // Extract body content
  const bodyMatch = html.match(/<\/head>([\s\S]*)/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : html;

  const cleanContent = bodyContent
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<template[^>]*>[\s\S]*?<\/template>/gi, '')
    .replace(/<link[^>]*>/gi, '')
    .replace(/<!DOCTYPE[^>]*>/i, '')
    .replace(/<html[^>]*>/i, '')
    .replace(/<\/html>/i, '')
    .replace(/<head>[\s\S]*?<\/head>/i, '')
    .replace(/<body[^>]*>/i, '')
    .replace(/<\/body>/i, '');

  return { content: cleanContent.trim(), styles, scripts };
}

// Read the current home.html shell
let homeHtml = fs.readFileSync(HOME_FILE, 'utf-8');

// Collect all styles and scripts from components
let allStyles = '';
let allScripts = '';

COMPONENTS.forEach(({ id, file }) => {
  const filePath = path.join(HOME_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠  Missing: ${file}`);
    return;
  }

  const { content, styles, scripts } = extractBodyContent(filePath);

  // Inline the content into the container div
  const containerRegex = new RegExp(`(<div id="${id}">\\s*)</div>`);
  homeHtml = homeHtml.replace(containerRegex, `$1${content}</div>`);

  styles.forEach(s => { allStyles += s + '\n'; });
  scripts.forEach(s => { allScripts += s.code + '\n'; });
});

// Inject collected styles before the closing </head>
homeHtml = homeHtml.replace('</head>', `<style>\n${allStyles}</style>\n</head>`);

// Replace the component-loader script with the collected component scripts
homeHtml = homeHtml.replace(
  `<script src="../00-Global/component-loader.js"></script>`,
  `<script>\n${allScripts}</script>`
);

fs.mkdirSync(DIST_DIR, { recursive: true });
fs.writeFileSync(DIST_FILE, homeHtml, 'utf-8');

console.log(`✅ Built: ${DIST_FILE}`);