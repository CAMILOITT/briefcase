const canvas = document.getElementById('Background') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fill();

class Particles {
  x: number;
  y: number;
  radius: number;
  yInit: number;
  speed: number = Math.random() * 3;
  color: string = 'white';

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.yInit = y;
    this.radius = radius;
    const colors = ['#431d4f', '#d44e79', '#dc8833', '#748fdf'];

    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  move() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = this.yInit;
    }
  }
}

const particles = Array.from({ length: 70 }, () => {
  return new Particles(Math.random() * canvas.width, 0, Math.random() * 7);
});

function initAnimation() {
  function animation() {
    ctx.fillStyle = 'hsla(0, 0%, 0%, 0.07)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fill();

    particles.forEach((particle) => {
      ctx.beginPath();
      ctx.fillStyle = particle.color;
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
      particle.move();
    });

    requestAnimationFrame(animation);
  }

  const idAnimation = requestAnimationFrame(animation);

  return () => {
    cancelAnimationFrame(idAnimation);
  };
}

initAnimation();
