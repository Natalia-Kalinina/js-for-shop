let cartCounterLabel = document.querySelector('#cart-counter');
let cartContainer = document.querySelector('.page-content');
let cartCounter = 0;

let btnClickHandler = (e) => {
    let target = e.target;

    if (target.classList.contains('item-actions__cart')) {
        cartCounterLabel.innerHTML = ++cartCounter;
        if (cartCounter === 1) {
            cartCounterLabel.style.display = 'block'
        }
    }
}

cartContainer.addEventListener('click', btnClickHandler);


