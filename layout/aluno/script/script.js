const c = (el)=>document.querySelector(el)
const cs = (el)=>document.querySelector(el)

alunoJson.map((item, index)=>{
    let alunoItem = c('.area-aluno').cloneNode(true)

    alunoItem.querySelector('.nome-aluno').innerHTML = item.nome
    alunoItem.querySelector('.area-colegio').innerHTML = item.colegio

    c('.nome-aluno').append(alunoItem)

})