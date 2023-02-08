import receitasTextos from "./src/common/receitasTextos.js";
import crypto from "node:crypto";
import { criarReceita } from "./src/utils/criarReceita.js";
import { deletarReceita } from "./src/utils/deletarReceita.js";
import { exibirReceitas } from "./src/utils/exibirReceitas.js";

const nomeEmpresa = 'Omma'

const uuid = crypto.randomUUID()


global.receitas = [{
    id: "03f43733-6d01-4607-a740-92628b6ccdd1",
    titulo: 'risotto de Abobora',
    nivelDificuldade: 'simples',
    ingredientes: receitasTextos.ingredientesRisotto,
    instrucoes: receitasTextos.modoPreparoRisotto,
    linkVideo: 'https://www.youtube.com/watch?v=Mxc3RQE4yAg',

    vegana: false,
}]

console.log(`===============${nomeEmpresa}===============`);
console.log("Bem vindo (a) a nossa página de receitas");

criarReceita({
    titulo: "Pão de queijo",
    nivelDificuldade: "simples",
    ingredientes: "",
    intrucoes: "",
    linkVideo: "",
    vegana: false,
});

// deletarReceita("03f43733-6d01-4607-a740-92628b6ccdd1");

exibirReceitas();

