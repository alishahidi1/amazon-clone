import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from "./utils/money.js";

function updateCardQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}

function renderProducts(searchText = '') {
    const normalizedSearch = searchText.trim().toLowerCase();
    const filteredProducts = normalizedSearch ? products.filter((product) => {
        const searchableText = [
            product.name,
            ...(product.keywords || [])
        ].join(' ').toLowerCase();

        return searchableText.includes(normalizedSearch);
    }) : products;

    const productsGrid = document.querySelector('.products-grid');

    if (!filteredProducts.length) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <h3>No products found for "${searchText.trim()}"</h3>
                <p>Try searching for terms like "kitchen", "shoes", or "hoodie".</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filteredProducts.map((product) => `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                    src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                    src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                    ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${formatCurrency(product.priceCents)}
            </div>

            <div class="product-quantity-container">
                <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `).join('');

    document.querySelectorAll('.add-to-cart-button').forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCardQuantity();

            const addedMessage = button.parentElement.querySelector('.added-to-cart');
            if (addedMessage) {
                addedMessage.style.opacity = '1';
                window.clearTimeout(addedMessage.timeoutId);
                addedMessage.timeoutId = window.setTimeout(() => {
                    addedMessage.style.opacity = '0';
                }, 1200);
            }
        });
    });
}

const searchInput = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button');

updateCardQuantity();
renderProducts();

searchButton.addEventListener('click', () => {
    renderProducts(searchInput.value);
});

searchInput.addEventListener('input', () => {
    if (searchInput.value.trim() === '') {
        renderProducts();
    }
});

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        renderProducts(searchInput.value);
    }
});
