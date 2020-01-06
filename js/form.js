const btoAddPaciente = document.querySelector('#adicionar-paciente');
btoAddPaciente.addEventListener('click', event => {
  event.preventDefault();

  const formulario = document.querySelector('#form-adiciona');

  const paciente = getForm(formulario);

  const erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeErro(erros);
    return;
  }

  addPacienteNaTabela(paciente);

  formulario.reset();
  document.querySelector('.msgs-validacao').innerHTML = '';
});

function addPacienteNaTabela(paciente) {
  const criarHtmlPaciente = createPacienteHtml(paciente);
  const tableBody = document.querySelector('#tabela-pacientes');
  tableBody.appendChild(criarHtmlPaciente);
}

function removerPaciente(event) {
  event.target.parentNode.classList.add('remove-paciente');
  setTimeout(() => {
    event.target.parentNode.remove();
  }, 500);
}

function exibeErro(erros) {
  const ul = document.querySelector('.msgs-validacao');
  ul.innerHTML = '';

  erros.forEach(erro => {
    const li = document.createElement('li');
    li.classList.add('msg-validacao');
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function getForm(formulario) {
  const paciente = {
    nome: formulario.nome.value,
    peso: formulario.peso.value,
    altura: formulario.altura.value,
    gordura: formulario.gordura.value,
    imc: calcImc(formulario.peso.value, formulario.altura.value),
  };

  return paciente;
}

function createPacienteHtml(paciente) {
  const criarLista = document.createElement('tr');
  criarLista.classList.add('paciente');

  criarLista.appendChild(createInfoPaciente(paciente.nome, 'info-nome'));
  criarLista.appendChild(createInfoPaciente(paciente.peso, 'info-peso'));
  criarLista.appendChild(createInfoPaciente(paciente.altura, 'info-altura'));
  criarLista.appendChild(createInfoPaciente(paciente.gordura, 'info-gordura'));
  criarLista.appendChild(createInfoPaciente(paciente.imc, 'info-imc'));
  const iconeRemove = criarLista.appendChild(
    createInfoPaciente('x', 'icone-remover')
  );
  iconeRemove.onclick = removerPaciente;

  return criarLista;
}

function createInfoPaciente(data, classe) {
  const pacienteInfo = document.createElement('td');
  pacienteInfo.textContent = data;
  pacienteInfo.classList.add(classe);

  return pacienteInfo;
}

function validaPaciente(paciente) {
  const erros = [];

  if (!validaPesoPaciente(paciente.peso)) {
    erros.push('Peso inválido!');
  }

  if (!validaAlturaPaciente(paciente.altura)) {
    erros.push('Altura inválida!');
  }

  if (paciente.nome.length === 0) {
    erros.push('O campo de nome não pode estar vazio!');
  }

  if (paciente.gordura.length === 0) {
    erros.push('O campo de gordura não pode estar vazio!');
  }

  if (paciente.altura.length === 0) {
    erros.push('O campo de altura não pode estar vazio!');
  }

  if (paciente.peso.length === 0) {
    erros.push('O campo de peso não pode estar vazio!');
  }

  return erros;
}
