const c = (el)=>document.querySelector(el)
const cs = (el)=>document.querySelector(el)
alunoJson.map((item, index)=>{
    // header aluno provas
    let alunoItem = c('.area-aluno .nav-aluno ').cloneNode(true)
    alunoItem.querySelector('.area-nome-colegio').innerHTML = item.colegio
    alunoItem.querySelector('.area-nome-aluno').innerHTML = item.nome
    alunoItem.querySelector('.area-matricula').innerHTML = item.matricula
    c('.nav-aluno').append(alunoItem)

})









