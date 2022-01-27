
function menu() {
    const open = document.getElementById('nav_btns');
    open.classList.toggle('active')
}

window.addEventListener('scroll', () => {
    var scrVelue = window.scrollY;
    
    if(scrVelue > 625) {
        let btn = document.getElementById('scroll_top');
        let bgFixed = document.querySelector('.bg_fixed');

        btn.classList.remove('scroll_active');
        bgFixed.classList.add('bg_1');
        bgFixed.classList.remove('bg_2');
    } 
    else {
        let btn = document.getElementById('scroll_top');
        let bgFixed = document.querySelector('.bg_fixed');

        btn.classList.add('scroll_active');
        bgFixed.classList.remove('bg_1');
        bgFixed.classList.add('bg_2');
    }
})