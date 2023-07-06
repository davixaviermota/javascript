function carregar(){

var msg = document.getElementById('msg')
var imagem = document.getElementById('imagem') 
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
    /*bom dia */
        imagem.src = 'manha.png'
    }else if (hora >= 12 && hora <18){
    /*boa tarde */
        imagem.src = 'tarde.png'
    }else {
    /*boa noite */
         imagem.src = 'noite.png'
    }
}
