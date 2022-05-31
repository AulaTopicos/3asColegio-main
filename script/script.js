//nav bar lateral
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});


//função para buscar o aluno na pagina de secretaria 
  function buscarAluno() {
    var matricula = document.getElementById('txtBusca').value;

    if (matricula !== '12345') {
        alert('Matrícula não encontrada.');
    } else {
        window.location.href = 'aluno_encontrado.html';
    }

}
