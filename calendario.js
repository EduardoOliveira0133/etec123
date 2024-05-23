function botaoPressionado(id) {
    if (id === "notas") {
        window.location.href="areaaluno.html";
    } else if (id === "faltas") {
        window.location.href="areaaluno.html";
    } else if (id === "calendario") {
        
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


// Calendário

let mesAtual = (new Date()).getMonth();
let anoAtual = (new Date()).getFullYear();
let evento = {
    "2024-05-30": ["Feriado"],
    "2024-05-14": ["Prova"],
    "2024-05-24": ["Prova"],
    "2024-05-23": ["Entrega de site"],
    "2024-06-24": ["Interclasse"],
    "2024-06-25": ["Interclasse"],
    "2024-06-26": ["Interclasse"],
    "2024-06-27": ["Interclasse"],
    "2024-06-28": ["Interclasse"]
};

function criarCalendario(month, year) {
    const corpoCalendario = document.querySelector('#calendario tbody');
    const mesAno = document.getElementById('mesAno');
    const diasNoMes = new Date(year, month + 1, 0).getDate();
    const primeiroDia = new Date(year, month, 1).getDay();

    let dayCounter = 1;
    let html = '';

    const nomeMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    mesAno.textContent = nomeMes[month] + ' ' + year;

    for (let i = 0; i < 6; i++) {
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < primeiroDia) {
                html += '<td></td>';
            } else if (dayCounter > diasNoMes) {
                html += '<td></td>';
            } else {
                const date = new Date(year, month, dayCounter);
                const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                const dateString = date.toISOString().split('T')[0];
                const eventClass = evento[dateString] ? 'evento' : '';
                const eventNames = evento[dateString] ? evento[dateString].join(', ') : '';

                html += `<td class="${eventClass}">${dayCounter}<br>${eventNames}</td>`;
                dayCounter++;
                }
        }
        html += '</tr>';
    }

    corpoCalendario.innerHTML = html;
}

function mesAnterior() {
    mesAtual--;
    if (mesAtual < 0) {
        mesAtual = 11;
        anoAtual--;
    }
    criarCalendario(mesAtual, anoAtual);
}

function proximoMes() {
    mesAtual++;
    if (mesAtual > 11) {
        mesAtual = 0;
        anoAtual++;
    }
    criarCalendario(mesAtual, anoAtual);
}

criarCalendario(mesAtual, anoAtual);