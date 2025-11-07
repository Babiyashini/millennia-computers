// script.js - CORRECTED VERSION
console.log("Script.js loaded!");

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM loaded - showing products!");

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
                    <button class="view-details">View Details</button>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    countElement.innerHTML = `Showing <strong>${allProducts.length}</strong> products`;
    console.log("All products should be visible now!");

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
});
