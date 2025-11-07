// SIMPLE WORKING VERSION - No images first
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
    
    // Show products WITHOUT images first
    allProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <div style="background:#0066cc; color:white; padding:40px; text-align:center; border-radius:8px;">
                    📷<br>Image Loading
                </div>
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
    
    // Simple cart
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const cartCount = document.querySelector('.cart-count');
            cartCount.textContent = parseInt(cartCount.textContent) + 1;
        }
    });
});
