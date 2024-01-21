var sno;
var itemName;
var amount;
var table = document.getElementById("table");

function addExpense() {
  sno = +prompt("Enter Id");
  itemName = prompt("Enter Item Name");
  amount = +prompt("Enter Amount");

  var editBtn = document.createElement("img");
  var deleteBtn = document.createElement("img");

  // Set attributes for the Edit button
  editBtn.setAttribute("onclick", "editExpense(this)");
  editBtn.setAttribute("src", "./images & icons/edit.png");
  editBtn.setAttribute("class", "pointerMouse");

  // Set attributes for the Delete button
  deleteBtn.setAttribute("onclick", "deleteExpense(this)");
  deleteBtn.setAttribute("src", "./images & icons/delete.png");
  deleteBtn.setAttribute("class", "pointerMouse");

  var tr = table.insertRow();
  table.appendChild(tr);

  var cell1 = tr.insertCell(0);
  cell1.textContent = sno;
  var cell2 = tr.insertCell(1);
  cell2.textContent = itemName;
  var cell3 = tr.insertCell(2);
  cell3.textContent = amount;
  var cell4 = tr.insertCell(3);

  // Append buttons to the fourth cell
  cell4.appendChild(editBtn);
  cell4.appendChild(deleteBtn);
}

// Example edit and delete functions
function editExpense(button) {
  sno = +prompt(
    "enter Updated Id",
    button.parentNode.parentNode.children[0].textContent
  );
  button.parentNode.parentNode.children[0].textContent = sno;

  itemName = prompt(
    "enter Updated Item Name",
    button.parentNode.parentNode.children[1].textContent
  );
  button.parentNode.parentNode.children[1].textContent = itemName;

  amount = +prompt(
    "enter Updated Amount",
    button.parentNode.parentNode.children[2].textContent
  );
  button.parentNode.parentNode.children[2].textContent = amount;
}

function deleteExpense(button) {
  button.parentNode.parentNode.remove();
}

document.getElementById("totalBtn").addEventListener("click", () => {
  var sum = 0;
  for (var i = 0; i < table.rows.length - 1; i++) {
    var cellValue = parseInt(table.rows[i].cells[2].textContent);
    sum += isNaN(cellValue) ? 0 : cellValue;
  }

  var sumCell = table.rows[table.rows.length - 1].cells[1];
  sumCell.textContent = sum;
});
