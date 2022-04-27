var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    
    var form = document.querySelector('#form-adiciona');
    //extraindo infos do paciente do form
    var paciente = obtemPacienteForm(form);

    //cria a tr e td do paciente
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);


    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    
    //adicionando o paciente na tabela
    addPacienteTabela(paciente);
    var ul = document.querySelector('#mensagens-de-erro');
    ul.innerHTML = ""
    form.reset();
})

function addPacienteTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector('#mensagens-de-erro');
    ul.innerHTML = ""
    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado
    td.classList.add(classe);

    return td;
}


    
