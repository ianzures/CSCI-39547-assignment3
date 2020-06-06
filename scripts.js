
let numRows = 0;
let numCols = 0;


function addR(){

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

}