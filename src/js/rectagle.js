
let Rectagle = (x, y, width, height, parent) => {
  let id = x + 'r' + y
  let div = '<div id="' + id + '"></div>'
  let color = '#' + Math.floor(Math.random() * 16777215).toString(16)
  parent.innerHTML = parent.innerHTML + div
  div = document.getElementById(id)
  div.style.backgroundColor = color
  div.style.position = 'absolute'
  div.style.top = y + 'px'
  div.style.left = x + 'px'
  div.style.width = width + 'px'
  div.style.height = height + 'px'
}

export default Rectagle
