function media(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;
    var result = (parseInt(val1) + parseInt(val2))/2;

   if(result== 10)
   alert('Genio')
   else
   if(result == 0)
   alert('Sai do celular')
    if(result >= 6)

    alert('Sua média foi: ' + result + ' Voce foi aprovado')
    else
    alert('Sua média foi: ' + result + ' Voce foi reprovado,TMJ')

}
function comparacao(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;

    if(val1==val2)
    alert('Os valores sao iguais')
    else
    if(val1>val2)
    alert('Valor 2 é maior que o valor 1')
    else
    alert('Valor 1 é maior que o valor 2')

}