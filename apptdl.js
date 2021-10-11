const button1 = document.querySelector('.button01')
const body = document.querySelector('body')
const input = document.querySelector('input')
const inputbutton = document.querySelector('.addtask')
const parent = document.querySelector('.list-items')
const gparent = document.querySelector('.forscroll')

console.log(button1)
console.log(body)
console.log(input)
console.log(inputbutton)
console.log(parent)
console.log(gparent)

const callbackfunction = (() => {
  body.classList.toggle('dark')
})

button1.addEventListener('click',callbackfunction)