const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const p = document.querySelector("p");

button.addEventListener("click", function () {
  const newColor = makeRandColor();
  const newTxt = makeRandColor();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newTxt;
  p.classList.add("btn-pressed");
  p.textContent = "Generating New Colors";
  p.style.color = color();
});

// p.addEventListener()

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r}, ${g}, ${b})`;
};

const color = () => {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r - 1}, ${g - 1}, ${b - 1})`;
};
