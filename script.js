const introPanel = document.getElementById('introPanel');
const letterStage = document.getElementById('letterStage');
const openButton = document.getElementById('openLetter');
const backToTopButton = document.getElementById('backToTop');
const progressFill = document.getElementById('progressFill');
const letterCard = document.getElementById('letterCard');
const video = document.getElementById('letterVideo');

function revealLetter() {
  introPanel.classList.add('is-hidden');
  letterStage.classList.add('is-visible');

  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  setTimeout(() => {
    if (video) {
      video.muted = true;
      video.setAttribute('playsinline', 'true');
    }
  }, 200);
}

function updateReadingProgress() {
  if (!letterCard) return;

  const rect = letterCard.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const total = letterCard.offsetHeight + viewportHeight * 0.8;
  const current = viewportHeight - rect.top;
  const progressPercentage = Math.min(Math.max((current / total) * 100, 0), 100);

  progressFill.style.width = `${progressPercentage}%`;
}

openButton.addEventListener('click', revealLetter);
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', updateReadingProgress, { passive: true });
window.addEventListener('resize', updateReadingProgress);

updateReadingProgress();
