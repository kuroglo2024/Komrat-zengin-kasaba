const slider = document.getElementById("cardSlider");
const cards = document.querySelectorAll(".card");

function updateActiveCard() {
    let center = slider.scrollLeft + slider.offsetWidth / 2;

    cards.forEach(card => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;

        if (Math.abs(center - cardCenter) < card.offsetWidth / 2) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });
}

function scrollSlider(direction) {
    slider.scrollBy({
        left: direction * 300,
        behavior: "smooth"
    });

    setTimeout(updateActiveCard, 300);
}

/* авто-прокрутка */
setInterval(() => {
    slider.scrollBy({
        left: 260,
        behavior: "smooth"
    });

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        slider.scrollTo({ left: 0 });
    }

    setTimeout(updateActiveCard, 300);
}, 4000);

/* при прокрутке */
slider.addEventListener("scroll", updateActiveCard);

/* запуск */
window.addEventListener("load", updateActiveCard);