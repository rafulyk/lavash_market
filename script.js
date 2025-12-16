const infoPage = document.getElementById('info-page');
const orderPage = document.getElementById('order-page');
const accountPage = document.getElementById('account-page');


const btns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const selected = document.getElementById('selected');
const selectedCircle = ['translateX(calc(-50% - 100px))', 'translateX(-50%)', 'translateX(calc(-50% + 100px))'];
for (let i = 0; i < 3; i++) {
    btns[i].addEventListener('click', () => {
        selected.style.transform = selectedCircle[i];
        pages.forEach(item => item.style.display = 'none');
        pages[i].style.display = 'block';
    })
}