const remove = document.querySelectorAll('.icone-remover');

/* for(let i = 0; i < remove.length; i++){
    let remover = remove[i];

        remover.addEventListener("click",(event)=>{
        let trPaciente = event.target;
        trPaciente.parentNode.classList.add("remove-paciente");
        console.log("Olá.");
        
        
        setTimeout(()=>{
            trPaciente.parentNode.remove();
        }, 500);
         
    });   
} */

remove.forEach(remover => {
  remover.addEventListener('click', event => {
    const trRemover = event.target;
    trRemover.parentNode.classList.add('remove-paciente');

    setTimeout(() => {
      trRemover.parentNode.remove();
    }, 500);
  });
});
