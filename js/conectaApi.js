async function listaProdutos() {
    const conexao = await fetch ("https://cahro-store.vercel.app/produtos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarProduto(nome, preco, imagem) {
    const conexao = await fetch("https://cahro-store.vercel.app/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o produto");
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos,
    criarProduto
}
