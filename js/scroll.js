document.addEventListener('DOMContentLoaded', load)

function scrollClick(handlerSel){
    if(handlerSel){
        let headerHeight = document.querySelector('.header').getBoundingClientRect().height
        let elem = document.querySelector(handlerSel)
        elem.addEventListener('click', function (e){
            e.preventDefault()
            let target = e.target
            if(target.tagName === 'a'.toUpperCase() || target.closest('a')){
                let hash = target.hash || target.closest('a').hash
                let position = document.querySelector(hash).offsetTop - headerHeight
                window.scrollTo({
                    top:position,
                    behavior:'smooth'
                })
            }
        })
    }
}

function load () {
    scrollClick('.menu')
    scrollClick('.cv__arrow-btn')
}