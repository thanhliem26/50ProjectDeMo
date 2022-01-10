const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    
    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop, index)

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}