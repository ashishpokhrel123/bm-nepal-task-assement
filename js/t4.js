const inputElement = document.querySelector("input.my-input");
const outputElement = document.querySelector("output.my-output");

const updateOutput = () => {
  outputElement.textContent = inputElement.value;
};

inputElement.addEventListener("input", updateOutput);

updateOutput();
