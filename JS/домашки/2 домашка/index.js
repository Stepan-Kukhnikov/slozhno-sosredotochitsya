// 1. Ко всем элементам, имеющим класс "dropdown-item" 
// добавить еще один класс "super-dropdown", необходимо использовать методы forEach 
// и querySelectorAll и свойство classList у элементов.

const dropdownEls = document.querySelectorAll('.dropdown-item')
dropdownEls.forEach((element) => (element.classList.add('super-dropdown')))

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", 
// если он присутствует у этого элемента, либо добавить, 
// если такого класса у элемента не было.

const btnEl = document.querySelector('.btn')
btnEl.classList.toggle('btn-secondary')
console.log(btnEl)

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuEl = document.querySelector('.menu')
menuEl.classList.remove('dropdown-menu')

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const dropdownEl = document.querySelector( 'div' , '.dropdown')
dropdownEl.insertAdjacentHTML('beforeend' , `<a href="#">link</a>`)

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dropdownMenuButtonEl = document.querySelector('#dropdownMenuButton')
dropdownMenuButtonEl.setAttribute('id' , 'superDropdown')

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут 
// "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const ariaLabelledbyEl = document.querySelector('[aria-labelledby = "dropdownMenuButton"]')
ariaLabelledbyEl.dataset.dd = '3'
console.log(ariaLabelledbyEl)

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropdownToggleEl = document.querySelector('.dropdown-toggle')
dropdownToggleEl.removeAttribute('type')
