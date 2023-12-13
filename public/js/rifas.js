function getRifas() {
    let result = document.getElementById("result");
    let valorTotalDiv = document.getElementById("valor-total");
    let rifas = +document.querySelector("input[name='rifas']").value;
    let qntTaloes = +document.querySelector("input[name='qnt-de-taloes']").value;
    let qntPorTalao = +document.querySelector("input[name='qnt-por-talao']")
        .value;
    let valorUnit = document.querySelector("input[name='valor-unitario']").value;
    let talao = 1;
    const valueMax = rifas ? rifas : qntTaloes * qntPorTalao;
    const valorTotal = valorUnit.replace(',', '.') * valueMax;

    result.innerHTML = "";
    valorTotalDiv.innerHTML = valorUnit ? '<p><b>Valor Total:</b> R$ ' + valorTotal + ',00</p>' : null;

    for (i = 1; i < valueMax; i += qntPorTalao) {
        var msg = "<b>Talão n°: ";
        result.insertAdjacentHTML(
            "beforeend",
            "<p>" +
            msg.concat(talao, "</b> - Rifas: ", i, " a ", i + qntPorTalao - 1) +
            "</p>"
        );
        talao++;
    }
}
