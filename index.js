let position = 0;
const slidesToShow = 4;
const slidesToScroll = 2;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemsCount = items.length
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((el) => {
    el.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPositon();
    checkBtns();
})

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPositon();
    checkBtns();
})

const setPositon = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

checkBtns();