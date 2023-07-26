const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const albumContainer = document.querySelector('#albumContainer');
const body = document.querySelector('body');

const pictures = [
    'https://dianaleo.github.io/assets/images/family-album/0I9A7174.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7176.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7295.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7394.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7396.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7401.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7413.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7557.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7623.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7679.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7758.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7859.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7975.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A7997.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A8147.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A8248.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A8266.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A8393.jpg',
    'https://dianaleo.github.io/assets/images/family-album/0I9A8454.jpg'
]

pictures.map((item, index) => {
    var myImage = document.createElement('div');
    myImage.id = `image${index}`;
    myImage.style.backgroundImage = `url(${item})`;
    albumContainer.append(myImage);
})

var i = pictures.length - 1;//start from the last picture
setBodyImage(i);


btnRight.addEventListener('click', () => {
    i--;
    if (i < 0) {
        i = pictures.length - 1;
        document.querySelectorAll('div').forEach(item => { item.style.opacity = 1 })
    } else {
        setImageOpacity(i+1,0);
    }
    setBodyImage(i);
})
btnLeft.addEventListener('click', () => {
    i++;
    if (i == pictures.length) {
        i = 0;
        document.querySelectorAll('div').forEach(item => { item.style.opacity = 0 })
    }
    setImageOpacity(i,1);
    setBodyImage(i);
})

function setBodyImage(i) {
    body.style.backgroundImage = `url(${pictures[i]})`;
}

function setImageOpacity(i,opacity) {
    var myImage = document.getElementById(`image${i}`);
    myImage.style.opacity = opacity;
}