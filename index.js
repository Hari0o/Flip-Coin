let coin = document.querySelector('.box');
let flipBtn = document.querySelector('#flip');
let resetBtn = document.querySelector('#reset')

flipBtn.addEventListener('click', () => {
    let i = Math.floor(Math.random() * 2);
    console.log(i)
    coin.style.animation = 'none';
    if (i) {
        setTimeout(function () {
            coin.style.animation = "spin-head 2s forwards";
        },10)
    } else {
        setTimeout(function () {
          coin.style.animation = "spin-tail 2s forwards";
        }, 10);
    }
})

resetBtn.addEventListener('click', () => {
    window.location.reload()
})