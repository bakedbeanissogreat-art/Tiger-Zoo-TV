const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.series-card');
const count = document.querySelector('#catalog-count');
const emptyState = document.querySelector('#empty-state');

filters.forEach((filter) => {
    filter.addEventListener('click', () => {
        const selected = filter.dataset.filter;
        let visible = 0;

        filters.forEach((item) => item.classList.toggle('active', item === filter));
        cards.forEach((card) => {
            const matches = selected === 'all' || card.dataset.category === selected;
            card.hidden = !matches;
            if (matches) visible += 1;
        });
        count.textContent = `${String(visible).padStart(2, '0')} SERIES`;
        emptyState.hidden = visible !== 0;
    });
});

document.querySelectorAll('.save-button').forEach((button) => {
    button.addEventListener('click', () => {
        const saved = button.getAttribute('aria-pressed') === 'true';
        button.setAttribute('aria-pressed', String(!saved));
        button.textContent = saved ? '+' : '\u2713';
        button.setAttribute('aria-label', saved ? button.getAttribute('aria-label').replace('Remove', 'Add') : button.getAttribute('aria-label').replace('Add', 'Remove'));
    });
});

document.querySelector('#sign-in')?.addEventListener('click', () => {
    window.location.href = '../home/index.html#sign-in';
});
