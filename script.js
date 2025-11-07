// SHOW ALL PRODUCTS SCRIPT
console.log("Script loaded!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded!");
    
    // Combine ALL product arrays
    const allProducts = [
        ...laptops, 
        ...smartphones,
        ...pcComponents,
        ...gpus,
        ...ram,
        ...psuCasesCooling,
        ...storageDevices,
        ...motherboards,
        ...peripherals
    ];
    
    console.log(`Total products: ${allProducts.length}`);
    
    const container = document.getElementById('products-container');
    const countElement = document.getElementById('products-count');
    
    // Clear loading message
    container.innerHTML = '';
    
    // Show ALL products
    allProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"150\" viewBox=\"0 0 200 150\"><rect width=\"200\" height=\"150\" fill=\"%230066cc\"/><text x=\"100\" y=\"75\" font-family=\"Arial\" font-size=\"12\" text-anchor=\"middle\" fill=\"white\">${product.category}</text></svg>'">
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
    
    // Update category tabs to include all categories
    updateCategoryTabs(allProducts);
    
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

    // Search functionality
    document.getElementById('search-input').addEventListener('input', function(e) {
        searchProducts(e.target.value, allProducts);
    });
});

function updateCategoryTabs(allProducts) {
    const tabsContainer = document.querySelector('.category-tabs');
    
    // Get unique categories
    const categories = ['all', ...new Set(allProducts.map(product => product.category))];
    
    // Update tabs
    tabsContainer.innerHTML = '';
    categories.forEach(category => {
        const tab = document.createElement('div');
        tab.className = `category-tab ${category === 'all' ? 'active' : ''}`;
        tab.setAttribute('data-category', category);
        
        let displayName = category;
        let emoji = '';
        
        // Add emojis and better names
        switch(category) {
            case 'all': emoji = '📦'; displayName = 'All Products'; break;
            case 'laptops': emoji = '💻'; break;
            case 'smartphones': emoji = '📱'; break;
            case 'parts': emoji = '⚙️'; displayName = 'PC Parts'; break;
            default: emoji = '📦';
        }
        
        tab.innerHTML = `${emoji} ${displayName}`;
        tab.addEventListener('click', function() {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterProducts(category, allProducts);
        });
        
        tabsContainer.appendChild(tab);
    });
}

function filterProducts(category, allProducts) {
    const container = document.getElementById('products-container');
    
    let filteredProducts;
    if (category === 'all') {
        filteredProducts = allProducts;
    } else if (category === 'parts') {
        // Show all PC components
        filteredProducts = allProducts.filter(product => 
            product.category === 'parts'
        );
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
                     onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"150\" viewBox=\"0 0 200 150\"><rect width=\"200\" height=\"150\" fill=\"%230066cc\"/><text x=\"100\" y=\"75\" font-family=\"Arial\" font-size=\"12\" text-anchor=\"middle\" fill=\"white\">${product.category}</text></svg>'">
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

function searchProducts(query, allProducts) {
    const container = document.getElementById('products-container');
    
    let filteredProducts;
    if (query.trim() === '') {
        filteredProducts = allProducts;
    } else {
        filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            (product.category && product.category.toLowerCase().includes(query.toLowerCase()))
        );
    }
    
    container.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" 
                     onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"150\" viewBox=\"0 0 200 150\"><rect width=\"200\" height=\"150\" fill=\"%230066cc\"/><text x=\"100\" y=\"75\" font-family=\"Arial\" font-size=\"12\" text-anchor=\"middle\" fill=\"white\">${product.category}</text></svg>'">
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
