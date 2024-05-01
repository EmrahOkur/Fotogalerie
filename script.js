let pic=['./img/img1.jpg','./img/img2.jpg','./img/img3.jpg','./img/img4.jpg','./img/img5.jpg','./img/img6.jpg','./img/img7.jpg','./img/img8.jpg','./img/img9.jpg','./img/img10.jpg']


function render() {
    let content = document.getElementById('content');
    content.innerHTML = ``;

    for (let i = 0; i < pic.length; i++) {
        let img = pic[i];
        content.innerHTML +=`
        <div onclick="openImage(${i})">
            <img class="imagebox" src="${img}" alt="${i}">
        </div>
        `;
    }

    

}
function openImage(i) {
    document.getElementById('fullscreen').classList.remove('dnone');

    let content = document.getElementById('fullscreen');
    let img = pic[i];
    content.innerHTML = ``;

    content.innerHTML =`
        <div class="fullscreenbox">
            <img class="close" onclick="closeImage()" src="./img/x.png" alt="schließen">
            <img class="arrow" onclick="previousImage(${i})" src="./img/left.svg" alt="vorheriges Bild">
            <img id="fullscreen" class="bigImgBox" src="${img}" alt="${i}">
            <img class="arrow" onclick="nextImage(${i})" src="./img/right.svg" alt="nächstes Bild">
        </div>
    `;
}


function closeImage() {
    document.getElementById('fullscreen').classList.add('dnone');
}


function nextImage(i) {
    if (i < pic.length - 1) {
        i = i + 1;
    } else {
        i = 0;
    }

    openImage(i);
}


function previousImage(i) {
    if (i > 0) {
        i = i - 1;
    } else {
        i = pic.length - 1;
    }

    openImage(i);
}
