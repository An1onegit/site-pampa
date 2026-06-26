// Fallback: drive --hero-progress from scroll when CSS scroll timelines are unavailable.
const supportsTimeline = CSS && CSS.supports && CSS.supports('animation-timeline: scroll()');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!supportsTimeline && !reduce) {
  const hero = document.querySelector('[data-hero]');
  const word = document.querySelector('[data-hero-word]');
  if (hero && word) {
    const onScroll = () => {
      const max = window.innerHeight * 0.8;
      const p = Math.min(1, Math.max(0, window.scrollY / max));
      word.style.setProperty('--hero-progress', String(p));
    };
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
}
