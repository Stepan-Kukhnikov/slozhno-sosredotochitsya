import { cardInfo } from "./data.js";

const data = JSON.parse(cardInfo);

data.forEach(({ name, text, flavor, imgGold}) => {
    
const mainPart = document.querySelector('.content')

const content = document.createElement('div')
content.classList.add('card')
mainPart.appendChild(content)

const nameEl = document.createElement('div')
nameEl.classList.add('card-name')
nameEl.textContent = name
mainPart.appendChild(nameEl)

const imgEl = document.createElement('img')
imgEl.classList.add('card-photo')
imgEl.src = imgGold
mainPart.appendChild(imgEl)

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')
cardBody.textContent = text
mainPart.appendChild(cardBody)

const description = document.createElement('p')
description.classList.add('card-description') 
description.textContent = flavor
mainPart.appendChild(description)
});
