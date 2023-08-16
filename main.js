document.addEventListener("DOMContentLoaded", function() {
    const addContactButton = document.getElementById("add-contact");
    const contactTableBody = document.querySelector("#contact-table tbody");

    addContactButton.addEventListener("click", function() {
        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");

        const name = nameInput.value;
        const phone = phoneInput.value;

        if (name && /^\d+$/.test(phone)) {
            const existingNames = Array.from(contactTableBody.querySelectorAll("tr")).map(row => row.cells[0].textContent);
            if (!existingNames.includes(name)) {
                const newRow = contactTableBody.insertRow();
                newRow.innerHTML = `<td>${name}</td><td>${phone}</td>`;
                nameInput.value = "";
                phoneInput.value = "";
            } else {
                alert("Este nome já está na lista de contatos.");
            }
        } else {
            alert("Preencha os campos corretamente.");
        }
    });

    const phoneInput = document.getElementById("phone");
    phoneInput.addEventListener("input", function(event) {
        event.target.value = event.target.value.replace(/[^\d]/g, "");
    });
});
