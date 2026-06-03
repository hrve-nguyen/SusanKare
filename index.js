const allTiles = document.getElementById("tiles");
let count = 0;
let percentage = count / 130;
const counter = document.getElementById("counter");
const bunnies = [
  "images/bunny1.png",
  "images/bunny2.png",
  "images/bunny3.png",
  "images/bunny4.png",
  "images/bunny5.png",
  "images/bunny6.png",
];
function tileIndex(row, col) {
  return row * 32 + col;
}

const coords = [
  [9, 11],
  [9, 12],
  [9, 13],
  [10, 10],
  [10, 11],
  [10, 12],
  [11, 9],
  [11, 10],
  [12, 7],
  [12, 8],
  [12, 9],
  [13, 6],
  [13, 7],
  [13, 8],
  [13, 9],
  [13, 10],
  [14, 5],
  [14, 6],
  [14, 7],
  [14, 8],
  [14, 9],
  [14, 10],
  [14, 11],
  [14, 14],
  [14, 15],
  [14, 16],
  [14, 17],
  [14, 18],
  [14, 19],
  [14, 20],
  [15, 6],
  [15, 7],
  [15, 8],
  [15, 9],
  [15, 10],
  [15, 11],
  [15, 12],
  [15, 13],
  [15, 14],
  [15, 15],
  [15, 16],
  [15, 17],
  [15, 18],
  [15, 19],
  [15, 20],
  [15, 21],
  [16, 8],
  [16, 9],
  [16, 10],
  [16, 11],
  [16, 12],
  [16, 13],
  [16, 14],
  [16, 15],
  [16, 16],
  [16, 17],
  [16, 18],
  [16, 19],
  [16, 20],
  [16, 21],
  [16, 22],
  [17, 8],
  [17, 9],
  [17, 10],
  [17, 11],
  [17, 12],
  [17, 13],
  [17, 14],
  [17, 15],
  [17, 16],
  [17, 17],
  [17, 18],
  [17, 19],
  [17, 20],
  [17, 21],
  [17, 22],
  [17, 23],
  [18, 7],
  [18, 8],
  [18, 9],
  [18, 10],
  [18, 11],
  [18, 12],
  [18, 13],
  [18, 14],
  [18, 15],
  [18, 16],
  [18, 17],
  [18, 18],
  [18, 19],
  [18, 20],
  [18, 21],
  [19, 5],
  [19, 6],
  [19, 7],
  [19, 10],
  [19, 11],
  [19, 12],
  [19, 13],
  [19, 14],
  [19, 15],
  [19, 16],
  [19, 17],
  [19, 18],
  [19, 19],
  [19, 20],
  [19, 21],
  [19, 22],
  [20, 9],
  [20, 10],
  [20, 11],
  [20, 17],
  [20, 18],
  [20, 19],
  [20, 20],
  [20, 21],
  [20, 22],
  [20, 23],
  [20, 24],
  [21, 8],
  [21, 9],
  [21, 18],
  [21, 19],
  [21, 20],
  [21, 23],
  [21, 24],
  [22, 7],
  [22, 8],
  [22, 24],
  [22, 25],
];
const bunnyTiles = coords.map(([row, col]) => tileIndex(row, col));

for (let i = 0; i < 32 * 32; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");

  if (bunnyTiles.includes(i)) {
    tile.style.backgroundColor = "#7e6f6f";
  }

  tile.addEventListener("mouseenter", () => {
    if (!tile.dataset.visited) {
      animatedbunnies.src = bunnies[count % 6];
      if (bunnyTiles.includes(i)) {
        tile.dataset.visited = "true";
        count++;
        percentage = ((count / 130) * 100).toFixed(2);
        document.getElementById("counter-text").textContent =
          "Highlighted: " + percentage + "%";
        tile.style.backgroundColor = "#bc0000";
      }
      if (count == 13) {
        content1.style.display = "block";
      } else if (count == 26) {
        content1.style.display = "none";
        content2.style.display = "block";
      } else if (count == 39) {
        content2.style.display = "none";
        content3.style.display = "block";
      } else if (count == 52) {
        content3.style.display = "none";
        content4.style.display = "block";
      } else if (count == 65) {
        content4.style.display = "none";
        content5.style.display = "block";
      } else if (count == 78) {
        content5.style.display = "none";
        content6.style.display = "block";
        rabbit.style.display = "block";
      } else if (count == 91) {
        content6.style.display = "none";
        rabbit.style.display = "none";
        content7.style.display = "block";
      } else if (count == 104) {
        content7.style.display = "none";
        content8.style.display = "block";
      } else if (count == 117) {
        content8.style.display = "none";
        content9.style.display = "block";
      } else if (count == 130) {
        content9.style.display = "none";
        content10.style.display = "block";
      }
    }
  });

  allTiles.appendChild(tile);
}
