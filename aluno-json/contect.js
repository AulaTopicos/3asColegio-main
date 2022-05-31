
alunoJson.map((item,index)=>{

    for (i = 0; i < alunoJson.length; i++) {

        console.log(item)
        let provaRealizadaItem = c('.area-prova-realizada').cloneNode(true)
        provaRealizadaItem.querySelector('.area-data').innerHTML = item.disciplina.matematica.provaRealizadas_1[0]
        provaRealizadaItem.querySelector('.area-presenca').innerHTML = item.disciplina.matematica.provaRealizadas_1[1]
    
        provaRealizadaItem.querySelector('.area-ciclo-prova').innerHTML = item.disciplina.matematica.provaRealizadas_1[2]
        provaRealizadaItem.querySelector('.area-data-prova').innerHTML = item.disciplina.matematica.provaRealizadas_1[3]
        provaRealizadaItem.querySelector('.area-materia').innerHTML = item.disciplina.matematica.provaRealizadas_1[4]
        provaRealizadaItem.querySelector('.area-turma').innerHTML = item.disciplina.matematica.provaRealizadas_1[5]
        //preencher as informações
        c('.area-prova-realizada').append(provaRealizadaItem)
     }


    console.log(item)
    let provaItem = c('.area-aluno .area-prova-disponivel').cloneNode(true)
    provaItem.querySelector('.area-realizar-prova').innerHTML = item.matricula
    //preencher as informações
    c('.area-prova-disponivel').append(provaItem)
})

