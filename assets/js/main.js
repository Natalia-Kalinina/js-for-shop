let cartCounterLabel = document.querySelector('#cart-counter');
let cartContainer = document.querySelector('.page-content');

let cartCounter = 0;
let cartPrice = 0;

let btnClickHandler = (e) => {
    let target = e.target;

    if (target.classList.contains('item-actions__cart')) {
        cartCounterLabel.innerHTML = ++cartCounter;
        if (cartCounter === 1) {
            cartCounterLabel.style.display = 'block'
        }

        let fakeData = +target.parentElement.
        previousElementSibling.
        innerHTML.
        replace(/^\$(\d+)\s\D+(\d+).*$/gui, '$1.$2');

        cartPrice = Math.round((cartPrice + fakeData) * 100) / 100;

        let restoreHTML = target.innerHTML;

        // target.innerHTML = cartPrice; //price appears on the button
        target.innerHTML = `Added ${cartPrice.toFixed(2)} $`; //make 2 signs after a dot
        cartContainer.removeEventListener('click', btnClickHandler);

        setTimeout(() => {
            target.innerHTML = restoreHTML;
            cartContainer.addEventListener('click', btnClickHandler);
        }, 2000);
    }
};

cartContainer.addEventListener('click', btnClickHandler);


