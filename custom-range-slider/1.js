const label = document.querySelector('label');
const range = document.querySelector('input[type=range]');



range.addEventListener('input', (e)=>{
    update(e);
});


function update(e){
    label.textContent = range.value;

    const rangeWidth = range.getBoundingClientRect().width;
    const increment = (rangeWidth) / e.target.max;
    const rangeLeft = range.getBoundingClientRect().left;
    const labelWidth = label.getBoundingClientRect().width;
    let add = range.value * increment;

    label.style.left = `${add}px`;
}