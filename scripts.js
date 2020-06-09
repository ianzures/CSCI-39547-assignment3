
let numRows = 0;
let numCols = 0;


function addR(){
    let table = document.getElementById('grid');
    let row = document.createElement('tr');
    let column = document.createElement('td');
    if(numCols === 0){
        row.appendChild(column);
        numCols++;
    }
    else{
        for(let i = 0; i < numCols; i++){
            column = document.createElement('td');
            row.appendChild(column);
        }
    }
	
    table.appendChild(row);
    
    numRows++;
}


function addC(){

    let table = document.getElementById('grid');
    let column = document.createElement('td');
    let row = document.createElement('tr');

    if(numRows === 0){
        row.appendChild(column);
        table.appendChild(row);
        numRows++;
        numCols++;
    }
    else{
        let rows = document.getElementsByTagName('tr');
        for(let row of rows){
            row.appendChild(column);
        }
        numCols++;
    }
}

function removeR(){
    if(numRows === 0 ){
        alert("No rows to left remove.");
        return;
    }
    let table = document.getElementById('grid');
    let lastRow = table.lastElementChild;
    /*for(let i = 0; i < numCols; i++){
        let cell = lastRow.childNodes[0];
        lastRow.removeChild(cell);
    }*/

    table.removeChild(lastRow);
    numRows--;
}

function removeC(){
	let rows = document.getElementsByTagName('tr');
	
	if(numCols !== 0){
		for(let r of rows){
			let x = r.LastElementChild;
			r.removeChild(x);
		}
		numCols--;	
	}


}

function fillU(){

}

function fill(){

}

function clearAll(){

}

function selected(){
	color = document.getElementById('selectedID').value;
}

