const pacientes = document.querySelectorAll('.paciente');
for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];
  const pesoPaciente = paciente.querySelector('.info-peso').textContent;
  const alturaPaciente = paciente.querySelector('.info-altura').textContent;
  const imcPaciente = paciente.querySelector('.info-imc');

  if (
    validaPesoPaciente(pesoPaciente) &&
    validaAlturaPaciente(alturaPaciente)
  ) {
    const imc = calcImc(pesoPaciente, alturaPaciente);
    imcPaciente.textContent = imc;
  } else {
    imcPaciente.textContent = 'Peso ou altura inválidos.';
    paciente.setAttribute('id', 'paciente-error');
  }
}

function validaPesoPaciente(peso) {
  if (peso > 0 && peso < 220) {
    return true;
  }
  return false;
}

function validaAlturaPaciente(altura) {
  if (altura > 0 && altura < 2.5) {
    return true;
  }
  return false;
}

function calcImc(peso, altura) {
  const imc = peso / (altura * altura);

  return imc.toFixed(2);
}
