const container = document.querySelector(".container")

for(let i= 0; i < 16; i++){
    const col = document.createElement('div');
    col.classList.add('column');

    for(let x = 0; x < 16; x++){
        const grid = document.createElement('div');
        grid.classList.add('item');
        grid.textContent=x+1;
        container.appendChild(col)
        col.appendChild(grid);
    }

}



function createGrid(size){
    for(let i= 0; i < size; i++){
        const col = document.createElement('div');
        col.classList.add('column');
    
        for(let x = 0; x < size; x++){
            const grid = document.createElement('div');
            grid.classList.add('item');
            grid.textContent=x+1;
            container.appendChild(col)
            col.appendChild(grid);
        }
    }
}






const grids = document.querySelectorAll(".item")


grids.forEach(gri => gri.addEventListener('mouseenter', drawer));


function drawer(e){
    console.log(e)
    e.target.classList.add("hover")

}

function newGrid(){
    let gridSize = prompt("State the grid size, maximum is 100: ")
    console.log(gridSize)

    createGrid(gridSize)
}









