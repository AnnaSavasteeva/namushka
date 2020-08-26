function event_listener_hover(element, data_array) {
    if (data_array.is_available) {
        let message = element.querySelector('.message');

        element.addEventListener('mouseover', function () {

            if (data_array.is_selected) {
                this.querySelector('.card_wrapper').classList.add('card_selected_hover');
                message.innerHTML = data_array.message[1];

            } else {
                this.querySelector('.card_wrapper').classList.add('card_hover');
                this.querySelector('.description').classList.add('description_hover');
            }
        });

        element.addEventListener('mouseout', function () {
            if (data_array.is_selected) {
                this.querySelector('.card_wrapper').classList.remove('card_selected_hover');
                message.innerHTML = data_array.message[0];

            } else {
                this.querySelector('.card_wrapper').classList.remove('card_hover');
                this.querySelector('.description').classList.remove('description_hover');
            }
        });
    }
}



function event_listener_click(element, data_array) {
    if (data_array.is_available) {
        let description = element.querySelector('.description');

        element.addEventListener('click', function () {
            if (!data_array.is_selected) {
                data_array.is_selected = true;
                description.innerHTML = data_array.description[1];

                this.querySelector('.card_wrapper').classList.remove('card_hover');
                this.querySelector('.card_wrapper').classList.add('card_selected');

            } else {
                data_array.is_selected = false;
                description.innerHTML = data_array.description[0];
                element.querySelector('.message').innerHTML = data_array.message[0];

                this.querySelector('.card_wrapper').classList.remove('card_selected');
                this.querySelector('.card_wrapper').classList.remove('card_selected_hover');
            }
        });
    }
}



function render_card(data_array) {
    let card = document.createElement('div');
    card.classList.add('card_box');

    card.innerHTML = `
        <div class="card_wrapper ${(data_array.is_available) ? 'card_wrapper_border' : 'card_not_available'}">
            <div class="card_content">
                <div class="message">${data_array.message[0]}</div>
                <h2 class="title">${data_array.title}</h2>
                <h3 class="taste">${data_array.taste}</h3>
                <div class="bonus">
                    <p>${data_array.bonus.condition}</p>
                    <p>${data_array.bonus.bonus}</p>
                    ${(data_array.bonus.add) ? '<p>' + data_array.bonus.add + '</p>' : ''}
                </div>
                <img src="${data_array.image_url}" alt="${data_array.image_alt_text}" class="label_photo">
                <div class="weight_wrapper">
                    <span class="weight">${data_array.weight}</span>
                    <span class="measure">кг</span>
                </div>
            </div>
        </div>
        <p class="description ${(!data_array.is_available) ? 'description_not_available' : ''}">
            ${(data_array.is_available) ? data_array.description[0] : data_array.description[2]}
        </p>
    `;

    event_listener_hover(card, data_array);
    event_listener_click(card, data_array);

    return card;
}
