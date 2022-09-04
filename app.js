import baseSet from './cards/base1.json' assert {type: "json"};

const container = document.getElementById('card-container');

for(let card of baseSet) {
    let img = document.createElement("img");
    img.src = card.images.large;
    container.appendChild(img);
}