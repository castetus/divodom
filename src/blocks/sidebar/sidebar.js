document.addEventListener('DOMContentLoaded', function(){
    if (document.querySelector('#filters-button')){
        const button = document.querySelector('#filters-button')
        const sidebar = document.querySelector('.sidebar')
        const closeButton = document.querySelector('.sidebar__btn-close')
        button.addEventListener('click', function(){
            sidebar.classList.add('sidebar_visible')
        })
        if (sidebar.classList.contains('sidebar_visible')){
            closeButton.addEventListener('click', function(){
                sidebar.classList.remove('sidebar_visible')
            })
        }
    }
})