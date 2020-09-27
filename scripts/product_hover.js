function event_listener_product_hover(element, data_array) {
    if (data_array.is_available) {
        let message = element.querySelector('.product-promo-description');

        element.addEventListener('mouseover', function () {

            if (data_array.is_selected) {
                this.querySelector('.product-content-container').classList.remove('product-content-container-selected');
                this.querySelector('.product-content-container').classList.add('product-content-container-selected-hover');
                message.innerHTML = data_array.message[1];

            } else {
                this.querySelector('.product-content-container').classList.add('product-content-container-hover');
            }
        });

        element.addEventListener('mouseout', function () {
            if (data_array.is_selected) {
                this.querySelector('.product-content-container').classList.remove('product-content-container-selected-hover');
                this.querySelector('.product-content-container').classList.add('product-content-container-selected');
                message.innerHTML = data_array.message[0];

            } else {
                this.querySelector('.product-content-container').classList.remove('product-content-container-hover');
            }
        });
    }
}
