const list = document.querySelector("ul");
const columnArray = [];

setInterval(generateColumns, 1000);

function generateColumns() {
const mathNumber = Math.round(Math.random() * 101);

columnArray.push(mathNumber);
console.log("columnArray)", columnArray);

const li = document.createElement("li");
li.style.setProperty("--height", mathNumber);
list.appendChild(li);

if (columnArray.length > 20) {
 columnArray.shift();
 list.removeChild(list.firstElementChild);
  }
}