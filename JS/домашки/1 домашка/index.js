// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.

const linkEl = document.getElementById("super_link")
console.log(linkEl)

// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLinkEls = document.querySelectorAll('.card-link')
cardLinkEls.forEach((element) => (element.textContent = 'ссылка'));

// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardbodyEls = document.querySelectorAll('.card-body .card-link')
console.log(cardbodyEls)

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dataEl = document.querySelector( '[data-number = "50"]')
console.log(dataEl)

// 5. Выведите содержимое тега title в консоль.

const titleText = document.querySelector('title')
console.log(titleText.textContent)

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitleEl = document.querySelector('.card-title')
const cardParentEl = cardTitleEl.parentNode
console.log(cardParentEl)

// 7. Создайте тег p`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const cardEl = document.querySelector('.card')
const newP = document.createElement('p')
newP.textContent = 'Привет'
cardEl.appendChild(newP)

// 8. Удалите тег h6 на странице.

const h6El = document.querySelector('h6')
const cardParent = document.querySelector('.card-body')
cardParent.removeChild(h6El)

