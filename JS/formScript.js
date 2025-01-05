document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('internshipForm');
    const internshipTable = document.getElementById('internshipTable').getElementsByTagName('tbody')[0];

    loadInternships();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const internshipName = form.internshipName.value;
        const status = form.status.value;
        const dates = form.dates.value;

        addInternshipToTable(internshipName, status, dates);

        saveInternships();
        
        form.reset();
    });

    function addInternshipToTable(name, status, dates) {
        const newRow = internshipTable.insertRow();

        const nameCell = newRow.insertCell(0);
        const statusCell = newRow.insertCell(1);
        const datesCell = newRow.insertCell(2);
        const actionsCell = newRow.insertCell(3);

        nameCell.textContent = name;
        statusCell.textContent = status;
        datesCell.textContent = dates;

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.style.background = 'none';
        deleteButton.style.border = 'none';
        deleteButton.style.color = 'red';
        deleteButton.style.cursor = 'pointer';

        deleteButton.onclick = () => {
            internshipTable.deleteRow(newRow.rowIndex - 1);
            saveInternships();
        };
        
        actionsCell.appendChild(deleteButton);
    }

    function saveInternships() {
        const internships = [];
        for (let i = 0; i < internshipTable.rows.length; i++) {
            const row = internshipTable.rows[i];
            internships.push({
                name: row.cells[0].textContent,
                status: row.cells[1].textContent,
                dates: row.cells[2].textContent
            });
        }
        localStorage.setItem('internships', JSON.stringify(internships));
    }

    function loadInternships() {
        const savedInternships = localStorage.getItem('internships');
        if (savedInternships) {
            const internships = JSON.parse(savedInternships);
            internships.forEach(internship => {
                addInternshipToTable(internship.name, internship.status, internship.dates);
            });
        }
    }
});
