class Resolution {
  constructor (props) {
    this.width = 0
    this.height = 0
    this.tiles = {
      size: 100,
      scale: 1
    }
    window.addEventListener('resize', this.captureSize.bind(this))
    this.captureSize()
  }

  captureSize () {
    this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  }

  tilesHorizontal () {
    let tilesScale = this.tiles.size * this.tiles.scale
    return Math.ceil((this.width - tilesScale) / tilesScale)
  }

  tilesVertical () {
    let tilesScale = this.tiles.size * this.tiles.scale
    return Math.ceil((this.height - tilesScale) / tilesScale)
  }

  tilesTotal () {
    return this.tilesHorizontal() * this.tilesVertical()
  }
}

export default Resolution
