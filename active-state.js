const btn = document.getElementById("submit-btn");
const msg = document.getElementsByClassName("msg");
const formInput = document.getElementsByClassName("form-input");
const iconErr = document.getElementsByClassName("error-icon");

btn.addEventListener("click", () => {
  const inputs = document.getElementsByClassName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      msg[i].style.display = "inline-block";
      inputs[i].style.outline = "1px solid hsl(0, 100%, 74%)";
      iconErr[i].style.display = "inline-block";
      inputs[i].style.borderRadius = "5px;";
    } else {
      msg[i].style.display = "none";
      formInput[i].style.outline = "1px solid hsl(246, 25%, 77%)";
      iconErr[i].style.display = "none";
    }
  }
});
