
var agora = new Date()
var hora = agora.getHours()  /*para pegar a hora atual do notebook */
console.log(`agora sao ${hora} horas`)
if(hora < 12){
    console.log('Bom dia')
}else if(hora <=18){
    console.log(`Boa Tarde`)
}else{
    console.log('Boa noite')
}
