// Creates initial grid
const container = document.querySelector("#container")
for (let i = 0; i < 2; i++) {
	const col = document.createElement('div');
	col.classList.add('column');

	for (let x = 0; x < 2; x++) {
		const grid = document.createElement('div');
		grid.classList.add('item');
		container.appendChild(col)
		col.appendChild(grid);
	}

}


// Creates grid when size is changed
function createGrid(size) {
	const body = document.getElementById("container");
	while (body.hasChildNodes()) {
		body.removeChild(body.firstChild);
	}

	for (let i = 0; i < size; i++) {
		const col = document.createElement('div');
		col.classList.add('column');

		for (let x = 0; x < size; x++) {
			const grid = document.createElement('div');
			grid.classList.add('item');
			container.appendChild(col)
			col.appendChild(grid);
		}
	}

	drawingEffect('black');
}


drawingEffect('black');

function rainbowEffect(){
    const grids = document.querySelectorAll(".item")
	grids.forEach(gri => gri.addEventListener('mouseenter', drawer));

	function drawer(e) {
		console.log(e)
		// e.target.classList.add("hover")
		e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);

	}

}


// function to create the drawing over grid effect
function drawingEffect(color) {
	const grids = document.querySelectorAll(".item")
	grids.forEach(gri => gri.addEventListener('mouseenter', drawer));

	function drawer(e) {
		console.log(e)
		// e.target.classList.add("hover")
		e.target.style.backgroundColor = color;

	}

}



// function connects slider with grid size, changing slider changes grid
const sliderContainer = document.querySelector(".gridSizing")
var slider = document.getElementById("myRange");
const output = document.createElement('p')
output.textContent = slider.value + "x" + slider.value; // Display the default slider value
sliderContainer.appendChild(output)


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	output.textContent = this.value + "x" + this.value;
	createGrid(this.value)
}

// function that clears grid once clear button is pressed
function clearGrid() {
	const body = document.querySelectorAll("div.item");
	console.log(body);
	for (let i = 0; i < body.length; i++) {
		body[i].style.backgroundColor = 'white';;
	}

}

// function to change the color to whatever is chosen
var theInput = document.getElementById("myColor");

theInput.addEventListener("input", function() {
	var theColor = theInput.value;
	console.log(theColor)
	drawingEffect(theColor)

}, false);