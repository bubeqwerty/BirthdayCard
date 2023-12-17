

const bdayYear = document.querySelector('.year');

bdayYear.textContent = 1999

var yearPlus = 1999;

const giveYear = () => {
    if(yearPlus != 2024) {
        yearPlus += 1
        bdayYear.textContent = yearPlus
    }else {
        bdayYear.textContent = 2024
    }
}

setTimeout(() => {
    setInterval(giveYear, 100);
}, 4000)

const celeb = document.querySelector('.celeb')

setTimeout(() => {
    celeb.removeAttribute("loop", "")
}, 4120)
