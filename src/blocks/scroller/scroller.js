const scroller = document.querySelector('#scroller')
window.addEventListener('scroll', function(){
    let scrollSize = window.pageYOffset
    if (scrollSize > 100){
        scroller.classList.add('scroller_visible')
    } else {
        scroller.classList.remove('scroller_visible')
    }
})
scroller.addEventListener('click', function(){
    const step = window.pageYOffset / 20,
            animationTime = 400,
            framesCount = 20;
        let scroll = setInterval(() => {
        window.scrollBy(0, -step)
            if (window.pageYOffset < 1){
                clearInterval(scroll)
            }
        }, animationTime / framesCount);
})


