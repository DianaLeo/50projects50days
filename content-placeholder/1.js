const cardImg = document.querySelector('.cardImg')
const title = document.querySelector('h3')
const p = document.querySelector('p')
const sparePs = document.querySelectorAll('.spare')
const authorImg = document.querySelector('.authorImg')
const authorInfoName = document.querySelector('.authorInfo h4')
const authorInfoP = document.querySelector('.authorInfo p')

const animated_bgs = document.querySelectorAll('.backgroundWave')
const animated_txts = document.querySelectorAll('.backgroundText')

setTimeout(getData, 2500)

function getData() {
    cardImg.innerHTML = "<img src='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'></img>"
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    p.innerHTML =
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    sparePs.forEach((p) => { p.remove() });
    authorImg.innerHTML = "<img src='./portrait.jpg'></img>"
    
    console.log(authorImg.src);
    authorInfoName.innerHTML = 'Diana Leo'
    authorInfoP.innerHTML = 'Aug 30, 2023'

    animated_bgs.forEach((bg) => bg.classList.remove('backgroundWave'))
    animated_txts.forEach((txt) => txt.classList.remove('backgroundText'))
}
