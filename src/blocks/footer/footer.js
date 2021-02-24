const titles = document.querySelectorAll('.footer__section-title')

for (let title of titles){
    title.addEventListener('click', function() {
        const content = this.nextElementSibling
        if (window.innerWidth < 768){
            if (!content.classList.contains('footer__section-content_visible')){
                content.classList.add('footer__section-content_visible')
                title.classList.add('footer__section-title_active')
            } else {
                content.classList.remove('footer__section-content_visible')
                title.classList.remove('footer__section-title_active')
            }
        }
    })
}