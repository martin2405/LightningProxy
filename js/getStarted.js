const btnHeader = $('.header__button')

const getStarted = () => {
    btnHeader.addClass('animate');
    btnHeader.attr('disabled','disabled');
    setTimeout(() => {btnHeader.removeClass('animate'), btnHeader.removeAttr('disabled')}, 2000)
    setTimeout(() => {
        $('body, html').animate({
            scrollTop: $('.features').offset().top
        })
    }, 1500)
}


btnHeader.on('click', getStarted)