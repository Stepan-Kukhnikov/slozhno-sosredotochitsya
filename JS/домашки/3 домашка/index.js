// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером

document.addEventListener('DOMContentLoaded', () => {
    console.log('все теги прогрузились')
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener('load', () => {
    console.log('страница загрузилась')
});


// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

const bodyEl = document.querySelector('body')

function listener(e){
    const targetEL = e.target
    if (targetEL.classList.contains('super_element')){
        console.log(`Элемент ${targetEL.tagName} имеет класс super_element`);
    } else {
        console.log(`Элемент ${targetEL.tagName} не имеет класс super_element`);
    }
}

bodyEl.addEventListener('click', listener)

// 4. Сделайте, чтобы при наведении на textarea в консоли 
// появлялось сообщение: "Вы навели на textarea."

const textAreaEl = document.querySelector('textarea')

textAreaEl.addEventListener('mouseover', ()=>{
    console.log('Вы навели на textarea.');
})

// 5. Необходимо повесить событие клика на тег ul.
// В обработчике события в консоль необходимо выводить текст, который 
// записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке,
// то ничего выводить не нужно. Необходимо использовать делегирование.

const ulEl = document.querySelector('ul')

function clickOnButton(e){
    const buttonTarget = e.target
    const isButtonEl = buttonTarget.tagName
    if (isButtonEl == 'BUTTON'){
        console.log(`${buttonTarget.textContent}`);
    }
}


ulEl.addEventListener('click',(clickOnButton))

// 6. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.


const liEls = document.querySelectorAll('li')

for (let i = 1; i< liEls.length; i += 2){
    liEls[i].style.backgroundColor = 'blue'
}