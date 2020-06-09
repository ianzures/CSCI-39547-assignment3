let numRows = 0;
let numCols = 0;
let color;


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
    let row = document.createElement('tr');


    if(numRows === 0){

         let column = document.createElement('td');
       

        row.appendChild(column);
        table.appendChild(row);
        numRows++;
        numCols++;

    }
    else{
        let rows = document.getElementsByTagName('tr');
        for(let row of rows){
            let column = document.createElement('td');
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
    if(numRows === 0){
        numCols = 0;
    }
    console.log(numRows, numCols);


}

function removeC(){

    let table = document.getElementById('grid');
    let rows = document.getElementsByTagName('tr');

    if(numCols !== 0){
        for(let r of rows){
           let x = r.lastElementChild;
            r.removeChild(x);

        }
        numCols--;

    }
    if(numCols === 0 ){
        numRows = 0;
        table.innerHTML = "";

    }

}

function fillU(){

  

}

function fill(){

 let table = document.getElementById('grid');

    for(let i=0; i<table.rows.length; i++){
        for(let j=0; j<table.rows[i].cells.length; j++){
            table.rows[i].cells[j].style.backgroundColor = color;
        }
    }


}

function clearAll(){


}

function selected(){

    color = document.getElementById('selectedID').value;

}
