(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const label = document.querySelector('.theme-toggle__label');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

  if (!toggle || !label) return;

  const resolvedTheme = () => root.dataset.theme || (systemTheme.matches ? 'dark' : 'light');

  const updateToggle = () => {
    const isDark = resolvedTheme() === 'dark';
    const instruction = `Switch to ${isDark ? 'light' : 'dark'} theme`;

    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.setAttribute('aria-label', instruction);
    toggle.title = instruction;
    label.textContent = instruction;
    themeColor?.setAttribute('content', isDark ? '#151317' : '#eee9dd');
  };

  toggle.addEventListener('click', () => {
    const nextTheme = resolvedTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;

    try {
      localStorage.setItem('ana-theme', nextTheme);
    } catch (_) {}

    updateToggle();
  });

  const systemChanged = () => {
    if (!root.dataset.theme) updateToggle();
  };

  if (typeof systemTheme.addEventListener === 'function') {
    systemTheme.addEventListener('change', systemChanged);
  } else {
    systemTheme.addListener(systemChanged);
  }

  updateToggle();
})();
