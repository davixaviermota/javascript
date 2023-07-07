function carregar(){

var msg = document.getElementById('msg')
var imagem = document.getElementById('imagem') 
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){  // aqui quando a hora for maior ou igual a zero e (&&) a hora for menor que 12 será dia
    /*bom dia */
        imagem.src = 'manha.png'
        document.body.style.background = '#ffc400'  //aqui é para cada turno o body ser de uma cor 
    }else if (hora >= 12 && hora <18){   // se nao se a hora for maior ou igual a 12 e menor que 18 será tarde
    /*boa tarde */
        imagem.src = 'tarde.png'
        document.body.style.background = '#ff5e00'
    }else {
    /*boa noite */
         imagem.src = 'noite.png' 
         document.body.style.background = '#003077' // senao será de noite (quando for maio de 18 e )
    }
}
