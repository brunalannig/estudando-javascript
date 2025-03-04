let nome = document.getElementById('nome');
let sobrenome = document.getElementById('sobrenome');
let email = document.getElementById('email');
let idade = document.getElementById('idade');
let botao = document.getElementById('botao');

//function aparecerMensagem(){
   // prompt(`Olá ${nome}${sobrenome}, seu e-mail é: ${email} e sua idade é: ${idade}`)
//}

botao.addEventListener('click',function(e){
    e.preventDefault() //prevenir de recarregar a pagina e deixar os campos em branco
    if(nome === null){
        prompt("campo obrigatorio")
    }
    else{
        let mensagem = "Olá " + nome.value + " " + sobrenome.value + ". Seu email é: " + email.value + " e sua idade é: " + idade.value + "."
        prompt(mensagem)
    }
})