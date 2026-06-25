const main = document.getElementById("content");
// Correct SVGs matching the exact rendered HTML
const icons = {
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
  newspaper: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
  settings: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  link2: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>`,
  gitGraph: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="6" r="3"/><path d="M5 9v6"/><circle cx="5" cy="18" r="3"/><path d="M12 3v18"/><circle cx="19" cy="6" r="3"/><path d="M16 15.7A9 9 0 0 0 19 9"/></svg>`,
  circleDot: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0"/><path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"/><path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8"/><path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"/><path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0"/><path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"/><path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8"/><path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"/><circle cx="12" cy="12" r="1"/></svg>`,
};

const navLinks = [
  { icon: icons.home, label: "Home", href: "/" },
  { icon: icons.newspaper, label: "Blog", href: "/blog" },
  { icon: icons.server, label: "Server Status", href: "/status" },
  { icon: icons.settings, label: "Settings", href: "/settings" },
  { icon: icons.info, label: "About", href: "/about" },
];

const externalLinks = [
  { icon: icons.globe, label: "GNU/Weeb", href: "https://gnuweeb.org" },
  {
    icon: icons.circleDot,
    label: "webri.ng",
    href: "https://webri.ng/webring/chads",
  },
];

function createLinkRow(
  icon,
  label,
  href,
  external = false,
  borderBottom = true,
) {
  const a = document.createElement("a");
  a.href = href;
  a.className = `fab-link-row${borderBottom ? "" : " no-border"}`;
  if (external) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  }
  a.innerHTML = `
    <span class="fab-link-icon">${icon}</span>
    <span>${label}</span>
    <div class="fab-arrow">${icons.arrowRight}</div>
  `;
  return a;
}

function createPopoverContent() {
  const content = document.createElement("div");
  content.className = "fab-popover";
  content.setAttribute("data-state", "closed");
  content.setAttribute("data-side", "top");
  content.setAttribute("data-align", "end");
  content.setAttribute("role", "dialog");
  content.setAttribute("tabindex", "-1");

  // Hero image
  const heroWrap = document.createElement("div");
  heroWrap.className = "fab-hero-wrap";
  const heroImg = document.createElement("img");
  heroImg.src = "./assets/images/fab-hero.png";
  heroImg.alt = "FAB Hero Image";
  heroImg.width = 600;
  heroImg.height = 120;
  heroImg.className = "fab-hero-img";
  heroWrap.appendChild(heroImg);
  content.appendChild(heroWrap);

  // Nav header
  const navHeader = document.createElement("h3");
  navHeader.className = "fab-section-header font-bold";
  navHeader.innerHTML = `
    <span class="fab-section-icon">${icons.gitGraph}</span>
    <span>realm. (v8.0.0-rev3)</span>
  `;
  content.appendChild(navHeader);

  navLinks.forEach(({ icon, label, href }) =>
    content.appendChild(createLinkRow(icon, label, href)),
  );

  // Others header
  const extHeader = document.createElement("h3");
  extHeader.className = "fab-section-header";
  extHeader.innerHTML = `
    <span class="fab-section-icon">${icons.link2}</span>
    <span>Others</span>
  `;
  content.appendChild(extHeader);

  externalLinks.forEach(({ icon, label, href }, i) =>
    content.appendChild(
      createLinkRow(icon, label, href, true, i < externalLinks.length - 1),
    ),
  );

  document.body.appendChild(content);
  return content;
}

function createFAB() {
  let isOpen = false;

  // Scroll to top button
  const scrollBtn = document.createElement("button");
  scrollBtn.className = "fab-scroll-btn";
  scrollBtn.innerHTML = `${icons.arrowUp}<span class="sr-only">Scroll to top</span>`;
  scrollBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  // Main trigger
  const trigger = document.createElement("button");
  trigger.className = "fab-trigger";
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("data-state", "closed");
  trigger.innerHTML = `
    <span class="fab-x-icon rotate-45">${icons.plus}</span>
    <span class="sr-only">Open FAB menu</span>
  `;

  const popover = createPopoverContent();

  function positionPopover() {
    const rect = trigger.getBoundingClientRect();
    const popH = popover.offsetHeight;
    const popW = popover.offsetWidth;
    const sideOffset = 10;

    // opens upward, aligned to end (right edge of trigger)
    const top = rect.top + window.scrollY - popH - sideOffset;
    const left = rect.right + window.scrollX - popW;

    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
  }

  function open() {
    isOpen = true;
    popover.style.display = "block";
    popover.setAttribute("data-state", "open");
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("data-state", "open");
    trigger.querySelector(".fab-x-icon").classList.remove("rotate-45");
    scrollBtn.classList.add("fab-scroll-shifted");

    positionPopover();

    popover.animate(
      [
        { opacity: 0, transform: "scale(0.95) translateY(4px)" },
        { opacity: 1, transform: "scale(1)   translateY(0)" },
      ],
      { duration: 150, easing: "ease-out", fill: "forwards" },
    );

    setTimeout(() => document.addEventListener("click", onOutsideClick), 0);
    document.addEventListener("keydown", onKeydown);
  }

  function close() {
    isOpen = false;
    popover.setAttribute("data-state", "closed");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("data-state", "closed");
    trigger.querySelector(".fab-x-icon").classList.add("rotate-45");
    scrollBtn.classList.remove("fab-scroll-shifted");

    const anim = popover.animate(
      [
        { opacity: 1, transform: "scale(1)   translateY(0)" },
        { opacity: 0, transform: "scale(0.95) translateY(4px)" },
      ],
      { duration: 100, easing: "ease-in", fill: "forwards" },
    );
    anim.onfinish = () => (popover.style.display = "none");

    document.removeEventListener("click", onOutsideClick);
    document.removeEventListener("keydown", onKeydown);
  }

  function onOutsideClick(e) {
    if (!popover.contains(e.target) && !trigger.contains(e.target)) close();
  }

  function onKeydown(e) {
    if (e.key === "Escape") close();
  }

  trigger.addEventListener("click", () => (isOpen ? close() : open()));

  // Reposition on resize
  window.addEventListener("resize", () => {
    if (isOpen) positionPopover();
  });

  // Scroll tracking
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) scrollBtn.classList.add("fab-scroll-visible");
    else scrollBtn.classList.remove("fab-scroll-visible");
  });

  document.body.appendChild(scrollBtn);
  document.body.appendChild(trigger);
}

// Styles
const style = document.createElement("style");
style.textContent = `
  .sr-only { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; }

  .fab-trigger, .fab-scroll-btn {
    position: fixed;
    right: 1.25rem;
    z-index: 50;
    padding: 0.75rem;
    border-radius: 0.5rem;
    cursor: pointer;
    border: 1px solid var(--border, #e2e8f0);
    background: var(--background, #fff);
    color: var(--foreground, #0f172a);
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    transition: background 0.15s, color 0.15s, opacity 0.2s, transform 0.2s;
  }
  .fab-trigger:hover, .fab-scroll-btn:hover {
    background: var(--secondary, #f1f5f9);
    color: var(--secondary-foreground, #0f172a);
  }
  .fab-trigger { bottom: 1.25rem; }
  .fab-scroll-btn {
    bottom: 5rem;
    opacity: 0;
    pointer-events: none;
  }
  .fab-scroll-btn.fab-scroll-visible { opacity: 1; pointer-events: auto; }
  .fab-scroll-btn.fab-scroll-shifted { transform: translate(-3.75rem, 3.75rem); }

  .fab-x-icon { display:flex; transition: transform 0.2s; }
  .fab-x-icon.rotate-45 { transform: rotate(45deg); }

  /* Popover */
  .fab-popover {
    display: none;
    position: absolute;
    z-index: 50;
    width: 18rem;         /* max-w-xs equivalent */
    border-radius: 0.375rem;
    border: 1px solid var(--border, #e2e8f0);
    background: var(--popover, #fff);
    color: var(--popover-foreground, #0f172a);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    overflow: hidden;
  }

  /* Hero */
  .fab-hero-wrap {
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid var(--border, #e2e8f0);
  }
  .fab-hero-img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    display: block;
  }

  /* Section headers */
  .fab-section-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    font-weight: 700;
    border-bottom: 1px solid var(--border, #e2e8f0);
    background: rgba(0,0,0,0.03);
    margin: 0;
  }
  .fab-section-icon {
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    background: var(--secondary, #f1f5f9);
    color: var(--secondary-foreground, #0f172a);
    display: flex;
  }
  /* size-4 = 1rem = 16px for icons inside section header and links */
  .fab-section-icon svg,
  .fab-link-icon svg,
  .fab-arrow svg {
    width: 1rem;
    height: 1rem;
  }

  /* Link rows */
  .fab-link-row {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid var(--border, #e2e8f0);
    transition: background 0.15s, color 0.15s;
    cursor: pointer;
  }
  .fab-link-row.no-border { border-bottom: none; }
  .fab-link-row:hover {
    background: var(--secondary, #f1f5f9);
    color: var(--secondary-foreground, #0f172a);
  }

  /* Arrow */
  .fab-arrow {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translate(50%, -50%);
    opacity: 0;
    display: flex;
    transition: opacity 0.15s, transform 0.15s;
  }
  .fab-link-row:hover .fab-arrow {
    opacity: 1;
    transform: translate(0, -50%);
  }

  @media (min-width: 768px) {
    .fab-trigger, .fab-scroll-btn { right: 2.5rem; }
    .fab-trigger { bottom: 2.5rem; }
    .fab-scroll-btn { bottom: 6.25rem; }
    .fab-popover { width: 24rem; } /* max-w-sm */
  }
`;
document.head.appendChild(style);

createFAB();
