const searchBar = document.querySelector('#search');
const searchForm = document.querySelector('#searchForm');
const profile = document.querySelector('.profile');
const avatarDiv = document.querySelector('.profile .avatar');
const profileName = document.querySelector('.profile .name');
const followers = document.querySelector('.follow .followers');
const following = document.querySelector('.follow .following');
const repo = document.querySelector('.follow .repo');
const repos = document.querySelector('.repoNames');
const repoLinks = document.querySelectorAll('.repoNames a');
const errorCard = document.querySelector('.error');
const errorMsg = errorCard.querySelector('h1');

profile.classList.add('hide');
errorCard.classList.add('hide');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();//compulsary
    const userName = searchBar.value;
    getData(userName);
    getRepos(userName);
})

async function getData(userName) {
    const url = `https://api.github.com/users/${userName}`;
    try {
        const data = await axios(url);
        searchBar.value = "";
        searchBar.blur();

        profile.classList.remove('hide');
        errorCard.classList.add('hide');

        avatarDiv.style.backgroundImage = `url(${data.data.avatar_url})`;
        profileName.textContent = data.data.name;
        followers.textContent = data.data.followers + ' followers';
        following.textContent = data.data.following + ' following';
        repo.textContent = data.data.public_repos + ' repos';

    } catch (e) {
        console.log(e);
        if (e.response.status == '404') {
            profile.classList.add('hide');
            errorCard.classList.remove('hide');
            errorMsg.textContent = "Sorry, no user found.";
        }
    }
}

async function getRepos(userName) {
    const url = `https://api.github.com/users/${userName}/repos`;
    try {
        const data = await axios(url);
        repoLinks.forEach((a,index)=>{
            console.log(data.data[index]);
            a.setAttribute('href',data.data[index].clone_url);
            a.textContent = data.data[index].name;
        })
    } catch (e) {
        console.log(e);
    }
}