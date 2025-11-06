// script.js - SIMPLE WORKING VERSION
console.log("Script.js loaded!");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded - showing products!");

    // Combine all products
    const allProducts = [...laptops, ...smartphones];
    console.log(`Total products: ${allProducts.length}`);

    const container = document.getElementById('products-container');
    const countElement = document.getElementById('products-count');

    if (!container) {
        console.error("Products container not found!");
        return;
    }

    // Clear loading message
    container.innerHTML = '';

    // Show ALL products
    allProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.style.display='none'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">
                    <span class="stars">${product.rating}</span>
                    <span class="reviews">${product.reviews}</span>
                </div>
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}">View Details</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    countElement.innerHTML = `Showing <strong>${allProducts.length}</strong> products`;

    // Add event listeners
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = allProducts.find(p => p.id === productId);
            if (product) {
                showProductModal(product);
            }
        });
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);

            // Show confirmation
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.background = '#00CC66';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 2000);
        });
    });

    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });

    // Search functionality
    document.getElementById('search-input').addEventListener('input', function (e) {
        searchProducts(e.target.value);
    });

    console.log("All products should be visible now!");
});

function filterByCategory(category) {
    const container = document.getElementById('products-container');
    const allProducts = [...laptops, ...smartphones];

    let filteredProducts;
    if (category === 'all') {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(product => product.category === category);
    }

    container.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.style.display='none'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">
                    <span class="stars">${product.rating}</span>
                    <span class="reviews">${product.reviews}</span>
                </div>
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}">View Details</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById('products-count').innerHTML = `Showing <strong>${filteredProducts.length}</strong> products`;
}

function searchProducts(query) {
    const container = document.getElementById('products-container');
    const allProducts = [...laptops, ...smartphones];

    let filteredProducts;
    if (query.trim() === '') {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
    }

    container.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.style.display='none'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">
                    <span class="stars">${product.rating}</span>
                    <span class="reviews">${product.reviews}</span>
                </div>
                <div class="product-actions">
                    <button class="view-details" data-id="${product.id}">View Details</button>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    document.getElementById('products-count').innerHTML = `Showing <strong>${filteredProducts.length}</strong> products`;
}

function showProductModal(product) {
    document.getElementById('modal-product-title').textContent = product.name;
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-price').textContent = product.price;

    // Populate specs
    const specsList = document.getElementById('modal-specs');
    specsList.innerHTML = '';
    if (product.specs && Array.isArray(product.specs)) {
        product.specs.forEach(spec => {
            const li = document.createElement('li');
            li.textContent = spec;
            specsList.appendChild(li);
        });
    }

    // Populate features
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    if (product.keyFeatures && Array.isArray(product.keyFeatures)) {
        product.keyFeatures.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
    }

    document.getElementById('product-modal').style.display = 'block';
}

function addToCart(productId) {
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(cartCount.textContent) || 0;
    count++;
    cartCount.textContent = count;

    const product = [...laptops, ...smartphones].find(p => p.id === productId);
    if (product) {
        console.log(`Added ${product.name} to cart`);
    }
}

// Close modal
document.querySelector('.close-modal').addEventListener('click', function () {
    document.getElementById('product-modal').style.display = 'none';
});

document.getElementById('product-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        document.getElementById('product-modal').style.display = 'none';
    }
});