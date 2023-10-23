// 1. При изменении значения в input с id="from", значение 
// содержащееся в нем должно моментально отображаться в span. 
// То есть при печати в input'е тег span также должен меняться.


const inputFrom = document.querySelector('#from')
const spanEl = document.querySelector('span')

inputFrom.addEventListener('input', ()=>{
    spanEl.innerText = inputFrom.value
})

// 2. При клике на кнопку с классом messageBtn 
// необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

const messageButton = document.querySelector('.messageBtn')
const messageEl = document.querySelector('.message')

messageButton.addEventListener('click', ()=> {
    messageEl.classList.add('animate_animated', 'animate_fadeInLeftBig')
    messageEl.style.visibility = 'visible'
})

// 3. Необходимо при отправке формы 
// проверить, заполнены ли все поля в этой форме. Если какое-либо 
// поле не заполнено, форма не должна отправляться, 
// также должны быть подсвечены незаполненные поля 
// (необходимо поставить класс error незаполненным полям). 
// Как только пользователь начинает заполнять какое-либо поле, 
// необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо 
// данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) 
// необходимо убрать.

const inputs = document.querySelectorAll('.form-control')
const form = document.querySelector('form')

form.addEventListener('submit', (event)=>{
for (let i=0; i<inputs.length; i++){
    if (inputs[i].value === ''){
        inputs[i].setAttribute('class', 'error')
        event.preventDefault()
    } else {
        inputs[i].removeAttribute('class', 'error')
    }
    }
})

for (let i=0; i<inputs.length; i++){
    inputs[i].addEventListener('input', ()=>{
       if (inputs[i].classList.contains('error')){
            inputs[i].classList.remove('error')
       }
})
}




