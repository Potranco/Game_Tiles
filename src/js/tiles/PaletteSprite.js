import Sprite from './sprite.js'

export default class PaletteSprite {
  constructor (spriteData) {
    this.url = spriteData.image
    this.width = spriteData.imagewidth
    this.height = spriteData.imageheight
    this.spriteWidth = spriteData.tilewidth
    this.spriteHeight = spriteData.tileheight
    this.firstgid = spriteData.firstgid
    this.tileCount = spriteData.tilecount

    this.sprites = []
    for (var i = 0; i < this.tileCount; i++) {
      this.sprites.push(new Sprite(this.url, this.firstgid - 1 + i, this.getSpritePositionById(this.firstgid - 1 + i)))
    }
  }

  getWidthImageInSprites () {
    return this.width / this.spriteWidth
  }
  getHeightImageInSprites () {
    return this.height / this.spriteHeight
  }
  totalSprites () {
    return this.getWidthImageInSprites() * this.getHeightImageInSprites()
  }

  getSpritePositionById (id) {
    return {
      x: (id % this.spriteHeight) * this.width,
      y: Math.floor(id / this.spriteWidth) * this.height
    }
  }
 }
