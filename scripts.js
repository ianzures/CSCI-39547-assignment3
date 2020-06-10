let numRows = 0;
let numCols = 0;
let color;

// Adds row of width equal to the current number of columns to the grid. 
function addR(){
    let table = document.getElementById('grid');
    let row = document.createElement('tr');
    let column = document.createElement('td');

    // If numCols === 0, the grid must be empty and addR() only needs to add a single cell.
    if(numCols === 0){

        // On click, change the color of the cell being clicked on.  
        column.addEventListener("click", function(){
            this.style.backgroundColor = color;
        })

        // Create a single cell by appending a single column to the row. 
        row.appendChild(column);
        numCols++;
    }
    else{
        // Else a previous row must exist, so append as many columns to this row as are appeneded to the previous row (numCols).
        for(let i = 0; i < numCols; i++){
            column = document.createElement('td');
	        column.addEventListener("click", function(){
            	this.style.backgroundColor = color;
            })
            row.appendChild(column);
        }
    }

    table.appendChild(row);
    numRows++;

    // Log to make sure numRows and numCols are always inline with their onscreen counterparts.
    console.log(numRows, numCols);
}

// Add a column of height equal to the current number of rows to the grid.
function addC(){
    let table = document.getElementById('grid');
    let row = document.createElement('tr');

    // Add single cell if grid is empty. 
    if(numRows === 0){
        let column = document.createElement('td');
        column.addEventListener("click", function(){
            this.style.backgroundColor = color;
        })

        row.appendChild(column);
        table.appendChild(row);
        numRows++;
        numCols++;
    }
    else{
        // Creates array containing all rows in the grid. 
        let rows = document.getElementsByTagName('tr');

        // Goes through every row of the grid (using array rows) and appends a column (td element) to each. 
        for(let row of rows){
            let column = document.createElement('td');
            column.addEventListener("click", function(){
                this.style.backgroundColor = color;
            })
            row.appendChild(column);
        }
        numCols++;
    }

    console.log(numRows, numCols);
}

// Removes bottommost row from grid. 
function removeR(){

    // If no rows exist return error message and exit method. 
    if(numRows === 0 ){
        alert("No rows to left remove.");
        return;
    }

    let table = document.getElementById('grid');
    let lastRow = table.lastElementChild;

    // Our grid will only contain rows and columns, so the last element in the table is guaranteed to be the last row in the grid. 
    table.removeChild(lastRow);
    numRows--;

    // If all rows are deleted, then all columns have also been deleted. Must update numCols to 0. 
    if(numRows === 0){
        numCols = 0;
        table.innerHTML = "";
    }

    console.log(numRows, numCols);
}

// Removes rightmost column from grid. 
function removeC(){

    if(numCols === 0){
        alert("No columns left to remove.");
        return;
    }

	let table = document.getElementById('grid');
    let rows = document.getElementsByTagName('tr');

    for(let r of rows){
        let x = r.lastElementChild;
        r.removeChild(x);
    }
    numCols--;

    if(numCols === 0){
        numRows = 0;
    }

    console.log(numRows, numCols);
}

// Fills all uncolored cells with currently selected color.
function fillU(){
    let table = document.getElementById('grid');

    // Loop through grid as we would a 2D array and change the color of every cell to the currently selected color, if it's background color is empty.
    for(let i=0; i<table.rows.length; i++){
        for(let j=0; j<table.rows[i].cells.length; j++){
            if(table.rows[i].cells[j].style.backgroundColor === '') {
                table.rows[i].cells[j].style.backgroundColor = color;
            }
        }
    }
}

// Fill all cells with selected color. 
function fill(){
    let table = document.getElementById('grid');

    for(let i=0; i<table.rows.length; i++){
        for(let j=0; j<table.rows[i].cells.length; j++){
            table.rows[i].cells[j].style.backgroundColor = color;
        }
    }
}

// Restore all cells to initial color. 
function clearAll(){
    let table = document.getElementById('grid');

    for(let i=0; i<table.rows.length; i++){
        for(let j=0; j<table.rows[i].cells.length; j++){
            table.rows[i].cells[j].style.backgroundColor = '';
        }
    }
}

// Select color using drop down menu. 
function selected(){
    color = document.getElementById('selectedID').value;

}
