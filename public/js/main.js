

// -----------auto text----------------
const textEl = document.querySelector('.intro-text')
const text = 'Beauty, Perfect, and Appealing!'
let textIdx = 0;
let speed = 50;
writeText()
function writeText() {
    textEl.innerText = text.slice(0, textIdx)
    textIdx++
    if(textIdx <= text.length){
        setTimeout(writeText, speed)
    }
}

// -------------------Counter---------------------
const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})


// ---------------------Color display

const firstColorRow = document.querySelector('.first-row-color')
const secondColorRow = document.querySelector('.second-row-color')

let colorDisplayIdx = 1;
function renderColor(idx){
    const colorMap = new Map(Object.entries(colorData[idx + ""]));
    let mapIdx = 1;
    colorMap.forEach(function (value,key){
        if(mapIdx > 6){
            addColorToColorContainer(value, key, 2);
        }else{
            addColorToColorContainer(value, key, 1);
        }
        mapIdx++;
    })
}

function addColorToColorContainer(colorCode, colorName, row){
    let colorBoxDiv = document.createElement("div");
    colorBoxDiv.className = "color-box";

    let color = document.createElement("div");
    color.className = "color";
    color.style.backgroundColor = colorCode

    let colorLabel = document.createElement("label");
    colorLabel.className = "color-label"
    colorLabel.innerText = colorName

    colorBoxDiv.appendChild(color);
    colorBoxDiv.appendChild(colorLabel);
    if(row === 1){
        firstColorRow.appendChild(colorBoxDiv);
    }else{
        secondColorRow.appendChild(colorBoxDiv);
    }
}

renderColor(colorDisplayIdx);

function renderTimer(){
    firstColorRow.innerHTML = ''
    secondColorRow.innerHTML = ''
    if(colorDisplayIdx > 4){
        colorDisplayIdx = 1;
    }
    renderColor(colorDisplayIdx);
    colorDisplayIdx++;
}

setInterval(renderTimer, 5000)

// ---------------------images ---------------------------

const imgs = document.getElementById('nail-imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('.nail')

let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 1300}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 3000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})


// -----------------slider -------------------------
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 1000}px`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}
