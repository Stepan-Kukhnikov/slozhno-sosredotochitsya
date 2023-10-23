//1. Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1

const blockEl = document.querySelector('div')
blockEl.classList.add('item_1')
const itemEl =  blockEl.appendChild(document.createElement('div', '.item'))
itemEl.setAttribute('class', 'item')
itemEl.textContent = 'Элемент внутри'
itemEl.style.backgroundColor = '#f8f8f8'
itemEl.style.color = 'blue'
itemEl.style.border = '1px solid black'
itemEl.style.padding = '16px'

// 2. Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

const pEl = document.querySelector('.text')
const nextElSibling = pEl.previousElementSibling
console.log(nextElSibling)
const parentEl = pEl.parentNode
console.log(parentEl)
const imgEl = document.querySelector('img')
console.log(imgEl)
const firstParentEl = pEl.parentNode.parentElement
console.log(firstParentEl)

// 3. С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

const h2El = document.querySelector('.subtitle')
const body = document.querySelector('body')
const parents = []
let parent = h2El.parentNode

while (parent !== body){
    parents.push(parent)
    parent = parent.parentNode
}
console.log(parents)

// 4. Дано поле ввода и кнопка отправить, необходимо реализовать функционал,
// если пользователь нажимает на кнопку отправить, 
// а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 
// с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const formEl = document.querySelector('form')
const inputEl = document.querySelector('input')
const btnEl = document.querySelector('button')

formEl.addEventListener('submit', () => {
    const errorMsg = document.createElement('h2', 'errorEl')
    if (inputEl.value === ''){
        errorMsg.textContent = 'Вы не заполнили поле ввода'
        errorMsg.style.border = '3px solid red'
    } else {
        errorMsg.textContent = 'Вы заполнили поле ввода'
        errorMsg.style.border = '3px solid green'
    }
    formEl.appendChild(errorMsg)
})