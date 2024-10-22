const display = document.getElementById("display");

const appendToDisplay = (e) => {
  display.value += e;
};

const clearDisplay = () => {
  display.value = "";
};

const deleteLast = () => {
  display.value = display.value.slice(0, -1);
};
const appendToDisplaySimble = (simble) => {
  display.value = display.value + simble;
  display.value = eval(display.value);
};

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
