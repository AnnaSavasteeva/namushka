function render_product(data_array) {
    let product = document.createElement('div');
    product.classList.add('product-container');

    product.innerHTML = `
        <div class="product-content-container ${(data_array.is_available) ? '' : 'product-not-available-content-container'}">
            <div class="product-text-container">
                <div class="product-promo-description">${data_array.message[0]}</div>
                <h2 class="product-title">${data_array.title}</h2>
                <h3 class="product-taste">${data_array.taste}</h3>
                <div class="product-bonus">
                    <p>${data_array.bonus.condition}</p>
                    <p>${data_array.bonus.bonus}</p>
                    ${(data_array.bonus.add) ? '<p>' + data_array.bonus.add + '</p>' : ''}
                </div>
            </div>
            <div class="product-photo-weight-container">
                <img src="${data_array.image_url}" alt="${data_array.image_alt_text}" class="product-photo">
                <div class="product-weight-container">
                    <span class="product-weight">${data_array.weight}</span>
                    <span class="product-measure">кг</span>
                </div>
            </div>
        </div>
        <p class="product-full-description">
            ${(data_array.is_available) ? data_array.description[0] : data_array.description[2]}
        </p>
    `;

    event_listener_product_hover(product, data_array);
    event_listener_product_click(product, data_array);

    return product;
}
