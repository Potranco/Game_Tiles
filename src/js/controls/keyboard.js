
class Keyboard {
  constructor () {
    this.lastKey = null
    this.keyspress = []
    document.addEventListener('keydown', this.onkeydown.bind(this))
    document.addEventListener('keyup', this.onkeyup.bind(this))
  }

  onkeydown (event) {
    this.lastKey = event.which
    this.keyspress.push(event.which)
  }

  onkeyup (event) {
    let key = event.which
    this.keyspress.splice(this.keyspress.indexOf(key), 1)
  }

  lastKeyPress () {
    let key = this.lastKey
    return key
  }
}

export default new Keyboard()
