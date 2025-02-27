const app = document.getElementById('app');
const btnBuy = document.querySelector(".buy-btn");
const emoji = document.querySelector('.emojiQuality');
const btnDecline = document.querySelector('.decline-btn');
const divMain = document.createElement('div');
divMain.classList.add('container');
const text = document.createElement('h1');
text.classList.add("text");
const FirstDetail = document.createElement('p');
FirstDetail.classList.add('width');



const width = screen.availWidth;
const height = screen.availHeight;

if (width >= 1500) {
    emoji.textContent= "🤩"
} else if (width >= 1000) {
    emoji.textContent = "🙂"
}else if (width >= 500){
    emoji.textContent = "😰"
}else if (width == 0){
    emoji.textContent = "esta resolucion no es recomendable"
}

text.textContent = "Resolucion de la pantalla"
FirstDetail.textContent = `${width}x${height}p`;
divMain.appendChild(text);
divMain.appendChild(FirstDetail);
app.appendChild(divMain)



const textCon = document.createElement('h2');

function buy() {
    const div = document.createElement("div");
    div.classList.add('buy-container');
    textCon.classList.add('textCon-buy');
    textCon.textContent = `Felicitaciones ha comprado la laptop con la resolucion: ${width}x${height}` + '🎉';
    div.appendChild(textCon);
    app.appendChild(div);
    app.replaceChild(div,divMain);
    btnBuy.style.display = "none"
    btnDecline.style.display = "none"
    emoji.textContent = ''
}

const textConDecline = document.createElement('h2');

function Decline() {
    const div = document.createElement("div");
    div.classList.add('decline-container');
    textConDecline.classList.add('textCon');
    textConDecline.textContent = `Ha Rechazado la compra de la laptop con la resolucion: ${width}x${height}p con exito` + '🙂';
    div.appendChild(textConDecline);
    app.appendChild(div);
    app.replaceChild(div,divMain);
    btnDecline.style.display = "none"
    btnBuy.style.display = "none";
    emoji.textContent = ''
}

function back() {
    let btn = document.createElement('button');
    btn.classList.add('btn-back');
    btn.textContent = "Return Back"
    app.appendChild(btn)
    btn.addEventListener('click', ()=>{
        app.appendChild(divMain);
        if (width >= 1500) {
            emoji.textContent= "🤩"
        } else if (width >= 1000) {
            emoji.textContent = "🙂"
        }else if (width >= 500){
            emoji.textContent = "😰"
        }else if (width == 0){
            emoji.textContent = "esta resolucion no es recomendable"
        }
        btnBuy.style.display = "block"
        btnDecline.style.display = "block"
        btn.style.display = "none";
        textCon.textContent = ""
        textConDecline.textContent = ""
    })
}

btnBuy.addEventListener('click', () =>{
    buy();
    back()
})

btnDecline.addEventListener('click', () =>{
    Decline()
    back()
})
