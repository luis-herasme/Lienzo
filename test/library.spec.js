/* global describe, it, before */

import chai from 'chai'
import lienzo from '../lib/library.js'

chai.expect()

const expect = chai.expect

let instance
let body

describe('Given an instance of the Vector class', function () {
  before(function () {
    instance = new lienzo.Vector([10, 10])
    body = new lienzo.physics.Body(new lienzo.Vector([10, 10], 10))
  })

  it('should be able to scale it self', function () {
    instance.mult(2)
    expect(instance.x).to.be.equal(20)
    expect(instance.y).to.be.equal(20)
    instance.value = [10, 10]
  })

  it('should be able to reverse itself', function () {
    instance.inverse()
    expect(instance.x).to.be.equal(-10)
    expect(instance.y).to.be.equal(-10)
    instance.value = [10, 10]
  })

  describe('When I create another Vector', function () {
    let otherVector
    before(function () {
      otherVector = new lienzo.Vector([5, 5])
    })

    it('should be able to subtract that vector', function () {
      instance.sub(otherVector)
      expect(instance.x).to.be.equal(5)
      expect(instance.y).to.be.equal(5)
      instance.value = [10, 10]
    })

    it('should be able to add that vector', function () {
      instance.add(otherVector)
      expect(instance.x).to.be.equal(15)
      expect(instance.y).to.be.equal(15)
      instance.value = [10, 10]
    })
  })

  describe('Given an instance of the physics object', function () {
    describe('Given an instance of the Body  object', function () {
      it('it should be able to add a body to the physics Collision object', function () {
        lienzo.physics.Collision.particles.push(body)
        expect(lienzo.physics.Collision.particles[0].position.x).to.be.equal(10)
      })
    })
  })
})
