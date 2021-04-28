const features = document.querySelectorAll('.feature');
const plans = document.querySelectorAll('.plan');
const opinions = document.querySelectorAll('.recommendation');
const opinionsBolts = document.querySelectorAll('.recommendation__background');
const supportDiv = document.querySelector('.support__div');

const windowHeight = window.outerHeight;


setTimeout(() => document.querySelector('.header__button').classList.add('active'), 300);

const chooseElements = () => {
    features.forEach(feature => move(feature, 0.9))

    plans.forEach(plan => move(plan, 0.5))

    opinions.forEach(opinion => move(opinion, 1))

    move(supportDiv, 0.99, 1);
}

const move = (element, addRatio, removeRatio = 1.5, scrollValue = window.scrollY) => {
    let activationMoment = null;

    if (element === supportDiv) activationMoment = element.offsetHeight + document.querySelector('.support').offsetTop - windowHeight;
    else if (addRatio === 1) activationMoment = element.offsetHeight + document.querySelector('.recommend').offsetTop - windowHeight;
    else activationMoment = element.offsetHeight * addRatio + element.offsetTop - windowHeight;

    if (activationMoment <= scrollValue) {
        if (addRatio === 1) opinionsBolts.forEach(bolt => bolt.classList.add('active'));
        else element.classList.add('active');

    } else if (activationMoment / removeRatio >= scrollValue) {
        if (addRatio === 1) opinionsBolts.forEach(bolt => bolt.classList.remove('active'));
        else element.classList.remove('active');
    }
}


window.addEventListener('scroll', chooseElements)