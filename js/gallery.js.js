const cards = document.querySelectorAll('.image-container');

cards.forEach(card => {

    const img = card.querySelector('img');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        img.style.transform = `
            scale(1.2)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;

        // движение блика
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });

    //  tap
    card.addEventListener('click', function (e) {
        document.querySelectorAll('.image-container').forEach(el => {
            if (el !== card) el.classList.remove('active');
        });

        card.classList.toggle('active');
        e.preventDefault();
    });

});