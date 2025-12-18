document.addEventListener('touchstart', function() {}, {passive: true});
const btns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const selected = document.getElementById('selected');
for (let i = 0; i < pages.length; i++) {
    btns[i].addEventListener('click', () => {
        selected.style.transform = `translateX(calc(-50% - 100px + ${i} * 100px))`;
        pages.forEach(item => item.setAttribute('hidden', ''));
        btns.forEach(item => item.setAttribute('aria-selected', 'false'));
        pages[i].removeAttribute('hidden');
        btns[i].setAttribute('aria-selected', 'true');
    })
}
const productBoxes = document.querySelectorAll('.product-box');
const totalQuantity = document.getElementById('total-quantity');
const orderList = document.querySelectorAll('.order-item');

let order = [0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < productBoxes.length; i++) {
    const quantityBtns = productBoxes[i].querySelectorAll('.q-btn');
    const quantityValue = productBoxes[i].querySelector('.quantity-value');
    const productName = productBoxes[i].querySelector('.product-name');
    const productInfo = productBoxes[i].querySelector('.product-info');
    let quantity = 0;
    for (let char of quantityBtns) {
        const btnValue = char.querySelector('.btn-value');
        char.addEventListener('click', () => {
            quantity += Number(btnValue.textContent);
            if (quantity < 0) {
                quantity = 0;
            } else {
                orderList[i].textContent = `${productName.textContent} ${productInfo.textContent} - ${quantity}шт`;
            }
            order[i] = quantity;
            quantityValue.textContent = quantity;
            let total = 0;
            for (let quan of order) {
                total += quan;
            }
            totalQuantity.textContent = total;
        })     
    }
}
