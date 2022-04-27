var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista'

function CalculoIMC() {
    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = true;
    var alturaEhValida= true;

    if(peso <= 0 || peso >= 200){
        tdImc.textContent = 'Peso Inválido!';
        pesoEhValido = false;
    }

    if(altura <= 0 || altura >= 3.00){
        tdImc.textContent = 'Altura Inválida!';
        alturaEhValida = false;
    }

    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = Math.round(imc)
    }
}

//Primeiro Paciente

var paciente = document.querySelector('#primeiro-paciente');
CalculoIMC();


//Segundo Paciente

var paciente = document.querySelector('#segundo-paciente');
CalculoIMC();

//Terceiro Paciente

var paciente = document.querySelector('#terceiro-paciente');
CalculoIMC();

//Quarto Paciente

var paciente = document.querySelector('#quarto-paciente');
CalculoIMC();

//Quinto Paciente

var paciente = document.querySelector('#quinto-paciente');
CalculoIMC();

