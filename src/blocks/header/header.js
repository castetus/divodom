const searchButton = document.querySelector('#search-button')
const search = document.querySelector('#search')
const searchField = document.querySelector('#search-field')

searchButton.addEventListener('click', () => {
    if (!search.classList.contains('header__search_visible')){
        search.classList.add('header__search_visible')
        searchButton.classList.add('header__search-button_close')
    } else {
        search.classList.remove('header__search_visible')
        searchButton.classList.remove('header__search-button_close')
    }
    
})


