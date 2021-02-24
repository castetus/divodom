const buttons = document.querySelectorAll('.btn')
for (let btn of buttons){
        btn.addEventListener('click', function(event){
        if (this.classList.contains('btn_no-ripple')){
            return
        }
        // const span = $(this).find('.btn__ripple')
        // if (span){
        //     span.remove()
        // }
        const buttonAngle = this.getBoundingClientRect()
        const left = (event.clientX - buttonAngle.x - buttonAngle.width / 2)
        const top = (event.clientY - buttonAngle.y - buttonAngle.width / 2)
        const ripple = document.createElement('span')
        ripple.classList.add('btn__ripple')
        ripple.setAttribute('style', `top: ${top}px; left: ${left}px; height: ${buttonAngle.width}px; width: ${buttonAngle.width}px;`)

        this.appendChild(ripple)
    })
}


// $('.btn_add-to-cart').click(function(){
//     $(this).find('.btn__add-to-cart-text').css('visibility', 'hidden')
//     $(this).find('.btn__icon_spinner').css('visibility', 'visible')
//     $(this).find('.btn__icon_check').show()
//     setTimeout(() => {
//         $(this).find('.btn__icon_spinner').css('visibility', 'hidden')
//         $(this).find('.btn__icon_check').addClass('animated')
//     }, 1000);
//     setTimeout(() => {
//         $(this).find('.btn__icon_check').hide()
//         $(this).find('.btn__icon_check').removeClass('animated') 
//         $(this).find('.btn__add-to-cart-text').css('visibility', 'visible')
//     }, 3000);
// })