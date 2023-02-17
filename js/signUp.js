function signUp() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let brand = document.getElementById('brand').value;
    let model = document.getElementById('model').value;
    let service = document.getElementById('service').value;
    let date = document.getElementById('date').value;

    let form = new Form(name, email, brand, model, service, date);

    console.log(form);

    let forms = JSON.parse(localStorage.getItem('forms') || '[]');

    forms.push(form);

    localStorage.setItem('forms', JSON.stringify(forms));

    iziToast.info({title: 'Сохранено!', message: 'Заявка отправлена'});
}

class Form {
    constructor(name, email, brand, model, service, date) {
        this.id = uuidv4();
        this.creationDate = Date.now();
        this.name = name;
        this.email = email;
        this.brand = brand;
        this.model = model;
        this.service = service;
        this.date = date;
    }
}

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}