document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const tags = document.querySelectorAll('.tag');
    const filters = document.querySelectorAll('select');

    // 过滤函数
    function filterCards() {
        const filters = {
            type: document.getElementById("filterType").value,
            tech: document.getElementById("filterTech").value,
            domain: document.getElementById("filterDomain").value
        };

        document.querySelectorAll(".card").forEach(card => {
            const tagList = Array.from(card.querySelectorAll(".tag")).map(tag => tag.dataset.tag);

            // Check all filters match (or are not selected)
            const matches = Object.values(filters).every(filter => {
                return !filter || tagList.includes(filter);
            });

            card.style.display = matches ? "block" : "none";

        });
    }

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

    // 标签点击事件处理函数
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tag.classList.toggle('active');
            filterCards();
        });
    });

    // 过滤按钮点击事件处理函数
    filters.forEach(filter => {
        filter.addEventListener('change', filterCards);
    });

    // 初始化显示所有卡片
    filterCards();
});