// [x] Mini-sistema de cadastro de usuários na Academia Fictícia
// [x] 4 Opções: Novo Usuário, Consultar Usuário, Consultar CPF, Sair
// [x] Caso a opção seja inválida, exibir uma mensagem de erro
// [x] Ao cadastrar um novo usuário, irá exibir um pequeno cadastro e retornará ao menu
// [x] As informações cadastradas serão: Nome / CPF / Idade / Sexo / Tipo de treino (Musculação, Cardio ou Crossfit)
// [x] Após o cadastro retornará ao menu inicial.
// [x] O sistema permite a busca do usuário pelo nome ou pelo CPF
// [x] A busca irá exibir as informações registradas
const prompt = require("prompt-sync")();

let usuarios = [];
function menu() {
    console.log("=== PAINEL DE CONTROLE ===");
    console.log("==========================");
    console.log("| 1. Novo Usuário        |");
    console.log("| 2. Consultar Usuário   |");
    console.log("| 3. Consultar CPF       |");
    console.log("| 4. Sair                |");
    console.log("==========================");
    const opcao = prompt("Escolha uma opção: ");

    switch (opcao) {
        case "1":
            novoUsuario();
            break;
        case "2":
            consultarNome();
            break;
        case "3":
            consultarCPF();
            break;
        case "4":
            console.log("\n")
            console.log("-------------------------------");
            console.log("| Vai sair pra onde? x_x haha |");
            console.log("-------------------------------");
            console.log("\n")
            menu();
            break;
        default:
            console.log("Opção inválida");
            menu();
    }
}

function novoUsuario() {
    const nome = prompt("Nome: ");
    const cpf = prompt("CPF: ");
    const idade = prompt("Idade: ");
    const sexo = prompt("Sexo: ");
    const treino = prompt("Treino: ");

    const usuario = {
        nome,
        cpf,
        idade,
        sexo,
        treino
    };

    usuarios.push(usuario);
    console.log(`== Usuário ${nome} criado com sucesso! ==\n`);

    menu();
}

function consultarNome() {
    const nome = prompt("Nome do Usuário: ");
    const usuario = usuarios.find(user => user.nome === nome);

    if (usuario) {
        console.log("\n")
        console.log("----------------------------");
        console.log(`== USUÁRIO ENCONTRADO ==`);
        console.log("----------------------------");
        console.log(`Nome: ${usuario.nome}`);
        console.log(`CPF: ${usuario.cpf}`);
        console.log(`Idade: ${usuario.idade}`);
        console.log(`Sexo: ${usuario.sexo}`);
        console.log(`Treino: ${usuario.treino}`);
        console.log("----------------------------\n");
    } else {
        console.log("\n")
        console.log("-------------------------------");
        console.log("!!! Usuário não encontrado !!!");
        console.log("-------------------------------\n");
    }

    menu();
}

function consultarCPF() {
    const cpf = prompt("CPF do Usuário: ");
    const usuario = usuarios.find(user => user.cpf === cpf);

    if (usuario) {
        console.log("\n")
        console.log("----------------------------");
        console.log(`== CPF ENCONTRADO ==`);
        console.log("----------------------------");
        console.log(`Nome: ${usuario.nome}`);
        console.log(`CPF: ${usuario.cpf}`);
        console.log(`Idade: ${usuario.idade}`);
        console.log(`Sexo: ${usuario.sexo}`);
        console.log(`Treino: ${usuario.treino}`);
        console.log("----------------------------\n");
    } else {
        console.log("\n")
        console.log("---------------------------");
        console.log("!!! CPF não encontrado !!!");
        console.log("---------------------------\n");
    }

    menu();
}

menu();