// 1. В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

window.addEventListener('load', () => {
    console.log('страница загрузилась')
});

const buttonEl = document.querySelector('.button')

buttonEl.addEventListener('click', clickEvent)

function clickEvent(){
    console.log('событие addEventListener')
}

buttonEl.onclick = function() {
    console.log('событие onclick')
}

// 2. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”


const buttonEls = document.querySelectorAll('button')

// // Циклом For of 

for (const button of buttonEls) {
    button.onclick = function () {
        console.log(`Нажата кнопка ${button.className}`)
    }
}

// // Циклом ForEach

buttonEls.forEach((element) => {
    element.onclick = function() {
        console.log(`Нажата кнопка ${element.className}`)
    }
})

const fourthBtn = document.querySelector('.btn4')

fourthBtn.addEventListener('click',(summaryOfClick))
let atAll = 0

function summaryOfClick(){
    atAll++
    console.log(`На кнопку нажали ${atAll} раз`)
}

const fifthButton = document.querySelector('.btn5')

fifthButton.addEventListener('click',() => {

fifthButton.textContent = 'Вы нажали на эту кнопку'
});

// 3. Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный 
// элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться 
// текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в 
// консоли должен появиться текст “Наведения на кнопку больше нет”

const addH1 = document.querySelector('.addBtn')

addH1.addEventListener('click', (h1Func))
const h1El = document.createElement("h1")

function h1Func(){
    if (addH1.nextSibling !== '.removeBtn' ){
    // const h1El = document.createElement("h1")
    h1El.textContent = 'Новый заголовок'
    addH1.insertAdjacentElement('afterend',h1El)
    }
}

const removeH1 = document.querySelector('.removeBtn')
removeH1.addEventListener('click', (deleteH1Func))
function deleteH1Func(){
    const heading = document.querySelector('h1')
    if (h1El){
        heading.remove()
    }
}

const hoverEl = document.querySelector('.hoverBtn')

hoverEl.addEventListener('mouseover', ()=> {
    console.log('Вы навели на данную кнопку')
})
hoverEl.addEventListener('mouseout', ()=>{
    console.log('Наведения на кнопку больше нет')
})

// 4. Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const ulElement = document.querySelector('ul')
const addLiBtn = document.querySelector('.addLi')
const removeLiBtn = document.querySelector('.removeFirstLi')
const addClass = document.querySelector('.addClickClass')

addLiBtn.addEventListener('click', ()=>{
    const randomLi = document.createElement('li')
    randomLi.textContent = `Новый элемент списка`
    ulElement.appendChild(randomLi)
})


removeLiBtn.addEventListener('click', ()=>{
    const firstLi = ulElement.firstElementChild
    firstLi.remove()
})

addClass.addEventListener('click', ()=>{
    addClass.classList.add('click')
})

// 5.Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const mainEl = document.querySelector('.content')
const sendBtn = document.createElement('button')
sendBtn.textContent = 'Отправить'
mainEl.appendChild(sendBtn)

sendBtn.addEventListener('click', () => {
    sendBtn.textContent = 'Текст отправлен'
})


