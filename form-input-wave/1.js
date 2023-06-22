const labels = document.querySelectorAll("label");

labels.forEach((label) => {
    label.innerHTML = label.innerHTML
        .split('')
        .map((item, index) => { return `<span style="transition-delay:${(index) * 50}ms;">${item}</span>` })
        .join('');
    console.log(label.innerHTML);
})


