const STORAGE_KEY = "theme";

const dropdown = document.querySelector("[data-theme-dropdown]");
const trigger = document.querySelector("[data-theme-trigger]");
const menu = document.querySelector("[data-theme-menu]");
const triggerIconSlot = document.querySelector("[data-theme-trigger-icon]");

const optionButtons = menu.querySelectorAll("button[data-theme]");
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const ICONS = {
  light: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <ellipse cx="7.2" cy="9" rx="6.2" ry="4.8" transform="rotate(-22 7.2 9)" />
        <ellipse cx="7.8" cy="15.2" rx="5.8" ry="4.6" transform="rotate(18 7.8 15.2)" />
        <ellipse cx="16.8" cy="9" rx="6.2" ry="4.8" transform="rotate(22 16.8 9)" />
        <ellipse cx="16.2" cy="15.2" rx="5.8" ry="4.6" transform="rotate(-18 16.2 15.2)" />
        <ellipse cx="12" cy="12.4" rx="1.3" ry="2.6" />
      </g>
    </svg>
  `,
  dark: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <ellipse cx="7.3" cy="11" rx="7.0" ry="4.6" />
        <ellipse cx="16.7" cy="11" rx="7.0" ry="4.6" />
        <ellipse cx="10" cy="14.7" rx="3.8" ry="2.8" />
        <ellipse cx="14" cy="14.7" rx="3.8" ry="2.8" />
        <polygon points="12,20 10.4,15.7 13.6,15.7" />
      </g>
    </svg>
  `,
  system: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <ellipse cx="12" cy="13" rx="5.6" ry="7.2" />
        <circle cx="10.8" cy="6.3" r="1.7" />
        <circle cx="13.2" cy="6.3" r="1.7" />
        <rect x="11.25" y="7.3" width="1.5" height="11.8" rx="0.75" />
        <polygon points="7.0,9.2 3.6,7.0 2.7,8.6 6.3,10.6" />
        <polygon points="6.4,13.2 2.8,13.2 2.8,14.9 6.4,14.9" />
        <polygon points="7.2,17.2 3.0,19.4 3.9,21.0 7.8,18.8" />
        <polygon points="17.0,9.2 20.4,7.0 21.3,8.6 17.7,10.6" />
        <polygon points="17.6,13.2 21.2,13.2 21.2,14.9 17.6,14.9" />
        <polygon points="16.8,17.2 21.0,19.4 20.1,21.0 16.2,18.8" />
      </g>
    </svg>
  `
};

menu.querySelector('[data-icon="light"]').innerHTML = ICONS.light;
menu.querySelector('[data-icon="dark"]').innerHTML = ICONS.dark;
menu.querySelector('[data-icon="system"]').innerHTML = ICONS.system;

function getSystemTheme() {
  return mediaQuery.matches ? "dark" : "light";
}

function getStoredPreference() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark" || saved === "system") return saved;
  return null;
}

function resolveAppliedTheme(storedPreference) {
  if (storedPreference === "light") return "light";
  if (storedPreference === "dark") return "dark";
  return getSystemTheme();
}

function setMenuActive(storedPreference) {
  const choice = storedPreference ?? "system";
  optionButtons.forEach((btn) => {
    const isActive = btn.dataset.theme === choice;
    btn.setAttribute("aria-checked", String(isActive));
  });
}

function setTriggerIcon(storedPreference) {
  const choice = storedPreference ?? "system";
  triggerIconSlot.innerHTML = ICONS[choice];
}

function applyTheme(storedPreference) {
  const applied = resolveAppliedTheme(storedPreference);

  document.documentElement.dataset.theme = applied;

  document.documentElement.dataset.themePreference = storedPreference ?? "system";

  setMenuActive(storedPreference);
  setTriggerIcon(storedPreference);
}

function setPreference(nextPreference) {
  // store the CHOICE (never store resolved OS theme for system)
  localStorage.setItem(STORAGE_KEY, nextPreference);
  applyTheme(nextPreference);
}

function openMenu() {
  dropdown.classList.add("open");
  trigger.setAttribute("aria-expanded", "true");
  const active = menu.querySelector('button[aria-checked="true"]') || optionButtons[0];
  active.focus();
}

function closeMenu({ focusTrigger = true } = {}) {
  dropdown.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
  if (focusTrigger) trigger.focus();
}

function toggleMenu() {
  const isOpen = dropdown.classList.contains("open");
  if (isOpen) closeMenu();
  else openMenu();
}

trigger.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMenu();
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) closeMenu({ focusTrigger: false });
});

menu.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-theme]");
  if (!btn) return;
  setPreference(btn.dataset.theme);
  closeMenu();
});

dropdown.addEventListener("keydown", (e) => {
  const isOpen = dropdown.classList.contains("open");
  const items = Array.from(optionButtons);
  const currentIndex = items.indexOf(document.activeElement);

  if (e.key === "Escape") {
    if (isOpen) {
      e.preventDefault();
      closeMenu();
    }
    return;
  }

  if (!isOpen && (e.key === "Enter" || e.key === " " || e.key === "ArrowDown")) {
    if (document.activeElement === trigger) {
      e.preventDefault();
      openMenu();
    }
    return;
  }

  if (isOpen && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
    e.preventDefault();
    const dir = e.key === "ArrowDown" ? 1 : -1;
    const next = (currentIndex + dir + items.length) % items.length;
    items[next].focus();
    return;
  }

  if (isOpen && (e.key === "Enter" || e.key === " ")) {
    const focused = document.activeElement.closest("button[data-theme]");
    if (focused) {
      e.preventDefault();
      setPreference(focused.dataset.theme);
      closeMenu();
    }
  }
});

(function initTheme() {
  const saved = getStoredPreference(); // "light" | "dark" | "system" | null
  applyTheme(saved);
})();

mediaQuery.addEventListener("change", () => {
  const pref = getStoredPreference();
  if (pref === "system" || pref === null) {
    applyTheme(pref);
  }
});
