const button = document.getElementById("enter");
let input = document.getElementById("userinput");
let inputLength = (input) => input.value.length;
let textList = document.getElementById("list");
let buttonsList = document.getElementById("buttons");


function addNewElement() {
    //For new text Elements:
    let newElement = document.getElementById("userinput").value;
    let liText = document.createElement("li");
    liText.appendChild(document.createTextNode(newElement));
    textList.appendChild(liText);
    //For new buttons:
    let newButton = document.createElement("button");
    newButton.appendChild(document.createTextNode("X"));
    buttonsList.appendChild(newButton);

}

function addAfterClick() {
    if (inputLength(input) > 0) {
        addNewElement();
        input.value = '';
    }
}

function addAfterKeyPress() {
    if (inputLength(input) > 0 && event.keyCode === 13) {
        addNewElement();
        input.value = '';
    }
}

function toggle() {
    let x = event.target;
    if (x.classList.contains("done")) {
        x.classList.remove("done");
    } else {
        x.classList.add("done");
    }
}

function deleteElements() {
    let x = event.target;
    let textElements = textList.querySelectorAll("li");
    let buttons = buttonsList.querySelectorAll("button");
    for (let i = 0; i <= buttons.length; i++) {
        if (x === buttons[i]) {
            buttons[i].remove();
            textElements[i].remove();
        }
    }
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterKeyPress);
textList.addEventListener("click", toggle);
buttonsList.addEventListener("click", deleteElements);

