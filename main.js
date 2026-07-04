

// 3D crunchy home mouse movement
const crunchyHero = document.querySelector('.crunchy-hero');
const crunchyPlate = document.querySelector('.crunch-plate img');
const crunchyCopy = document.querySelector('.crunch-copy');
if (crunchyHero && crunchyPlate) {
  crunchyHero.addEventListener('mousemove', (e) => {
    const r = crunchyHero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    crunchyPlate.style.transform = `translateY(-10px) rotateY(${x * 24}deg) rotateX(${-y * 14}deg) scale(1.04)`;
    if (crunchyCopy) crunchyCopy.style.transform = `translate3d(${x * 14}px,${y * 10}px,0)`;
  });
  crunchyHero.addEventListener('mouseleave', () => {
    crunchyPlate.style.transform = '';
    if (crunchyCopy) crunchyCopy.style.transform = '';
  });
}
