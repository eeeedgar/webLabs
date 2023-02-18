document.addEventListener('DOMContentLoaded', () => {
    showReviews();
});


async function showReviews() {
    try {
        let reviews = await getReviews();
        console.log(reviews);
        removeRing();

        if (reviews.length === 0) {
            showError();
        } else {
            for (let i = 0; i < reviews.length; i++) {
                createReview(reviews[i]);
            }
        }
    } catch (e) {
        showError();
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getReviews() {
    let n = getRandomInt(20) - 8;
    console.log(n);
    return delay(1000).then(() => fetch('https://jsonplaceholder.typicode.com/comments?postId=' + n)
        .then((response) => response.json())
        .then((json) => json));
}

function removeRing() {
    document.getElementsByClassName('lds-ring')[0].remove();
}

function createReview(data) {
    let reviews = document.getElementsByClassName('reviews')[0];

    let review = document.createElement('div');
    review.classList.add('review');

    let username = document.createElement('div');
    username.classList.add('review__username');
    username.appendChild(document.createTextNode(data['name']))

    let text = document.createElement('div');
    text.classList.add('review__text');
    text.appendChild(document.createTextNode(data['body']))

    review.appendChild(username);
    review.appendChild(text);

    reviews.appendChild(review);
}

function showError() {
    iziToast.error({title: 'Ошибка', message: 'Невозможно загрузить комментарии'});
}
