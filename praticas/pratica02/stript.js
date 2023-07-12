function verificar(){
   var data = new Date() 
   var ano = data.getFullYear() // peguei o ano completo do sistema/computador
   var nasc = document.getElementById('nasc') //peguei o input do ano 
   var res = document.getElementById('res')

   if (nasc.value.length == 0 || nasc.value > ano) { //aqui é tipo uma validação, se o valor do nasc for igual a 0 ou seja se nao for digitado nada, ou ou valor do nasc ser maior que ano(2023)

//vai aparecer o alerta
     window.alert('Erro, verifique os dados')

   } else{ //se nao
    var sex = document.getElementsByName('sex') //peguei o inpute da bolinha de masc e femi
    var idade = ano - Number(nasc.value) // criei var idade que vai ser = ano - o valor do nascimento 
    var genero = '' //criei uma var vazia
    var img = document.createElement('img') //criando um elemento no js, uma tag de imagem
    img.setAttribute('id', 'foto') //aqui eu atribui a tag um id = foto
    

    // condição para os inputs radio masculino e feminino
    if (sex[0].checked) { //se o sex(var dos inpts) tiver marcado, ou em zero 
      genero = 'homem' //vai ser homem/masculino
      if(idade >= 0 && idade < 10){
        //crianca
        img.setAttribute('src', 'bebe-m.png')
      }else if( idade <21){
        //jovem
        img.setAttribute('src', 'menino.png')
      } else if(idade <50){
        //adulto
        img.setAttribute('src', 'homem.png')
      }else{
        //idoso
        img.setAttribute('src', 'senhor.png')
      }
    }else if(sex[1].checked){ //mesma logica do de cima
      genero = 'mulher' // só que agora vai ser mulher quando tiver marcado 1 (por que no inpute radio é enviado se agente marcou masculino ou feminino como 0 ou 1)
      if(idade >= 0 && idade < 10){
        //crianca
        img.setAttribute('src', 'bebe-f.png')
      }else if( idade <21){
        //jovem
        img.setAttribute('src', 'menina.png')

      } else if(idade <50){
        //adulto
        img.setAttribute('src', 'mulher.png')
      }else{
        //idoso
        img.setAttribute('src', 'senhora.png')
      }
    }
   }
   res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
   res.appendChild(img) //aqui é para adicionar o elemento, para as imagens aparacer

}