// Define Constants
const pixelCanvas = document.getElementById("pixelCanvas"); // grid


// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let inputWidth = document.getElementById("inputWidth").value; // contains value of width
  let inputHeight = document.getElementById("inputHeight").value; // contains value of height
  event.preventDefault();
  pixelCanvas.innerHTML = "";
  if (inputWidth > 100 || inputHeight > 100) {
    alert('Height and Width must be less than 100px');
    return;
  }
  for (let i = 0; i<inputHeight; i++) {
    let col = document.createElement("tr");
    for (let i=0; i<inputWidth; i++) {
      let row = document.createElement("td");
      col.appendChild(row);
    }
    pixelCanvas.appendChild(col);
  }
}

// When a cell is clicked, change cell color to selected color value

pixelCanvas.addEventListener('click', function(e){
  let pixelColor = document.getElementById("colorPicker").value; // user chosen color
   e.preventDefault();
   if (e.target.nodeName === 'TD') {
     e.target.style.backgroundColor = pixelColor;
   }
});
