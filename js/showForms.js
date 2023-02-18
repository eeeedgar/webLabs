document.addEventListener('DOMContentLoaded', () => {
    showForms();
});

function showForms() {
    let forms = JSON.parse(localStorage.getItem('forms') || '[]');

    console.log(forms);

    for (let form of forms) {
        console.log(form);
        showForm(form);

    }
}

function showForm(data) {
    let form = document.createElement('div');
    form.classList.add('user-form');

    let creationDate = document.createElement('div');
    creationDate.classList.add('user-form__creation-date');
    creationDate.appendChild(document.createTextNode('Заявка создана: ' + getReadableString(new Date(data.creationDate))));

    let car = document.createElement('div');
    car.classList.add('user-form__data');
    car.appendChild(document.createTextNode(' Машина: ' + data.brand + ' ' + data.model));

    let service = document.createElement('div');
    service.classList.add('user-form__data');
    service.appendChild(document.createTextNode(' Услуга: ' + data.service));

    let date = document.createElement('div');
    date.classList.add('user-form__data');
    date.appendChild(document.createTextNode(' Время записи: ' + getReadableString(new Date(data.date))));

    form.appendChild(creationDate);
    form.appendChild(car);
    form.appendChild(service);
    form.appendChild(date);

    document.getElementsByClassName('user-forms')[0].appendChild(form);
}

function getReadableString(d) {
    var minutes = d.getMinutes();
    if (minutes.toString().length === 1) {
        minutes = '0' + minutes;
    }

    var hours = d.getHours();
    if (hours.toString().length === 1) {
        hours = '0' + hours;
    }

    return d.getDate() + '/' + (d.getMonth() + 1) + ' ' + hours + ':' + minutes;
}