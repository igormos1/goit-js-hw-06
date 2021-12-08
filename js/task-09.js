function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('button');
const docBody = document.querySelector('body');
const spanColor = document.querySelector('.color');

btn.addEventListener('click', handleBtn);

function handleBtn(event) {
  const color = getRandomHexColor();
  docBody.style.backgroundColor = color;
  spanColor.textContent = `${color}`;
}