/* global describe, it, before */

import chai from 'chai'
import lienzo from '../lib/library.js'

chai.expect()

const expect = chai.expect

let instance

describe('Given an instance of the Vector class', function () {
  before(function () {
    instance = new lienzo.Vector([10, 10])
  })
  it('should be able to scale it self', function () {
    instance.mult(2)
    expect(instance.value).to.be.equal([20, 20])
  })
})

/*

describe('Given an instance of my Cat library', () => {
  before(() => {
    lib = new Cat()
  })
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Cat')
    })
  })
})

describe('Given an instance of my Dog library', () => {
  before(() => {
    lib = new Dog()
  })
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('Dog')
    })
  })
})

*/
