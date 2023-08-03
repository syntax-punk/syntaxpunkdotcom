function getRandomColor() {
  const colors = ["#ff0000", "#00f", "#ff0"]; // Red, Blue, Yellow
  return colors[Math.floor(Math.random() * colors.length)];
}

function createRandomSquare(container: HTMLElement) {
  const color = getRandomColor();
  const square = document.createElement("div");
  square.className = "cell";
  square.style.backgroundColor = color;

  container.appendChild(square);
}

function createRandomSquareWithColors(container: HTMLElement, colors: string[]) {
  const color = colors[Math.floor(Math.random() * colors.length)];
  const square = document.createElement("div");
  square.className = "cell";
  square.style.backgroundColor = color;

  container.appendChild(square);
}


export {
  getRandomColor,
  createRandomSquare,
  createRandomSquareWithColors
}