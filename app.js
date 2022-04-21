const container = document.querySelector('#container')
const divs = document.querySelectorAll('div')
const button = document.getElementById('clearGrid').addEventListener
  ('click', buttonClick)
const dives = document.getElementsByClassName('dive')

let num = prompt('enter a number') 
function squared (num){
  return num ** 2
}  

for (let i = 0; i < squared(num); i++) {
  let grid = document.createElement('div')
  grid.className = "dive"
  grid.textContent = 0
  grid.style.color = 'rgba(255, 255, 255, 0)'
  grid.addEventListener('mouseenter', () => grid.style.backgroundColor = 'black'
  )
  document.getElementById('container').appendChild(grid)
}

function buttonClick() {
  for (let i = 0; i < dives.length; i++) {
    dives[i].style.backgroundColor = 'white'
  }
}

//document.getElementById('container').style.gridTemplateColumns = 'repeat(num 1fr)'


//grid-template-columns: repeat(nu, 1fr)