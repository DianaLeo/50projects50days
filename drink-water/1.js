const smallBottles = document.querySelectorAll('.smallBottle');
const remainedDiv = document.querySelector('.remained');
const remainedLiterText = remainedDiv.querySelector('h3');
const persentageDiv = document.querySelector('.persentage');
const persentageText = persentageDiv.querySelector('h1');

let index = 0;

smallBottles.forEach((smallBottle)=>{
    smallBottle.addEventListener('click',()=>{
        if (index<8){
            index++;
        }
        smallBottle.style.backgroundColor = 'white';
        remainedDiv.style.height = `${100-12.5*(index)}%`;
        persentageDiv.style.height = `${12.5*(index)}%`;
        remainedLiterText.textContent = `${(100-12.5*(index))*0.02}L`;
        persentageText.textContent =  `${12.5*(index)}%`;
    })
})
