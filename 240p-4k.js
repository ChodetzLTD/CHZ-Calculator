// 240p-4k.js

const calculator = document.querySelector('.calculator');
const container = document.body;

function resizeCalculator() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const baseWidth = 320;
  const baseHeight = 680;

  let scaleX = windowWidth / baseWidth * 0.95; // 0.95

  let scaleY = windowHeight / baseHeight * 0.9;

  let scale = Math.min(scaleX, scaleY);

  scale = Math.max(0.6, Math.min(scale, 2.0));

  calculator.style.transform = `scale(${scale})`;
  calculator.style.transformOrigin = 'center top';
  calculator.style.transition = 'transform 0.3s ease-out';

  container.style.display = 'flex';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.minHeight = '100vh';
}

window.addEventListener('load', resizeCalculator);

window.addEventListener('resize', resizeCalculator);

window.addEventListener('orientationchange', () => {
  setTimeout(resizeCalculator, 300);
});

console.log("");
