//palíndromo - função que identifica se uma palavra é palindromo(uma palavra que pode ser lida de tras pra frente
//e que mantem o mesmo sentido)

/*function reverterString(stringEventual){
    //o método split() retorna um novo array com a palavra escolhida(por isso o paramentro stringEventual)
    let separar =  stringEventual.split("")
    //o método reverse() inverte o array recém-criado
    let reverter = separar.reverse()
    //o método join() unie todos os elementos do array em uma string(palavra " ")
    let juntar = reverter.join("")

    return juntar
}

//console.log(reverterString("coracao"))

reverterString()*/



function identificaPalindromo(identificador){
   if(identificador.split("").reverse().join("") === identificador){
    console.log("é palindromo")
   }
    else{
        console.log('nao é palindromo')
   }
   return identificador
}

console.log(identificaPalindromo("gato"))
