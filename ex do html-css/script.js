function clicou(){
    var nome = document.getElementById('nome').value
    var curso = document.getElementById('curso').value
    var btn = document.getElementById('btn')
    var res = document.getElementById('res')
    
    if (nome.length == 0 || curso.length == 0){
        //validação se usuario nao digitou nada nos campos
        window.alert('Preençha os campos!')
    } else{
        res.innerHTML = `Olá ${nome}, voce escolheu o curso de ${curso}, aguarde seus dados serão enviados...`
    } 


}