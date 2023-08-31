const canvas = document.querySelector('#myCanvas');
const btnDecrease = document.querySelector('.decrease');
const btnLineWidth = document.querySelector('.lineWidth');
const btnIncrease = document.querySelector('.increase');
const inputColorPicker = document.querySelector('.colorPicker');
const btnClear = document.querySelector('.clear');

const ctx = canvas.getContext('2d');
setCanvasSize();
let started = false;

canvas.addEventListener('mousedown', (e) => {
    started = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
})

canvas.addEventListener('mouseup', (e) => {
    started = false;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
})

canvas.addEventListener('mousemove', (e) => {
    if (started) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
})

btnDecrease.addEventListener('click', () => {
    setLineWidth(-5);
})
btnIncrease.addEventListener('click', () => {
    setLineWidth(5);
})

inputColorPicker.addEventListener('input',()=>{
    ctx.strokeStyle = inputColorPicker.value;
})

btnClear.addEventListener('click', () => {
    setCanvasSize();
})

function setLineWidth(n) {
    let lineWidth = Number(btnLineWidth.textContent);
    lineWidth += n
    if (lineWidth >= 0 && lineWidth <= 50) {
        ctx.lineWidth = lineWidth;
        btnLineWidth.textContent = lineWidth;
    }
}

function setCanvasSize() {
    canvas.width = `${document.body.clientWidth * 0.9}`;
    canvas.height = `${document.body.clientHeight * 0.98 - 60}`;

    let lineWidth = Number(btnLineWidth.textContent);
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
}