const button = document.querySelector('button');
const background = document.querySelector('.background');


button.addEventListener('click', (e) => {
    const divRipple = document.createElement('div');
    divRipple.setAttribute('class', 'ripple');
    button.appendChild(divRipple);

    let rippleWidth = divRipple.getBoundingClientRect().width;
    const buttonTop = button.getBoundingClientRect().top;
    const buttonLeft = button.getBoundingClientRect().left;
    const rippleTop = e.clientY - buttonTop;
    const rippleLeft = e.clientX - buttonLeft;
    
    divRipple.style.top = `${rippleTop - rippleWidth / 2}px`;
    divRipple.style.left = `${rippleLeft - rippleWidth / 2}px`;
    divRipple.classList.add('expand');
    setTimeout(() => {
        divRipple.classList.remove('expand');
        button.removeChild(divRipple);
    }, 500);
})


background.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY,e.offsetX,e.offsetY,e.pageX,e.pageY);
    const bodyRipple = document.createElement('div');
    bodyRipple.setAttribute('class', 'bodyRipple');
    background.appendChild(bodyRipple);

    let rippleWidth = bodyRipple.getBoundingClientRect().width;
    bodyRipple.style.top = `${e.clientY - rippleWidth / 2}px`;
    bodyRipple.style.left = `${e.clientX - rippleWidth / 2}px`;
    bodyRipple.classList.add('bodyExpand');
    setTimeout(() => {
        bodyRipple.classList.remove('bodyExpand');
        setTimeout(() => {
            background.removeChild(bodyRipple);
        }, 1000);
    }, 1000);

})
