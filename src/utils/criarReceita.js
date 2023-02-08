import crypto from "node:crypto";

function criarReceita({
    titulo,
    nivelDificuldade,
    ingredientes,
    instrucoes,
    linkVideo,
    vegana,
}) {
    const id = crypto.randomUUID();

    global.receitas.push({
        id,
        titulo,
        nivelDificuldade,
        ingredientes,
        instrucoes,
        linkVideo,
        vegana,
    });
}

export { criarReceita };