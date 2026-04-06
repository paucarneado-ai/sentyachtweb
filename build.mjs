/**
 * SentYacht — Static Site Build Script
 * Compiles templates + partials + data → static HTML pages.
 * Run: node build.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = dirname(__filename);

// ─── Load Data ───
const boatsCode = readFileSync(join(ROOT, 'boats.js'), 'utf-8');
const modifiedCode = boatsCode.replace(/^const /gm, 'var ');
const getBoats = new Function(modifiedCode + '\nreturn boats;');
const rawBoats = getBoats();

const { default: copy } = await import('./src/content/copy.mjs');

// ─── Enrich boats at build time (no modification to boats.js) ───
const FEATURED_SLUGS = [
  'astondoa-82-glx-2008',
  'sunseeker-manhattan-50-2004',
  'hanse-470-2007',
  'grand-banks-38-eastbay-ex-2002',
];

const boats = rawBoats.map(boat => ({
  ...boat,
  status: 'active',
  featured: FEATURED_SLUGS.includes(boat.slug),
}));

// ─── File Helpers ───
function readTemplate(name) {
  return readFileSync(join(ROOT, 'src/templates', name), 'utf-8');
}

function readPartial(name) {
  return readFileSync(join(ROOT, 'src/partials', name), 'utf-8');
}

function ensureDir(filePath) {
  mkdirSync(dirname(filePath), { recursive: true });
}

// ─── Template Engine ───
function compilePartials(html) {
  return html.replace(/\{\{>\s*([\w-]+)\s*\}\}/g, (_, name) => {
    return readPartial(name + '.html');
  });
}

function compileVars(html, vars) {
  return html.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return vars[key] !== undefined ? String(vars[key]) : '';
  });
}

function compile(template, vars) {
  let result = compilePartials(template);
  result = compileVars(result, vars);
  return result;
}

// ─── Format Helpers ───
function formatPrice(price) {
  if (!price) return 'Precio a consultar';
  return new Intl.NumberFormat('es-ES').format(price) + ' \u20AC';
}

function formatPriceEN(price) {
  if (!price) return 'Price on request';
  return '\u20AC' + new Intl.NumberFormat('en-GB').format(price);
}

// ─── Image Optimization Manifest ───
import { existsSync } from 'fs';
const MANIFEST_PATH = join(ROOT, 'assets', 'opt', 'manifest.json');
let imgManifest = {};
if (existsSync(MANIFEST_PATH)) {
  try { imgManifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8')); } catch (e) { /* skip */ }
}

// ─── HTML Generators ───
function encodeImgPath(p) {
  return '/assets/' + p.split('/').map(s => encodeURIComponent(s)).join('/');
}

/**
 * Generate an optimized <img> tag using the manifest.
 * Falls back to original if no optimized version exists.
 */
function optimizedImg(originalPath, alt, loading = 'lazy', sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw') {
  // Normalize path separators for cross-platform manifest lookup
  const normalizedPath = originalPath.replace(/\\/g, '/');
  const entry = imgManifest[originalPath] || imgManifest[normalizedPath] || imgManifest[originalPath.replace(/\//g, '\\')];
  if (!entry || !entry.variants || Object.keys(entry.variants).length === 0) {
    // Fallback to original
    return `<img src="${encodeImgPath(originalPath)}" alt="${alt}" loading="${loading}">`;
  }

  const variants = entry.variants;
  const widths = Object.keys(variants).map(Number).sort((a, b) => a - b);
  const srcset = widths.map(w => `/assets/${variants[w].path.replace(/\\/g, '/')} ${w}w`).join(', ');
  // Default src: use the 800w variant, or the largest available
  const defaultWidth = widths.includes(800) ? 800 : widths[widths.length - 1];
  const defaultSrc = `/assets/${variants[defaultWidth].path.replace(/\\/g, '/')}`;
  const w = entry.width;
  const h = entry.height;
  const blur = entry.blur || '';
  const blurStyle = blur ? ` style="background: url(${blur}) center/cover no-repeat"` : '';

  return `<img src="${defaultSrc}" srcset="${srcset}" sizes="${sizes}" alt="${alt}" width="${w}" height="${h}" loading="${loading}" decoding="async"${blurStyle}>`;
}

function generateBoatCard(boat, lang) {
  const c = copy[lang];
  const detailHref = lang === 'es'
    ? `/es/barcos/${boat.slug}/`
    : `/en/boats/${boat.slug}/`;
  const price = lang === 'es' ? formatPrice(boat.price) : formatPriceEN(boat.price);
  const typeLabel = lang === 'es'
    ? (boat.type === 'motor' ? 'Motor' : 'Velero')
    : (boat.type === 'motor' ? 'Motor' : 'Sailing');
  const cardImg = boat.images && boat.images.length
    ? optimizedImg(boat.images[0], `${boat.name} — ${boat.year}`, 'lazy', '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw')
    : '<img src="https://placehold.co/800x600" alt="No image">';

  return `
      <a href="${detailHref}" class="boat-card reveal" data-delay="{{delay}}" aria-label="${boat.name}">
        <div class="boat-card-image">
          ${cardImg}
        </div>
        <div class="p-5 lg:p-6">
          <div class="flex items-baseline justify-between mb-2">
            <span class="text-[11px] uppercase tracking-[0.15em] text-text-muted">${boat.brand} · ${typeLabel}</span>
            <span class="text-[11px] text-text-muted">${boat.length}m</span>
          </div>
          <h3 class="font-serif text-xl text-text leading-snug mb-1">${boat.name}</h3>
          <p class="text-sm text-text-secondary mb-3">${boat.year} · ${boat.cabins || '—'} cab. · ${boat.location}</p>
          <div class="flex items-center justify-between pt-3 border-t border-border-light">
            <span class="font-serif text-lg text-accent tracking-tight" style="font-feature-settings: 'tnum';">${price}</span>
            <span class="text-xs text-text-muted flex items-center gap-1">${c.boatCard.viewDetails} <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg></span>
          </div>
        </div>
      </a>`;
}

function generateFeaturedBoats(lang) {
  const featured = boats.filter(b => b.featured);
  return featured.map((boat, i) => {
    return generateBoatCard(boat, lang).replace('{{delay}}', String(i * 100));
  }).join('\n');
}

function generateTrustPoints(lang) {
  const c = copy[lang];
  const icons = [
    '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>',
    '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>',
  ];

  return c.trust.points.map((point, i) => `
      <div class="border-l-4 border-gold p-5 rounded-sm reveal" data-delay="${i * 60}" style="background: rgba(255,255,255,0.04);">
        <div class="flex gap-4 items-start">
          <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-sm" style="background: rgba(184, 148, 79, 0.15);">
            <svg class="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">${icons[i]}</svg>
          </div>
          <div>
            <h3 class="font-serif text-lg text-white mb-1" style="font-weight:500;">${point.label}</h3>
            <p class="text-sm leading-relaxed" style="color: rgba(255,255,255,0.65);">${point.desc}</p>
          </div>
        </div>
      </div>`).join('\n');
}

function generateSellerSteps(lang) {
  const c = copy[lang];
  return c.sellerCapture.steps.map((step, i) => `
      <div class="text-center reveal" data-delay="${i * 100}">
        <div class="w-10 h-10 mx-auto flex items-center justify-center border-2 border-gold text-gold font-serif text-lg rounded-full mb-4">${step.num}</div>
        <h3 class="font-serif text-xl text-text mb-2">${step.title}</h3>
        <p class="text-sm text-text-secondary leading-relaxed">${step.desc}</p>
      </div>`).join('\n');
}

function generateCategoryCards(lang) {
  const c = copy[lang];
  const motorCount = boats.filter(b => b.type === 'motor').length;
  const sailCount = boats.filter(b => b.type !== 'motor').length;

  // Use specific images for category cards
  const motorBoat = boats.find(b => b.type === 'motor');
  const sailBoat = boats.find(b => b.type !== 'motor');
  const motorImgPath = 'imagenes web/astondoa-72-glx/hf_20260321_025246_1d7f54eb-b8a3-4d8f-8176-4e561b1b4ab1.jpeg';
  const sailImgPath = sailBoat ? sailBoat.images[0] : null;

  const countLabel = lang === 'es' ? 'embarcaciones' : 'boats';

  return `
      <a href="${c.categories.motor.href}" class="category-card reveal" data-delay="0">
        ${optimizedImg(motorImgPath, c.categories.motor.label, 'lazy', '(max-width: 768px) 100vw, 50vw')}
        <div class="absolute inset-0 z-10 flex flex-col justify-end p-6 lg:p-8">
          <h3 class="font-serif text-2xl lg:text-3xl text-white">${c.categories.motor.label}</h3>
          <p class="text-white/70 text-sm mt-1">${motorCount} ${countLabel}</p>
        </div>
      </a>
      <a href="${c.categories.sail.href}" class="category-card reveal" data-delay="100">
        ${sailImgPath ? optimizedImg(sailImgPath, c.categories.sail.label, 'lazy', '(max-width: 768px) 100vw, 50vw') : '<img src="https://placehold.co/800x600" alt="' + c.categories.sail.label + '">'}
        <div class="absolute inset-0 z-10 flex flex-col justify-end p-6 lg:p-8">
          <h3 class="font-serif text-2xl lg:text-3xl text-white">${c.categories.sail.label}</h3>
          <p class="text-white/70 text-sm mt-1">${sailCount} ${countLabel}</p>
        </div>
      </a>`;
}

// ─── Contact block for placeholder pages ───
function generateContactBlock(lang) {
  const c = copy[lang].contact;
  return `
    <div class="mt-10 pt-8 border-t border-border-light">
      <div class="flex flex-col gap-2 text-sm text-text-secondary">
        <p>${c.address}</p>
        <p>${c.city}</p>
        <a href="tel:${c.phoneTel}" class="hover:text-accent" style="transition: color 0.3s;">${c.phone}</a>
        <a href="mailto:${c.email}" class="hover:text-accent" style="transition: color 0.3s;">${c.email}</a>
        <a href="${c.whatsapp}" class="hover:text-accent" style="transition: color 0.3s;" target="_blank" rel="noopener">${c.whatsappLabel}</a>
      </div>
    </div>`;
}

// ─── Structured Data for Home ───
function generateHomeStructuredData() {
  return `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": "https://www.sentyacht.com/#organization",
    "name": "SentYacht",
    "description": "Compraventa y asesoramiento náutico con trato directo desde El Masnou.",
    "url": "https://sentyacht.com/",
    "telephone": "+34609865215",
    "email": "info@sentyacht.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Port Esportiu, Local 49",
      "addressLocality": "El Masnou",
      "postalCode": "08320",
      "addressRegion": "Barcelona",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.481395,
      "longitude": 2.316062
    },
    "founder": {
      "@type": "Person",
      "name": "Jordi Senties"
    },
    "priceRange": "EUR"
  }
  </script>`;
}

// ─── Related Boats Scoring ───
function getRelatedBoats(currentSlug, count = 3) {
  const current = boats.find(b => b.slug === currentSlug);
  if (!current) return [];
  const others = boats.filter(b => b.slug !== currentSlug);
  if (others.length === 0) return [];

  return others
    .map(b => {
      let score = 0;
      // Same type: +3
      if (b.type === current.type) score += 3;
      // Similar length (within ±30%): +2
      if (Math.abs(b.length - current.length) / current.length <= 0.3) score += 2;
      // Similar price (within ±50%): +1
      if (current.price && b.price && Math.abs(b.price - current.price) / current.price <= 0.5) score += 1;
      return { boat: b, score };
    })
    .sort((a, b) => b.score - a.score || b.boat.price - a.boat.price)
    .slice(0, count)
    .map(r => r.boat);
}

// ─── Listings Page Generators ───
function generateLocationOptions(lang) {
  const locations = [...new Set(boats.map(b => b.location))].sort();
  return locations.map(loc => `<option value="${loc}">${loc}</option>`).join('\n            ');
}

// ─── Detail Page Generators ───
function generateGallerySlides(boat) {
  if (!boat.images || boat.images.length === 0) {
    return '<div><img src="https://placehold.co/1200x800" alt="No image available"></div>';
  }
  return boat.images.map((img, i) => {
    const imgTag = optimizedImg(img, `${boat.name} — photo ${i + 1} of ${boat.images.length}`, i === 0 ? 'eager' : 'lazy', '100vw');
    return `<div>${imgTag}</div>`;
  }).join('\n          ');
}

function generateGalleryThumbs(boat) {
  if (!boat.images || boat.images.length <= 1) return '';
  return boat.images.map((img, i) =>
    `<button class="gallery-thumb" onclick="galleryGoTo(${i})" aria-label="Image ${i + 1}"><img src="${encodeImgPath(img)}" alt="" loading="lazy"></button>`
  ).join('\n      ');
}

function generateSpecsRows(boat, lang) {
  const specs = boat.specs && boat.specs[lang];
  if (!specs) return '';
  return Object.entries(specs)
    .filter(([_, val]) => val != null && val !== '')
    .map(([key, val]) =>
      `<div class="specs-row"><span class="specs-label">${key}</span><span class="specs-value">${val}</span></div>`
    ).join('\n            ');
}

function generateSummaryPills(boat, lang) {
  const pills = [];
  if (boat.cabins) {
    pills.push(lang === 'es' ? `${boat.cabins} cab.` : `${boat.cabins} cab.`);
  }
  if (boat.engines) pills.push(boat.engines);
  return pills.map(p =>
    `<span class="inline-flex items-center px-3 py-1 bg-surface-alt border border-border-light rounded-sm text-xs">${p}</span>`
  ).join('\n        ');
}

function generateExtendedGallery(boat, lang) {
  if (!boat.images || boat.images.length <= 3) return '';
  const c = copy[lang];
  const images = boat.images.slice(0, 24); // Cap at 24 for performance
  return `
<section class="py-12 bg-surface-alt">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 class="font-serif text-2xl text-text mb-6">${c.detail.extendedGalleryTitle}</h2>
    <div class="extended-gallery">
      ${images.map((img, i) => `<a href="#" onclick="event.preventDefault(); openLightbox(${i})" role="button">${optimizedImg(img, `${boat.name} — photo ${i + 1} of ${images.length}`, 'lazy', '(max-width: 640px) 50vw, 200px')}</a>`).join('\n      ')}
    </div>
  </div>
</section>`;
}

function generateRelatedBoatsSection(boat, lang) {
  const related = getRelatedBoats(boat.slug, 3);
  if (related.length === 0) return '';
  const c = copy[lang];
  const cards = related.map((rb, i) => generateBoatCard(rb, lang).replace('{{delay}}', String(i * 100))).join('\n');
  return `
<section class="py-16 bg-base">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 class="font-serif text-2xl lg:text-3xl text-text text-center mb-10">${c.detail.relatedTitle}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      ${cards}
    </div>
  </div>
</section>`;
}

// ─── Detail Page Accordions ───
function generateDetailAccordions(boat, lang) {
  const isES = lang === 'es';
  const sections = [];

  // 1. Equipamiento (Descripción is shown in the main specs/description area, not duplicated here)
  const equip = boat.equipment && boat.equipment[lang];
  if (equip && Object.keys(equip).length > 0) {
    let equipHTML = '';
    for (const [category, items] of Object.entries(equip)) {
      if (items && items.length > 0) {
        equipHTML += `<div class="mb-4"><h4 class="text-sm font-medium text-text mb-2">${category}</h4><div class="flex flex-wrap gap-2">${items.map(item => `<span class="inline-block text-xs text-text-secondary bg-surface-alt border border-border-light px-2.5 py-1 rounded-sm">${item}</span>`).join('')}</div></div>`;
      }
    }
    if (equipHTML) {
      sections.push({
        title: isES ? 'Equipamiento' : 'Equipment',
        content: equipHTML,
      });
    }
  }

  // 3. Motorización / Propulsión
  const prop = boat.propulsion && boat.propulsion[lang];
  if (prop && prop.motors && prop.motors.length > 0) {
    const motorLabel = isES ? 'Motor' : 'Engine';
    let propHTML = '';
    if (prop.potenciaTotal || prop.totalPower) {
      const totalLabel = isES ? 'Potencia total' : 'Total power';
      propHTML += `<div class="mb-4 pb-3 border-b border-border-light"><span class="text-sm text-text-secondary">${totalLabel}:</span> <span class="text-sm font-medium text-text">${prop.potenciaTotal || prop.totalPower}</span></div>`;
    }
    prop.motors.forEach((motor, idx) => {
      const num = prop.motors.length > 1 ? ` ${idx + 1}` : '';
      propHTML += `<div class="mb-4"><h4 class="text-sm font-medium text-text mb-2">${motorLabel}${num}</h4><div class="grid grid-cols-2 gap-x-6 gap-y-1.5">`;
      const fields = isES
        ? [['Marca', motor.marca], ['Modelo', motor.modelo], ['Potencia', motor.potencia], ['Horas', motor.horas], ['Combustible', motor.combustible], ['Tipo', motor.tipo], ['Transmisión', motor.transmision], ['Hélice', motor.helice]]
        : [['Brand', motor.brand], ['Model', motor.model], ['Power', motor.power], ['Hours', motor.hours], ['Fuel', motor.fuel], ['Type', motor.type], ['Transmission', motor.transmission], ['Propeller', motor.propeller]];
      fields.forEach(([label, val]) => {
        if (val) propHTML += `<div class="specs-row" style="padding: 0.375rem 0; font-size: 0.8125rem;"><span class="specs-label">${label}</span><span class="specs-value">${val}</span></div>`;
      });
      propHTML += '</div></div>';
    });
    sections.push({
      title: isES ? 'Motorización / Propulsión' : 'Engine / Propulsion',
      content: propHTML,
    });
  }

  // 4. Medidas
  const meas = boat.measurements && boat.measurements[lang];
  if (meas && Object.keys(meas).length > 0) {
    let measHTML = '<div class="grid sm:grid-cols-2 gap-x-8">';
    const entries = Object.entries(meas).filter(([_, v]) => v);
    const half = Math.ceil(entries.length / 2);
    const col1 = entries.slice(0, half);
    const col2 = entries.slice(half);
    measHTML += '<div>';
    col1.forEach(([k, v]) => { measHTML += `<div class="specs-row" style="padding: 0.375rem 0; font-size: 0.8125rem;"><span class="specs-label">${k}</span><span class="specs-value">${v}</span></div>`; });
    measHTML += '</div><div>';
    col2.forEach(([k, v]) => { measHTML += `<div class="specs-row" style="padding: 0.375rem 0; font-size: 0.8125rem;"><span class="specs-label">${k}</span><span class="specs-value">${v}</span></div>`; });
    measHTML += '</div></div>';
    sections.push({
      title: isES ? 'Medidas' : 'Measurements',
      content: measHTML,
    });
  }

  if (sections.length === 0) return '';

  return sections.map((s, i) => {
    const openClass = s.open ? ' open' : '';
    return `
      <div class="faq-item${openClass}">
        <button class="faq-trigger" onclick="toggleFaq(this)" aria-expanded="${s.open ? 'true' : 'false'}">
          ${s.title}
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="faq-content"${s.open ? ' style="max-height: 2000px;"' : ''}><div class="faq-content-inner">${s.content}</div></div>
      </div>`;
  }).join('\n');
}

function generateBoatStructuredData(boat, lang) {
  const price = boat.price ? `"price": "${boat.price}", "priceCurrency": "EUR"` : `"price": "0", "priceCurrency": "EUR"`;
  const imgUrl = boat.images && boat.images.length ? `https://sentyacht.com/assets/${boat.images[0]}` : '';
  const desc = boat.description && boat.description[lang] ? boat.description[lang] : boat.name;
  const detailUrl = lang === 'es' ? `/es/barcos/${boat.slug}/` : `/en/boats/${boat.slug}/`;
  return `
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "${boat.name}",
    "description": "${desc.replace(/"/g, '\\"')}",
    "image": "${imgUrl}",
    "url": "https://sentyacht.com${detailUrl}",
    "brand": { "@type": "Brand", "name": "${boat.brand}" },
    "offers": {
      "@type": "Offer",
      ${price},
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "SentYacht" }
    },
    "manufacturer": { "@type": "Organization", "name": "${boat.brand}" }
  }
  </script>`;
}

// ─── Sell Page Generators ───
function generateSellIntroPoints(lang) {
  const c = copy[lang].sell;
  return c.introPoints.map((text, i) => `
      <li class="flex gap-3 items-start">
        <svg class="w-5 h-5 flex-shrink-0 text-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span class="text-text-secondary leading-relaxed">${text}</span>
      </li>`).join('\n');
}

function generateSellWhyPoints(lang) {
  const c = copy[lang].sell;
  return c.whyPoints.map((p, i) => `
      <div class="reveal" data-delay="${i * 60}">
        <h3 class="font-serif text-lg text-text mb-1.5">${p.title}</h3>
        <p class="text-sm text-text-secondary leading-relaxed">${p.desc}</p>
      </div>`).join('\n');
}

function generateSellProcessSteps(lang) {
  const c = copy[lang].sell;
  return c.processSteps.map((step, i) => `
      <div class="flex gap-5 items-start reveal" data-delay="${i * 50}">
        <div class="w-9 h-9 flex-shrink-0 flex items-center justify-center border-2 border-gold text-gold font-serif text-base rounded-full">${step.num}</div>
        <div class="flex-1 pt-0.5">
          <h3 class="font-serif text-lg text-text mb-1">${step.title}</h3>
          <p class="text-sm text-text-secondary leading-relaxed">${step.desc}</p>
        </div>
      </div>`).join('\n');
}

function generateSellFaqHTML(lang) {
  const c = copy[lang].sell;
  return c.faqItems.map((item, i) => `
      <div class="faq-item">
        <button class="faq-trigger" onclick="toggleFaq(this)" aria-expanded="false">
          ${item.q}
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div class="faq-content"><div class="faq-content-inner">${item.a}</div></div>
      </div>`).join('\n');
}

// ─── Valuation Page Generators ───
function generateValWhyPoints(lang) {
  const c = copy[lang].valuation;
  return c.whyPoints.map((text, i) => `
      <li class="flex gap-3 items-start reveal" data-delay="${i * 80}">
        <svg class="w-5 h-5 flex-shrink-0 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <span class="text-text-secondary">${text}</span>
      </li>`).join('\n');
}

function generateValFactors(lang) {
  const c = copy[lang].valuation;
  return c.factorsItems.map((item, i) => `
      <div class="reveal" data-delay="${i * 80}">
        <h3 class="font-serif text-lg text-text mb-1">${item.label}</h3>
        <p class="text-sm text-text-secondary leading-relaxed">${item.desc}</p>
      </div>`).join('\n');
}

// ─── Build Shared Vars ───
function getSharedVars(lang) {
  const c = copy[lang];
  return {
    lang: c.lang,
    homeHref: lang === 'es' ? '/es/' : '/en/',
    ogLocale: lang === 'es' ? 'es_ES' : 'en_GB',
    ogImage: 'https://sentyacht.com/assets/hero%20image.jpg',
    bodyClass: 'page-light',

    // Nav
    navBuy: c.nav.buy,
    navBuyHref: c.nav.buyHref,
    navSell: c.nav.sell,
    navSellHref: c.nav.sellHref,
    navValuation: c.nav.valuation,
    navValuationHref: c.nav.valuationHref,
    navAbout: c.nav.about,
    navAboutHref: c.nav.aboutHref,
    navContact: c.nav.contact,
    navContactHref: c.nav.contactHref,
    langAlt: c.langAlt,
    langAltHref: c.langAltHref,

    // Footer
    footerTagline: c.footer.tagline,
    footerNavTitle: c.footer.navTitle,
    footerContactTitle: c.footer.contactTitle,
    footerLegalTitle: c.footer.legalTitle,
    footerHome: c.footer.home,
    footerHomeHref: c.footer.homeHref,
    footerBoats: c.footer.boats,
    footerBoatsHref: c.footer.boatsHref,
    footerSell: c.footer.sell,
    footerSellHref: c.footer.sellHref,
    footerSold: c.footer.sold,
    footerSoldHref: c.footer.soldHref,
    footerAbout: c.footer.about,
    footerAboutHref: c.footer.aboutHref,
    footerLegalNotice: c.footer.legalNotice,
    footerLegalNoticeHref: c.footer.legalNoticeHref,
    footerPrivacy: c.footer.privacy,
    footerPrivacyHref: c.footer.privacyHref,
    footerCookies: c.footer.cookies,
    footerCookiesHref: c.footer.cookiesHref,
    footerCopyright: c.footer.copyright,
    footerLocationLine: c.footer.locationLine,

    // Contact
    contactAddress: c.contact.address,
    contactCity: c.contact.city,
    contactPhone: c.contact.phone,
    contactPhoneTel: c.contact.phoneTel,
    contactEmail: c.contact.email,
    contactWhatsapp: c.contact.whatsapp,
    contactWhatsappLabel: c.contact.whatsappLabel,

    // Robots (overridden per page if needed)
    robotsMeta: 'index, follow',

    // Active nav (overridden per page)
    navBuyActive: '',
    navSellActive: '',
    navAboutActive: '',
    navContactActive: '',

    // Cookie
    cookieText: c.cookie.text,
    cookieAccept: c.cookie.accept,
    cookieReject: c.cookie.reject,
    cookieMore: c.cookie.more,
    cookieMoreHref: c.cookie.moreHref,
  };
}

// ─── Build Pages ───
function buildPage(templateName, outputPath, vars) {
  // Auto-set langAltHref to equivalent page in the other language
  if (vars.hreflangEs && vars.hreflangEn && vars.lang) {
    vars.langAltHref = vars.lang === 'es' ? vars.hreflangEn : vars.hreflangEs;
  }
  const base = readTemplate('base.html');
  const content = readTemplate(templateName);
  let page = base.replace('{{content}}', content);
  page = compile(page, vars);
  const fullPath = join(ROOT, outputPath);
  ensureDir(fullPath);
  writeFileSync(fullPath, page, 'utf-8');
  console.log(`  \u2713 ${outputPath}`);
}

// ─── Main ───
console.log('\nSentYacht Build\n' + '='.repeat(40));

for (const lang of ['es', 'en']) {
  const c = copy[lang];
  const shared = getSharedVars(lang);

  console.log(`\n[${lang.toUpperCase()}]`);

  // ── Home ──
  const homeVars = {
    ...shared,
    pageTitle: lang === 'es'
      ? 'SentYacht — Yates y Embarcaciones en Venta · El Masnou y Barcelona'
      : 'SentYacht — Yachts and Boats for Sale · El Masnou and Barcelona',
    pageDescription: lang === 'es'
      ? 'Compraventa de yates y embarcaciones con trato directo desde El Masnou. Barcos a motor y veleros seleccionados en el Mediterraneo.'
      : 'Yacht and boat brokerage with direct service from El Masnou. Selected motor and sailing yachts in the Mediterranean.',
    canonicalPath: lang === 'es' ? '/es/' : '/en/',
    hreflangEs: '/es/',
    hreflangEn: '/en/',
    headExtra: imgManifest['hero-home.jpeg'] ? `<link rel="preload" as="image" href="/assets/${(imgManifest['hero-home.jpeg'].variants[1600]?.path || 'hero-home.jpeg').replace(/\\/g, '/')}" type="image/webp">` : '<link rel="preload" as="image" href="/assets/hero-home.jpeg">',
    structuredData: generateHomeStructuredData(),
    bodyClass: '', // Home has hero — keep transparent nav

    // Hero
    heroImage: (() => {
      let img = optimizedImg('hero-home.jpeg', `SentYacht — ${c.hero.headline}`, 'eager', '100vw');
      // Merge classes and styles into a single tag (avoid duplicate attributes)
      img = img.replace('<img ', '<img class="absolute inset-0 w-full h-full object-cover hero-img" ');
      // Remove width/height — hero is sized by CSS (h-screen), explicit dims cause overflow
      img = img.replace(/ width="\d+"/, '');
      img = img.replace(/ height="\d+"/, '');
      // Merge the object-position into the existing style attribute
      img = img.replace(/style="/, 'style="object-position: center 65%; ');
      return img;
    })(),
    heroHeadline: c.hero.headline,
    heroSubline: c.hero.subline,
    heroCTA1: c.hero.cta1,
    heroCTA1Href: c.hero.cta1Href,
    heroCTA2: c.hero.cta2,
    heroCTA2Href: c.hero.cta2Href,

    // Dual CTA
    dualBuyTitle: c.dualCTA.buyTitle,
    dualBuyText: c.dualCTA.buyText,
    dualBuyCTA: c.dualCTA.buyCTA,
    dualBuyHref: c.dualCTA.buyHref,
    dualSellTitle: c.dualCTA.sellTitle,
    dualSellText: c.dualCTA.sellText,
    dualSellCTA: c.dualCTA.sellCTA,
    dualSellHref: c.dualCTA.sellHref,

    // Featured
    featuredTitle: c.featured.title,
    featuredSubtitle: c.featured.subtitle,
    featuredViewAll: c.featured.viewAll,
    featuredViewAllHref: c.featured.viewAllHref,
    featuredBoatsHTML: generateFeaturedBoats(lang),

    // Trust
    trustTitle: c.trust.title,
    trustPointsHTML: generateTrustPoints(lang),

    // Seller capture
    sellerTitle: c.sellerCapture.title,
    sellerText: c.sellerCapture.text,
    sellerStepsHTML: generateSellerSteps(lang),
    sellerCTA: c.sellerCapture.cta,
    sellerCTAHref: c.sellerCapture.ctaHref,

    // Categories
    categoriesTitle: c.categories.title,
    categoryCardsHTML: generateCategoryCards(lang),

    // Final CTA
    finalCTATitle: c.finalCTA.title,
    finalCTA1: c.finalCTA.cta1,
    finalCTA1Href: c.finalCTA.cta1Href,
    finalCTA2: c.finalCTA.cta2,
    finalCTA2Href: c.finalCTA.cta2Href,
  };
  buildPage('home.html', `${lang}/index.html`, homeVars);

  // ── Listings Index ──
  const listingsPath = lang === 'es' ? 'es/yates-en-venta' : 'en/yachts-for-sale';
  const lc = c.listings;
  const listingsVars = {
    ...shared,
    pageTitle: lang === 'es'
      ? 'Embarcaciones en Venta — SentYacht · El Masnou y Barcelona'
      : 'Boats for Sale — SentYacht · El Masnou and Barcelona',
    pageDescription: lang === 'es'
      ? 'Selección de yates y embarcaciones en venta. Barcos a motor y veleros revisados, desde 28.000 €. Visitas en El Masnou y Barcelona.'
      : 'Selection of yachts and boats for sale. Surveyed motor and sailing yachts, from €28,000. Viewings in El Masnou and Barcelona.',
    canonicalPath: `/${listingsPath}/`,
    hreflangEs: '/es/yates-en-venta/',
    hreflangEn: '/en/yachts-for-sale/',
    headExtra: '',
    structuredData: '',
    listingsTitle: lc.title,
    listingsSubtitle: lc.subtitle,
    filterType: lc.filterType,
    filterLength: lc.filterLength,
    filterPrice: lc.filterPrice,
    filterYear: lc.filterYear,
    filterLocation: lc.filterLocation,
    filterAll: lc.filterAll,
    filterMotor: lc.filterMotor,
    filterSail: lc.filterSail,
    filterLengthUnder10: lc.filterLengthUnder10,
    filterLengthOver20: lc.filterLengthOver20,
    filterPriceUnder50: lc.filterPriceUnder50,
    filterPriceOver500: lc.filterPriceOver500,
    filterYearPre1990: lc.filterYearPre1990,
    sortLabel: lc.sortLabel,
    sortPriceDesc: lc.sortPriceDesc,
    sortPriceAsc: lc.sortPriceAsc,
    sortYearDesc: lc.sortYearDesc,
    sortYearAsc: lc.sortYearAsc,
    sortLengthDesc: lc.sortLengthDesc,
    sortLengthAsc: lc.sortLengthAsc,
    locationOptions: generateLocationOptions(lang),
    viewDetailsLabel: c.boatCard.viewDetails,
    resultsCountTpl: lc.resultsCount,
    noResults: lc.noResults,
    resetFilters: lc.resetFilters,
    sellerCrossTitle: lc.sellerCrossTitle,
    sellerCrossText: lc.sellerCrossText,
    sellerCrossCTA: lc.sellerCrossCTA,
    sellerCrossHref: lc.sellerCrossHref,
    seoCopyHTML: lc.seoCopy,
    navBuyActive: 'nav-link-active',
  };
  buildPage('listings.html', `${listingsPath}/index.html`, listingsVars);

  // ── Boat Detail Pages ──
  const dc = c.detail;
  const detailBase = lang === 'es' ? 'es/barcos' : 'en/boats';

  /** Build the highlights section HTML for a boat detail page */
  function generateHighlightsHTML(boat, lang) {
    if (!boat.highlights || !boat.highlights[lang] || boat.highlights[lang].length === 0) return '';
    const title = lang === 'es' ? 'Aspectos destacados' : 'Key highlights';
    const items = boat.highlights[lang].map(h => `
        <li class="flex gap-3 items-start">
          <svg class="w-5 h-5 flex-shrink-0 text-gold mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span class="text-text-secondary">${h}</span>
        </li>`).join('\n');
    return `
    <section class="py-10 lg:py-12 bg-surface-alt border-y border-border-light">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="font-serif text-2xl text-text mb-6">${title}</h2>
        <ul class="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          ${items}
        </ul>
      </div>
    </section>`;
  }

  for (const boat of boats) {
    const description = (boat.description && boat.description[lang])
      || (boat.description && boat.description[lang === 'es' ? 'en' : 'es'])
      || '';
    const descriptionHTML = description
      ? description.split('\n\n').map(p => `<p>${p}</p>`).join('\n          ')
      : '';

    const boatPrice = boat.price
      ? (lang === 'es' ? formatPrice(boat.price) : formatPriceEN(boat.price))
      : (lang === 'es' ? 'Precio a consultar' : 'Price on request');

    const galleryTotal = (boat.images && boat.images.length) || 1;

    const boatVars = {
      ...shared,
      pageTitle: `${boat.name} — ${boat.year} · ${boatPrice} — SentYacht`,
      pageDescription: lang === 'es'
        ? `${boat.name} (${boat.year}) en venta. ${boat.length}m${boat.engines ? ', ' + boat.engines : ''}. ${boatPrice}. ${boat.location}.`
        : `${boat.name} (${boat.year}) for sale. ${boat.length}m${boat.engines ? ', ' + boat.engines : ''}. ${boatPrice}. ${boat.location}.`,
      canonicalPath: `/${detailBase}/${boat.slug}/`,
      hreflangEs: `/es/barcos/${boat.slug}/`,
      hreflangEn: `/en/boats/${boat.slug}/`,
      headExtra: boat.images && boat.images.length
        ? `<link rel="preload" as="image" href="/assets/${boat.images[0]}">`
        : '',
      ogImage: boat.images && boat.images.length
        ? `https://sentyacht.com/assets/${encodeURI(boat.images[0])}`
        : 'https://sentyacht.com/assets/hero%20image.jpg',
      structuredData: generateBoatStructuredData(boat, lang),

      // Breadcrumb
      breadcrumbHome: dc.breadcrumbHome,
      breadcrumbListings: dc.breadcrumbListings,
      listingsHref: dc.listingsHref,

      // Gallery
      gallerySlides: generateGallerySlides(boat),
      galleryThumbs: generateGalleryThumbs(boat),
      galleryTotal: String(galleryTotal),

      // Summary bar
      boatName: boat.name,
      boatBrand: boat.brand,
      boatYear: String(boat.year),
      boatLengthFormatted: `${boat.length} m`,
      boatLocation: boat.location,
      boatPrice: boatPrice,
      summaryPills: generateSummaryPills(boat, lang),
      enquiryCTA: dc.enquiryCTA,

      // Specs + Description
      specsTitle: dc.specsTitle,
      specsRows: generateSpecsRows(boat, lang),
      descriptionTitle: dc.descriptionTitle,
      boatDescription: descriptionHTML,

      // Highlights
      highlightsSection: generateHighlightsHTML(boat, lang),

      // Extended gallery
      extendedGallerySection: generateExtendedGallery(boat, lang),
      detailAccordions: generateDetailAccordions(boat, lang),

      // Enquiry
      enquiryTitle: dc.enquiryTitle,
      enquiryText: dc.enquiryText,
      enquirySubject: encodeURIComponent(`${lang === 'es' ? 'Consulta' : 'Enquiry'}: ${boat.name}`),

      // Related boats
      relatedBoatsSection: generateRelatedBoatsSection(boat, lang),

      // Seller cross CTA
      sellerCrossTitle: dc.sellerCrossTitle,
      sellerCrossText: dc.sellerCrossText,
      sellerCrossCTA: dc.sellerCrossCTA,
      sellerCrossHref: dc.sellerCrossHref,
      navBuyActive: 'nav-link-active',
    };
    buildPage('boat-detail.html', `${detailBase}/${boat.slug}/index.html`, boatVars);
  }

  // ── Sell Your Boat Page ──
  const sc = c.sell;
  const sellVars = {
    ...shared,
    pageTitle: lang === 'es'
      ? 'Vender su Embarcación — SentYacht'
      : 'Sell Your Boat — SentYacht',
    pageDescription: lang === 'es'
      ? 'Venda su embarcación con SentYacht. Valoración confidencial, presentación profesional y gestión de venta con trato directo desde El Masnou.'
      : 'Sell your boat with SentYacht. Confidential valuation, professional presentation, and sales management with direct service from El Masnou.',
    canonicalPath: lang === 'es' ? '/es/vender-su-barco/' : '/en/sell-your-boat/',
    hreflangEs: '/es/vender-su-barco/',
    hreflangEn: '/en/sell-your-boat/',
    headExtra: '',
    structuredData: '',
    sellTitle: sc.title,
    sellSubtitle: sc.subtitle,
    sellIntroText: sc.introText || '',
    sellIntroTitle: sc.introTitle || '',
    sellIntroPointsHTML: generateSellIntroPoints(lang),
    sellWhyTitle: sc.whyTitle,
    sellWhyPointsHTML: generateSellWhyPoints(lang),
    sellProcessTitle: sc.processTitle,
    sellProcessStepsHTML: generateSellProcessSteps(lang),
    sellValuationTitle: sc.valuationTitle,
    sellValuationText: sc.valuationText,
    sellMarketingTitle: sc.marketingTitle,
    sellMarketingText: sc.marketingText,
    sellDiscretionTitle: sc.discretionTitle,
    sellDiscretionText: sc.discretionText,
    sellFaqTitle: sc.faqTitle,
    sellFaqSubtitle: sc.faqSubtitle || '',
    sellFaqHTML: generateSellFaqHTML(lang),
    sellFinalCTATitle: sc.finalCTATitle,
    sellFinalCTAText: sc.finalCTAText,
    sellFinalCTAButton: sc.finalCTAButton,
    sellFinalCTAHref: sc.finalCTAHref,
    sellFinalCTAAlt: sc.finalCTAAlt,
    sellFinalCTAAltHref: sc.finalCTAAltHref,
    navSellActive: 'nav-link-active',
  };
  buildPage('sell-variant-b.html', lang === 'es' ? 'es/vender-su-barco/index.html' : 'en/sell-your-boat/index.html', sellVars);

  // ── Sell Page Preview Variants (isolated, not linked) ──
  for (const variant of ['a', 'b', 'c']) {
    const previewPath = lang === 'es'
      ? `es/vender-su-barco/preview-${variant}/index.html`
      : `en/sell-your-boat/preview-${variant}/index.html`;
    buildPage(`sell-variant-${variant}.html`, previewPath, {
      ...sellVars,
      pageTitle: `[Preview ${variant.toUpperCase()}] ${sellVars.pageTitle}`,
    });
  }

  // ── Confidential Valuation Page ──
  const vc = c.valuation;
  const valVars = {
    ...shared,
    pageTitle: lang === 'es'
      ? 'Valoración Confidencial — SentYacht'
      : 'Confidential Valuation — SentYacht',
    pageDescription: lang === 'es'
      ? 'Solicite una valoración confidencial de su embarcación. Estimación profesional basada en mercado y comparables. Sin compromiso.'
      : 'Request a confidential valuation of your boat. Professional estimate based on market and comparables. No obligation.',
    canonicalPath: lang === 'es' ? '/es/valoracion-confidencial/' : '/en/confidential-valuation/',
    hreflangEs: '/es/valoracion-confidencial/',
    hreflangEn: '/en/confidential-valuation/',
    headExtra: '',
    structuredData: '',
    valTitle: vc.title,
    valSubtitle: vc.subtitle,
    valIntroText: vc.introText,
    valWhyTitle: vc.whyTitle,
    valWhyPointsHTML: generateValWhyPoints(lang),
    valFactorsTitle: vc.factorsTitle,
    valFactorsHTML: generateValFactors(lang),
    valConfidenceFree: vc.confidenceFree,
    valConfidenceTime: vc.confidenceTime,
    valConfidencePrivate: vc.confidencePrivate,
    valFormTitle: vc.formTitle,
    valFormIntro: vc.formIntro,
    valFieldName: vc.formFields.name,
    valFieldEmail: vc.formFields.email,
    valFieldPhone: vc.formFields.phone,
    valFieldMakeModel: vc.formFields.makeModel,
    valFieldYear: vc.formFields.year,
    valFieldLength: vc.formFields.length,
    valFieldLocation: vc.formFields.location,
    valFieldCondition: vc.formFields.condition,
    valFieldConditionPlaceholder: vc.formFields.conditionPlaceholder,
    valFieldSubmit: vc.formFields.submit,
    valConfTitle: vc.confidentialityTitle,
    valConfText: vc.confidentialityText,
    valDisclaimer: vc.disclaimerText,
    valFormSuccessTitle: lang === 'es' ? 'Solicitud enviada' : 'Request sent',
    valFormSuccessText: lang === 'es'
      ? 'Nos pondremos en contacto con usted para completar la valoración.'
      : 'We will get in touch with you to complete the valuation.',
    valEmailSubject: lang === 'es' ? 'Solicitud de valoración' : 'Valuation request',
    valCrossTitle: vc.crossTitle || (lang === 'es' ? '¿Está considerando vender?' : 'Considering selling?'),
    valCrossText: vc.crossText || (lang === 'es' ? '¿Quiere saber más sobre el proceso de venta?' : 'Want to know more about the sales process?'),
    valCrossHref: vc.crossHref || (lang === 'es' ? '/es/vender-su-barco/' : '/en/sell-your-boat/'),
    valCrossCTA: vc.crossCTA || (lang === 'es' ? 'Ver proceso de venta' : 'View sales process'),
    navSellActive: 'nav-link-active',
  };
  buildPage('valuation.html', lang === 'es' ? 'es/valoracion-confidencial/index.html' : 'en/confidential-valuation/index.html', valVars);

  // ── About Page ──
  const ac = c.about;
  // Editorial values layout (bottom rules, not gold-border cards)
  const aboutValuesHTML = ac.values.map((v, i) => `
      <div class="reveal" data-delay="${i * 60}">
        <h3 class="font-serif text-lg text-text mb-2">${v.title}</h3>
        <p class="text-sm text-text-secondary leading-relaxed">${v.desc}</p>
        <div class="mt-4 w-full h-px bg-border-light"></div>
      </div>`).join('\n');

  // Place image for the About page (use a stock coastal image or marina shot)
  const aboutPlaceImgPath = 'stock/g-motor-yacht-coast.jpeg';
  let aboutPlaceImage = optimizedImg(aboutPlaceImgPath, '', 'lazy', '100vw');
  aboutPlaceImage = aboutPlaceImage.replace('<img ', '<img class="absolute inset-0 w-full h-full object-cover" ');
  aboutPlaceImage = aboutPlaceImage.replace(/ width="\d+"/, '').replace(/ height="\d+"/, '');
  aboutPlaceImage = aboutPlaceImage.replace(/style="/, 'style="object-position: center 60%; ');

  const aboutVars = {
    ...shared,
    pageTitle: lang === 'es' ? 'Sobre SentYacht — Compraventa Náutica' : 'About SentYacht — Boat Brokerage',
    pageDescription: lang === 'es'
      ? 'Compraventa y asesoramiento náutico con trato directo desde El Masnou. Selección con criterio, discreción y foco mediterráneo.'
      : 'Boat brokerage and advisory with direct service from El Masnou. Curated selection, discretion, and Mediterranean focus.',
    canonicalPath: lang === 'es' ? '/es/sobre-sentyacht/' : '/en/about/',
    hreflangEs: '/es/sobre-sentyacht/',
    hreflangEn: '/en/about/',
    headExtra: '',
    structuredData: '',
    aboutTitle: ac.title,
    aboutLocationLabel: ac.locationLabel,
    aboutBrandStatement: ac.brandStatement,
    aboutFounderLabel: ac.founderLabel,
    aboutFounderName: ac.founderName,
    aboutFounderText: ac.founderText,
    aboutPhilosophyTitle: ac.philosophyTitle,
    aboutPhilosophyText: ac.philosophyText,
    aboutPlaceImage: aboutPlaceImage,
    aboutMedTitle: ac.medTitle,
    aboutMedText: ac.medText,
    aboutHowTitle: ac.howTitle,
    aboutHowBuyersLabel: ac.howBuyersLabel,
    aboutHowBuyersText: ac.howBuyersText,
    aboutHowSellersLabel: ac.howSellersLabel,
    aboutHowSellersText: ac.howSellersText,
    aboutValuesTitle: ac.valuesTitle,
    aboutValuesHTML: aboutValuesHTML,
    aboutCTATitle: ac.ctaTitle,
    aboutCTAText: ac.ctaText,
    aboutCTAButton: ac.ctaButton,
    aboutCTAHref: ac.ctaHref,
    aboutCTAAlt: ac.ctaAlt || '',
    aboutCTAAltHref: ac.ctaAltHref || '',
    navAboutActive: 'nav-link-active',
  };
  buildPage('about.html', lang === 'es' ? 'es/sobre-sentyacht/index.html' : 'en/about/index.html', aboutVars);

  // ── Contact Page ──
  const cp = c.contactPage;
  const contactAreasHTML = cp.areas.map(a =>
    `<li class="flex gap-2 items-center text-sm text-text-secondary"><svg class="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>${a}</li>`
  ).join('\n            ');
  const contactSubjectOptions = cp.formFields.subjectOptions.map(o =>
    `<option value="${o}">${o}</option>`
  ).join('\n                  ');

  const contactPageVars = {
    ...shared,
    pageTitle: lang === 'es' ? 'Contacto — SentYacht' : 'Contact — SentYacht',
    pageDescription: lang === 'es'
      ? 'Contacte con SentYacht. Port Esportiu, Local 49, El Masnou, 08320, Barcelona. Teléfono, email y WhatsApp.'
      : 'Contact SentYacht. Port Esportiu, Local 49, El Masnou, 08320, Barcelona. Phone, email, and WhatsApp.',
    canonicalPath: lang === 'es' ? '/es/contacto/' : '/en/contact/',
    hreflangEs: '/es/contacto/',
    hreflangEn: '/en/contact/',
    headExtra: '',
    structuredData: '',
    contactPageTitle: cp.title,
    contactPageSubtitle: cp.subtitle,
    contactPageIntro: cp.introText,
    contactInfoTitle: cp.infoTitle,
    contactLocationTitle: cp.locationTitle,
    contactLocationText: cp.locationText,
    contactAreaTitle: cp.areaTitle,
    contactAreasHTML: contactAreasHTML,
    contactFormTitle: cp.formTitle,
    ctFieldName: cp.formFields.name,
    ctFieldEmail: cp.formFields.email,
    ctFieldPhone: cp.formFields.phone,
    ctFieldSubject: cp.formFields.subject,
    contactSubjectOptions: contactSubjectOptions,
    ctFieldMessage: cp.formFields.message,
    ctFieldMessagePlaceholder: cp.formFields.messagePlaceholder,
    ctFieldSubmit: cp.formFields.submit,
    contactFormSuccess: cp.formSuccess,
    contactCTATitle: cp.ctaTitle,
    contactCTAText: cp.ctaText,
    contactEmailSubject: lang === 'es' ? 'Consulta desde web' : 'Website enquiry',
    navContactActive: 'nav-link-active',
  };
  buildPage('contact.html', lang === 'es' ? 'es/contacto/index.html' : 'en/contact/index.html', contactPageVars);

  // ── Sold Boats Page ──
  const sb = c.soldBoats;
  const soldBoats = boats.filter(b => b.status === 'sold');
  let soldContentHTML;

  if (soldBoats.length > 0) {
    const soldCards = soldBoats.map((boat, i) => {
      const card = generateBoatCard(boat, lang).replace('{{delay}}', String(i * 100));
      return card.replace('class="font-serif text-lg text-accent', 'class="font-serif text-lg text-text-muted line-through');
    }).join('\n');
    soldContentHTML = `
<section class="py-12 bg-base">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      ${soldCards}
    </div>
  </div>
</section>`;
  } else {
    soldContentHTML = `
<section class="py-16 bg-surface-alt border-y border-border-light">
  <div class="max-w-2xl mx-auto px-6 lg:px-8 text-center">
    <div class="w-16 h-16 mx-auto flex items-center justify-center bg-accent-light rounded-full mb-6">
      <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
    <h2 class="font-serif text-2xl text-text mb-3">${sb.emptyTitle}</h2>
    <p class="text-text-secondary leading-relaxed">${sb.emptyText}</p>
  </div>
</section>`;
  }

  const soldVars = {
    ...shared,
    pageTitle: lang === 'es' ? 'Embarcaciones Vendidas — SentYacht' : 'Sold Boats — SentYacht',
    pageDescription: lang === 'es'
      ? 'Histórico de embarcaciones vendidas por SentYacht. Registro de nuestra actividad comercial.'
      : 'Archive of boats sold by SentYacht. Record of our commercial activity.',
    canonicalPath: lang === 'es' ? '/es/barcos-vendidos/' : '/en/sold-boats/',
    hreflangEs: '/es/barcos-vendidos/',
    hreflangEn: '/en/sold-boats/',
    headExtra: '',
    structuredData: '',
    soldTitle: sb.title,
    soldSubtitle: sb.subtitle,
    soldIntroText: sb.introText,
    soldContentHTML: soldContentHTML,
    soldSellerCTATitle: sb.sellerCTATitle,
    soldSellerCTAText: sb.sellerCTAText,
    soldSellerCTAButton: sb.sellerCTAButton,
    soldSellerCTAHref: sb.sellerCTAHref,
    soldBrowseCTAText: sb.browseCTAText,
    soldBrowseCTAButton: sb.browseCTAButton,
    soldBrowseCTAHref: sb.browseCTAHref,
    robotsMeta: soldBoats.length > 0 ? 'index, follow' : 'noindex, follow',
  };
  buildPage('sold-boats.html', lang === 'es' ? 'es/barcos-vendidos/index.html' : 'en/sold-boats/index.html', soldVars);

  // ── Legal Pages ──
  const legalPages = lang === 'es' ? [
    {
      slug: 'aviso-legal',
      name: 'Aviso Legal',
      title: 'Aviso Legal — SentYacht',
      desc: 'Aviso legal de SentYacht. Información sobre el titular del sitio web, condiciones de uso y responsabilidades legales.',
      canonicalEs: '/es/aviso-legal/',
      canonicalEn: '/en/legal-notice/',
      body: `<h2>1. Datos identificativos del titular</h2>
<p>En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se exponen a continuación los datos identificativos del titular de este sitio web:</p>
<ul>
<li><strong>Denominación:</strong> SentYacht</li>
<li><strong>Domicilio:</strong> Port Esportiu, Local 49, El Masnou, 08320, Barcelona, España</li>
<li><strong>Correo electrónico:</strong> <a href="mailto:info@sentyacht.com">info@sentyacht.com</a></li>
<li><strong>Teléfono:</strong> <a href="tel:+34609865215">+34 609 865 215</a></li>
<li><strong>Sitio web:</strong> <a href="https://sentyacht.com">sentyacht.com</a></li>
</ul>
<h2>2. Objeto</h2>
<p>El presente aviso legal regula el acceso y uso del sitio web <strong>sentyacht.com</strong> (en adelante, el "Sitio Web"), que SentYacht pone a disposición de los usuarios de Internet. El acceso al Sitio Web implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.</p>
<h2>3. Condiciones de uso</h2>
<p>El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que SentYacht ofrece a través de su Sitio Web, y a no emplearlos para:</p>
<ul>
<li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
<li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del terrorismo o que atente contra los derechos humanos.</li>
<li>Provocar daños en los sistemas físicos y lógicos de SentYacht, de sus proveedores o de terceros.</li>
<li>Introducir o difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de causar daños.</li>
<li>Intentar acceder, utilizar o manipular los datos de SentYacht, terceros proveedores y otros usuarios.</li>
</ul>
<h2>4. Propiedad intelectual e industrial</h2>
<p>Todos los contenidos del Sitio Web, incluyendo, a título enunciativo pero no limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de SentYacht o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso del Sitio Web.</p>
<p>Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra actividad que se pueda realizar con los contenidos del Sitio Web sin la autorización previa y por escrito de SentYacht.</p>
<h2>5. Exclusión de responsabilidad</h2>
<p>SentYacht no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del Sitio Web o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
<p>La información sobre las embarcaciones publicadas en este Sitio Web tiene carácter meramente informativo y no constituye una oferta vinculante. SentYacht se reserva el derecho de modificar los precios, las especificaciones y la disponibilidad de las embarcaciones sin previo aviso.</p>
<h2>6. Enlaces de terceros</h2>
<p>El Sitio Web puede contener enlaces a sitios web de terceros. SentYacht no asume ninguna responsabilidad por el contenido, la política de privacidad o las prácticas de sitios web de terceros. El usuario accede a dichos sitios bajo su propia responsabilidad.</p>
<h2>7. Modificaciones</h2>
<p>SentYacht se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que estos aparezcan presentados o localizados.</p>
<h2>8. Legislación aplicable y jurisdicción</h2>
<p>La relación entre SentYacht y el usuario se regirá por la normativa española vigente. Para la resolución de cualquier controversia, las partes se someterán a los Juzgados y Tribunales del domicilio del usuario, de conformidad con la legislación aplicable.</p>
<div class="legal-updated"><p>Este documento fue actualizado por última vez el 16 de marzo de 2026.</p></div>`,
    },
    {
      slug: 'politica-de-privacidad',
      name: 'Política de Privacidad',
      title: 'Política de Privacidad — SentYacht',
      desc: 'Política de privacidad de SentYacht. Información sobre el tratamiento de datos personales.',
      canonicalEs: '/es/politica-de-privacidad/',
      canonicalEn: '/en/privacy-policy/',
      body: `<h2>1. Responsable del tratamiento</h2>
<p>De conformidad con lo dispuesto en el Reglamento General de Protección de Datos (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD), le informamos de que los datos personales que nos facilite serán tratados por:</p>
<ul>
<li><strong>Responsable:</strong> SentYacht</li>
<li><strong>Domicilio:</strong> Port Esportiu, Local 49, El Masnou, 08320, Barcelona, España</li>
<li><strong>Correo electrónico:</strong> <a href="mailto:info@sentyacht.com">info@sentyacht.com</a></li>
<li><strong>Teléfono:</strong> <a href="tel:+34609865215">+34 609 865 215</a></li>
</ul>
<h2>2. Finalidad del tratamiento</h2>
<p>Los datos personales que recabamos a través de los formularios del Sitio Web serán tratados con las siguientes finalidades:</p>
<ul>
<li>Gestionar las consultas y solicitudes de información realizadas por los usuarios sobre embarcaciones.</li>
<li>Enviar información comercial relacionada con nuestros servicios de compraventa de embarcaciones, previa autorización del usuario.</li>
<li>Mantener la relación comercial y prestar los servicios solicitados.</li>
<li>Dar cumplimiento a las obligaciones legales aplicables.</li>
</ul>
<h2>3. Base jurídica del tratamiento</h2>
<p>La base jurídica para el tratamiento de sus datos personales es:</p>
<ul>
<li><strong>Consentimiento del interesado:</strong> al enviar un formulario de contacto o solicitud de información, el usuario consiente expresamente el tratamiento de sus datos para la finalidad indicada.</li>
<li><strong>Ejecución de un contrato:</strong> cuando el tratamiento sea necesario para la prestación de un servicio solicitado por el usuario.</li>
<li><strong>Interés legítimo:</strong> para la mejora de nuestros servicios y la prevención de fraudes.</li>
<li><strong>Obligación legal:</strong> para el cumplimiento de obligaciones legales aplicables.</li>
</ul>
<h2>4. Datos personales recabados</h2>
<p>Los datos personales que podemos recabar a través de nuestro Sitio Web incluyen:</p>
<ul>
<li>Nombre y apellidos</li>
<li>Dirección de correo electrónico</li>
<li>Número de teléfono</li>
<li>Mensaje o consulta del usuario</li>
<li>Datos de navegación (dirección IP, tipo de navegador, páginas visitadas)</li>
</ul>
<h2>5. Plazo de conservación</h2>
<p>Los datos personales se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para determinar posibles responsabilidades derivadas de dicha finalidad. Los datos se conservarán conforme a los plazos legalmente establecidos.</p>
<h2>6. Destinatarios de los datos</h2>
<p>Los datos personales no serán cedidos a terceros, salvo obligación legal. En caso de ser necesario, se podrán comunicar a:</p>
<ul>
<li>Administraciones públicas competentes, en los casos previstos por la ley.</li>
<li>Proveedores de servicios que actúen como encargados del tratamiento, con los que se han suscrito los correspondientes contratos de encargo de tratamiento.</li>
</ul>
<h2>7. Derechos del interesado</h2>
<p>El usuario puede ejercer los siguientes derechos en relación con sus datos personales:</p>
<ul>
<li><strong>Derecho de acceso:</strong> conocer si se están tratando sus datos personales y obtener una copia de los mismos.</li>
<li><strong>Derecho de rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
<li><strong>Derecho de supresión:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
<li><strong>Derecho de oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
<li><strong>Derecho de limitación:</strong> solicitar la limitación del tratamiento de sus datos.</li>
<li><strong>Derecho de portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
</ul>
<p>Para ejercer estos derechos, puede dirigirse a <a href="mailto:info@sentyacht.com">info@sentyacht.com</a> acompañando copia de su documento de identidad.</p>
<p>Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>) si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.</p>
<h2>8. Medidas de seguridad</h2>
<p>SentYacht ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.</p>
<div class="legal-updated"><p>Este documento fue actualizado por última vez el 16 de marzo de 2026.</p></div>`,
    },
    {
      slug: 'politica-de-cookies',
      name: 'Política de Cookies',
      title: 'Política de Cookies — SentYacht',
      desc: 'Política de cookies de SentYacht. Información sobre el uso de cookies en nuestro sitio web.',
      canonicalEs: '/es/politica-de-cookies/',
      canonicalEn: '/en/cookie-policy/',
      body: `<h2>1. Qué son las cookies</h2>
<p>Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario (ordenador, tablet o teléfono móvil) cuando este los visita. Sirven para recordar información sobre la visita, como el idioma preferido, las opciones de configuración y otras preferencias, facilitando la navegación y haciendo que el sitio web sea más útil.</p>
<h2>2. Tipos de cookies que utilizamos</h2>
<h3>2.1. Cookies técnicas (necesarias)</h3>
<p>Son aquellas que permiten la navegación a través del Sitio Web y la utilización de las diferentes opciones o servicios que en ella existen. Estas cookies son esenciales para el funcionamiento del sitio web y no requieren el consentimiento del usuario.</p>
<table>
<thead><tr><th>Cookie</th><th>Finalidad</th><th>Duración</th></tr></thead>
<tbody><tr><td>cookie_consent</td><td>Almacena las preferencias de cookies del usuario</td><td>1 año</td></tr></tbody>
</table>
<h3>2.2. Cookies analíticas</h3>
<p>Son aquellas que permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del Sitio Web. Para ello se analiza la navegación con el fin de mejorar la oferta de productos y servicios.</p>
<table>
<thead><tr><th>Cookie</th><th>Proveedor</th><th>Finalidad</th><th>Duración</th></tr></thead>
<tbody>
<tr><td>_ga</td><td>Google Analytics</td><td>Distinguir usuarios únicos</td><td>2 años</td></tr>
<tr><td>_ga_*</td><td>Google Analytics</td><td>Mantener el estado de la sesión</td><td>2 años</td></tr>
</tbody>
</table>
<h2>3. Cómo gestionar las cookies</h2>
<p>El usuario puede configurar su navegador para rechazar el uso de cookies, en cuyo caso la navegación y el uso de los servicios del Sitio Web podrían verse limitados. A continuación, le proporcionamos los enlaces a las instrucciones de gestión de cookies de los navegadores más comunes:</p>
<ul>
<li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
<li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener">Mozilla Firefox</a></li>
<li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
<li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge</a></li>
</ul>
<h2>4. Cookies de terceros</h2>
<p>Algunas cookies son instaladas por servicios de terceros que aparecen en nuestras páginas. No controlamos el uso de cookies por parte de estos terceros. Para más información, consulte las políticas de privacidad de los respectivos terceros.</p>
<h2>5. Actualización de la política de cookies</h2>
<p>SentYacht puede modificar esta Política de Cookies en función de nuevas exigencias legislativas, reglamentarias o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos. Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicará al usuario a través del Sitio Web.</p>
<h2>6. Contacto</h2>
<p>Si tiene cualquier duda o consulta sobre esta Política de Cookies, puede contactarnos a través de:</p>
<ul>
<li><strong>Correo electrónico:</strong> <a href="mailto:info@sentyacht.com">info@sentyacht.com</a></li>
<li><strong>Teléfono:</strong> <a href="tel:+34609865215">+34 609 865 215</a></li>
</ul>
<div class="legal-updated"><p>Este documento fue actualizado por última vez el 16 de marzo de 2026.</p></div>`,
    },
  ] : [
    {
      slug: 'legal-notice',
      name: 'Legal Notice',
      title: 'Legal Notice — SentYacht',
      desc: 'Legal notice for SentYacht. Website owner information, terms of use, and legal responsibilities.',
      canonicalEs: '/es/aviso-legal/',
      canonicalEn: '/en/legal-notice/',
      body: `<h2>1. Website Owner Information</h2>
<p>In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following identifies the owner of this website:</p>
<ul>
<li><strong>Name:</strong> SentYacht</li>
<li><strong>Address:</strong> Port Esportiu, Local 49, El Masnou, 08320, Barcelona, Spain</li>
<li><strong>Email:</strong> <a href="mailto:info@sentyacht.com">info@sentyacht.com</a></li>
<li><strong>Phone:</strong> <a href="tel:+34609865215">+34 609 865 215</a></li>
<li><strong>Website:</strong> <a href="https://sentyacht.com">sentyacht.com</a></li>
</ul>
<h2>2. Purpose</h2>
<p>This legal notice governs the access and use of the website <strong>sentyacht.com</strong> (hereinafter, the "Website"), which SentYacht makes available to Internet users. Access to the Website implies full and unreserved acceptance of all provisions included in this Legal Notice.</p>
<h2>3. Terms of Use</h2>
<p>The user agrees to make appropriate use of the contents and services offered by SentYacht through the Website, and not to use them for:</p>
<ul>
<li>Engaging in illegal activities or activities contrary to good faith and public order.</li>
<li>Disseminating content or propaganda of a racist, xenophobic, pornographic nature, or that promotes terrorism or violates human rights.</li>
<li>Causing damage to the physical and logical systems of SentYacht, its suppliers, or third parties.</li>
<li>Introducing or spreading computer viruses or any other systems capable of causing damage.</li>
<li>Attempting to access, use, or manipulate the data of SentYacht, third-party providers, or other users.</li>
</ul>
<h2>4. Intellectual and Industrial Property</h2>
<p>All content on the Website, including but not limited to texts, photographs, graphics, images, icons, technology, software, links, and other audiovisual or sound content, as well as its graphic design and source code, are the intellectual property of SentYacht or third parties. No exploitation rights beyond what is strictly necessary for the correct use of the Website are granted to the user.</p>
<p>The reproduction, distribution, public communication, transformation, or any other activity involving the Website content is prohibited without prior written authorisation from SentYacht.</p>
<h2>5. Disclaimer of Liability</h2>
<p>SentYacht shall not be liable for any damages of any nature that may arise from, including but not limited to: errors or omissions in the content, unavailability of the Website, or the transmission of viruses or malicious programmes, despite having adopted all necessary technical measures to prevent such occurrences.</p>
<p>The information about boats published on this Website is for informational purposes only and does not constitute a binding offer. SentYacht reserves the right to modify prices, specifications, and availability of boats without prior notice.</p>
<h2>6. Third-Party Links</h2>
<p>The Website may contain links to third-party websites. SentYacht assumes no responsibility for the content, privacy policies, or practices of third-party websites. The user accesses such sites at their own risk.</p>
<h2>7. Modifications</h2>
<p>SentYacht reserves the right to make modifications to the Website without prior notice, including changes to the content, services, and their presentation or location.</p>
<h2>8. Applicable Law and Jurisdiction</h2>
<p>The relationship between SentYacht and the user shall be governed by current Spanish legislation. For the resolution of any disputes, the parties shall submit to the Courts and Tribunals of the user's domicile, in accordance with applicable legislation.</p>
<div class="legal-updated"><p>This document was last updated on 16 March 2026.</p></div>`,
    },
    {
      slug: 'privacy-policy',
      name: 'Privacy Policy',
      title: 'Privacy Policy — SentYacht',
      desc: 'SentYacht privacy policy. Information about personal data processing.',
      canonicalEs: '/es/politica-de-privacidad/',
      canonicalEn: '/en/privacy-policy/',
      body: `<h2>1. Data Controller</h2>
<p>In accordance with the General Data Protection Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 on Personal Data Protection (LOPD-GDD), we inform you that personal data you provide will be processed by:</p>
<ul>
<li><strong>Controller:</strong> SentYacht</li>
<li><strong>Address:</strong> Port Esportiu, Local 49, El Masnou, 08320, Barcelona, Spain</li>
<li><strong>Email:</strong> <a href="mailto:info@sentyacht.com">info@sentyacht.com</a></li>
<li><strong>Phone:</strong> <a href="tel:+34609865215">+34 609 865 215</a></li>
</ul>
<h2>2. Purpose of Processing</h2>
<p>Personal data collected through Website forms will be processed for the following purposes:</p>
<ul>
<li>Managing enquiries and information requests from users about boats.</li>
<li>Sending commercial information related to our boat brokerage services, with prior user authorisation.</li>
<li>Maintaining the commercial relationship and providing requested services.</li>
<li>Complying with applicable legal obligations.</li>
</ul>
<h2>3. Legal Basis</h2>
<p>The legal basis for processing your personal data is:</p>
<ul>
<li><strong>Consent:</strong> by submitting a contact form or information request, the user expressly consents to the processing of their data for the stated purpose.</li>
<li><strong>Contract performance:</strong> when processing is necessary for the provision of a service requested by the user.</li>
<li><strong>Legitimate interest:</strong> for the improvement of our services and fraud prevention.</li>
<li><strong>Legal obligation:</strong> for compliance with applicable legal obligations.</li>
</ul>
<h2>4. Personal Data Collected</h2>
<p>Personal data we may collect through our Website includes:</p>
<ul>
<li>Full name</li>
<li>Email address</li>
<li>Phone number</li>
<li>User message or enquiry</li>
<li>Browsing data (IP address, browser type, pages visited)</li>
</ul>
<h2>5. Retention Period</h2>
<p>Personal data will be retained for as long as necessary to fulfil the purpose for which it was collected and to determine any liabilities arising from that purpose. Data will be retained in accordance with legally established timeframes.</p>
<h2>6. Data Recipients</h2>
<p>Personal data will not be disclosed to third parties, except where required by law. Where necessary, data may be communicated to:</p>
<ul>
<li>Competent public authorities, in cases provided by law.</li>
<li>Service providers acting as data processors, with whom appropriate data processing agreements have been entered into.</li>
</ul>
<h2>7. Data Subject Rights</h2>
<p>You may exercise the following rights in relation to your personal data:</p>
<ul>
<li><strong>Right of access:</strong> to know whether your personal data is being processed and to obtain a copy.</li>
<li><strong>Right of rectification:</strong> to request correction of inaccurate or incomplete data.</li>
<li><strong>Right of erasure:</strong> to request deletion of your data when no longer necessary.</li>
<li><strong>Right to object:</strong> to object to the processing of your data in certain circumstances.</li>
<li><strong>Right of restriction:</strong> to request restriction of processing of your data.</li>
<li><strong>Right of portability:</strong> to receive your data in a structured, commonly used format.</li>
</ul>
<p>To exercise these rights, please contact <a href="mailto:info@sentyacht.com">info@sentyacht.com</a> with a copy of your identification document.</p>
<p>You also have the right to file a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>) if you consider that the processing of your data does not comply with current regulations.</p>
<h2>8. Security Measures</h2>
<p>SentYacht has adopted the necessary technical and organisational measures to ensure the security of personal data and prevent its alteration, loss, unauthorised processing, or access, taking into account the state of technology, the nature of the data stored, and the risks to which it is exposed.</p>
<div class="legal-updated"><p>This document was last updated on 16 March 2026.</p></div>`,
    },
    {
      slug: 'cookie-policy',
      name: 'Cookie Policy',
      title: 'Cookie Policy — SentYacht',
      desc: 'SentYacht cookie policy. Information about the use of cookies on our website.',
      canonicalEs: '/es/politica-de-cookies/',
      canonicalEn: '/en/cookie-policy/',
      body: `<h2>1. What Are Cookies</h2>
<p>Cookies are small text files that websites store on the user's device (computer, tablet, or mobile phone) when visited. They serve to remember information about the visit, such as preferred language, configuration options, and other preferences, facilitating navigation and making the website more useful.</p>
<h2>2. Types of Cookies We Use</h2>
<h3>2.1. Technical Cookies (Necessary)</h3>
<p>These allow navigation through the Website and use of its various options and services. These cookies are essential for the website to function and do not require user consent.</p>
<table>
<thead><tr><th>Cookie</th><th>Purpose</th><th>Duration</th></tr></thead>
<tbody><tr><td>cookie_consent</td><td>Stores user cookie preferences</td><td>1 year</td></tr></tbody>
</table>
<h3>2.2. Analytical Cookies</h3>
<p>These allow us to quantify the number of users and perform statistical measurement and analysis of Website usage. Navigation is analysed to improve the range of products and services.</p>
<table>
<thead><tr><th>Cookie</th><th>Provider</th><th>Purpose</th><th>Duration</th></tr></thead>
<tbody>
<tr><td>_ga</td><td>Google Analytics</td><td>Distinguish unique users</td><td>2 years</td></tr>
<tr><td>_ga_*</td><td>Google Analytics</td><td>Maintain session state</td><td>2 years</td></tr>
</tbody>
</table>
<h2>3. How to Manage Cookies</h2>
<p>You can configure your browser to reject the use of cookies, in which case navigation and use of Website services may be limited. Below are links to cookie management instructions for the most common browsers:</p>
<ul>
<li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
<li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener">Mozilla Firefox</a></li>
<li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
<li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener">Microsoft Edge</a></li>
</ul>
<h2>4. Third-Party Cookies</h2>
<p>Some cookies are set by third-party services that appear on our pages. We do not control the use of cookies by these third parties. For more information, consult the privacy policies of the respective third parties.</p>
<h2>5. Cookie Policy Updates</h2>
<p>SentYacht may modify this Cookie Policy in response to new legislative or regulatory requirements, or to adapt it to instructions issued by the Spanish Data Protection Agency. When significant changes are made to this Cookie Policy, users will be notified through the Website.</p>
<h2>6. Contact</h2>
<p>If you have any questions about this Cookie Policy, you can contact us at:</p>
<ul>
<li><strong>Email:</strong> <a href="mailto:info@sentyacht.com">info@sentyacht.com</a></li>
<li><strong>Phone:</strong> <a href="tel:+34609865215">+34 609 865 215</a></li>
</ul>
<div class="legal-updated"><p>This document was last updated on 16 March 2026.</p></div>`,
    },
  ];

  for (const legalPage of legalPages) {
    const legalVars = {
      ...shared,
      pageTitle: legalPage.title,
      pageDescription: legalPage.desc,
      canonicalPath: `/${lang}/${legalPage.slug}/`,
      hreflangEs: legalPage.canonicalEs,
      hreflangEn: legalPage.canonicalEn,
      headExtra: '',
      structuredData: '',
      legalBreadcrumbHome: lang === 'es' ? 'Inicio' : 'Home',
      legalPageName: legalPage.name,
      legalBodyHTML: legalPage.body,
    };
    buildPage('legal.html', `${lang}/${legalPage.slug}/index.html`, legalVars);
  }
}

// ─── Generate sitemap.xml ───
const sitemapRoutes = [
  // Core pages
  { path: '/es/', priority: '1.0', freq: 'weekly' },
  { path: '/en/', priority: '1.0', freq: 'weekly' },
  { path: '/es/yates-en-venta/', priority: '0.9', freq: 'weekly' },
  { path: '/en/yachts-for-sale/', priority: '0.9', freq: 'weekly' },
  { path: '/es/vender-su-barco/', priority: '0.8', freq: 'monthly' },
  { path: '/en/sell-your-boat/', priority: '0.8', freq: 'monthly' },
  { path: '/es/valoracion-confidencial/', priority: '0.8', freq: 'monthly' },
  { path: '/en/confidential-valuation/', priority: '0.8', freq: 'monthly' },
  { path: '/es/barcos-vendidos/', priority: '0.6', freq: 'monthly' },
  { path: '/en/sold-boats/', priority: '0.6', freq: 'monthly' },
  { path: '/es/sobre-sentyacht/', priority: '0.6', freq: 'monthly' },
  { path: '/en/about/', priority: '0.6', freq: 'monthly' },
  { path: '/es/contacto/', priority: '0.7', freq: 'monthly' },
  { path: '/en/contact/', priority: '0.7', freq: 'monthly' },
  // Legal
  { path: '/es/aviso-legal/', priority: '0.3', freq: 'yearly' },
  { path: '/en/legal-notice/', priority: '0.3', freq: 'yearly' },
  { path: '/es/politica-de-privacidad/', priority: '0.3', freq: 'yearly' },
  { path: '/en/privacy-policy/', priority: '0.3', freq: 'yearly' },
  { path: '/es/politica-de-cookies/', priority: '0.3', freq: 'yearly' },
  { path: '/en/cookie-policy/', priority: '0.3', freq: 'yearly' },
];

// Add boat detail pages
for (const boat of boats) {
  sitemapRoutes.push({ path: `/es/barcos/${boat.slug}/`, priority: '0.8', freq: 'weekly' });
  sitemapRoutes.push({ path: `/en/boats/${boat.slug}/`, priority: '0.8', freq: 'weekly' });
}

const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapRoutes.map(r => {
  const esPath = r.path.replace('/en/', '/es/').replace('/yachts-for-sale/', '/yates-en-venta/').replace('/sell-your-boat/', '/vender-su-barco/').replace('/confidential-valuation/', '/valoracion-confidencial/').replace('/sold-boats/', '/barcos-vendidos/').replace('/about/', '/sobre-sentyacht/').replace('/contact/', '/contacto/').replace('/legal-notice/', '/aviso-legal/').replace('/privacy-policy/', '/politica-de-privacidad/').replace('/cookie-policy/', '/politica-de-cookies/').replace('/balearic-islands/', '/baleares/').replace('/boats/', '/barcos/');
  const enPath = r.path.replace('/es/', '/en/').replace('/yates-en-venta/', '/yachts-for-sale/').replace('/vender-su-barco/', '/sell-your-boat/').replace('/valoracion-confidencial/', '/confidential-valuation/').replace('/barcos-vendidos/', '/sold-boats/').replace('/sobre-sentyacht/', '/about/').replace('/contacto/', '/contact/').replace('/aviso-legal/', '/legal-notice/').replace('/politica-de-privacidad/', '/privacy-policy/').replace('/politica-de-cookies/', '/cookie-policy/').replace('/baleares/', '/balearic-islands/').replace('/barcos/', '/boats/');
  return `  <url>
    <loc>https://sentyacht.com${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.freq}</changefreq>
    <priority>${r.priority}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="https://sentyacht.com${esPath}"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://sentyacht.com${enPath}"/>
  </url>`;
}).join('\n')}
</urlset>`;

writeFileSync(join(ROOT, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log('  \u2713 sitemap.xml (' + sitemapRoutes.length + ' URLs)');

// ─── Generate robots.txt ───
const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://sentyacht.com/sitemap.xml

# Disallow filter/sort states (client-side, no separate pages, but defensive)
Disallow: /*?filter=
Disallow: /*?sort=
Disallow: /*?page=
`;

writeFileSync(join(ROOT, 'robots.txt'), robotsTxt, 'utf-8');
console.log('  \u2713 robots.txt');

console.log('\n' + '='.repeat(40));
console.log('Build complete.\n');
