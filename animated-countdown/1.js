const div_count = document.getElementById('count');
const div_countDownContainer = document.getElementById('countDownContainer');
const div_goContainer = document.getElementById('goContainer')
const btn = document.getElementsByTagName('button')[0];

const myfunction = () => {
    let count = 5;
    div_count.textContent = count;
    div_count.classList.add('in');
    div_goContainer.hidden = true;
    div_goContainer.classList.remove('in');
    div_countDownContainer.classList.remove('out');

    let c = 0;//async timer to remove counter animation
    setTimeout(() => {
        c += 1;
        div_count.classList.remove('in');
        const myInterval2 = setInterval(() => {
            div_count.classList.remove('in');
            if (c == count + 1) { clearInterval(myInterval2) }
        }, 1000)
    }, 900);

    const myInterval = setInterval(() => {
        count -= 1;
        if (count < 0) {
            div_countDownContainer.classList.add('out');
            div_goContainer.hidden = false;
            div_goContainer.classList.add('in');
            clearInterval(myInterval);
        } else {
            div_count.textContent = count;
            div_count.classList.add('in');
        }
    }, 1000);
}

myfunction();

btn.addEventListener('click', myfunction);




