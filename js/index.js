let nameButton = document.getElementById("nameButton");
nameButton.value = "hallo";
nameButton.addEventListener("click", sayHello);

function sayHello() {
    let nameInput = document.getElementById("nameInput");
    let name = nameInput.value;
    let nameOutput = document.getElementById("nameOutput");
    nameOutput.innerHTML = "Hello " + name;
}

let element = document.getElementById("content");

let button = document.getElementById("showHideButton");
button.addEventListener("click", () => {
    console.log(element.style.display);
    if (element.style.display === "block") {
        element.style.display = "none";
        button.innerText = "Show";
    } else {
        element.style.display = "block";
        button.innerText = "Hide";
    }
});

let liste = null;

let list = document.getElementById("list");
let inputElement = document.getElementById("wordInput");
let buttonAdd = document.getElementById("addButton");
buttonAdd.addEventListener("click", addListElement);

function addListElement() {
    let word = inputElement.value;
    console.log(word);
    let listElement = document.createElement("li");
    listElement.innerHTML = word;
    list.appendChild(listElement);
    console.log("list element appended");
    listElement.addEventListener("copy", () => { // copy = Ctrl+c
        list.removeChild(listElement);
    });
}

// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
inputElement.addEventListener("keypress", keyEvent => {
    if (keyEvent.code == "Enter") // https://keycode.info/
    {
        addListElement();
    }
})