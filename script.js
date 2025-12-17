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