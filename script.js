const wrapper = document.getElementById('wrapper');
const qrInput= document.getElementById('input');
const button= document.getElementById('button');
const qrImg= document.getElementById('img');

button.addEventListener("click",() =>
{
    let qrValue = qrInput.value.trim(); //trim removes space
    if(qrValue=="") return;
    button.innerText = "Generating QR Code... "
    qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue} ` ;
    qrImg.addEventListener("load",()=>{
        button.innerText = "Generate QR Code"
    })
})