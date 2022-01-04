const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const progress = $('#progress');
const prev = $('#prev');
const next = $('#next');
const cricle = $$('.cricle');

let currentProgress = 1;

cricle.forEach((item) => {
    item.onclick = () => {
        currentProgress = Number(item.innerText);
        update()
    }
})

prev.onclick = () => {
    currentProgress--;
    if(currentProgress < 1) {
        currentProgress = 1;
    }
    update();
}

next.onclick = () => {
    currentProgress++;
    if(currentProgress > cricle.length) {
        currentProgress = cricle.length;
    }
    update();
}

function update() {
    cricle.forEach((item, index) => {
        if(index < currentProgress) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    })
    progress.style.width = (currentProgress - 1) / (cricle.length - 1) * 100 + "%";
    if(currentProgress === 1) {
        prev.disabled = true
    } else if(currentProgress === cricle.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}




