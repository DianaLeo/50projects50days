const button = document.querySelector('button');


button.addEventListener('click', (e) => {
    // if (divRipple.classList.contains('expand')) {
    //     divRipple.classList.remove('expand');
    // }

    const divRipple = document.createElement('div');
    divRipple.setAttribute('class', 'ripple');
    button.appendChild(divRipple);
    console.log(divRipple.getBoundingClientRect().width);
    let rippleWidth = divRipple.getBoundingClientRect().width;
    divRipple.style.top = `${e.offsetY - rippleWidth / 2}px`;
    divRipple.style.left = `${e.offsetX - rippleWidth / 2}px`;
    divRipple.classList.add('expand');
    setTimeout(() => {
        divRipple.classList.remove('expand');
        button.removeChild(divRipple);
    }, 500);
})



document.body.addEventListener('click',(e)=>{
    console.log('click');
    const bodyRipple = document.createElement('div');
    bodyRipple.setAttribute('class', 'bodyRipple');
    document.body.appendChild(bodyRipple);
    let rippleWidth = bodyRipple.getBoundingClientRect().width;
    console.log(bodyRipple.getBoundingClientRect().width);
    bodyRipple.style.top = `${e.offsetY - rippleWidth / 2}px`;
    bodyRipple.style.left = `${e.offsetX - rippleWidth / 2}px`;
    bodyRipple.classList.add('bodyExpand');
    setTimeout(() => {
        bodyRipple.classList.remove('bodyExpand');
        setTimeout(() => {
            document.body.removeChild(bodyRipple);
        }, 1000);
    }, 1000);

})
