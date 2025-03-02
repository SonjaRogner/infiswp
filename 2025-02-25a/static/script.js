const ul = document.querySelector("ul");

const counterElement = document.querySelector("#counter");
counterElement.addEventListener("click", generateList);

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
    const liRemove = ul.lastElementChild;
    if (liRemove) {
      ul.removeChild(liRemove);
    }
  } else if (x < 1) {
    console.log("Hey, es gibt keine Listenelemente mehr!!!");
    alert("Hey, es gibt keine Listenelemente mehr!!!")
  }

});

function generateList() {
  ul.innerHTML = "";
  for (let i = 1; i <= x; i++) {
    const li = document.createElement("li");
    li.innerText = i;
    li.appendChild(li);
    if (i % 2 === 0) {
      ul.classList.add("gerade");
    }
  }
}

function deleteList() {
  ul.innerHTML = "";
}
