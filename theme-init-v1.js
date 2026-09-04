(() => {
  try {
    const savedTheme = localStorage.getItem('ana-theme');
    const previewTheme = new URLSearchParams(location.search).get('theme');
    const explicitTheme = previewTheme === 'light' || previewTheme === 'dark'
      ? previewTheme
      : savedTheme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (explicitTheme === 'light' || explicitTheme === 'dark') {
      document.documentElement.dataset.theme = explicitTheme;
    }

    const resolvedTheme = explicitTheme === 'light' || explicitTheme === 'dark'
      ? explicitTheme
      : (prefersDark ? 'dark' : 'light');

    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', resolvedTheme === 'dark' ? '#151317' : '#eee9dd');
  } catch (_) {}
})();
