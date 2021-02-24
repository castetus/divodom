document.addEventListener('DOMContentLoaded', function(){
    let position = window.pageYOffset
    const button = document.querySelector('#filters-button')
    if (button){
            window.addEventListener('scroll', function(){
            let currentPoint = window.pageYOffset
            if (position < currentPoint){
                button.classList.add('floating-button__btn_hidden')
            } else {
                button.classList.remove('floating-button__btn_hidden')
            }
            position = currentPoint
        })
    }
})
