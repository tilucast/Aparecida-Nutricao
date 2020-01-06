const btoBuscarPaciente = document.querySelector('#buscar-paciente');
btoBuscarPaciente.addEventListener('click', function() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  xhr.addEventListener('load', function() {
    if (xhr.status === 200) {
      const response = xhr.responseText;
      const pacientes = JSON.parse(response);

      pacientes.forEach(function(paciente) {
        addPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.responseText);
      const erroReq = document.querySelector('.requisicao-error');
      erroReq.classList.add('requisicao-error');
      erroReq.textContent = 'Erro na requisição! Tente novamente mais tarde.';
    }
  });

  xhr.send();
});
