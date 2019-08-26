
export default class Tile {
  constructor (posX, posY, zIndex, width, height, sprite) {
    this.posX = posX
    this.posY = posY
    this.zIndex = zIndex
    this.width = width
    this.height = height
    this.sprite = sprite
    this.idHtml = 'x' + posX + 'y' + posY + 'z' + zIndex
    this.html = '<div id="' + this.idHtml + '"></div>'
  }

  addStyle () {
    let div = document.getElementById(this.idHtml)
    if (!div) console.error('Tile', this.idHtml, 'not created')
    div.style.position = 'absolute'
    div.style.top = (this.posY * this.height) + 'px'
    div.style.left = (this.posX * this.width) + 'px'
    div.style.width = this.width + 'px'
    div.style.height = this.height + 'px'
    div.style.zIndex = '' + this.zIndex
    div.style.background = 'url(' + this.sprite.url + ')'
    div.style.backgroundPosition = this.sprite.position.x + 'px ' + this.sprite.position.y + 'px'
    div.style.backgroundClip = 'border-box'
    div.style.outline = '1px solid transparent'
  }
}
