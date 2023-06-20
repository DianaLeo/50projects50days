const div_count = document.getElementById('count');
const div_countDownContainer = document.getElementById('countDownContainer');
const div_goContainer = document.getElementById('goContainer')
const p_getready = document.querySelector('#countDownContainer p');
const p_go = document.querySelector('#goContainer p');
const btn = document.getElementsByTagName('button')[0];

const myfunction = () => {
    let count = 3;
    div_count.textContent = count;
    div_count.classList.add('in');
    div_goContainer.classList.add('in');
    div_countDownContainer.classList.add('out');
    div_goContainer.hidden = true;
    div_countDownContainer.hidden=false;
    console.log(count);
    const myInterval = setInterval(() => {
        count -= 1;
        if (count < 0) {
            div_count.classList.remove('in');
            div_goContainer.hidden = false;
            if (count < -1) {
                clearInterval(myInterval);
                div_countDownContainer.hidden=true;
            }
        } else {
            div_count.textContent = count;
        }
    }, 1000);
}

myfunction();

btn.addEventListener('click', myfunction);




