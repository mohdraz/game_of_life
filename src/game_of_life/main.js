// layout__generation-grid

const rows = 40;
const cols = 40;

function createWorld() {
  console.log("working from func");
  const world = document.querySelector("#root");
  console.log(`el: ${document.querySelector("#root")} `);

  const tbl = document.createElement("table");
  tbl.setAttribute("id", "wordlgrid");

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("td");
      tr.appendChild(cell);
    }
    tbl.appendChild(tr);
  }

  world.appendChild(tbl);
}

window.onload = () => {
  createWorld();
};

module.exports = createWorld;
