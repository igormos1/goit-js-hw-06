const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);


itemEl.forEach(item => {
    const itemsTitleEl = item.querySelector('.item h2');
    console.log('Category: ', itemsTitleEl.textContent);
    const itemsLengthEl = item.querySelectorAll('.item > ul > li');
    console.log('Elements: ', itemsLengthEl.length);
});