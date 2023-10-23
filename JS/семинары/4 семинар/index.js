// 1. В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”



const checkboxEl = document.querySelector('input')
const buttonEl = document.querySelector('.submit')
const necessaryEl = document.querySelector('.necessaryToAgree')


necessaryEl.style.visibility='hidden'
buttonEl.addEventListener('click',(ifSubmit))

function ifSubmit(){
    if (!checkboxEl.checked){
        necessaryEl.style.visibility='visible'
    } else {
        necessaryEl.style.visibility='hidden'
    }
}


// 2. В html создать 2 элемента радио кнопки (input type=”radio”)
// и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”


const teaEl = document.querySelector('input[value = "tea"]')
const coffeeEl = document.querySelector('input[value = "coffee"]')
const sendBtn = document.querySelector('.send')

sendBtn.addEventListener('click', () => {
    if (teaEl.checked){
        alert('Чай закончился')
    } else if (coffeeEl.checked) {
        alert('Кофе закончился')
    }
})


// 3. Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” 
// то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода
// появляется красная обводка и текст “пароль неверный”


const inputEl = document.querySelector('.pasword')
const newButtonEl = document.querySelector('.send-button')
const formEL = document.querySelector('form')

formEL.addEventListener('submit',(event) => {
    event.preventDefault()
    if (inputEl.value === 'пароль' ) {
        inputEl.style.border = '3px solid green'
        inputEl.setCustomValidity('Пароль верный')
    } else if (inputEl.value !== 'пароль' ) {
        inputEl.style.border = '3px solid red'
        inputEl.setCustomValidity('Пароль неверный')
    }
    inputEl.reportValidity()
})

inputEl.addEventListener('input', ()=> {
    inputEl.setCustomValidity('')
})

// 4. Создать поле ввода и под ним заголовок 
// h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо 
// чтобы текст внутри заголовка менятся на введенный в поле ввода

const formElement = document.querySelector('form')
const h1El = document.querySelector('.h1Text')
const inputField = document.querySelector('#input-place')

inputField.addEventListener('input', () => {
    h1El.innerText = inputField.value
})