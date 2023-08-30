
const p = document.querySelector('p');
const button = document.querySelector('button');

getJoke();
button.addEventListener('click', getJoke);


async function getJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const response = await fetch('https://icanhazdadjoke.com/',config);
    const data = await response.json();
    p.innerHTML = data.joke;
}
