
export default class Cape {
  constructor (cape, zIndex, widthTiles, heightTiles, paletteSprite) {
    this.width = cape.width
    this.height = cape.height
    this.x = cape.x
    this.y = cape.y
    this.zIndex = zIndex
    this.tiles = []

    for (let i = 0; i < this.width; i++) {
      for (let t = 0; t < this.height; t++) {
        let id = cape.data[(i + t) * this.width]

        if (id === 0) {
          this.tiles.push(null)
        } else {
          //this.tiles. to continue
        }
      }
    }
  }
}
