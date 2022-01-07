const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

let load = 0;

let start = setInterval(loading, 20);

function loading() {
    load++;

    if(load > 99 ) {
        clearInterval(start);
    }

    text.innerText = `${load}%`;
    text.style.opacity = `${1 - load / 100}`;
    bg.style.filter = `blur(${25 - (load / 100) * 25}px)`;
}