//DOM - INFORMA OS ELEMENTOS DO HTML 

const texto = document.getElementById("texto"); // PEGA O ELEMENTO COM O ID (nome)
const botao = document.querySelector("#botaoGerador"); // PEGA O ELEMENTO COM A NOMECLATURA (#nome OU .nome)
const area = document.querySelector("#qrcode");


// EVENTO - QUANDO APERTA TAL COISA FAZER TAL COISA

botaoGerador.addEventListener("click", gerarQRCode)


//FUNÇÃO - ALGO QUE VAI FAZER ALGUMA COISA

function gerarQRCode() {
    area.innerHTML = ''
    new QRCode (area, { //AREA É ONDE VAI FICAR O QRCODE
        text: texto.value, // DEFININDO O VALOR DO URL = (PEGAR O VALOR TEXTO -> HTML)
        width: 300, // LARGURA JA EM PX
        height: 300, // ALTURA JA EM PX
        colorDark: 'black',
        colorLight: 'transparent'
    })
}

