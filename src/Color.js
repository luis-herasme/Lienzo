export default class Color {
  constructor (r, g, b, a = 1) {
    this.r = Math.round(r * 255)
    this.g = Math.round(g * 255)
    this.b = Math.round(b * 255)
    this.a = a

    if (this.r >= 255) this.r = 255
    if (this.g >= 255) this.g = 255
    if (this.b >= 255) this.b = 255
  }

  rgba () {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
  }

  rgb () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
  }

  static random () {
    const color = new Color(Math.random(), Math.random(), Math.random())
    return color.rgb()
  }
}
