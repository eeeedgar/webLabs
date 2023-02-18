function clearData() {
    let forms = JSON.parse(localStorage.getItem('forms') || '[]');

    if (forms.length === 0) {
        iziToast.warning({title: '■■■■■■■■■', message: 'ДАННЫЕ УДАЛЕНЫ'});
    } else {
        localStorage.clear();
        location.reload();
    }
}