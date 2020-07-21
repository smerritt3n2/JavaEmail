 /*==============================================================================
 * Generates a Table Function & Gathers Information from localstorage
 ==============================================================================*/

 var retrievedData = localStorage.getItem('full'); /* Targets Sting Storage in "localStorage" */
 var input = JSON.parse(retrievedData); /* Converts the String List back into an "Array Variable" */

 let mountains = [
    { Email: input[0], Image: input[1]}, /* Displays the data stored in the Array that is within "Column 1" & "Column 2" */
    { Email: "", Image: ""},
    { Email: "", Image: ""},
    { Email: "", Image: ""}
  ];
  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(mountains[0]);
  generateTableHead(table, data);
  generateTable(table, mountains);

 /*=============================================================================*/ 