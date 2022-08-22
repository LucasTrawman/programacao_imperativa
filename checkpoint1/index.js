const readlineSync = require("readline-sync");

console.log('Bem vindo! A lista a seguir é referente aos alimentos disponiveis para preparo:\n 1- pipoca\n 2- macarrao\n 3- carne\n 4- feijao\n 5- brigadeiro')

let prato = readlineSync.question('Qual o nome do prato que voce deseja? ')
let tempo = readlineSync.question('Quanto tempo voce deseja colocar? ')

function microondas (prato, tempo) {
    if (
      (prato == "pipoca" && tempo >= 10 && tempo <= 20) ||
      (prato == "macarrao" && tempo >= 8 && tempo <= 16) ||
      (prato == "carne" && tempo >= 15 && tempo <= 30) ||
      (prato == "feijao" && tempo >= 12 && tempo <= 24) ||
      (prato == "brigadeiro" && tempo >= 8 && tempo <= 16)
    )   {if (prato == 'pipoca' || prato == 'carne')
        {return`A ${prato} está pronta, bom apetite!`}
        else (prato == 'macarrao' || prato == 'feijao' ||prato == 'brigadeiro');
        {return`O ${prato} está pronto, bom apetite!` }
    }

    else if (
      (prato == "pipoca" && tempo <= 9) ||
      (prato == "macarrao" && tempo <= 7) ||
      (prato == "carne" && tempo <= 14) ||
      (prato == "feijao" && tempo <= 11) ||
      (prato == "brigadeiro" && tempo <= 7)
    ){return 'Tempo insuficiente'}

    else if (
      (prato == "pipoca" && tempo > 20 && tempo <= 29) ||
      (prato == "macarrao" && tempo > 16 && tempo <= 23) ||
      (prato == "carne" && tempo > 30 && tempo <= 44) ||
      (prato == "feijao" && tempo > 24 && tempo <= 35) ||
      (prato == "brigadeiro" && tempo > 16 && tempo <= 23)
    ){return 'A comida queimou!'}

    else if (
      (prato == "pipoca" && tempo >= 30) ||
      (prato == "macarrao" && tempo >= 24) ||
      (prato == "carne" && tempo >= 45) ||
      (prato == "feijao" && tempo >= 36) ||
      (prato == "brigadeiro" && tempo >= 24)
    ){return 'Kabumm'}

    else {return `Opcao invalida, favor repetir o pedido.`}
}

console.log(microondas(prato, tempo))