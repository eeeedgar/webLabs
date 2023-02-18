function signUp() {
    let name = document.getElementById('name').value;
    if (name === '') {
        console.log(name);
        iziToast.error({title: 'Ошибка', message: 'Введите корректные данные'});
        return;
    }
    let email = document.getElementById('email').value;
    if (email === '' || !email.includes('@')) {
        console.log(email);
        iziToast.error({title: 'Ошибка', message: 'Введите корректные данные'});
        return;
    }
    let brand = document.getElementById('brand').value;
    if (brand === '') {
        console.log(brand);
        iziToast.error({title: 'Ошибка', message: 'Введите корректные данные'});
        return;
    }
    let model = document.getElementById('model').value;
    if (model === '') {
        console.log(model);
        iziToast.error({title: 'Ошибка', message: 'Введите корректные данные'});
        return;
    }
    let service = document.getElementById('service').value;
    if (service === '') {
        console.log(service);
        iziToast.error({title: 'Ошибка', message: 'Введите корректные данные'});
        return;
    }
    let date = document.getElementById('date').value;
    if (date === '') {
        console.log(date);
        iziToast.error({title: 'Ошибка', message: 'Введите корректные данные'});
        return;
    }

    let form = new Form(name, email, brand, model, service, date);

    console.log(form);

    let forms = JSON.parse(localStorage.getItem('forms') || '[]');

    forms.push(form);

    localStorage.setItem('forms', JSON.stringify(forms));
}

class Form {
    constructor(name, email, brand, model, service, date) {
        this.id = uuidv4();
        this.creationDate = new Date(Date.now());
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