table = document.getElementById("data-table");
table2 = document.getElementById("data-table2");
btn = document.querySelector(".btn");
btn2 = document.querySelector(".btn.test");

function domingosPorExtenso2024() {
    let ano = document.getElementById("ano").value;
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const diasPorExtenso = [];

    for (let mes = 0; mes < meses.length; mes++) {
        const primeiroDiaMes = new Date(ano, mes, 1);
        const ultimoDiaMes = new Date(ano, mes + 1, 0);

        for (
            let dia = primeiroDiaMes;
            dia <= ultimoDiaMes;
            dia.setDate(dia.getDate() + 1)
        ) {
            if (dia.getDay() === 0) {
                // Verifica se o dia é domingo (0 é domingo)
                diasPorExtenso.push(`${dia.getDate()} de ${meses[mes]} de ${ano}`);
            }
        }
    }

    return diasPorExtenso;
}

function getNomes2() {
    //msg = document.querySelector('input').value;
    //msg = msg.split(',');
    const domingos2024 = domingosPorExtenso2024();

    if (table) {
        for (let index = 0; index < domingos2024.length; index++) {
            table.insertAdjacentHTML(
                "beforeend",
                `<tr><td>${domingos2024[index]}</td></tr>`
            );
        }
    }

    btn.style.display = "block";
    btn2.style.display = "block";
}

// Chamando a função para obter os domingos por extenso em 2024
const domingos2024 = domingosPorExtenso2024();

function tableToCSV(idTable, title) {
    let csv_data = [];
    let table = document.getElementById(idTable);

    let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].querySelectorAll("td,th");

        let csvrow = [];
        for (let j = 0; j < cols.length; j++) {
            csvrow.push(cols[j].innerHTML);
        }

        csv_data.push(csvrow.join(","));
    }

    csv_data = csv_data.join("\n");
    downloadCSVFile(csv_data, title);
}

function downloadCSVFile(csv_data, title) {
    CSVFile = new Blob(["\ufeff", csv_data], {
        type: "text/csv",
        charset: "utf-8",
    });

    let temp_link = document.createElement("a");
    const date = new Date().toString().slice(4, 15).split(" ").join("-");

    temp_link.download = `table-${date}-${title}.csv`;
    let url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;

    temp_link.style.display = "none";
    document.body.appendChild(temp_link);

    temp_link.click();
    document.body.removeChild(temp_link);
}

// Função para obter os domingos agrupados por mês em 2024
function domingosAgrupadosPorMes() {
    let ano = document.getElementById("ano").value;
    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const domingosPorMes = {};

    for (let mes = 0; mes < meses.length; mes++) {
        console.log("ano", ano);
        const primeiroDiaMes = new Date(ano, mes, 1);
        const ultimoDiaMes = new Date(ano, mes + 1, 0);

        const domingosNoMes = [];

        for (
            let dia = primeiroDiaMes;
            dia <= ultimoDiaMes;
            dia.setDate(dia.getDate() + 1)
        ) {
            if (dia.getDay() === 0) {
                // Verifica se o dia é domingo (0 é domingo)
                domingosNoMes.push(dia.getDate());
            }
        }

        if (domingosNoMes.length > 0) {
            domingosPorMes[meses[mes]] = domingosNoMes;
        }
    }

    return domingosPorMes;
}

function getNomes() {
    // Chamando a função para obter os domingos agrupados por mês em 2024
    const domingosPorMes2024 = domingosAgrupadosPorMes();

    msg = document.querySelector("input").value;
    msg = msg.split(",");

    for (var i = 0; i < msg.length; i += 2) {
        for (const mes in domingosPorMes2024) {
            if (domingosPorMes2024.hasOwnProperty(mes)) {
                table2.insertAdjacentHTML(
                    "beforeend",
                    `<tr><td>${msg[i]}</td><td>${msg[i + 1] ? msg[i + 1] : ""
                    }</td><td>${mes}</td><td>${domingosPorMes2024[mes][0]}</td><td>${domingosPorMes2024[mes][1]
                    }</td><td>${domingosPorMes2024[mes][2]}</td><td>${domingosPorMes2024[mes][3]
                    }</td><td>${domingosPorMes2024[mes][4] ? domingosPorMes2024[mes][4] : ""
                    }</td></tr>`
                );
            }
        }
    }
}

function getNomesX() {
    msg = document.querySelector('input').value;
    msg = msg.split(',');

    if (table) {
        for (let index = 0; index < msg.length; index += 3) {
            table.insertAdjacentHTML("beforeend", `<tr><td>${msg[index]}</td>
				    	<td>${msg[index + 1] ? msg[index + 1] : ''}</td>
				    	<td>${msg[index + 2] ? msg[index + 2] : ''}</td>
				    </tr>`);
        }
    }

    btn.style.display = 'block';
}
