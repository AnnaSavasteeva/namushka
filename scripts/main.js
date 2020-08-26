let card_list = document.querySelector('#main_content');

for (let i = 0; i < cards.length; i++) {
    let card = render_card(cards[i]);
    card_list.appendChild(card);
}
