window.onload= function () {
var lastUser = JSON.parse(localStorage.getItem("initials"));

var table = document.createElement("table");
table.setAttribute("id", "userScore")
var row = document.createElement("tr");
var row1 = document.createElement("tr");
var th = document.createElement("th");
var th1 = document.createElement("th");
th.textContent = "Initials";
th1.textContent = "Score"
row1.appendChild(th)
row1.appendChild(th1);
var cell1 = document.createElement("td");
var cell2 = document.createElement("td");
cell1.textContent = lastUser.user;
cell2.textContent = lastUser.score;
row.appendChild(cell1)
row.appendChild(cell2);
table.appendChild(row1)
table.appendChild(row);
document.getElementById("show-score").appendChild(table);

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("userScore").deleteRow(1);   
})

}




