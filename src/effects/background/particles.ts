export class Particles {
  x: number
  y: number
  radius: number
  yInit: number
  speed: number = Math.random() * 3
  color: string = 'white'
  moveRandom: boolean
  canvas: { height: number; width: number }
  constructor(
    {
      x,
      y,
      radius,
      moveRandom = false,
      colors = '#D63230',
    }: {
      x: number
      y: number
      radius: number
      moveRandom?: boolean
      colors: string
    },
    { canvas }: { canvas: { height: number; width: number } },
  ) {
    this.x = x
    this.y = y
    this.yInit = y
    this.radius = radius
    this.moveRandom = moveRandom
    this.canvas = canvas
    this.color = colors
  }

  move() {
    this.y += this.speed
    if (this.y > this.canvas.height) {
      this.y = this.yInit
    }

    if (this.moveRandom) {
      const moviment = 100 / 4
      this.x += Math.random() * moviment - moviment / 2
    }
  }
}
