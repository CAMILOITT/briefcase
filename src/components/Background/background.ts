const canvas = document.getElementById('Background') as HTMLCanvasElement
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Particles {
  x: number
  y: number
  radius: number
  yInit: number
  speed: number = Math.random() * 3
  color: string = 'white'

  constructor(x: number, y: number, radius: number) {
    this.x = x
    this.y = y
    this.yInit = y
    this.radius = radius
    const colors = ['#431d4f', '#d44e79', '#dc8833', '#748fdf']

    this.color = colors[Math.floor(Math.random() * colors.length)]
  }

  move() {
    this.y += this.speed
    if (this.y > canvas.height) {
      this.y = this.yInit
    }
  }
}

export interface ParticlesOptions {
  size?: number
  colors?: string | string[]
  length?: number
}
export interface BackgroundOptions {
  color?: string
}

class Background {
  ctx: CanvasRenderingContext2D
  particles: Particles[] = []
  particlesOptions: Required<ParticlesOptions> = {
    size: 5,
    colors: ['#431d4f', '#d44e79', '#dc8833', '#748fdf'],
    length: 70,
  }
  background: Required<BackgroundOptions> = {
    color: 'hsla(0, 0%, 0%, 1)',
  }

  constructor(
    canvas: HTMLCanvasElement,
    { size, colors, length }: ParticlesOptions = {},
    { color }: BackgroundOptions = {},
  ) {
    this.particlesOptions.length = length || this.particlesOptions.length
    this.particlesOptions.size = size || this.particlesOptions.size
    this.particlesOptions.colors = colors || this.particlesOptions.colors
    this.background.color = color || this.background.color
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    this.cleanCanvas(this.background.color)
    this.createPosition()
    this.initAnimation()
  }

  initAnimation() {
    const self = this
    function animation() {
      self.cleanCanvas(self.background.color)
      self.particles.forEach(particle => {
        self.drawingCircle(
          particle.x,
          particle.y,
          particle.radius,
          particle.color,
        )
        particle.move()
      })

      requestAnimationFrame(animation)
    }

    const idAnimation = requestAnimationFrame(animation.bind(this))

    return () => {
      cancelAnimationFrame(idAnimation)
    }
  }

  cleanCanvas(color?: string) {
    if (color) {
      this.ctx.beginPath()
      this.ctx.fillStyle = color
      this.ctx.fillRect(0, 0, canvas.width, canvas.height)
      this.ctx.fill()
      this.ctx.closePath()
      return
    }
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  drawingCircle(x: number, y: number, radius: number, color: string) {
    this.ctx.beginPath()
    this.ctx.fillStyle = color
    this.ctx.arc(x, y, radius, 0, Math.PI * 2)
    this.ctx.fill()
    this.ctx.closePath()
  }

  createPosition() {
    this.particles = Array.from(
      { length: this.particlesOptions.length },
      () => {
        return new Particles(
          Math.random() * canvas.width,
          0,
          Math.random() * this.particlesOptions.size,
        )
      },
    )
  }
}

new Background(
  canvas,
  { length: 70, size: 7 },
  { color: 'hsla(0, 0%, 0%, 0.055)' },
)
