let textbox = document.getElementById("text-box");
let qr_box = document.getElementById("qr-box");
let img_box = document.getElementById("img-box");

function genrateQR() {

    if(textbox.value.length>0){
        img_box.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+textbox.value
    qr_box.classList.add("show-img");

    }
    else
    textbox.classList.add('error');
    setTimeout(() => {
        textbox.classList.remove('error')
    }, 1000);
}

