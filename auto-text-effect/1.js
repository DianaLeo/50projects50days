var text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias velit sapiente beatae nostrum voluptates pariatur dignissimos reprehenderit possimus autem iusto dolorum rerum officia, excepturi praesentium nesciunt? Quasi, ab illo."
let textLength = text.length;

const outerContainer = document.querySelector('#outerContainer');
const textP = document.querySelector('#text');
const speedNumber = document.querySelector('input');

let speed = speedNumber.value;
let i = 0;
timer();
speedNumber.addEventListener('input',(e)=>{
    speed = e.target.value;
})

function timer() {
    console.log(text.slice(0,i+1));
    textP.textContent = text.slice(0,i+1);
    i++;
    
    if (i >= textLength) {
        i = 0;
    }
    setTimeout(timer, 500/speed);
}

// function outerTimer() {
//     outerContainer.innerHTML = "";
//     let timerAppendSpans=null;
//     innerTimer();
//     setTimeout(outerTimer, (textLength) * 500 / speed);
// }
// setInterval(outerTimer(), (textLength + 1) * 500);

// function innerTimer() {
//     let i = 0;
//     let timerAppendSpans = setInterval(() => {
//         const span = document.createElement('span');
//         span.innerText = text[i];
//         outerContainer.append(span);
//         i++;
//         if (i >= textLength) {
//             clearInterval(timerAppendSpans)
//         }
//     }, 500);
// }

// function outerTimer(){
//     outerContainer.innerHTML = "";
//     innerTimer();
//     return outerTimer;
// }