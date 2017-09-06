
class Body {
  constructor (position, size) {
    this.position = position.copy()
    position.mult(0)
    this.aceleration = position.copy()
    this.velocity = position.copy()
    this.size = size
  }

  update () {
    this.velocity.add(this.aceleration)
    this.positio.add(this.velocity)
    this.aceleration.mult(0)
  }

  addForce (aceleration) {
    aceleration.mult(1 / this.size)
    this.aceleration.add(aceleration)
  }
}

export default Body
