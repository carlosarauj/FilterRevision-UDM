let p = [
    {nome: 'Carlos', idade: 20},
    {nome: 'Lucas', idade: 22},
    {nome: 'Andresa', idade: 18}
]

let pFilt = p.filter(objname => {
    return objname.nome.length > 5
})

let pFilt2 = p.filter(objage => {
    return objage.idade > 20
})

let pFilt3 = p.filter(objend => {
    return objend.nome.endsWith('a')
})

console.log(pFilt, pFilt2, pFilt3)