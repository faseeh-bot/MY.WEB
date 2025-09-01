// Tiny JS for menu toggle and mailto form
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Mailto-based contact: builds an email using the user's client; no third-party services.
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    // TODO: replace with your email address
    const yourEmail = 'you@example.com';
    const mailto = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    if (statusEl) statusEl.textContent = 'Opening your email client…';
  });
}

// Year updater (no dependencies)
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
