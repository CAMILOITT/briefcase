import type {
  BackgroundOptions,
  ParticlesOptions,
} from '../../types/background'
import { Color } from '../../utils/color'
import { Drawing } from '../../utils/drawing'
import { Particles } from './particles'

export class Background {
  ctx: CanvasRenderingContext2D
  particles: Particles[] = []
  particlesOptions: Required<ParticlesOptions> = {
    size: 5,
    colors: ['#431d4f', '#d44e79', '#dc8833', '#748fdf'],
    length: 70,
  }
  background = {
    color: new Color({ h: 0, s: 0, l: 0, a: 0.055 }),
  }

  constructor(
    canvas: HTMLCanvasElement,
    { size, colors, length }: ParticlesOptions = {},
    { color }: BackgroundOptions = {},
  ) {
    this.particlesOptions.length = length || this.particlesOptions.length
    this.particlesOptions.size = size || this.particlesOptions.size
    this.particlesOptions.colors = colors || this.particlesOptions.colors

    this.background.color.color = {
      h: color?.h || this.background.color.colorHsl.h,
      s: color?.s || this.background.color.colorHsl.s,
      l: color?.l || this.background.color.colorHsl.l,
      a: color?.a || this.background.color.colorHsl.a,
    }

    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    Drawing.cleanCanvas(this.ctx, this.background.color.color)
    this.createPosition()
    this.initAnimation()
  }

  initAnimation() {
    const self = this
    function animation() {
      Drawing.cleanCanvas(self.ctx, self.background.color.color)
      self.particles.forEach(particle => {
        Drawing.drawCircle(self.ctx, {
          x: particle.x,
          y: particle.y,
          radius: particle.radius,
          color: particle.color,
        })
        particle.move()
      })

      requestAnimationFrame(animation)
    }

    const idAnimation = requestAnimationFrame(animation.bind(this))

    return () => {
      cancelAnimationFrame(idAnimation)
    }
  }

  createPosition() {
    this.particles = Array.from(
      { length: this.particlesOptions.length },
      () =>
        new Particles(
          {
            x: Math.random() * this.ctx.canvas.width,
            y: 0,
            radius: Math.random() * this.particlesOptions.size,
            moveRandom: false,
            colors:
              this.particlesOptions.colors[
                Math.floor(Math.random() * this.particlesOptions.colors.length)
              ],
          },
          {
            canvas: {
              height: this.ctx.canvas.height,
              width: this.ctx.canvas.width,
            },
          },
        ),
    )
  }
}
