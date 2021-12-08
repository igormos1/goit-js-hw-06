const sizeControlEl = document.querySelector('#font-size-control');
const changeTextEl = document.querySelector('#text');

sizeControlEl.addEventListener('input', event => {
    changeTextEl.style.fontSize = event.currentTarget.value + 'px';
})