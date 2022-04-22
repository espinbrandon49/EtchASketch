const container = document.querySelector('#container')
const divs = document.querySelectorAll('div')
const dives = document.getElementsByClassName('dive')

const button = document.getElementById('clearGrid').addEventListener
  ('click', buttonClick)
const button2 = document.getElementById('blackClearGrid').addEventListener('click', button2Click)

function buttonClick() {
  // select random rainbow color
  const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
  const colorSelected = () => {
    const randomColor = color[Math.floor((Math.random(0) * 7))]
    return randomColor
  }

  // user select rainbow grid size
  let num = prompt('enter a number')
  container.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`);

  // clear rainbow grid
  for (let i = 0; i < dives.length; i++) {
    dives[i].style.display = 'none'
  }

  // rainbow grid created
  for (let i = 0; i < num * num; i++) {
    let grid = document.createElement('div')
    grid.className = "dive"
    grid.addEventListener('mouseenter', () => grid.style.backgroundColor = colorSelected()
    )
    document.getElementById('container').appendChild(grid)
  }
}

function button2Click() {
  // select random color


  // user select charcoal grid size
  let num = prompt('enter a number')
  container.setAttribute('style', `grid-template-columns: repeat(${num}, 1fr); grid-template-rows: repeat(${num}, 1fr);`);

  // clear charcoal grid
  for (let i = 0; i < dives.length; i++) {
    dives[i].style.display = 'none'
  }

  // charcoal grid created
  for (let i = 0; i < num * num; i++) {
    let grid = document.createElement('div')
    grid.className = "dive"
    grid.addEventListener('mouseenter', () => grid.style.backgroundColor = 'black'
    )
    document.getElementById('container').appendChild(grid)
  }
}

