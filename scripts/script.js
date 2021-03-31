
var descricao = document.getElementById("descricao");

var bulbasaur = document.getElementById("bulbasaur");
var charmander = document.getElementById("charmander");
var squirtle = document.getElementById("squirtle");



var audio = new Audio('sounds/bulbasaur.mp3');
var audio1 = new Audio('sounds/charmander.mp3');
var audio2 = new Audio('sounds/squirtle.mp3');

function detalheBulba(){

    audio.play();

document.getElementById("detalhes").style.visibility= "visible";
descricao.innerHTML = "Há uma semente de planta em suas costas desde o dia em que o Pokémon nasceu. A semente cresce lentamente.";

}

function detalheChar(){
    audio1.play();

    document.getElementById("detalhes").style.visibility= "visible";
    descricao.innerHTML = "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.";
    }

function detalheSqui(){
    audio2.play();

        document.getElementById("detalhes").style.visibility= "visible";
        descricao.innerHTML = " Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.";
    }

    function limpar(){
        document.getElementById("detalhes").style.visibility= "hidden";

        audio.pause();
        audio1.pause();
        audio2.pause();
    
    }


