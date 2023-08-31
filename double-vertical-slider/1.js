const btnUp = document.querySelector('.up-button');
const btnDown = document.querySelector('.down-button');
const leftContainer = document.querySelector('.left-slide');
const rightContainer = document.querySelector('.right-slide');

let index = 0;
windowH = window.innerHeight;

btnUp.addEventListener('click', () => {
    index++;
    leftContainer.style.top = `-${windowH * (3-index)}px`;
    rightContainer.style.top = `-${windowH * index}px`;
    if (index==4){
        index=0;
        leftContainer.style.top = '-300vh';
        rightContainer.style.top = '0';
    }

})

btnDown.addEventListener('click', () => {
    index--;
    leftContainer.style.top = `-${windowH * (3-index)}px`;
    rightContainer.style.top = `-${windowH * index}px`;
    if (index==-1){
        index = 3;
        leftContainer.style.top = '0';
        rightContainer.style.top = '-300vh';
    }
})