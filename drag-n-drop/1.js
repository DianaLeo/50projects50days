const img = document.querySelector('#image');
const boxes = document.querySelectorAll('.emptyBox');

img.addEventListener('dragstart', (e) => {
    img.style.opacity = 0.5;
})
img.addEventListener('dragend', (e) => {
    img.style.opacity = 1;
})


boxes.forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
        box.style.backgroundColor = 'lightgrey';
    })
    box.addEventListener('dragleave', (e) => {
        box.style.backgroundColor = 'white';
    })
    //box.addEventListener('drop', dropHandler)
    box.addEventListener('drop', (e) => {
        e.currentTarget.style.backgroundColor = 'white';
        img.remove();
        e.currentTarget.appendChild(img);
    })
})

function dropHandler() {
    this.style.backgroundColor = 'white';
    img.remove();
    this.appendChild(img);
}