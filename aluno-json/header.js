const c = (el)=>document.querySelector(el)


alunoJson.map((item,index)=>{

    let alunoItem = c('.header-area-aluno .header-nav-aluno').cloneNode(true)
    alunoItem.querySelector('.header-area-nome-colegio').innerHTML = item.colegio
    alunoItem.querySelector('.header-area-nome-aluno').innerHTML = item.nome
    alunoItem.querySelector('.header-area-matricula').innerHTML = item.matricula
    //preencher as informações
    c('.header-nav-aluno').append(alunoItem)

})

