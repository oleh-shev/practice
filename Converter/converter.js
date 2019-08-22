document.getElementById("select").addEventListener("change", chooseConverter);
document.getElementById("button").addEventListener("click", convertToHex);
document.getElementById("button2").addEventListener("click", convertToRGB);


function chooseConverter() {
    let select = document.getElementById("select");
    let container = document.getElementById("container");
    let container2 = document.getElementById("container2");
    if (select.value === "RGB") {
        container.style.display = "flex";
        container2.style.display = "none";
    } else if (select.value === "Hex") {
        container2.style.display = "flex";
        container.style.display = "none";
    }
}


function convertToHex() {
    let R = document.getElementById("red").value;
    let G = document.getElementById("green").value;
    let B = document.getElementById("blue").value;

    let arrHesh = [];
    let readyHesh = ["#"];

    function code1(num) {
        if (num <= 1) {
            let int = Math.floor(num * 255 / 16);
            let rem = num * 255 % 16;
            return arrHesh.push(int, rem);
        } else {
            let int = Math.floor(num / 16);
            let rem = num % 16;
            return arrHesh.push(int, rem);
        }
    }

    code1(R);
    code1(G);
    code1(B);

    for (let i = 0; i < arrHesh.length; i++) {
        if (arrHesh[i] < 10) {
            readyHesh.push(arrHesh[i]);
        } else if (arrHesh[i] === 10) {
            readyHesh.push("A");
        } else if (arrHesh[i] === 11) {
            readyHesh.push("B");
        } else if (arrHesh[i] === 12) {
            readyHesh.push("C");
        } else if (arrHesh[i] === 13) {
            readyHesh.push("D");
        } else if (arrHesh[i] === 14) {
            readyHesh.push("E");
        } else if (arrHesh[i] === 15) {
            readyHesh.push("F");
        } else {
            alert("Incorrect format. Values should be 0-255.");
        }
    }
    let heshCode = readyHesh.join("");

    function checkFormatOfRGB() {
        if (heshCode.length < 7) {
            heshCode = [];
        }
    }
    checkFormatOfRGB();

    document.getElementById("Hesh").value = heshCode;
    document.getElementById("container").style.backgroundColor = heshCode;
}

function convertToRGB() {
    let Hex = document.getElementById("Hesh2").value.toUpperCase().split('');
    let RGB = document.getElementById("RGB");
    let toR = [].concat(Hex[1], Hex[2]);
    let toG = [].concat(Hex[3], Hex[4]);
    let toB = [].concat(Hex[5], Hex[6]);

    function makeIntegerOrReminder(num) {
        if (num === "A") {
            return 10;
        } else if (num === "B") {
            return 11;
        } else if (num === "C") {
            return 12;
        } else if (num === "D") {
            return 13;
        } else if (num === "E") {
            return 14;
        } else if (num === "F") {
            return 15;
        } else if (num < 10) {
            return Number(num);
        } else {
            return alert("Incorrect format. Values should be A-F.");
        }
    }

    let RedValue = makeIntegerOrReminder(toR[0]) * 16 + makeIntegerOrReminder(toR[1]);
    let GreenValue = makeIntegerOrReminder(toG[0]) * 16 + makeIntegerOrReminder(toG[1]);
    let BlueValue = makeIntegerOrReminder(toB[0]) * 16 + makeIntegerOrReminder(toB[1]);

    function checkFormatOfHex(color) {
        if (isNaN(color)){
            color.remove();
        }
    }

    checkFormatOfHex(RedValue);
    checkFormatOfHex(GreenValue);
    checkFormatOfHex(BlueValue);

    RGB.value = `RGB: (${RedValue}, ${GreenValue}, ${BlueValue})`;
    document.getElementById("container2").style.backgroundColor = document.getElementById("Hesh2").value;

}
