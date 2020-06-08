
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

}

function removeC(){
	let table = document.getElementById('grid');
	let rows = document.getElementsByTagName('tr');
	
	if(numCols !== 0){
		for(let r of rows){
			let x = r.LastElementChild;
			r.removeChild(x);
		}
		numCols--;	
	}
	
	if(numCols === 0){
             numRows = 0;
	     table.innerHTML = "";
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

