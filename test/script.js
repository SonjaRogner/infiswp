const sss_button = document.getElementById("sss");

sss_button.addEventListener("click", () => {
    const container = document.createElement("div");

    const text = document.createElement("p");
    text.textContent = "Hallo";

    const removeButton = document.createElement("button");
    removeButton.addEventListener("click", () => {
        container.remove();
    });

    container.appendChild(text);
    container.appendChild(removeButton);
    document.body.appendChild(container);
});
