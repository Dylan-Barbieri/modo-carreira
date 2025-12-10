document.addEventListener('DOMContentLoaded', function() {
    const selectLinks = document.querySelectorAll('.dropdown-item');
    selectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const team = this.dataset.team;
            const url = this.dataset.url;

            if (url && url !== '#') {
                window.location.href = url;
            } else {
                window.location.href = `details.html?team=${team}`;
            }
        });
    });

    const teamPoints = [
        { team: "Arsenal", points: 65 },
        { team: "Milan", points: 60 },
        { team: "Marseille", points: 58 },
        { team: "Sporting", points: 55 },
        { team: "Liverpool", points: 70 },
        { team: "Bayern", points: 68 },
        { team: "Atlético", points: 50 },
        { team: "Napoli", points: 45 }
    ];

    const tableBody = document.getElementById('championship-table-body');
    teamPoints.forEach(data => {
        const row = tableBody.insertRow();
        const teamCell = row.insertCell();
        const pointsCell = row.insertCell();
        teamCell.textContent = data.team;
        pointsCell.textContent = data.points;
    });

    const toggleTableButton = document.getElementById('toggle-table-button');
    const championshipTable = document.getElementById('championship-table');

    toggleTableButton.addEventListener('click', function() {
        if (championshipTable.classList.contains('d-none')) {
            championshipTable.classList.remove('d-none');
            championshipTable.classList.add('d-block');
            toggleTableButton.textContent = 'Esconder Tabela de Pontos';
        } else {
            championshipTable.classList.remove('d-block');
            championshipTable.classList.add('d-none');
            toggleTableButton.textContent = 'Mostrar Tabela de Pontos';
        }
    });
});