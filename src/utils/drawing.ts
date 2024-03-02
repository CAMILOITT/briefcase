import type {
  DrawingCircle,
  DrawingPath,
  DrawingSquare,
} from '../types/drawing'

export class Drawing {
  static drawCircle(
    ctx: CanvasRenderingContext2D,
    { x, y, radius, color }: DrawingCircle,
  ) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, 2 * Math.PI)
    ctx.fillStyle = color
    ctx.fill()
  }
  static drawSquare(
    ctx: CanvasRenderingContext2D,
    { x, y, size, color }: DrawingSquare,
  ) {
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.fillRect(x, y, size, size)
    ctx.fill()
  }

  static cleanCanvas(ctx: CanvasRenderingContext2D, color?: string) {
    if (color) {
      ctx.beginPath()
      ctx.fillStyle = color
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      ctx.fill()
      ctx.closePath()
      return
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  static drawPath(
    ctx: CanvasRenderingContext2D,
    path: DrawingPath[],
    color = 'white',
  ) {
    ctx.beginPath()
    ctx.fillStyle = color

    path.forEach(({ x, y }) => {
      ctx.lineTo(x, y)
    })

    ctx.fill()
    ctx.stroke()
  }
}
