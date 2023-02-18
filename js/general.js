(() => {
    const startTime = new Date().getTime();
    document.addEventListener('DOMContentLoaded', () => {
        const stampParagraph = document.getElementById("load-time");
        window.onload = () => {
            stampParagraph.innerHTML += `Время загрузки страницы: ${(new Date().getTime() - startTime) / 1000} с`;

            showActiveMenuItem();
        };
    });
})();

function showActiveMenuItem() {
    let menuItems = document.getElementsByClassName("menu__item");
    console.log(menuItems);

    console.log(document.location.pathname);

    if (document.location.pathname.endsWith('/')) {
        menuItems[0].classList.add('menu__item_active');
    } else {

        for (let i = 0; i < menuItems.length; i++) {
            try {
                let hr = menuItems[i].getElementsByTagName("a")[0].getAttribute("href");
                console.log(hr);
                console.log(document.location.pathname.endsWith(hr));

                if (document.location.pathname.endsWith(hr)) {
                    menuItems[i].classList.add("menu__item_active");
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
}