const tagsEl = document.querySelector('#tags');
const textarea = document.querySelector('textarea');


textarea.addEventListener('keyup', (e) => {
    if(textarea.value === '' || e.keyCode === 13) {
        tagsEl.innerHTML = '';
        textarea.value = '';
    } else {
        tagsEl.innerHTML = '';
        let span = document.createElement('span');
        span.classList.add('tag');
        span.textContent = textarea.value;
        tagsEl.appendChild(span);
    }
})