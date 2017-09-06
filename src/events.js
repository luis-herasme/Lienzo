
function init () {
  window.onload = function () {
    window.addEventListener('mousemove', function (e) {
      if (window.mouseMove) window.mouseMove([e.clientX, e.clientY])
    })

    window.addEventListener('mousedown', function (e) {
      if (window.mouseDown) window.mouseDown(e)
    })

    window.addEventListener('mouseup', function (e) {
      if (window.mouseUp) window.mouseUp(e)
    })

    window.addEventListener('keydown', function (e) {
      if (window.keyDown) window.keydown(e.key)
    })

    window.addEventListener('keyup', function (e) {
      if (window.keyUp) window.keyup(e.key)
    })

    window.addEventListener('keypress', function (e) {
      if (window.keyPress) window.keyPress(e.key)
    })

    if (window.update) {
      setInterval(() => {
        window.update()
      })
    }

    if (window.start) {
      window.start()
    }
  }
}

export default init
