// search.js - Search functionality for Millennia Computers
// Works with your all-products.js arrays

// Function to combine ALL products from all arrays
function getAllProducts() {
    const productArrays = [
        laptops, smartphones, pcComponents, gpus, ram, 
        psuCasesCooling, storageDevices, motherboards, peripherals
    ];
    
    let allProducts = [];
    
    productArrays.forEach(arr => {
        if (Array.isArray(arr)) {
            allProducts = allProducts.concat(arr);
        }
    });
    
    console.log("Total products for search:", allProducts.length);
    return allProducts;
}

// Main search function
function searchAllProducts(searchTerm) {
    const allProducts = getAllProducts();
    
    if (!searchTerm || searchTerm.trim() === '') {
        return [];
    }
    
    const term = searchTerm.toLowerCase().trim();
    
    // Search in name, category, price, tags
    return allProducts.filter(product => {
        const searchInName = product.name && product.name.toLowerCase().includes(term);
        const searchInCategory = product.category && product.category.toLowerCase().includes(term);
        const searchInPrice = product.price && product.price.toString().toLowerCase().includes(term);
        const searchInTags = product.tags && Array.isArray(product.tags) && 
                            product.tags.some(tag => tag.toLowerCase().includes(term));
        
        return searchInName || searchInCategory || searchInPrice || searchInTags;
    });
}

// Handle search form submission
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        // When user presses Enter in search box
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
        
        // Add search button click if you have one
        const searchButton = document.querySelector('.search-premium button, .search-icon-premium');
        if (searchButton) {
            searchButton.addEventListener('click', function() {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
                }
            });
        }
    }
    
    // If on search results page, show results
    if (window.location.pathname.includes('search-results.html')) {
        showSearchResults();
    }
});

// Display search results
function showSearchResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('q');
    const container = document.getElementById('search-results-container');
    
    if (!searchTerm || !container) return;
    
    // Show searching message
    container.innerHTML = '<div class="searching-message"><i class="fas fa-spinner fa-spin"></i> Searching products...</div>';
    
    // Search after a short delay
    setTimeout(() => {
        const results = searchAllProducts(searchTerm);
        displayResults(results, searchTerm, container);
    }, 300);
}

// Display results in container
function displayResults(results, searchTerm, container) {
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="text-align: center; padding: 4rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--text-dark); margin-bottom: 0.5rem;">No products found for "${searchTerm}"</h3>
                <p style="color: var(--text-light); margin-bottom: 2rem;">Try searching for: gaming, laptop, smartphone, GPU, RAM</p>
                <a href="index.html" class="btn-premium-primary">
                    <i class="fas fa-th-large"></i>
                    Browse All Products
                </a>
            </div>
        `;
        return;
    }
    
    // Show results header
    const header = document.createElement('div');
    header.className = 'search-results-header';
    header.innerHTML = `
        <h2 style="color: var(--text-dark); margin-bottom: 1rem;">Search Results for "${searchTerm}"</h2>
        <p style="color: var(--text-light); margin-bottom: 2rem;">Found ${results.length} product${results.length === 1 ? '' : 's'}</p>
    `;
    container.appendChild(header);
    
    // Create results grid
    const grid = document.createElement('div');
    grid.className = 'products-grid-premium';
    grid.style.marginTop = '2rem';
    
    // Add each product
    results.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card-premium fade-in-up';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="product-3d-effect">
                <div class="product-image-container-premium">
                    <img src="${product.image || 'https://via.placeholder.com/300x200/667eea/fff?text=' + product.name.substring(0, 10)}" 
                         alt="${product.name}" 
                         class="product-image-premium">
                </div>
                <div class="product-info-premium">
                    <div class="product-category-premium">${product.category || 'Product'}</div>
                    <h3 class="product-title-premium">${product.name}</h3>
                    <div class="product-price-premium">${product.price || 'Price on request'}</div>
                    ${product.reviews ? `<div class="product-rating-premium">
                        <span class="stars-premium">${'★'.repeat(5)}</span>
                        <span class="reviews">${product.reviews}</span>
                    </div>` : ''}
                    <div class="product-actions-premium">
                        <button class="btn-view-details-premium" onclick="viewProductDetails(${product.id})">
                            <i class="fas fa-eye"></i>
                            View Details
                        </button>
                        <button class="btn-add-cart-premium" onclick="addToCart(${product.id})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    container.appendChild(grid);
}

// View product details (you can customize this)
function viewProductDetails(productId) {
    // Redirect to product details page or show modal
    alert(`Viewing product ${productId} - You can create product-details.html later`);
}

// Add to cart function
function addToCart(productId) {
    const cartCount = document.querySelector('.cart-count-premium') || { textContent: '0' };
    let count = parseInt(cartCount.textContent) || 0;
    count++;
    cartCount.textContent = count;
    
    // Show notification
    showNotification('Product added to cart!');
}

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'premium-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}
