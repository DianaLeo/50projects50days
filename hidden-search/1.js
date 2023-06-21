const magnifier = document.querySelector('button');
const searchbar = document.querySelector('input');

let isClosed = true;
magnifier.addEventListener('click', () => {
    isClosed = !isClosed;
    searchbar.classList.toggle('transform');
    isClosed?searchbar.blur():searchbar.focus();
})