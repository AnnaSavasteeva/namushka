let all_cards = document.querySelector('#all-products-container');

for (let i = 0; i < cards.length; i++) {
    let card = render_product(cards[i]);
    all_cards.appendChild(card);
}
