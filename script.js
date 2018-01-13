const list = document.getElementById('list');
const form = document.getElementById('formular');
const formNume = document.getElementById('formNume');
const formPrenume = document.getElementById('formPrenume');
const formTelefon = document.getElementById('formTelefon');
const formDescriere = document.getElementById('formDescriere');
const form2Oras = document.getElementById('form2Oras');
const form2Telefon = document.getElementById('form2Telefon');
const sendButton = document.getElementById('sendButton');
let updateButton = document.getElementById('updateButton');


sendButton.disabled = false;

function postFormular() {

    const postObject = {
        nume: formNume.value,
        prenume: formPrenume.value,
		telefon: formTelefon.value,
		descriere: formDescriere.value
    }
    fetch('http://localhost:3000/formular', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {
		
        resetForm();
    });
}



function getTelefon() {
    fetch('http://localhost:3000/telefon')
        .then(function (response) {

            response.json().then(function (telefon) {
                appendTelefonToDOM(telefon);
            });
        });
};

function postTelefon() {

    const postObject = {
        oras: form2Oras.value,
        numar: form2Telefon.value
    }

    fetch('http://localhost:3000/telefon', {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postObject)
    }).then(function () {

        getTelefon();

        resetForm();
    });
}


function deleteTelefon(id) {

    fetch(`http://localhost:3000/telefon/${id}`, {
        method: 'DELETE',
    }).then(function () {

        getTelefon();
    });
}

function updateTelefon(id) {

    const putObject = {
        oras: form2Oras.value,
		numar: form2Telefon.value
        
    }
    fetch(`http://localhost:3000/telefon/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(putObject)
    }).then(function () {
        getTelefon();

        clearUpdateButtonEvents();

        resetForm2();
    });
}


function editTelefon(telefon) {
    form2Oras.value = telefon.oras;
    form2Telefon.value = telefon.numar
	
    clearUpdateButtonEvents();
    updateButton.disabled = false;
	
    updateButton.addEventListener('click', function () {
        updateTelefon(telefon.id)
    });

}


function appendTelefonToDOM(telefon) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for (let i = 0; i < telefon.length; i++) {
		
        let oras = document.createElement('span');
        oras.innerHTML = telefon[i].oras+" ";

        let numar = document.createElement('span');
        numar.innerText = telefon[i].numar+" ";

        let editButton = document.createElement('button')
		editButton.addEventListener('click', function () {
            editTelefon(telefon[i])
        });
        editButton.innerText = 'Edit';
		
        let deleteButton = document.createElement('button')
        deleteButton.addEventListener('click', function () {
            deleteTelefon(telefon[i].id)
        });
        deleteButton.innerText = 'Delete';

        let container = document.createElement('div');
        container.appendChild(oras);
        container.appendChild(numar);
        container.appendChild(editButton);
        container.appendChild(deleteButton);

        list.appendChild(container);
    }
}


function resetForm() {
    formNume.value = '';
    formPrenume.value = '';
	formTelefon.value='';
	formDescriere.value='';
}

function resetForm2() {
    form2Oras.value = '';
    form2Telefon.value = '';
}

function clearUpdateButtonEvents() {
    let newUpdateButton = updateButton.cloneNode(true);
    updateButton.parentNode.replaceChild(newUpdateButton, updateButton);
    updateButton = document.getElementById('updateButton');
}

sendButton.addEventListener('click', postFormular);

getTelefon();