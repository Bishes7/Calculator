const allBtn = document.querySelectorAll(".btn");
let strDisplay = "";

const displayElm = document.querySelector(".display");

let lastOperator = "";

const operators = ["+", "-", "%", "/", "*"];

const buttonAction = (value) => {
  console.log(value);

  if (value === "AC") {
    strDisplay = "";
    return display(strDisplay);
  }

  if (value === "C") {
    strDisplay = strDisplay.slice(0, -1);
    return display(strDisplay);
  }

  if (value === "=") {
    lastOperator = "";
    const lastChar = strDisplay[strDisplay.length - 1];
    if (operators.includes(lastChar)) {
      strDisplay = strDisplay.slice(0, -1);
    }

    return displayTotal();
  }

  if (operators.includes(value)) {
    lastOperator = value;
    const lastChar = strDisplay[strDisplay.length - 1];
    if (operators.includes(lastChar)) {
      strDisplay = strDisplay.slice(0, -1);
    }
  }

  if (value === ".") {
    const lastOperatorIndex = strDisplay.lastIndexOf(lastOperator);
    const lastNumber = strDisplay.slice(lastOperatorIndex);

    if (lastNumber.includes(".")) {
      return;
    }

    if (!lastOperator && strDisplay.includes(".")) {
      return;
    }
  }

  strDisplay = strDisplay + value;
  display(strDisplay);
};

allBtn.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.style.scale = ".9";
  });

  btn.addEventListener("click", () => {
    btn.style.scale = "1";
    const value = btn.innerText;
    buttonAction(value);
  });
});

const display = (str) => {
  displayElm.innerText = str;
};

const displayTotal = () => {
  const total = eval(strDisplay);

  strDisplay = total.toString();
  display(strDisplay);
};
