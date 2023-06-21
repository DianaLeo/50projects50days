const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
const progress = document.querySelector('#progress-active');
const stepsContainer = document.querySelector('#stepsContainer');

let steps = 5;
let currentStep = 1;

for (let i=1;i<=steps;i++){
    const step = document.createElement('div');
    step.classList.add('step');
    step.textContent = i;
    stepsContainer.append(step);
}
const divSteps = document.querySelectorAll('.step');
divSteps[0].classList.add('active');
btnPrev.disabled = true;

btnNext.addEventListener('click',btnNextEventHandler);
btnPrev.addEventListener('click',btnPrevEventHandler);

function btnNextEventHandler (){
    currentStep+=1;
    divSteps[currentStep-1].classList.add('active');
    update();
}

function btnPrevEventHandler(){
    currentStep-=1;
    divSteps[currentStep].classList.remove('active');
    update();
}

function update(){
    progress.style.width = `${(currentStep-1)*100/(steps-1)}%`;
    if (currentStep==steps) {
        btnNext.disabled = true;
    }else if (currentStep==1) {
        btnPrev.disabled = true;
    }else{
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }
}

