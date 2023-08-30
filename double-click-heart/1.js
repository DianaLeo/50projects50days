const countSpan = document.querySelector('p span');
const img = document.querySelector('.img');

loadCount();

img.addEventListener('dblclick',(e)=>{
    
    let count = Number(countSpan.textContent);
    count++;
    localStorage.setItem('count',count);
    countSpan.textContent = count;
    
    const heart = document.createElement('i');
    heart.setAttribute('class','heart fas fa-heart');
    img.appendChild(heart);

    const imgTop = img.getBoundingClientRect().top;
    const imgLeft = img.getBoundingClientRect().left;

    heart.style.top = `${e.clientY-imgTop}px`;
    heart.style.left = `${e.clientX-imgLeft}px`;


    console.log(heart.style.top,heart.style.left);

    setTimeout(() => {
        img.removeChild(heart);
    }, 1000);
})


function loadCount(){
    let count = localStorage.getItem('count');
    if(!count){
        count = 0;
    }
    countSpan.textContent = count;
}