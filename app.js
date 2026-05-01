// ============================
// التاج الملكي للأزياء - app.js (Professional Edition)
// ============================

// ===== SVG ICONS =====
const ICONS = {
  suit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  phone: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  edit: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  return: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>`,
  pickup: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7-7 7 7"/></svg>`,
  clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  color: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 14.14 14.14"/></svg>`,
  size: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
  note: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  emptySuit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>`,
  emptyRes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  emptySearch: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  emptyCalendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  crown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 19L4 9L8 13L12 4L16 13L20 9L22 19H2Z"/><path d="M6 19V21M18 19V21M12 19V21"/><circle cx="12" cy="4" r="1.5" fill="currentColor"/><circle cx="4" cy="9" r="1.5" fill="currentColor"/><circle cx="20" cy="9" r="1.5" fill="currentColor"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  save: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  dateStart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  dateEnd: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>`,
  notes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>`,
  arrowLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>`,
  available: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  reserved: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M12 11v4"/><path d="M8 11v4"/><path d="M16 11v4"/></svg>`,
};

// ===== DATABASE =====
const DB_NAME = 'altajDB';
const DB_VERSION = 1;
let db;

function initDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains('suits')) {
        const ss = d.createObjectStore('suits', { keyPath: 'id' });
        ss.createIndex('status', 'status');
      }
      if (!d.objectStoreNames.contains('reservations')) {
        const rs = d.createObjectStore('reservations', { keyPath: 'id', autoIncrement: true });
        rs.createIndex('suitId', 'suitId');
        rs.createIndex('startDate', 'startDate');
      }
    };
    req.onsuccess = e => { db = e.target.result; resolve(db); };
    req.onerror = () => reject(req.error);
  });
}

function dbGet(store) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function dbPut(store, obj) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).put(obj);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function dbDelete(store, id) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

function dbGetById(store, id) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// ===== STATE =====
let currentPage = 'home';
let currentCalendarDate = new Date();
let editingSuitId = null;
let editingReservationId = null;

// ===== NAVIGATION =====
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  currentPage = page;
  renderPage(page);
}

async function renderPage(page) {
  if (page === 'home') renderHome();
  else if (page === 'suits') renderSuits();
  else if (page === 'reservations') renderReservations();
  else if (page === 'calendar') renderCalendar();
  else if (page === 'stats') renderStats();
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const icons = {
    success: ICONS.check,
    error: ICONS.warning,
    info: ICONS.note
  };
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span style="flex-shrink:0">${icons[type]}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== MODAL =====
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ===== DATE UTILS =====
function today() { 
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const localDate = new Date(d.getTime() - offset * 60000);
  return localDate.toISOString().split('T')[0]; 
}
function formatDate(d) {
  if (!d) return '';
  const [year, month, day] = d.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'short', day: 'numeric' });
}
function monthName(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), 1);
  return d.toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' });
}
function daysBetween(a, b) {
  const [ay, am, ad] = a.split('-').map(Number);
  const [by, bm, bd] = b.split('-').map(Number);
  const dateA = new Date(ay, am - 1, ad);
  const dateB = new Date(by, bm - 1, bd);
  return Math.ceil((dateB - dateA) / 86400000);
}

// ===== HOME PAGE =====
async function renderHome() {
  const suits = await dbGet('suits');
  const reservations = await dbGet('reservations');
  const todayStr = today();

  const available = suits.filter(s => s.status === 'available').length;
  const reserved = suits.filter(s => s.status === 'reserved').length;

  document.getElementById('stat-available').textContent = available;
  document.getElementById('stat-reserved').textContent = reserved;

  // Alerts
  const alertsEl = document.getElementById('alerts-container');
  const todayReturns = reservations.filter(r => r.endDate === todayStr && r.status === 'active');
  const lateReturns = reservations.filter(r => r.endDate < todayStr && r.status === 'active');
  const upcoming = reservations.filter(r => r.startDate === todayStr && r.status === 'active');

  let alertsHTML = '';
  if (lateReturns.length > 0) {
    alertsHTML += `<div class="alert-card late">
      <span class="alert-icon">${ICONS.warning}</span>
      <div class="alert-content">
        <div class="alert-title">حجوزات متأخرة</div>
        <div class="alert-desc">${lateReturns.length} حجز تجاوز موعد الإرجاع</div>
      </div>
    </div>`;
  }
  if (todayReturns.length > 0) {
    alertsHTML += `<div class="alert-card today">
      <span class="alert-icon">${ICONS.return}</span>
      <div class="alert-content">
        <div class="alert-title">مواعيد إرجاع اليوم</div>
        <div class="alert-desc">${todayReturns.map(r => r.customerName).join(' • ')}</div>
      </div>
    </div>`;
  }
  if (upcoming.length > 0) {
    alertsHTML += `<div class="alert-card upcoming">
      <span class="alert-icon">${ICONS.pickup}</span>
      <div class="alert-content">
        <div class="alert-title">استلام اليوم</div>
        <div class="alert-desc">${upcoming.map(r => r.customerName).join(' • ')}</div>
      </div>
    </div>`;
  }
  alertsEl.innerHTML = alertsHTML || '';

  // Upcoming reservations
  const upcomingAll = reservations
    .filter(r => r.status === 'active' && r.startDate >= todayStr)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .slice(0, 5);

  const upcomingEl = document.getElementById('upcoming-list');
  if (upcomingAll.length === 0) {
    upcomingEl.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.emptyCalendar}</div><div class="empty-text">لا توجد حجوزات قادمة</div></div>`;
  } else {
    upcomingEl.innerHTML = upcomingAll.map(r => {
      const suit = suits.find(s => s.id === r.suitId);
      const [y, m, dayNum] = r.startDate.split('-').map(Number);
      const d = new Date(y, m - 1, dayNum);
      const day = dayNum;
      const month = d.toLocaleDateString('ar-SA', { month: 'short' });
      return `<div class="reservation-mini-card">
        <div class="res-date-badge">
          <div class="res-date-day">${day}</div>
          <div class="res-date-month">${month}</div>
        </div>
        <div class="res-info">
          <div class="res-name">${r.customerName}</div>
          <div class="res-suit">${ICONS.phone} ${r.customerPhone} ${suit ? '• ' + suit.name : ''}</div>
        </div>
      </div>`;
    }).join('');
  }
}

// ===== SUITS PAGE =====
let suitFilter = 'all';
let suitSearch = '';

async function renderSuits() {
  let suits = await dbGet('suits');
  if (suitFilter === 'available') suits = suits.filter(s => s.status === 'available');
  if (suitFilter === 'reserved') suits = suits.filter(s => s.status === 'reserved');
  if (suitSearch) suits = suits.filter(s => s.name.includes(suitSearch) || s.id.includes(suitSearch));

  const grid = document.getElementById('suits-grid');
  if (suits.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">${ICONS.emptySuit}</div><div class="empty-text">لا توجد بدلات</div></div>`;
    return;
  }

  grid.innerHTML = suits.map(s => `
    <div class="suit-card">
      <div class="suit-img-container">
        ${s.image
          ? `<img class="suit-img" src="${s.image}" alt="${s.name}" loading="lazy">`
          : `<div class="suit-img-placeholder">${ICONS.suit}</div>`
        }
        <span class="suit-status-badge ${s.status}">
          ${s.status === 'available' ? 'متاحة' : 'محجوزة'}
        </span>
      </div>
      <div class="suit-card-body">
        <div class="suit-id">#${s.id}</div>
        <div class="suit-name">${s.name}</div>
        <div class="suit-meta">${ICONS.color} ${s.color} &nbsp;|&nbsp; ${ICONS.size} ${s.size}</div>
      </div>
      <div class="suit-actions">
        <button class="btn btn-ghost btn-sm" onclick="openEditSuit('${s.id}')">${ICONS.edit} تعديل</button>
        <button class="btn btn-danger btn-sm" onclick="deleteSuit('${s.id}')">${ICONS.trash}</button>
      </div>
    </div>
  `).join('');
}

async function openEditSuit(id) {
  const suit = await dbGetById('suits', id);
  if (!suit) return;
  editingSuitId = id;
  document.getElementById('modal-suit-title').textContent = 'تعديل البدلة';
  document.getElementById('suit-id').value = suit.id;
  document.getElementById('suit-id').disabled = true;
  document.getElementById('suit-name').value = suit.name;
  document.getElementById('suit-color').value = suit.color;
  document.getElementById('suit-size').value = suit.size;
  if (suit.image) {
    document.getElementById('img-preview').src = suit.image;
    document.getElementById('img-preview').style.display = 'block';
    document.getElementById('upload-placeholder').style.display = 'none';
  }
  openModal('modal-suit');
}

function openAddSuit() {
  editingSuitId = null;
  document.getElementById('modal-suit-title').textContent = 'إضافة بدلة جديدة';
  document.getElementById('suit-form').reset();
  document.getElementById('suit-id').disabled = false;
  document.getElementById('img-preview').style.display = 'none';
  document.getElementById('upload-placeholder').style.display = 'flex';
  openModal('modal-suit');
}

async function saveSuit() {
  const id = document.getElementById('suit-id').value.trim();
  const name = document.getElementById('suit-name').value.trim();
  const color = document.getElementById('suit-color').value.trim();
  const size = document.getElementById('suit-size').value.trim();

  if (!id || !name || !color || !size) { showToast('يرجى ملء جميع الحقول', 'error'); return; }

  if (!editingSuitId) {
    const existing = await dbGetById('suits', id);
    if (existing) { showToast('رقم البدلة موجود مسبقاً', 'error'); return; }
  }

  const imgPreview = document.getElementById('img-preview');
  const image = imgPreview.style.display !== 'none' ? imgPreview.src : null;

  const suit = {
    id,
    name,
    color,
    size,
    image,
    status: editingSuitId ? (await dbGetById('suits', id)).status : 'available',
    createdAt: editingSuitId ? undefined : new Date().toISOString()
  };

  if (!editingSuitId) suit.createdAt = new Date().toISOString();
  else { const old = await dbGetById('suits', id); suit.createdAt = old.createdAt; }

  await dbPut('suits', suit);
  closeModal('modal-suit');
  showToast(editingSuitId ? 'تم تعديل البدلة' : 'تمت إضافة البدلة', 'success');
  renderSuits();
  renderHome();
}

async function deleteSuit(id) {
  if (!confirm('هل تريد حذف هذه البدلة؟')) return;
  const reservations = await dbGet('reservations');
  const active = reservations.find(r => r.suitId === id && r.status === 'active');
  if (active) { showToast('لا يمكن حذف بدلة محجوزة', 'error'); return; }
  await dbDelete('suits', id);
  showToast('تم حذف البدلة', 'info');
  renderSuits();
  renderHome();
}

// ===== IMAGE UPLOAD =====
function handleImageUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const preview = document.getElementById('img-preview');
    preview.src = e.target.result;
    preview.style.display = 'block';
    document.getElementById('upload-placeholder').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

// ===== RESERVATIONS PAGE =====
let resFilter = 'all';
let resSearch = '';

async function renderReservations() {
  let reservations = await dbGet('reservations');
  const suits = await dbGet('suits');

  if (resFilter === 'active') reservations = reservations.filter(r => r.status === 'active');
  if (resFilter === 'ended') reservations = reservations.filter(r => r.status === 'ended');
  if (resSearch) reservations = reservations.filter(r =>
    r.customerName.includes(resSearch) || r.customerPhone.includes(resSearch)
  );

  reservations.sort((a, b) => b.createdAt?.localeCompare(a.createdAt || '') || 0);

  const container = document.getElementById('reservations-list');
  if (reservations.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.emptyRes}</div><div class="empty-text">لا توجد حجوزات</div></div>`;
    return;
  }

  const todayStr = today();

  container.innerHTML = reservations.map(r => {
    const suit = suits.find(s => s.id === r.suitId);
    const isLate = r.status === 'active' && r.endDate < todayStr;
    const statusText = r.status === 'active' ? 'نشط' : 'منتهي';
    const statusClass = r.status === 'active' ? 'reserved' : 'available';

    return `<div class="reservation-card">
      <div class="reservation-card-header">
        <div>
          <div class="customer-name">
            ${r.customerName}
            ${isLate ? `<span style="color:var(--red)">${ICONS.warning}</span>` : ''}
          </div>
          <div class="customer-phone">
            ${ICONS.phone}
            <span>${r.customerPhone}</span>
          </div>
        </div>
        <span class="suit-status-badge ${statusClass}">
          ${statusText}
        </span>
      </div>

      <div class="reservation-details">
        <div class="detail-item">
          <div class="detail-label">البدلة</div>
          <div class="detail-value">
            ${ICONS.suit}
            <span>${suit ? suit.name : r.suitId}</span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">تاريخ الاستلام</div>
          <div class="detail-value">
            ${ICONS.dateStart}
            <span>${formatDate(r.startDate)}</span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">تاريخ الإرجاع</div>
          <div class="detail-value" style="${isLate ? 'color:var(--red)' : ''}">
            ${ICONS.dateEnd}
            <span>${formatDate(r.endDate)}</span>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">المدة</div>
          <div class="detail-value">
            ${ICONS.clock}
            <span>${daysBetween(r.startDate, r.endDate)} أيام</span>
          </div>
        </div>
      </div>

      ${r.notes ? `<div class="reservation-notes">${ICONS.note} <span>${r.notes}</span></div>` : ''}

      <div class="reservation-actions">
        ${r.status === 'active' ? `
          <button class="btn btn-success btn-sm" onclick="endReservation(${r.id})">${ICONS.check} إنهاء</button>
          <button class="btn btn-ghost btn-sm" onclick="openEditReservation(${r.id})">${ICONS.edit} تعديل</button>
        ` : ''}
        <button class="btn btn-danger btn-sm" onclick="deleteReservation(${r.id})">${ICONS.trash} حذف</button>
      </div>
    </div>`;
  }).join('');
}

async function openAddReservation(suitId = null) {
  editingReservationId = null;
  document.getElementById('modal-res-title').textContent = 'إضافة حجز جديد';
  document.getElementById('res-form').reset();
  document.getElementById('res-start').value = today();

  // Populate suits dropdown
  const suits = await dbGet('suits');
  const sel = document.getElementById('res-suit');
  sel.innerHTML = suits.map(s =>
    `<option value="${s.id}" ${s.status === 'reserved' ? 'disabled' : ''} ${s.id === suitId ? 'selected' : ''}>
      ${s.name} (#${s.id}) ${s.status === 'reserved' ? '- محجوزة' : ''}
    </option>`
  ).join('');

  openModal('modal-reservation');
}

async function openEditReservation(id) {
  const res = await dbGetById('reservations', id);
  if (!res) return;
  editingReservationId = id;
  document.getElementById('modal-res-title').textContent = 'تعديل الحجز';

  const suits = await dbGet('suits');
  const sel = document.getElementById('res-suit');
  sel.innerHTML = suits.map(s =>
    `<option value="${s.id}" ${s.id === res.suitId ? 'selected' : ''}>
      ${s.name} (#${s.id})
    </option>`
  ).join('');

  document.getElementById('res-customer').value = res.customerName;
  document.getElementById('res-phone').value = res.customerPhone;
  document.getElementById('res-start').value = res.startDate;
  document.getElementById('res-end').value = res.endDate;
  document.getElementById('res-notes').value = res.notes || '';

  openModal('modal-reservation');
}

async function saveReservation() {
  const suitId = document.getElementById('res-suit').value;
  const customerName = document.getElementById('res-customer').value.trim();
  const customerPhone = document.getElementById('res-phone').value.trim();
  const startDate = document.getElementById('res-start').value;
  const endDate = document.getElementById('res-end').value;
  const notes = document.getElementById('res-notes').value.trim();

  if (!suitId || !customerName || !customerPhone || !startDate || !endDate) {
    showToast('يرجى ملء جميع الحقول المطلوبة', 'error'); return;
  }
  if (endDate <= startDate) {
    showToast('تاريخ الإرجاع يجب أن يكون بعد تاريخ الاستلام', 'error'); return;
  }

  // Check overlap
  const all = await dbGet('reservations');
  const overlap = all.find(r =>
    r.suitId === suitId &&
    r.status === 'active' &&
    r.id !== editingReservationId &&
    !(endDate <= r.startDate || startDate >= r.endDate)
  );
  if (overlap) {
    showToast('يوجد تداخل مع حجز آخر لهذه البدلة', 'error'); return;
  }

  const reservation = {
    suitId,
    customerName,
    customerPhone,
    startDate,
    endDate,
    notes,
    status: 'active',
    createdAt: new Date().toISOString()
  };

  if (editingReservationId) {
    reservation.id = editingReservationId;
    const old = await dbGetById('reservations', editingReservationId);
    reservation.createdAt = old.createdAt;
  }

  await dbPut('reservations', reservation);

  // Update suit status
  const suit = await dbGetById('suits', suitId);
  if (suit) {
    suit.status = 'reserved';
    await dbPut('suits', suit);
  }

  closeModal('modal-reservation');
  showToast(editingReservationId ? 'تم تعديل الحجز' : 'تمت إضافة الحجز', 'success');
  renderReservations();
  renderHome();
  renderSuits();
}

async function endReservation(id) {
  const res = await dbGetById('reservations', id);
  if (!res) return;
  res.status = 'ended';
  await dbPut('reservations', res);

  // Check if suit still has other active reservations
  const all = await dbGet('reservations');
  const stillReserved = all.find(r => r.suitId === res.suitId && r.status === 'active' && r.id !== id);
  if (!stillReserved) {
    const suit = await dbGetById('suits', res.suitId);
    if (suit) { suit.status = 'available'; await dbPut('suits', suit); }
  }

  showToast('تم إنهاء الحجز بنجاح', 'success');
  renderReservations();
  renderHome();
  renderSuits();
}

async function deleteReservation(id) {
  if (!confirm('هل تريد حذف هذا الحجز؟')) return;
  const res = await dbGetById('reservations', id);
  await dbDelete('reservations', id);

  // Update suit status
  if (res && res.status === 'active') {
    const all = await dbGet('reservations');
    const stillReserved = all.find(r => r.suitId === res.suitId && r.status === 'active');
    if (!stillReserved) {
      const suit = await dbGetById('suits', res.suitId);
      if (suit) { suit.status = 'available'; await dbPut('suits', suit); }
    }
  }

  showToast('تم حذف الحجز', 'info');
  renderReservations();
  renderHome();
  renderSuits();
}

// ===== CALENDAR PAGE =====
async function renderCalendar() {
  const reservations = await dbGet('reservations');
  const suits = await dbGet('suits');

  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();

  document.getElementById('cal-month-label').textContent = monthName(currentCalendarDate);

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let startDow = firstDay.getDay(); // 0=Sun
  // Adjust for RTL (start from Saturday in Arabic calendar)
  const days = [];

  // Pad before
  for (let i = 0; i < startDow; i++) {
    const d = new Date(year, month, -startDow + 1 + i);
    days.push({ date: d, otherMonth: true });
  }
  // Current month
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push({ date: new Date(year, month, d), otherMonth: false });
  }
  // Pad after to complete grid
  while (days.length % 7 !== 0) {
    const last = days[days.length - 1].date;
    const next = new Date(last);
    next.setDate(next.getDate() + 1);
    days.push({ date: next, otherMonth: true });
  }

  const todayStr = today();

  const grid = document.getElementById('calendar-grid');
  grid.innerHTML = days.map(({ date, otherMonth }) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const dateStr = `${y}-${m}-${d}`;
    const isToday = dateStr === todayStr;

    const dayReservations = reservations.filter(r =>
      r.status === 'active' && r.startDate <= dateStr && r.endDate > dateStr
    );
    const returns = reservations.filter(r => r.status === 'active' && r.endDate === dateStr);

    const events = [
      ...dayReservations.slice(0, 1).map(r => `<div class="cal-event-dot">${r.customerName}</div>`),
      ...returns.slice(0, 1).map(r => `<div class="cal-event-dot return">↩ ${r.customerName}</div>`)
    ].join('');

    return `<div class="cal-day ${isToday ? 'today' : ''} ${otherMonth ? 'other-month' : ''} ${dayReservations.length || returns.length ? 'has-reservation' : ''}"
      onclick="showDayDetail('${dateStr}')">
      <div class="cal-day-num">${date.getDate()}</div>
      ${events}
    </div>`;
  }).join('');
}

async function showDayDetail(dateStr) {
  const reservations = await dbGet('reservations');
  const suits = await dbGet('suits');

  const active = reservations.filter(r => {
    if (r.status !== 'active') return false;
    return r.startDate <= dateStr && r.endDate > dateStr;
  });
  const returns = reservations.filter(r => r.status === 'active' && r.endDate === dateStr);
  const starts = reservations.filter(r => r.startDate === dateStr);

  document.getElementById('day-detail-date').textContent = formatDate(dateStr);

  const container = document.getElementById('day-detail-content');
  if (!active.length && !returns.length && !starts.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.emptyCalendar}</div><div class="empty-text">لا توجد حجوزات في هذا اليوم</div></div>`;
  } else {
    const sections = [];
    if (starts.length) {
      sections.push(`<div style="color:var(--green);font-weight:700;margin-bottom:6px">${ICONS.pickup} استلام اليوم</div>`
        + starts.map(r => {
          const suit = suits.find(s => s.id === r.suitId);
          return `<div class="day-detail-card">
            <div style="font-weight:700">${r.customerName}</div>
            <div style="font-size:12px;color:var(--white-50)">${ICONS.phone} ${r.customerPhone}</div>
            <div style="font-size:12px;margin-top:4px">${ICONS.suit} ${suit ? suit.name : r.suitId}</div>
          </div>`;
        }).join(''));
    }
    if (returns.length) {
      sections.push(`<div style="color:var(--red);font-weight:700;margin-bottom:6px;margin-top:10px">${ICONS.return} إرجاع اليوم</div>`
        + returns.map(r => {
          const suit = suits.find(s => s.id === r.suitId);
          return `<div class="day-detail-card">
            <div style="font-weight:700">${r.customerName}</div>
            <div style="font-size:12px;color:var(--white-50)">${ICONS.phone} ${r.customerPhone}</div>
            <div style="font-size:12px;margin-top:4px">${ICONS.suit} ${suit ? suit.name : r.suitId}</div>
          </div>`;
        }).join(''));
    }
    if (active.length) {
      sections.push(`<div style="color:var(--gold);font-weight:700;margin-bottom:6px;margin-top:10px">${ICONS.suit} حجوزات نشطة</div>`
        + active.map(r => {
          const suit = suits.find(s => s.id === r.suitId);
          return `<div class="day-detail-card">
            <div style="font-weight:700">${r.customerName}</div>
            <div style="font-size:12px;color:var(--white-50)">${ICONS.phone} ${r.customerPhone}</div>
            <div style="font-size:12px;margin-top:4px">${ICONS.suit} ${suit ? suit.name : r.suitId} &nbsp;|&nbsp; حتى ${formatDate(r.endDate)}</div>
          </div>`;
        }).join(''));
    }
    container.innerHTML = sections.join('');
  }

  openModal('modal-day-detail');
}

function prevMonth() {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
  renderCalendar();
}

function nextMonth() {
  currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
  renderCalendar();
}

// ===== STATS PAGE =====
async function renderStats() {
  const suits = await dbGet('suits');
  const reservations = await dbGet('reservations');

  const available = suits.filter(s => s.status === 'available').length;
  const reserved = suits.filter(s => s.status === 'reserved').length;
  const total = suits.length;

  document.getElementById('stats-total').textContent = total;
  document.getElementById('stats-available').textContent = available;
  document.getElementById('stats-reserved').textContent = reserved;
  document.getElementById('stats-res-total').textContent = reservations.length;
  document.getElementById('stats-res-active').textContent = reservations.filter(r => r.status === 'active').length;

  // Pie chart
  drawPieChart(available, reserved);
}

function drawPieChart(available, reserved) {
  const svg = document.getElementById('pie-svg');
  const total = available + reserved;
  if (total === 0) {
    svg.innerHTML = `<circle cx="90" cy="90" r="70" fill="rgba(255,255,255,0.05)" stroke="rgba(212,175,55,0.3)" stroke-width="1"/>`;
    return;
  }

  const r = 70;
  const cx = 90, cy = 90;
  const avAngle = (available / total) * 360;

  function polarToCartesian(angle) {
    const rad = (angle - 90) * Math.PI / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function arcPath(startAngle, endAngle, color) {
    const start = polarToCartesian(startAngle);
    const end = polarToCartesian(endAngle);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `<path d="M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z" fill="${color}" opacity="0.9"/>`;
  }

  let paths = '';
  if (available > 0 && reserved > 0) {
    paths = arcPath(0, avAngle, '#27AE60') + arcPath(avAngle, 360, '#E74C3C');
  } else if (available > 0) {
    paths = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#27AE60" opacity="0.9"/>`;
  } else {
    paths = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#E74C3C" opacity="0.9"/>`;
  }

  svg.innerHTML = `
    ${paths}
    <circle cx="${cx}" cy="${cy}" r="38" fill="var(--navy-mid)"/>
    <text x="${cx}" y="${cy - 6}" text-anchor="middle" fill="var(--gold)" font-size="20" font-weight="700" font-family="Cairo">${total}</text>
    <text x="${cx}" y="${cy + 14}" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="10" font-family="Cairo">إجمالي</text>
  `;
}

// ===== SEARCH =====
function initSearch() {
  const searchInput = document.getElementById('global-search');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(async () => {
      const q = searchInput.value.trim();
      if (!q) { renderSearchResults([], []); return; }

      const suits = await dbGet('suits');
      const reservations = await dbGet('reservations');

      const matchedSuits = suits.filter(s => s.name.includes(q) || s.id.includes(q));
      const matchedRes = reservations.filter(r => r.customerName.includes(q) || r.customerPhone.includes(q));

      renderSearchResults(matchedSuits, matchedRes);
    }, 300));
  }
}

function renderSearchResults(suits, reservations) {
  const container = document.getElementById('search-results');
  if (!suits.length && !reservations.length) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICONS.emptySearch}</div><div class="empty-text">لا توجد نتائج</div></div>`;
    return;
  }

  let html = '';
  if (suits.length) {
    html += `<div style="font-size:13px;color:var(--gold);font-weight:700;margin-bottom:8px">${ICONS.suit} البدلات</div>`;
    html += suits.map(s => `<div class="reservation-mini-card" style="margin-bottom:8px">
      <div class="suit-status-badge ${s.status}" style="position:static">${s.status === 'available' ? 'متاح' : 'محجوز'}</div>
      <div class="res-info">
        <div class="res-name">${s.name}</div>
        <div class="res-suit">#${s.id} | ${s.color} | ${s.size}</div>
      </div>
    </div>`).join('');
  }
  if (reservations.length) {
    html += `<div style="font-size:13px;color:var(--gold);font-weight:700;margin:12px 0 8px">${ICONS.calendar} الحجوزات</div>`;
    html += reservations.map(r => `<div class="reservation-mini-card" style="margin-bottom:8px">
      <div class="res-info">
        <div class="res-name">${r.customerName}</div>
        <div class="res-suit">${ICONS.phone} ${r.customerPhone} | ${formatDate(r.startDate)} → ${formatDate(r.endDate)}</div>
      </div>
    </div>`).join('');
  }
  container.innerHTML = html;
}

// ===== UTILITIES =====
function debounce(fn, delay) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}

// ===== INIT =====
async function init() {
  await initDB();

  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  }

  // Nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.page));
  });

  // Suit filter chips
  document.querySelectorAll('#suits-filter .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#suits-filter .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      suitFilter = chip.dataset.filter;
      renderSuits();
    });
  });

  // Res filter chips
  document.querySelectorAll('#res-filter .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#res-filter .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      resFilter = chip.dataset.filter;
      renderReservations();
    });
  });

  // Suit search
  const suitSearchInput = document.getElementById('suit-search-input');
  if (suitSearchInput) {
    suitSearchInput.addEventListener('input', debounce(() => {
      suitSearch = suitSearchInput.value.trim();
      renderSuits();
    }, 300));
  }

  // Res search
  const resSearchInput = document.getElementById('res-search-input');
  if (resSearchInput) {
    resSearchInput.addEventListener('input', debounce(() => {
      resSearch = resSearchInput.value.trim();
      renderReservations();
    }, 300));
  }

  initSearch();
  navigateTo('home');
}

document.addEventListener('DOMContentLoaded', init);
