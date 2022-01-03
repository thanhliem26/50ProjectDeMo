const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const panels = $$('.panel');
console.log(panels);

const removeActive = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

const handleClick = () => {
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActive();
            panel.classList.add('active');
        })
    })
}
handleClick();

