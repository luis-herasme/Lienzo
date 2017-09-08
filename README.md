# Lienzop
A library to make HTML canvas projects faster.

![alt text](https://github.com/LuisHerasme/Lienzo/blob/master/logo/lienzo.png "Logo")

This library aims to help you create advanced projects in the canvas realy fast.

## Instalation

To install lienzo you have to type this in the shell

  ```npm
    npm install lienzo
  ```

to start using lienzo you just have to get the minifid file from 

  `./node_modules/lienzo/lib/Library.min.js`

## How to use it

Lienzo is composed by this modules

## Using Lienzo

To start using Lienzo globaly you have to type

```javascript
  lienzo.makeGlobal(window)
```

that will make the lienzo namespace global if you dont write that evert example that you see here 
will need to start with lienzo for example instead of `render.init()` you'll need to write
`lienzo.render.init()`.

## Render

Render is the object encharge of drawign things in the screen to start using it you
just have to type

```javascript
  render.init()
```

If you want you can pass a parameter that is the ID of the canvas you want to daw in
if you dont pass a parameter it will make a canvas with the size of the screen
and you cass pass other 2 parameter the width and the height

### Example

```javascript
  render.circle([100, 100], 10, '#f00') // Position, size, color
  render.clear('#333') // Clears the screen with the given color, If you dont pass a color the default value is '#000'
```

## Vector

  Vector is a class that lets you manipulate vectors

### Example

  ```javascript
  let myVec1 = new Vector([10, 10])
  let myVec2 = new Vector([20, 20])
  myVec1.add(myVec2)
  myVec1.value // [30, 30]
  myVec1.x // 30
  myVec1.y // 30
  ```

## vec

  This is a set of functions that is how the vector vector class works under the hood.

### Example

  ```javascript
  vec.add([10, 10], [10, 10]) // [20, 20]
  vec.sub([10, 10], [5, 5]) // [5, 5]
  vec.mult([10, 10], 3) // [30, 30]
  ```

### Events

  This is not use in your code but is what enables you to create functions as 
  ```javascript
  function mouseDown () {
    player.jump()
  }
  function keyPress (key) {
    if (key === 'x') {
      player.fire()
    }
  }
  ```

### Physics

This is the container of 2 classes one of them is the Body class that lets you create physics objects apply forces to them and make them behave more real and the other one is collision an instance of a class that lets you know if bodies collided, If you add bodies to the collider and then you update the collider you'll know if those objects collide.

#### Body Example

```javascript
  const body = new physics.Body([100, 100], 10) // Position, Size
```

#### Collider Example

```javascript
  physics.Collider.add(Body)
  physics.Collider.update()
```

### Number

This is an object that contains a set of function that aims to help you use random numbers faster

#### Example

```javascript
  number.random(10) // Random number between 0 - 10
  number.random(10, 5) // Random number between 5 - 10

  number.randomList(5, 10) // A list 5 elements and each one contains a number between 0 - 10
  number.randomList(5, 10, 5) // A list 5 elements and each one contains a number between 5 - 10

  let seed = number.noise.seed() // Starts a secuence of perlin noise numbers
  seed.get() // A number from the perlin noise seed
```

### Color

A class that lets you manipulate colors as objects,
each color is between 0 - 1 is in a RGBa format

#### Example

```javascript
  let red = new Color(1, 0, 0, 1) // Red Green Blue Alpha
  red.rgb() // rgb(255, 0, 0)
  red.rgba() // rgba(255, 0, 0, 1)

  let blue = new Color(0, 0.2, 0, 1)
  blue.rgb() // rgb(0, 51, 0)
  blue.rgba() // rgba(0, 51, 0, 1)
```
