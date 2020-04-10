let cartCounterLabel = document.querySelector('#cart-counter');
let cartContainer = document.querySelector('.page-content');

let cartCounter = 0;
let cartPrice = 0;

let btnClickHandler = (e) => {
    let target = e.target;

    if (target.classList.contains('item-actions__cart')) {
        cartCounterLabel.innerHTML = ++cartCounter;

        let fakeData = +target.parentElement.
        previousElementSibling.
        innerHTML.
        replace(/^\$(\d+)\s\D+(\d+).*$/gui, '$1.$2');

        cartPrice = Math.round((cartPrice + fakeData) * 100) / 100;
        console.log(cartPrice);

        if (cartCounter === 1) {
            cartCounterLabel.style.display = 'block'
        }
    }
}

cartContainer.addEventListener('click', btnClickHandler);


