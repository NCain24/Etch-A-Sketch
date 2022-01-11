const container = document.querySelector(".container");
const btnBlack = document.createElement("button");
const btnGray = document.createElement("button");
const btnRgb = document.createElement("button");
const btnSize = document.createElement("button");
const section = document.querySelector(".section");
const buttonsContainer = document.querySelector(".buttons");

function resize() {
  btnSize.textContent = "Grid Size";
  btnSize.addEventListener("click", () => {
    let user = prompt("What size grid would you like?");
    if (user === null || user < 1) {
      reset();
      createDivs(16, 16);
      blackColor();
      grayColor();
      rgbColor();
    } else {
      reset();
      createDivs(user, user);
      blackColor();
      grayColor();
      rgbColor();
    }
  });
  section.appendChild(btnSize).classList.add("btn");
}

resize();

function createDivs(col, rows) {
  for (let i = 0; i < col * rows; i++) {
    const div = document.createElement("div");
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(div).classList.add("box");
  }
}

createDivs(16, 16);

function blackColor() {
  const boxes = container.querySelectorAll(".box");
  btnBlack.textContent = "Black";
  btnBlack.addEventListener("click", () => {
    boxes.forEach(box =>
      box.addEventListener("mouseover", () => {
        box.style.background = "black";
      })
    );
  });
  buttonsContainer.appendChild(btnBlack).classList.add("btn");
}
blackColor();

function grayColor() {
  const boxes = container.querySelectorAll(".box");
  btnGray.textContent = "Gray";
  btnGray.addEventListener("click", () => {
    boxes.forEach(box =>
      box.addEventListener("mouseover", () => {
        let RNum = Math.floor(Math.random() * 256);
        let grayScale = `rgb(${RNum}, ${RNum}, ${RNum})`;
        box.style.background = grayScale;
      })
    );
  });

  buttonsContainer.appendChild(btnGray).classList.add("btn");
}
grayColor();

function rgbColor() {
  const boxes = container.querySelectorAll(".box");
  btnRgb.textContent = "RGB";
  btnRgb.addEventListener("click", () => {
    boxes.forEach(box =>
      box.addEventListener("mouseover", () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${R}, ${G}, ${B})`;
      })
    );
  });
  buttonsContainer.appendChild(btnRgb).classList.add("btn");
}
rgbColor();

function reset() {
  const boxes = container.querySelectorAll(".box");
  btnReset.textContent = 'Reset';
  btnReset.addEventListener("click", () => {
    boxes.forEach(box => box.remove());
  })
  
}
