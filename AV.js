// produtos na lista, seu valor e número no estoque
const produtos = ["arroz","leite","farinha","uma duzia de ovos","queijo","pão","farofa","pipoca","margarina","água"]
const valores = [10.00, 5.00, 6.00, 15.00, 16.00, 5.00, 6.00, 4.00, 5.00, 2.00]
const estoque = ["5 unidades", "2 unidades","20 unidades","10 unidades","19 unidades", "0 unidades","10 unidades","9 unidades", "15 unidades","13 unidades",]

function mostrarESTOQUE () {
    let contador = 0
    while(contador <produtos.length){
        console.log(produtos[contador] + "-" + [contador] + "-" + estoque [contador])
        contador++
    }
}

function adicionarPRODUTOS() {
    produtos.push("feijão")
    valores.push(7.00)
    estoque.push("20 unidades")
}

function removerPRODUTO() {
    produtos.splice(10, 1)
    valores.splice(10, 1)
    estoque.splice(10, 1)
}

mostrarESTOQUE()

adicionarPRODUTOS()

console.log("-----------------------------------")

mostrarESTOQUE()

removerPRODUTO()

console.log("-----------------------------------")

mostrarESTOQUE()
