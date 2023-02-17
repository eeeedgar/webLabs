(() => {
    const startTime = new Date().getTime();
    document.addEventListener('DOMContentLoaded', () => {
        const stampParagraph = document.getElementById("load-time");
        window.onload = () => {
            stampParagraph.innerHTML += `Время загрузки страницы: ${(new Date().getTime() - startTime) / 1000} с`;
        };
    });
})();