const manicure = document.querySelector('.manicure')
const pedicure = document.querySelector(".pedicure")

setInterval(changeManicureImage, 2000)
let manicureIdx = 1;
function changeManicureImage(){
    if(manicureIdx > 4){
        manicureIdx = 1;
    }
    manicure.src = "/images/silder-image/m" + manicureIdx + ".jpg";
    manicureIdx++;
}

setInterval(changePedicureImage, 2000)
let pedicureIdx = 1;
function changePedicureImage(){
    if(pedicureIdx > 4){
        pedicureIdx = 1;
    }
    pedicure.src = "/images/silder-image/p" + pedicureIdx + ".jpg";
    pedicureIdx++;
}


