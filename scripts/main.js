const button = document.getElementById("rollButon");
const selector = document.getElementById("cubesCount");
const cubes = document.getElementById("cubes"); 

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("cubesCount").value = "1";
});

button.addEventListener("click", (event) => {
    const count = selector.value;

    while (cubes.firstChild) {
        cubes.removeChild(cubes.firstChild);
    }

    let result = 0;
    for (let x=1; x<=count; x++) {
        let img = document.createElement("img");
        let number = Math.floor(Math.random() * 6)+1;

        img.src = `./images/${number}.png`;
        img.id = 'cubeImage';
        img.alt = toString(number);

        cubes.appendChild(img)

        result += number;
    }

    document.getElementById("result").innerHTML = `Ergebnis: ${result}`;
});

selector.addEventListener("change", (event) => {
    const count = parseInt(event.target.value);

    document.getElementById("result").innerHTML = `Ergebnis: ${count}`;

    while (cubes.firstChild) {
        cubes.removeChild(cubes.firstChild);
    }

    for (let x=1; x<=count; x++) {
        let img = document.createElement("img");

        img.src = './images/1.png';
        img.id = 'cubeImage';
        img.alt = '1';

        cubes.appendChild(img)
    }
})