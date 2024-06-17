"use strict";
const products = [
    { id: 1, name: 'Producto 1', price: 10.99, stock: 25, image: 'img/articulo1.jpg' },
    { id: 2, name: 'Producto 2', price: 15.50, stock: 12, image: 'img/articulo2.jpg' },
    { id: 3, name: 'Producto 3', price: 8.75, stock: 30, image: 'img/articulo3.jpg' },
    { id: 4, name: 'Producto 4', price: 12.99, stock: 18, image: 'img/articulo4.jpg' },
    { id: 5, name: 'Producto 5', price: 7.50, stock: 35, image: 'img/articulo5.jpg' },
    { id: 6, name: 'Producto 6', price: 18.25, stock: 8, image: 'img/articulo6.jpg' },
    { id: 7, name: 'Producto 7', price: 14.75, stock: 22, image: 'img/articulo7.jpg' },
    { id: 8, name: 'Producto 8', price: 9.99, stock: 27, image: 'img/articulo8.jpg' }
];
// Carrito de compras
let cart = [];
// Función para mostrar los productos en la página
function displayProducts() {
    const productsContainer = document.getElementById('products');
    if (productsContainer) {
        productsContainer.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Precio: Q${product.price.toFixed(2)}</p>
          <p>Stock: ${product.stock}</p>
          <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;
            productsContainer.appendChild(productElement);
        });
    }
}
// Función para agregar un producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.stock > 0) {
        cart.push(product);
        product.stock--;
        updateCartIcon();
        updateCartItems();
        console.log(`Se agregó ${product.name} al carrito.`);
        displayProducts();
    }
    else {
        console.log(`Lo siento, no hay más ${product === null || product === void 0 ? void 0 : product.name} en stock.`);
    }
}
// Función para actualizar el icono del carrito
function updateCartIcon() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length.toString();
    }
}
// Función para actualizar los productos en el carrito
function updateCartItems() {
    const cartItemsElement = document.getElementById('cart-items');
    if (cartItemsElement) {
        cartItemsElement.innerHTML = '';
        cart.forEach(product => {
            const cartItemElement = document.createElement('div');
            cartItemElement.textContent = `${product.name} - Q${product.price.toFixed(2)}`;
            cartItemsElement.appendChild(cartItemElement);
        });
    }
}
// Función para mostrar/ocultar el modal del carrito
function toggleCartModal() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        if (cartModal.style.display === 'none') {
            cartModal.style.display = 'block';
        }
        else {
            cartModal.style.display = 'none';
        }
    }
}
// Mostrar los productos en la página
displayProducts();
