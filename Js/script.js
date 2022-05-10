const textinput = document.querySelector(".text-input");
const mensaje = document.querySelector("#impresion");

function btnencriptar(){
    const textoEncriptado = encriptar(textinput.value);
    mensaje.value = textoEncriptado;
}
function btndesencriptar(){
    const textoDesencriptado = desencriptar(textinput.value);
    mensaje.value = textoDesencriptado;
}

function encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i=0; i<matrizCodigo.length; i++){
        if(StringParaEncriptar.includes(matrizCodigo[i][0])){
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}

function desencriptar(StringParaDesencriptar){
    let matrizDesencriptar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i=0; i<matrizDesencriptar.length; i++){
        if(StringParaDesencriptar.includes(matrizDesencriptar[i][0])){
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizDesencriptar[i][0],matrizDesencriptar[i][1])
        }
    }
    return StringParaDesencriptar;
}
