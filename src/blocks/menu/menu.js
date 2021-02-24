const openButton = document.querySelector('#dropdown')
const menu = document.querySelector('#menu')
const mask = document.querySelector('#mask')
const closeButton = document.querySelector('#close-menu')

const registerLink = document.querySelector('#register-link')
const loginLink = document.querySelector('#login-link')

const itemsHasChildren = document.querySelectorAll('.menu__item_has-children')

openButton.addEventListener('click', () => {
    menuOpen()
})
closeButton.addEventListener('click', () => {
    menuClose()
})
mask.addEventListener('click', () => {
    menuClose()
})
function menuOpen(){
    if (!menu.classList.contains('menu_visible')){
        menu.classList.remove('menu_hidden')
        menu.style.display = 'block'
        menu.classList.add('menu_visible')
        mask.classList.add('mask_visible')
    }
}
function menuClose(){
    if (menu.classList.contains('menu_visible')){
        menu.classList.add('menu_hidden')
        menu.classList.remove('menu_visible')
        mask.classList.remove('mask_visible')
        setTimeout(() => {
            menu.style.display = 'none'
        }, 400);
    }
}
for (let item of itemsHasChildren){
        item.addEventListener('click', (e) => {
            // e.preventDefault()
            if (window.innerWidth < 1024){
            let children = item.children
            for (let i = 0; i < children.length; i++){
                if (children[i].classList.contains('menu__submenu')){
                    let submenu = children[i]
                    if (!submenu.classList.contains('menu__submenu_visible')){
                        
                        submenu.classList.add('menu__submenu_visible')
                    } else {
                        submenu.classList.remove('menu__submenu_visible')
                    }
                }
            }
        } 
    })
}


const accountButton = document.querySelector('#account-button')
accountButton.addEventListener('click', function(){
    formOpen('#login-form')
});
mask.addEventListener('click', () => formClose())


registerLink.addEventListener('click', (event) => {
    event.preventDefault()
    formClose()
    formOpen('#register-form')
})
loginLink.addEventListener('click', (event) => {
    event.preventDefault()
    formClose()
    formOpen('#login-form')
})
const formCloseButton = document.querySelector('#form-close')
formCloseButton.addEventListener('click', () => formClose())


function formOpen(selector){
    const form = document.querySelector(selector)
    form.classList.add('form_visible')
    if (!mask.classList.contains('mask_visible')){
        mask.classList.add('mask_visible')
    }
}

function formClose(){
    const form = document.querySelectorAll('.form_visible')[0]
        form.classList.remove('form_visible')
        mask.classList.remove('mask_visible')
}
