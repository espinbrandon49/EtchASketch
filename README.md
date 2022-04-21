# EtchASketch
A bit harder than I initially thought, 
25 lines of javascript has taken me 8 hours and I'm still not finished.


stuck here - How do I make make the CSS respond to the javascript function NUM
so that the CSS reacts dynamically in response to the prompt making the HTML element #container also change?

So if I type 20 in the prompt() I get a #container with a grid-template-columns property of NUM

HTML
<div id="wrapper">
  <button id="clearGrid">Clear Grid</button>
  <div id="container">

  </div>
</div>
  <script src="./app.js" ></script>

CSS
#container {
grid-template-columns: repeat((squared(num)), 1fr);
}

JS
// creates a square grid

let num = prompt('enter a number') 
function squared (num){
  return num ** 2
}  
