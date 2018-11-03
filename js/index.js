let empresas = {
    "1":["Saint","admin"],
    "2":["Mit","321"],
    "3":["Microsoft","321"],
    "4":["IBM","321"]
}
let botao =document.querySelector("#login");

botao.addEventListener("click", function(){

    login = prompt("Digite seu nome");
    senha = prompt("Digite sua senha");
    
    if (usuarios[1][0] == login && usuarios[1][2] == senha) { alert('Welcome'); } else { alert("Acesso Negado"); }
})

let botao2=document.querySelector(".botaoenviar");

    
    botao2.addEventListener('click', function (){
    alert("Mensagem Enviada");
    });

// let usuarios = {
//     "1":["caique","123"],
//     "2":["henrique","321"]
// }




// vezes=prompt("Quantas vezes dejesa executar essa tarefa?");
// let i=1;
// while(i<=vezes)
// {
//     idade=prompt("Qual a sua idade?");
//     salario=prompt("Quanto ganhas?");
//     empres=prompt("quanto queres de empréstimo?");

//     if(idade>21 && idade <55 && empres<10*salario){
//         alert("Empréstimo Aprovado");
//     }else{
//         alert("Empréstimo Reprovado");
//     }
//     i++
// }
