// const display = document.getElementById("display");

// const appendToDisplay = (e) => {
//   display.value += e;
// };

// const clearDisplay = () => {
//   display.value = "";
// };

// const deleteLast = () => {
//   display.value = display.value.slice(0, -1);
// };

// const appendToDisplaySimble = (simble) => {
//   display.value += simble;
// };

// const calculateResult = () => {
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "Error";
//   }
// };

const display = document.getElementById("display");
const arr = ["+", "-", "*", "/"];

const appendToDisplay = (e) => {
  display.value += e;
};

const clearDisplay = () => {
  display.value = "";
};

const deleteLast = () => {
  display.value = display.value.slice(0, -1);
};

const appendToDisplaySimble = (symbol) => {
  const isSymbol = arr.includes(display.value[display.value.length - 1]);
  const temp = display.value.slice(0, display.value.length - 1) + symbol;

  if (!isSymbol) {
    display.value = display.value + symbol;
  } else {
    display.value = temp;
  }
};

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
