function insert_Row() {
    //Write your code here
   // Get the table by ID
   let table = document.getElementById("sampleTable");

	 // Insert a new row at the beginning (index 0)
    let newRow = table.insertRow(0);

	 // Insert two cells in the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

	// Assign values to the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
