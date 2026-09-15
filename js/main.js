/**
 * LogicHub - F.Z.E | Main Corporate JavaScript
 * Modern ES6+ Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileDrawer();
  initScrollAnimations();
  initBackToTop();
  initPortfolioFiltering();
  initModals();
  initContactForms();
  initServiceDetailTriggers();
  highlightActiveNavLink();
});

/* ==========================================================================
   1. Navbar Scroll Effect & Active Links
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
  
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (pageName !== 'index.html' && href && href.includes(pageName)) {
      link.classList.add('active');
    }
  });
}

/* ==========================================================================
   2. Mobile Drawer Navigation
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-backdrop');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   3. Scroll Reveal Animations (IntersectionObserver)
   ========================================================================== */
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('active'));
  }
}

/* ==========================================================================
   4. Back To Top Floating Action
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   5. Portfolio Filtering & Lightbox
   ========================================================================== */
function initPortfolioFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card');

  if (!filterBtns.length || !portfolioItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Project Lightbox Detail Click
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const projectId = item.getAttribute('data-id');
      const project = typeof PORTFOLIO_DATA !== 'undefined' 
        ? PORTFOLIO_DATA.find(p => p.id === projectId) 
        : null;

      if (project) {
        openProjectModal(project);
      }
    });
  });
}

function openProjectModal(project) {
  const modal = document.getElementById('projectModal');
  if (!modal) return;

  const modalImg = modal.querySelector('.modal-project-img');
  const modalTag = modal.querySelector('.modal-project-tag');
  const modalTitle = modal.querySelector('.modal-project-title');
  const modalDesc = modal.querySelector('.modal-project-desc');
  const modalScope = modal.querySelector('.modal-project-scope');
  const modalLoc = modal.querySelector('.modal-project-loc');

  if (modalImg) modalImg.src = project.image;
  if (modalTag) modalTag.textContent = project.category;
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDesc) modalDesc.textContent = project.description;
  if (modalScope) modalScope.textContent = project.scope;
  if (modalLoc) modalLoc.textContent = project.location;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   6. Modals (Consultation & Project Details)
   ========================================================================== */
function initModals() {
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  const consultationTriggers = document.querySelectorAll('[data-open-consultation]');

  consultationTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = btn.getAttribute('data-service') || '';
      openConsultationModal(serviceId);
    });
  });

  modalOverlays.forEach(overlay => {
    const closeBtn = overlay.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        closeModal(overlay);
      });
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modalOverlays.forEach(overlay => {
        if (overlay.classList.contains('open')) {
          closeModal(overlay);
        }
      });
    }
  });
}

function openConsultationModal(serviceValue = '') {
  const modal = document.getElementById('consultationModal');
  if (!modal) return;

  const serviceSelect = modal.querySelector('#modalServiceSelect');
  if (serviceSelect && serviceValue) {
    serviceSelect.value = serviceValue;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ==========================================================================
   7. Service Deep Dive Drawer / Modal Trigger
   ========================================================================== */
function initServiceDetailTriggers() {
  const serviceDetailBtns = document.querySelectorAll('[data-service-detail]');
  const serviceModal = document.getElementById('serviceDetailModal');

  if (!serviceDetailBtns.length || !serviceModal) return;

  serviceDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceId = btn.getAttribute('data-service-detail');
      const service = typeof SERVICES_DATA !== 'undefined' 
        ? SERVICES_DATA.find(s => s.id === serviceId) 
        : null;

      if (service) {
        openServiceModal(service);
      }
    });
  });
}

function openServiceModal(service) {
  const modal = document.getElementById('serviceDetailModal');
  if (!modal) return;

  const titleEl = modal.querySelector('.modal-service-title');
  const numEl = modal.querySelector('.modal-service-num');
  const descEl = modal.querySelector('.modal-service-desc');
  const listEl = modal.querySelector('.modal-service-list');
  const ctaBtn = modal.querySelector('.modal-service-cta');

  if (titleEl) titleEl.textContent = service.title;
  if (numEl) numEl.textContent = `Activity ${service.number} | License No. 57090`;
  if (descEl) descEl.textContent = service.shortDesc;

  if (listEl) {
    listEl.innerHTML = service.highlights
      .map(item => `<li class="flex items-center gap-2 py-1.5"><svg class="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-slate-300 text-sm">${item}</span></li>`)
      .join('');
  }

  if (ctaBtn) {
    ctaBtn.onclick = () => {
      closeModal(modal);
      openConsultationModal(service.title);
    };
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ==========================================================================
   8. Contact & Consultation Form Validation & Direct WhatsApp Submission
   ========================================================================== */
function initContactForms() {
  const forms = document.querySelectorAll('.corporate-contact-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('input[name="name"]');
      const emailInput = form.querySelector('input[name="email"]');
      const phoneInput = form.querySelector('input[name="phone"]');
      const serviceInput = form.querySelector('select[name="service"]') || form.querySelector('input[name="service"]');
      const messageInput = form.querySelector('textarea[name="message"]');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const service = serviceInput ? serviceInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name) {
        showToast('Required Field', 'Please provide your full name or company name.', 'error');
        if (nameInput) nameInput.focus();
        return;
      }

      if (!email || !email.includes('@')) {
        showToast('Invalid Email', 'Please enter a valid business email address.', 'error');
        if (emailInput) emailInput.focus();
        return;
      }

      if (!message) {
        showToast('Required Field', 'Please provide brief details about your inquiry.', 'error');
        if (messageInput) messageInput.focus();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Connecting to WhatsApp...</span>`;
      }

      // Format WhatsApp Message with submitted fields
      const waNumber = (typeof COMPANY_INFO !== 'undefined' && COMPANY_INFO.whatsappNumber) 
        ? COMPANY_INFO.whatsappNumber 
        : "971588828318";

      let waMessage = `*LogicHub - F.Z.E Consultation Request*\n\n`;
      waMessage += `*Name / Entity:* ${name}\n`;
      waMessage += `*Business Email:* ${email}\n`;
      if (phone) {
        waMessage += `*Phone / Mobile:* ${phone}\n`;
      }
      if (service && service !== 'Choose a licensed activity' && service !== '') {
        waMessage += `*Target Service:* ${service}\n`;
      }
      waMessage += `\n*Project Scope / Details:*\n${message}\n\n`;
      waMessage += `_Submitted via LogicHub Portal_`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(waMessage)}`;

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        form.reset();

        const parentModal = form.closest('.modal-overlay');
        if (parentModal) {
          closeModal(parentModal);
        }

        showToast(
          'Inquiry Prepared',
          'Opening WhatsApp chat with LogicHub operations desk (+971 58 882 8318)...',
          'success'
        );

        // Open WhatsApp in new tab or direct window
        window.open(whatsappUrl, '_blank');
      }, 500);
    });
  });
}

function showToast(title, message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';

  const iconSvg = type === 'success' 
    ? `<svg class="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`
    : `<svg class="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`;

  toast.innerHTML = `
    <div class="toast-icon">${iconSvg}</div>
    <div class="toast-text">
      <h5>${title}</h5>
      <p>${message}</p>
    </div>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.add('show');
  }, 50);

  // Auto remove
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4500);
}
