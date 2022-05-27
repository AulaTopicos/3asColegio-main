
const provaAluno = {
    id:1,
    nome:"Victor Hugo Saruva De Aquino",
    colegio:"Colegio 3as",
    matricula: "Matricula: 12345",
    provaOnline:"Não há provas disponíveis",
    provaRealizadas:[
        "01/04/2022",
        "Presença: Presente",
        "Prova ASG - Ciclo 1 (A2)",
        "01/04/2022 08:00 Prova ASG - Ciclo 1 (A2)",
        "Materia: Matematica",
        "Turma: 2NA (2022/1)"
    ],
    
    atividadeExtras:[{
        "atividades":{
            "java" : "Java",
        }
}],
    materia:[{
        matematica:"Matematica",
        portugues:"Português",
        ingles:"ingles"
    }],
    faltas:[{
        matematica:0,
        portugues:0,
        ingles:1
    }],
    notas:[{
        matematica:[{
            media:90,
            resultado_final: 90
        }],
        portugues:[{
            media:90,
            resultado_final: 90
        }],
        ingles:[{
            media:90,
            resultado_final: 90
        }],
    }]
}

// prova realizada
// layout/aluno/provaRealizadas.html



// prova online
// layout/aluno/provasOnline.html

console.log(atividadeExtras)







