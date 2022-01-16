const container = document.querySelector('.container');

window.addEventListener('keydown', (e) => {
    console.log(e.key, e.keyCode, e.code);
    container.innerHTML = `
        <div class="key">
            ${e.key}
            <small>e.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>e.keyCode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>e.code</small>
        </div>
    `;
})

