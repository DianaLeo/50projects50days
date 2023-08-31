const panels = document.querySelectorAll('.panel');


// for (let i = 0; i < panels.length; i++) {
//     panels[i].addEventListener('click', (e) => {
//         e.currentTarget.classList.add('active');
//         for (let n = 0; n < panels.length; n++) {
//             if (n != i) {
//                 panels[n].classList.remove('active');
//             }
//         }
//     })
// }
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        panels.forEach((panel) => {
            panel.classList.remove('active');
        })
        panel.classList.add('active');

    })
})