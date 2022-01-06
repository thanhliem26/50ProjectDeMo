const input = document.querySelector('#input');
const search = document.querySelector('#btn');
const container = document.querySelector('.container');

search.onclick = () => {
    if(container.classList.contains("active")) {
        container.classList.remove("active");
    } else {
       container.classList.add("active");
    }
}
