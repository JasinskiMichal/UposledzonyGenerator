document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  let countA = 0;
  let countB = 0;
  let countC = 0;

  for (let i = 0; i < 30; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    let content;
    let randomNumber = Math.random();
    if (randomNumber < 0.3333 && countA < 10) {
      content = "o|";
      countA++;
    } else if (randomNumber < 0.6666 && countB < 10) {
      content = "|o";
      countB++;
    } else if (countC < 10) {
      content = "|";
      countC++;
      div.classList.add("middle"); // Dodanie klasy "middle"
    } else {
      i--; // Try again for this iteration
      continue;
    }
    div.textContent = content;
    container.appendChild(div);
  }
});
