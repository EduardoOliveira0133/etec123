function botaoPressionado(id) {
    if (id === "notas") {
        exibirTabelaNotas();
    } else if (id === "faltas") {
        exibirTabelaFaltas();
    } else if (id === "calendario") {
        window.location.href = "areaaluno-calendario.html";
    }else{
        exibirTabelaGeral();
    }
}

document.getElementById("notas").addEventListener("click", function() {
    botaoPressionado("notas");
});
document.getElementById("faltas").addEventListener("click", function() {
    botaoPressionado("faltas");
});
document.getElementById("calendario").addEventListener("click", function() {
    botaoPressionado("calendario");
});


// Notas

var notasDoAluno = [
    { materia: "LINGUA PORTUGUESA", nota: "B"},
    { materia: "LINGUA INGLESA", nota: "MB" },
    { materia: "EDUCAÇÃO FÍSICA", nota: "R" },
    { materia: "MATEMÁTICA", nota: "B" },
    { materia: "FÍSICA", nota: "MB" },
    { materia: "QUÍMICA", nota: "B" },
    { materia: "HISTÓRIA", nota: "B" },
    { materia: "EACNT", nota: "MB" },
    { materia: "EAMT", nota: "B" },
    { materia: "LMIS", nota: "B" },
    { materia: "PROGRAMAÇÃO WEB II", nota: "MB" },
    { materia: "BANCO DE DADOS II", nota: "B" },
    { materia: "PAM I", nota: "MB" },
    { materia: "BIOLOGIA", nota: "MB" },
    { materia: "GEOGRAFIA", nota: "B" },
    { materia: "LPC", nota: "R" },
    { materia: "DS", nota: "B" },
    { materia: "ECO", nota: "B" }
];

var faltasDoAluno = [
    { materia: "LINGUA PORTUGUESA", faltas: "2"},
    { materia: "LINGUA INGLESA", faltas: "0" },
    { materia: "EDUCAÇÃO FÍSICA", faltas: "10" },
    { materia: "MATEMÁTICA", faltas: "5" },
    { materia: "FÍSICA", faltas: "2" },
    { materia: "QUÍMICA", faltas: "4" },
    { materia: "HISTÓRIA", faltas: "6" },
    { materia: "EACNT", faltas: "1" },
    { materia: "EAMT", faltas: "3" },
    { materia: "LMIS", faltas: "0" },
    { materia: "PROGRAMAÇÃO WEB II", faltas: "0" },
    { materia: "BANCO DE DADOS II", faltas: "0" },
    { materia: "PAM I", faltas: "0" },
    { materia: "BIOLOGIA", faltas: "2" },
    { materia: "GEOGRAFIA", faltas: "6" },
    { materia: "LPC", faltas: "2" },
    { materia: "DS", faltas: "0" },
    { materia: "ECO", faltas: "10" }
];

function exibirTabelaNotas() {

    var divContainer = document.getElementById("tabelaGeral");

    var tabela = "<h2>Notas Escolares</h2><table><tr><th>Componente:</th><th><div class='ajuste-table'>Nota:</th></div></tr>";
    notasDoAluno.forEach(function(item) {
        tabela += "<tr><td>" + item.materia + "</td><td><div class='ajuste-table'>" + item.nota + "</td></div></tr>";
    });
    tabela += "</table>";

    divContainer.innerHTML = tabela;

}

    document.addEventListener("DOMContentLoaded", exibirTabelaNotas);

function exibirTabelaFaltas() {

    var divContainer = document.getElementById("tabelaGeral");

    var tabela = "<h2>Faltas</h2><table><tr><th>Componente:</th><th>Número de faltas:</th></tr>";
    faltasDoAluno.forEach(function(item) {
        tabela += "<tr><td>" + item.materia + "</td><td><div class='ajuste-table'>" + item.faltas + "</td></div></tr>";
    });
    tabela += "</table>";

    divContainer.innerHTML = tabela;
}