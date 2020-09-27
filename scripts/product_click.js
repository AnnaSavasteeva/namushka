function event_listener_product_click(element, data_array) {
    if (data_array.is_available) {
        let description = element.querySelector('.product-full-description');

        element.addEventListener('click', function () {
            if (!data_array.is_selected) {
                data_array.is_selected = true;
                description.innerHTML = data_array.description[1];

                this.querySelector('.product-content-container').classList.add('product-content-container-selected');

            } else {
                data_array.is_selected = false;
                description.innerHTML = data_array.description[0];
                element.querySelector('.product-promo-description').innerHTML = data_array.message[0];

                this.querySelector('.product-content-container').classList.remove('product-content-container-selected');
                this.querySelector('.product-content-container').classList.remove('product-content-container-selected-hover');
            }
        });
    }
}
