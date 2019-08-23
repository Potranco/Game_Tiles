import config from './config.js'
import Game from './game.js'
import Resolution from './resolution.js'
import rectagle from './rectagle.js'
import keyboard from './controls/keyboard.js'
import gamepad from './controls/gamepad.js'

export default class App {
  constructor (canvas) {
    /*
    this.canvas = document.getElementById(canvas)
    this.ctx = this.canvas.getContext('2d')
    this.player = {
      img: new window.Image()
    }
    this.player.img.src = './img/bueno.png'
    this.player.img.onload = () => {
      this.ctx.drawImage(this.player.img, 30, 30)
    }
    */
    this.game = new Game(false, false)
    this.resolution = new Resolution()
    window.addEventListener('resize', this.loadTiles.bind(this))
    this.loadTiles()
    this.onload()
  }

  loadTiles () {
    let node = document.getElementById('game')
    let tilesVertical = this.resolution.tilesVertical()
    let tilesHorizontal = this.resolution.tilesHorizontal()
    let tilesSize = this.resolution.tiles.size
    node.innerHTML = ''

    for (let y = 0; y < tilesVertical; y++) {
      for (let x = 0; x < tilesHorizontal; x++) {
        rectagle(x * tilesSize, y * tilesSize, tilesSize, tilesSize, node)
      }
    }
  }

  clear () {
    // let {width, height} = this.canvas
    // this.ctx.clearRect(0, 0, width, height)
  }

  radians (grade) {
    return (grade * Math.PI) / 180
  }

  onload () {
    console.log('App up!', this)
    // this.ctx.drawImage(this.player.img, 30, 30)
  }
}

window.addEventListener('load', (event) => {
  window.app = new App('canvas')
})
