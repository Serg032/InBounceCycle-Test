const func = document.querySelector('.popUpButton')
const popUp = document.querySelector('.popup')
const crox = document.querySelector('.fa-times')

func.addEventListener('click', (event) => {
    event.preventDefault()
    popUp.classList.add('show')
})

crox.addEventListener('click', () => {
    popUp.classList.remove('show')
})

