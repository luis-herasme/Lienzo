import Vector from './vector/Vector'
import render from './render'
import Color from './Color'
import number from './number'
import initEvents from './events'

const lienzo = {
  Vector,
  render,
  number,
  Color
}

initEvents()

// window.events = events
window.Vector = Vector
window.Color = Color
window.render = render
window.number = number

window.lienzo = lienzo

export default lienzo
