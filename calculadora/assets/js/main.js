function inserir(num){
   var numero =  document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = '';
}

function voltar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        //Sei que a função eval é meio complicada de se usar, devido a varios problemas que ela pode gerar, mas nesse codigo ela é uma otima opção
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}