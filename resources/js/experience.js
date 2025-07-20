 document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const viewDetailBtn = card.querySelector('.view-detail-btn');
            const backBtn = card.querySelector('.back-btn');

            if (viewDetailBtn) {
                viewDetailBtn.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent event bubbling to the card itself
                    card.classList.add('active'); // Add active class to show detail
                });
            }

            if (backBtn) {
                backBtn.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent event bubbling
                    card.classList.remove('active'); // Remove active class to show brief
                });
            }
        });
    });