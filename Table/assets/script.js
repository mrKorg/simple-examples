(function () {
    "use strict";
    const result = document.getElementById('result');

    function renderTable(data) {
        const count = Object.keys(data).length;
        let html = "<table><thead><tr><th>S.No</th><th>Percentage funded</th><th>Amount pledged</th></tr></thead>";

        html += "<tbody>";
        for (let i = 0; i < count; i++) {
            const item = data[i] || {};
            html += "<tr>" +
                "<td>" + item['s.no'] + "</td>" +
                "<td>" + item['percentage.funded'] + "</td>" +
                "<td>" + item['amt.pledged'] + "</td>" +
                "</tr>";
        }
        html += "</tbody>";

        html += "</table>";

        document.getElementById("result").innerHTML = html;
    }

    async function initTable() {
        return await fetch('http://starlord.hackerearth.com/kickstarter');
    }

    initTable()
        .then(async (response) => {
            if (response.ok) {
                const data = await response.json();
                renderTable(data)
            } else {
                console.log("Ошибка HTTP: " + response.status);
            }
        })
        .catch(e => {
            console.log(e)
        });
}());
