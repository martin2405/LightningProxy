const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const recommendations = document.querySelectorAll('.recommendation');

let directionValue = 0;

const moveReccomedation = (direction) => {
    if (direction === 'right' && directionValue < 400) directionValue += 100;
    else if (direction === 'left' && directionValue >= 100) directionValue -= 100;
    
    recommendations.forEach(recommend => {
        recommend.style.transform = `translateX(-${directionValue}vw)`;
    })
}


btnLeft.addEventListener('click', () => moveReccomedation('left'));
btnRight.addEventListener('click', () => moveReccomedation('right'));