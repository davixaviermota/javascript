var agora = new Date()
var diasem = agora.getDay() /*selecionar o dia atual, vai mostrar o numero do dia  */

/*Lembrando que no JS 
a contagem começa pelo 0

0 = domingo
1 = segunda
2 = terca
3 = quarta
4 = quinta
5 = sexta
6 = sabado

*/
console.log(diasem)
/*queremos mostrar ao inves dos numeros, o dia, para isso vamos usar o switch */
switch(diasem){
    case 0:
        console.log('Domingo') /*se o dia for 0 vai ser domingo e assim sucessivamente */
        break
    case 1:
        console.log('segunda')  
        break
    case 2:
        console.log('terca')  
        break
    case 3:
        console.log('quarta')  
        break
    case 4:
        console.log('quinta')  
        break
    case 5:
        console.log('sexta')  
        break
    case 6:
        console.log('sabado')  
        break
    default:
        console.log('Dia inválido') /*se nao for de 0 a 6 será dia invalido */    
    break /*o ultimo break, como nao tem mais codigo em baixo é opcional  */
}