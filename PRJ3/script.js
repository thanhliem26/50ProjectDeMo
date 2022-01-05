const $ = document.querySelector.bind(document);
const $$= document.querySelectorAll.bind(document);

const container = $('.container');
const open = $('#open');
const close = $('#close');

open.onclick = () => {
   container.classList.add('shownav');
}

close.onclick = () => {
    container.classList.remove('shownav');
}