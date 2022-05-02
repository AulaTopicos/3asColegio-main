const btn = document.querySelector("#enviar")

btn.addEventListener("click" , function(e){

    e.preventDefault()

    const user = document.querySelector("#user")
    const password = document.querySelector("#password")
    
    const value = user.value
    const valuePassword = password.value
    console.log(value)

    if(value == "victor" && !valuePassword == "" ){
        window.location.replace("/layout/aluno/index.html")
    }
    else if(value == "mateus"  && !valuePassword == ""){
        window.location.replace("/layout/aluno/index.html")
    }
    else if(value == "vini"  && !valuePassword == ""){
        window.location.replace("/layout/aluno/index.html")
     }
     else if(value == "vinicios"  && !valuePassword == ""){
        window.location.replace("/layout/aluno/index.html")
     }
     else if(value == "financeiro"  && !valuePassword == ""){
        window.location.replace("/layout/financeiro/index.html")
     }
     else{
      alert("Usuario não encontrado")
      location.reload();
     }

})