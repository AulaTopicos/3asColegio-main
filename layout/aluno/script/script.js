const c = (el)=>document.querySelector(el)
const cs = (el)=>document.querySelector(el)


alunoJson.map((item, index)=>{
    let alunoItem = c('.area-aluno .nav-aluno ').cloneNode(true)

   alunoItem.querySelector('.area-nome-colegio').innerHTML = item.colegio
   alunoItem.querySelector('.area-nome-aluno').innerHTML = item.nome
   alunoItem.querySelector('.area-matricula').innerHTML = item.matricula

    c('.nav-aluno').append(alunoItem)

})
alunoJson.map((item, index)=>{
    console.log(item)
    let provaRealizadaItem = c('.models-prova-realizada .card-area-prova-realizada').cloneNode(true)

    provaRealizadaItem.querySelector('.area-data').innerHTML = item.provaRealizadas[0] 
    provaRealizadaItem.querySelector('.area-presenca').innerHTML = item.provaRealizadas[1]   

    c('.area-prova').append(provaRealizadaItem)

})


alunoJson.map((item, index)=>{
    console.log('sdfd')
    let provaItem = c('.conteiner-prova').cloneNode(true)

    provaItem.querySelector('.area-realizar-prova').innerHTML = item.provaOnline
   
    c('.conteiner-prova').append(provaItem)

})



