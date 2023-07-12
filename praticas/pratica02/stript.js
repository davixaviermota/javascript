function verificar(){
   var data = new Date() 
   var ano = data.getFullYear() // peguei o ano completo do sistema/computador
   var nasc = document.getElementById('nasc') //peguei o input do ano 
   var res = document.getElementById('res')

   if (nasc.value.length == 0 || nasc.value > ano) { //aqui é tipo uma validação, se o valor do nasc for igual a 0 ou seja se nao for digitado nada, ou ou valor do nasc ser maior que ano(2023)

//vai aparecer o alerta
     window.alert('erro, verifique os dados')

   } else{ //se nao
    var sex = document.getElementsByName('sex') //peguei o inpute da bolinha de masc e femi
    var idade = ano - Number(nasc.value) // criei var idade que vai ser = ano - o valor do nascimento 
    res.innerHTML = `Idade calculada: ${idade}`
   }

}