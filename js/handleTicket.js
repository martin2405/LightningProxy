const ticket = document.querySelector('.ticket');

const nick = document.querySelector('.ticket__form__name');
const email = document.querySelector('.ticket__form__email');
const select = document.querySelector('.ticket__form__select');
const textarea = document.querySelector('.ticket__form__textarea');

const validatedConfirmation = document.querySelector('.ticket__validated-info');
const infoAboutInvalidation = document.querySelectorAll('.ticket__invalidation');

const validate = {
    nickV: false,
    emailV: false,
    textareaV: false,
}

const handleOpeningTicket = (type) => {
    if (type === 'open') ticket.classList.add('active')
    else if (type === 'close') ticket.classList.remove('active');
}  

const handleValidate = (e) => {
    e.preventDefault()
    let {nickV, emailV, textareaV} = validate

    if (nick.value.length >= 3) {
        nickV = true;
        infoAboutInvalidation[0].classList.remove('active');
    } else {
        nickV = false;
        infoAboutInvalidation[0].classList.add('active');
    }
    
    if (email.value.includes('@')) {
        emailV = true
        infoAboutInvalidation[1].classList.remove('active');
    } else {
        emailV = false
        infoAboutInvalidation[1].classList.add('active');
    }
    
    if (textarea.value) {
        textareaV = true
        infoAboutInvalidation[2].classList.remove('active');
    } else {
        textareaV = false
        infoAboutInvalidation[2].classList.add('active');
    }

    if (nickV && emailV && textareaV) {
        validatedConfirmation.classList.add('active')
        setTimeout(() => validatedConfirmation.classList.remove('active'), 3000);
        nick.value = '';
        email.value = '';
        textarea.value = '';
    }
}

document.querySelector('.ticket__form').addEventListener('submit', handleValidate)
document.querySelector('.support__div button').addEventListener('click',() => handleOpeningTicket('open'))
document.querySelector('.ticket__btn').addEventListener('click',() => handleOpeningTicket('close'))