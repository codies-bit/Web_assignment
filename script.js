const calculate = (operator) => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Invalid input";
  } else {
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
        break;
    }
  }

  document.getElementById("result").value = result;
};

const generateTable = () => {
  const row = document.getElementById("row");
  const col = document.getElementById("col");
  const table = document.querySelector("#table-generate");
  const rowNum = Number(row.value);
  const colNum = Number(col.value);
  let tableHTML = "";
  for (let i = 0; i < rowNum; i++) {
    tableHTML += "<tr>";
    for (let j = 0; j < colNum; j++) {
      tableHTML += `<td>Row ${i + 1}, Col ${j + 1}</td>`;
    }
    tableHTML += "</tr>";
  }
  table.border = "1px";
  table.innerHTML = tableHTML;
  row.value = col.value = "";
};
const toggleView = (value) => {
  switch (value) {
    case "history":
      document.getElementById("history").style.display = "block";
      document.getElementById("cal").style.display = "none";
      document.getElementById("table").style.display = "none";
      break;
    case "cal":
      document.getElementById("history").style.display = "none";
      document.getElementById("cal").style.display = "block";
      document.getElementById("table").style.display = "none";
      break;
    case "table":
      document.getElementById("history").style.display = "none";
      document.getElementById("cal").style.display = "none";
      document.getElementById("table").style.display = "block";
      break;
  }
};
