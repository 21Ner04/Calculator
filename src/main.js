const inputBox = document.getElementById("input-box");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (button.innerText === "AC") {
      inputBox.value = "";
    } else if (button.innerText === "+/-") {
      inputBox.value = -1 * parseFloat(inputBox.value);
    } else if (button.innerText === "%") {
      inputBox.value = parseFloat(inputBox.value) / 100;
    } else if (button.innerText === "=") {
      inputBox.value = eval(inputBox.value);
    } else {
      inputBox.value += button.innerText;
    }
  });
});