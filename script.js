// WORKING SCRIPT WITH REAL IMAGES
console.log("Script loaded!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded!");
    
    // Combine all products
    const allProducts = [...laptops, ...smartphones];
    console.log(`Total products: ${allProducts.length}`);
    
    const container = document.getElementById('products-container');
    const countElement = document.getElementById('products-count');
    
    // Clear loading message
    container.innerHTML = '';
    
    // Show products with REAL images
    allProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"150\" viewBox=\"0 0 200 150\"><rect width=\"200\" height=\"150\" fill=\"%230066cc\"/><text x=\"100\" y=\"75\" font-family=\"Arial\" font-size=\"14\" text-anchor=\"middle\" fill=\"white\">${product.name}</text></svg>'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">${product.rating} ${product.reviews}</div>
                <div class="product-actions">
                    <button class="view-details">View Details</button>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    countElement.innerHTML = `Showing <strong>${allProducts.length}</strong> products`;
    
    // Simple cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const cartCount = document.querySelector('.cart-count');
            let count = parseInt(cartCount.textContent) || 0;
            count++;
            cartCount.textContent = count;
            
            // Show confirmation
            const originalText = e.target.textContent;
            e.target.textContent = 'Added!';
            e.target.style.background = '#00CC66';
            
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.background = '';
            }, 2000);
        }
    });

    // Category tabs functionality
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });

    // Search functionality
    document.getElementById('search-input').addEventListener('input', function(e) {
        searchProducts(e.target.value);
    });
});

function filterProducts(category) {
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
                     onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"150\" viewBox=\"0 0 200 150\"><rect width=\"200\" height=\"150\" fill=\"%230066cc\"/><text x=\"100\" y=\"75\" font-family=\"Arial\" font-size=\"14\" text-anchor=\"middle\" fill=\"white\">${product.name}</text></svg>'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">${product.rating} ${product.reviews}</div>
                <div class="product-actions">
                    <button class="view-details">View Details</button>
                    <button class="add-to-cart">Add to Cart</button>
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
                     onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"150\" viewBox=\"0 0 200 150\"><rect width=\"200\" height=\"150\" fill=\"%230066cc\"/><text x=\"100\" y=\"75\" font-family=\"Arial\" font-size=\"14\" text-anchor=\"middle\" fill=\"white\">${product.name}</text></svg>'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">${product.rating} ${product.reviews}</div>
                <div class="product-actions">
                    <button class="view-details">View Details</button>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
    
    document.getElementById('products-count').innerHTML = `Showing <strong>${filteredProducts.length}</strong> products`;
}
