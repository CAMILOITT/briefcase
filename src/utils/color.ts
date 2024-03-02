import type { HslaColor } from '../types/color'

export class Color {
  private _color: string
  colorHsl: HslaColor

  constructor({ h, s, l, a }: HslaColor) {
    this.colorHsl = { h, s, l, a }
    this._color = `hsla(${h}, ${s}%, ${l}%, ${a})`
  }

  public get color(): string {
    return this._color
  }

  public set color({ h, s, l, a }: HslaColor) {
    this._color = `hsla(${h}, ${s}%, ${l}%, ${a})`
  }
}
