/**
 * Component Loader — loads HTML component files into home.html at runtime.
 * Changes to component files are reflected automatically on page refresh.
 */

const COMPONENTS = [
  { id: 'hero-section',          path: '01-hero.html'                  },
  { id: 'five-capabilities',     path: '03-pillars-of-service.html'    },
  { id: 'nine-industries',       path: '04-real-estate-solutions.html' },
  { id: 'how-it-works',          path: '05-how-it-works.html'          },
  { id: 'responsible-ai',        path: '10-trust-and-security.html'    },
  { id: 'faq',                   path: '09-faq.html'                   },
  { id: 'testimonials',          path: '07-testimonials.html'          },
  { id: 'talk-to-us',            path: '11 Talk to Us.html'             },
  { id: 'footer-section',        path: '../00-Global/footer.html'       },
];

async function loadComponent({ id, path }) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    const container = document.getElementById(id);
    if (!container) {
      console.warn(`[ComponentLoader] No container found for #${id}`);
      return;
    }

    // Extract <style> blocks and append to <head>
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    let match;
    while ((match = styleRegex.exec(html)) !== null) {
      const styleTag = document.createElement('style');
      styleTag.textContent = match[1];
      document.head.appendChild(styleTag);
    }

    // Extract <script> blocks
    const scriptRegex = /<script([^>]*)>([\s\S]*?)<\/script>/gi;
    const scriptsToInject = [];
    while ((match = scriptRegex.exec(html)) !== null) {
      scriptsToInject.push({ attrs: match[1], code: match[2] });
    }

    // Extract body content (everything after </head>)
    const bodyMatch = html.match(/<\/head>([\s\S]*)/i);
    const bodyContent = bodyMatch ? bodyMatch[1] : html;

    // Remove <style>, <script>, <template>, <link>, DOCTYPE, <html>, <head>, <body> tags
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

    container.innerHTML = cleanContent.trim();

    // Execute scripts
    scriptsToInject.forEach(({ attrs, code }) => {
      if (code.trim()) {
        const script = document.createElement('script');
        if (attrs.includes('src=')) {
          const srcMatch = attrs.match(/src=["']([^"']+)["']/);
          if (srcMatch) script.src = srcMatch[1];
        }
        script.textContent = `
          (function() {
            var _dl = document.addEventListener.bind(document);
            document.addEventListener = function(type, fn) {
              if (type === 'DOMContentLoaded' && document.readyState !== 'loading') {
                fn();
              } else {
                _dl(type, fn);
              }
            };
            ${code}
            document.addEventListener = _dl;
          })();
        `;
        document.body.appendChild(script);
      }
    });

    console.log(`[ComponentLoader] Loaded: ${path}`);
  } catch (err) {
    console.error(`[ComponentLoader] Failed to load ${path}:`, err);
  }
}

async function loadAllComponents() {
  await Promise.all(COMPONENTS.map(loadComponent));
}

// Wait for DOM, then load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadAllComponents);
} else {
  loadAllComponents();
}