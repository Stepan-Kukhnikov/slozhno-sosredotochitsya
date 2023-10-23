// const link2 = document.querySelector('a')
// link2.innerText = 'link text js';
// link2.href = 'https://developer.mozilla.org/ru/' 
// link2.setAttribute('href', 'https://developer.mozilla.org/ru/')
// const photoEl = document.querySelector('img')
// photoEl.src= 'https://ag-spots-2022.o.auroraobjects.eu/2022/01/02/audi-rs4-avant-b8-c790402012022200721_1.jpg?1641150497'
// console.log(link2);

// const p = document.createElement("p")
// div.appendChild(p)

// p.innerText = '<span>Новый текст</span>'
// p.innerHTML = '<span>Новый текст</span>'
// div.removeChild(p)

const div = document.querySelector("div")
const btn = document.createElement("button")
div.appendChild(btn)
btn.textContent = 'Отправить'
btn.style.margin = "100px"
btn.onclick = function(){
    setTimeout(() => {
         btn.textContent = 'Отправлено'
    }, 2000)
}