document.addEventListener('DOMContentLoaded', () => {
    showReviews();
});


async function showReviews() {
    try {
        let reviews = await getReviews();
        console.log(reviews);

        for (let i = 0; i < reviews.length; i++) {
            createReview(reviews[i]);
        }
    } catch (e) {
        showError();
    }
}

function getReviews() {
    return fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then((response) => response.json())
        .then((json) => json);
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
