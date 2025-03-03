const ul = document.querySelector("ul");

const counterElement = document.querySelector("#counter");
counterElement.addEventListener("click", generateList1);

const deleteElement = document.querySelector("#delete");
deleteElement.addEventListener("click", deleteList);

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");

let x = 10;

plus.addEventListener("click", () => {
  x++;
  generateList();
});

minus.addEventListener("click", () => {
  if (x > 0) {
    x--;
    generateList();
  } else {
    console.log("Hey, es gibt keine Listenelemente mehr!!!");
    alert("Hey, es gibt keine Listenelemente mehr!!!");
  }
});

function generateList1() {
  ul.innerHTML = "";
  x = 10;
  generateList();
}

function generateList() {
  ul.innerHTML = "";

  for (let i = 1; i <= x; i++) {
    const li = document.createElement("li");
    li.innerText = i;
    
    if (i % 2 === 0) {
      li.classList.add("gerade");
    }
    ul.appendChild(li);
  }
}

function deleteList() {
  ul.innerHTML = "";
  x = 10;
}
