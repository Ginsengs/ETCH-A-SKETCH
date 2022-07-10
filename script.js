const container = document.querySelector("#container")

for (let i = 0; i < 16; i++) {
    const col = document.createElement('div');
    col.classList.add('column');

    for (let x = 0; x < 16; x++) {
        const grid = document.createElement('div');
        grid.classList.add('item');
        container.appendChild(col)
        col.appendChild(grid);
    }

}



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
    drawingEffect();
}

drawingEffect();




function drawingEffect() {
    const grids = document.querySelectorAll(".item")
    grids.forEach(gri => gri.addEventListener('mouseenter', drawer));

    function drawer(e) {
        console.log(e)
        e.target.classList.add("hover")

    }

}




const sliderContainer = document.querySelector(".menu")
var slider = document.getElementById("myRange");
const output = document.createElement('p')
output.textContent = slider.value + "x" + slider.value; // Display the default slider value
sliderContainer.appendChild(output)


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.textContent = this.value + "x" + this.value;
    createGrid(this.value)
}










