function telHref(phone) {
  return `tel:${(phone || '').replace(/\s+/g, '')}`;
}

function waHref(message) {
  return `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`;
}

function categoryRank(category) {
  const order = CONFIG.categoryOrder || [];
  const index = order.indexOf(category);
  return index === -1 ? 999 : index;
}

function sortedVehicles() {
  return [...CONFIG.vehicles].sort((a, b) => {
    const rankDiff = categoryRank(a.category) - categoryRank(b.category);
    if (rankDiff !== 0) return rankDiff;
    const priceA = Number(String(a.price).replace(/[^\d]/g, ''));
    const priceB = Number(String(b.price).replace(/[^\d]/g, ''));
    return priceA - priceB;
  });
}

function renderNavItems(items) {
  return items.map(item => `
    <li>
      <a href="${item.href}" class="nav-link relative text-white/80 hover:text-white font-medium tracking-wide transition duration-300">
        <i class="${item.icon} mr-2 text-avis-red-soft"></i>${item.label}
      </a>
    </li>
  `).join('');
}

function renderStats(items) {
  return items.map(item => `
    <div class="stat-card rounded-2xl p-5 border border-white/10 bg-white/5 backdrop-blur-sm">
      <div class="text-3xl font-black text-white mb-1">${item.value}</div>
      <div class="text-sm uppercase tracking-[0.2em] text-white/60">${item.label}</div>
    </div>
  `).join('');
}

function renderFeatures(items) {
  return items.map((item, index) => `
    <div class="adv-card reveal rounded-[28px] p-7 bg-white border border-red-100 shadow-[0_20px_60px_rgba(12,12,12,0.06)]" style="transition-delay:${index*80}ms">
      <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-avis-red to-avis-red-dark text-white flex items-center justify-center text-xl shadow-[0_18px_35px_rgba(229,45,39,0.35)] mb-5">
        <i class="${item.icon}"></i>
      </div>
      <h3 class="text-xl font-bold text-slate-900 mb-3">${item.title}</h3>
      <p class="text-slate-600 leading-7">${item.description}</p>
    </div>
  `).join('');
}

function renderVehicleCards(items) {
  if (!items.length) {
    return `<div class="col-span-full text-center rounded-[28px] border border-red-100 bg-white p-12 shadow-[0_20px_60px_rgba(12,12,12,0.06)]">
      <div class="text-2xl font-bold text-slate-900 mb-3">Aradığınız kriterlere uygun araç bulunamadı</div>
      <p class="text-slate-500">Arama kelimesini değiştirin ya da kategori filtresini temizleyin.</p>
    </div>`;
  }

  return items.map((vehicle, index) => `
    <article class="vehicle-card reveal group relative rounded-[30px] overflow-hidden border border-red-100/80 bg-white shadow-[0_22px_80px_rgba(15,23,42,0.08)]" style="transition-delay:${index%6*70}ms">
      <div class="card-ambient"></div>
      <div class="relative h-64 overflow-hidden bg-slate-100">
        <img src="${vehicle.image}" alt="${vehicle.alt}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" loading="lazy">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent"></div>
        <div class="absolute left-5 top-5 flex gap-2 flex-wrap">
          <span class="inline-flex items-center rounded-full bg-white/95 text-slate-900 px-3 py-1.5 text-xs font-bold tracking-[0.2em] uppercase shadow-lg">${vehicle.category}</span>
          <span class="inline-flex items-center rounded-full bg-avis-red text-white px-3 py-1.5 text-xs font-bold tracking-[0.18em] uppercase shadow-[0_14px_30px_rgba(229,45,39,0.35)]">Sınırsız KM</span>
        </div>
        <div class="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
          <div>
            <h3 class="text-[1.4rem] leading-tight font-extrabold text-white">${vehicle.name}</h3>
            <p class="text-white/70 text-sm mt-1">${vehicle.year} • ${vehicle.fuel} • ${vehicle.transmission}</p>
          </div>
          <div class="text-right shrink-0">
            <div class="text-[1.75rem] font-black text-white">${vehicle.price}</div>
            <div class="text-[11px] uppercase tracking-[0.22em] text-white/65">günlük</div>
          </div>
        </div>
      </div>

      <div class="relative p-6 md:p-7">
        <div class="grid grid-cols-3 gap-3 mb-6">
          <div class="spec-chip"><i class="fas fa-user-friends text-avis-red"></i><span>${vehicle.seats} Kişi</span></div>
          <div class="spec-chip"><i class="fas fa-gas-pump text-avis-red"></i><span>${vehicle.fuel}</span></div>
          <div class="spec-chip"><i class="fas fa-cog text-avis-red"></i><span>${vehicle.transmission}</span></div>
        </div>

        <ul class="space-y-2.5 mb-7 text-sm text-slate-600">
          ${vehicle.features.map(feature => `<li class="flex items-start"><span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-avis-red mr-3 mt-0.5"><i class="fas fa-check text-[10px]"></i></span><span>${feature}</span></li>`).join('')}
        </ul>

        <div class="grid grid-cols-2 gap-3">
          <a href="${waHref('Merhaba, ' + vehicle.name + ' aracı için detaylı bilgi almak istiyorum.')}" target="_blank" class="action-btn whatsapp-btn">
            <i class="fab fa-whatsapp"></i><span>WhatsApp</span>
          </a>
          <a href="${telHref(CONFIG.phone)}" class="action-btn call-btn pulse-call">
            <i class="fas fa-phone-alt"></i><span>Hemen Ara</span>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function renderFooterLinks(items) {
  return items.map(item => `<li><a href="${item.href}" class="text-white/65 hover:text-white transition">${item.label}</a></li>`).join('');
}

function renderCategoryLinks(items) {
  const counts = items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  return (CONFIG.categoryOrder || Object.keys(counts)).filter(cat => counts[cat]).map(cat => `
    <li><a href="#vehicles" class="flex items-center justify-between text-white/65 hover:text-white transition"><span>${cat}</span><span class="text-avis-red-soft font-semibold">${counts[cat]} araç</span></a></li>
  `).join('');
}

function populateCategoryFilter(items) {
  const select = document.getElementById('category-filter');
  const categories = [...new Set(items.map(v => v.category))].sort((a, b) => categoryRank(a) - categoryRank(b));
  select.innerHTML = `<option value="">Tüm Kategoriler</option>` + categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}

function populateVehicleSelect(items) {
  const select = document.getElementById('vehicle');
  select.innerHTML = `<option value="">Araç seçiniz</option>` + items.map(v => `<option value="${v.name}">${v.name} - ${v.price}</option>`).join('');
}

function applyContactInfo() {
  document.getElementById('brand-name').textContent = CONFIG.brandName;
  document.getElementById('brand-tagline').textContent = CONFIG.tagline;
  document.getElementById('footer-brand-name').textContent = CONFIG.brandName;
  document.getElementById('header-phone-link').textContent = CONFIG.displayPhone;
  document.getElementById('header-phone-link').href = telHref(CONFIG.phone);
  document.getElementById('mobile-phone-link').innerHTML = `<i class="fas fa-phone-alt mr-2"></i>${CONFIG.displayPhone}`;
  document.getElementById('mobile-phone-link').href = telHref(CONFIG.phone);
  document.getElementById('contact-phone-link').textContent = CONFIG.displayPhone;
  document.getElementById('contact-phone-link').href = telHref(CONFIG.phone);
  document.getElementById('contact-whatsapp-link').textContent = CONFIG.displayPhone;
  document.getElementById('contact-whatsapp-link').href = waHref(CONFIG.whatsappBaseMessage);
  document.getElementById('floating-support-link').href = telHref(CONFIG.phone);
  document.getElementById('hero-image').src = CONFIG.heroImage;
}

function filterVehicles(items) {
  const query = (document.getElementById('search-input').value || '').trim().toLocaleLowerCase('tr');
  const category = document.getElementById('category-filter').value;
  return items.filter(vehicle => {
    const haystack = `${vehicle.name} ${vehicle.category} ${vehicle.fuel}`.toLocaleLowerCase('tr');
    return (!query || haystack.includes(query)) && (!category || vehicle.category === category);
  });
}

function setupReveal() {
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.12 });
  items.forEach(item => obs.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  const allVehicles = sortedVehicles();
  document.getElementById('nav-list').innerHTML = renderNavItems(CONFIG.navigationItems);
  document.getElementById('mobile-nav-list').innerHTML = renderNavItems(CONFIG.navigationItems);
  document.getElementById('stats-grid').innerHTML = renderStats(CONFIG.stats);
  document.getElementById('features-grid').innerHTML = renderFeatures(CONFIG.features);
  document.getElementById('footer-links').innerHTML = renderFooterLinks(footerLinks);
  document.getElementById('vehicle-categories').innerHTML = renderCategoryLinks(allVehicles);
  applyContactInfo();
  populateCategoryFilter(allVehicles);
  populateVehicleSelect(allVehicles);

  const renderFiltered = () => {
    document.getElementById('vehicles-grid').innerHTML = renderVehicleCards(filterVehicles(allVehicles));
    setupReveal();
  };
  renderFiltered();
  setupReveal();

  document.getElementById('search-btn').addEventListener('click', renderFiltered);
  document.getElementById('search-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      renderFiltered();
    }
  });
  document.getElementById('category-filter').addEventListener('change', renderFiltered);
  document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    document.getElementById('category-filter').value = '';
    renderFiltered();
  });

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
    mobileMenuBtn.querySelector('i').className = mobileNav.classList.contains('hidden') ? 'fas fa-bars text-2xl' : 'fas fa-times text-2xl';
  });

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 240;
    document.getElementById('whatsapp-fixed').classList.toggle('show', scrolled);
    document.getElementById('site-header').classList.toggle('header-scrolled', scrolled);
  });

  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const vehicle = document.getElementById('vehicle').value.trim();
    const note = document.getElementById('message').value.trim();
    const text = [
      'Merhaba, hızlı rezervasyon talebi bırakıyorum.',
      name ? `Ad Soyad: ${name}` : '',
      phone ? `Telefon: ${phone}` : '',
      vehicle ? `Araç: ${vehicle}` : '',
      note ? `Not: ${note}` : ''
    ].filter(Boolean).join('\n');
    window.open(waHref(text), '_blank');
  });

  document.addEventListener('click', event => {
    const link = event.target.closest("a[href^='#']");
    if (!link) return;
    const targetId = link.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    window.scrollTo({ top: target.offsetTop - 90, behavior: 'smooth' });
    if (!mobileNav.classList.contains('hidden')) {
      mobileNav.classList.add('hidden');
      mobileMenuBtn.querySelector('i').className = 'fas fa-bars text-2xl';
    }
  });
});
