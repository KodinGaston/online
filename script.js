
document.addEventListener('DOMContentLoaded', () => {
  console.log('Landing Page Loaded');
});

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');

  btn.addEventListener('click', () => {
    startConfetti();
  });

  function startConfetti() {
    const colors = ['#FF6F61', '#FFD700', '#4CAF50', '#00BCD4', '#E91E63'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    document.body.appendChild(confettiContainer);

    setInterval(() => {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.top = '0px';
      confetti.style.left = `${Math.random() * window.innerWidth}px`;
      confetti.style.opacity = '0.8';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.borderRadius = '50%';
      confetti.style.transition = 'top 4s linear, opacity 4s ease-out';

      confettiContainer.appendChild(confetti);

      setTimeout(() => {
        confetti.style.top = `${window.innerHeight}px`;
        confetti.style.opacity = '0';
      }, 10);

      setTimeout(() => {
        confetti.remove();
      }, 4000);
    }, 10); // cada 50ms lanza un confetti
  }
});