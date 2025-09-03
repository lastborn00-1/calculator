const calculator = document.getElementById("calculator");
const modeToggle = document.getElementById("modeToggle");
const modeLabel = document.getElementById("modeLabel");
const sciToggle = document.getElementById("sciToggle");
const sciLabel = document.getElementById("sciLabel");
const sciButtons = document.getElementById("scientificButtons");

// Dark/Light toggle
modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    calculator.classList.remove("dark");
    calculator.classList.add("light");
    document.body.style.background = "#f0f0f0";
    modeLabel.textContent = "Light Mode";
    modeLabel.style.color = "#000";
  } else {
    calculator.classList.remove("light");
    calculator.classList.add("dark");
    document.body.style.background = "#111";
    modeLabel.textContent = "Dark Mode";
    modeLabel.style.color = "#fff";
  }
});

// Scientific toggle
sciToggle.addEventListener("change", () => {
  if (sciToggle.checked) {
    sciButtons.classList.add("show");
    sciLabel.textContent = "Scientific";
  } else {
    sciButtons.classList.remove("show");
    sciLabel.textContent = "Basic";
  }
});

function appendInput(value) {
  const history = document.getElementById("history");
  const result = document.getElementById("result");
  if (result.textContent === "0" || result.textContent === "Error") {
    result.textContent = value;
  } else {
    result.textContent += value;
  }
}

function appendSci(value) {
  const result = document.getElementById("result");
  if (result.textContent === "0" || result.textContent === "Error") {
    result.textContent = value;
  } else {
    result.textContent += value;
  }
}

function clearDisplay() {
  document.getElementById("history").textContent = "";
  document.getElementById("result").textContent = "0";
}

function deleteLast() {
  const result = document.getElementById("result");
  result.textContent = result.textContent.slice(0, -1) || "0";
}

function calculate() {
  const history = document.getElementById("history");
  const result = document.getElementById("result");
  try {
    history.textContent = result.textContent;
    // Replace log10 for compatibility
    const expr = result.textContent.replace(/log10/g, "Math.log10");
    result.textContent = eval(expr);
  } catch (error) {
    result.textContent = "Error";
  }
}
