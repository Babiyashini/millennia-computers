// TEST SCRIPT - Check what arrays exist
console.log("=== TESTING PRODUCT ARRAYS ===");

document.addEventListener('DOMContentLoaded', function() {
    console.log("Arrays found:");
    console.log("laptops:", typeof laptops !== 'undefined' ? laptops.length : "NOT FOUND");
    console.log("smartphones:", typeof smartphones !== 'undefined' ? smartphones.length : "NOT FOUND");
    console.log("pcComponents:", typeof pcComponents !== 'undefined' ? pcComponents.length : "NOT FOUND");
    console.log("gpus:", typeof gpus !== 'undefined' ? gpus.length : "NOT FOUND");
    console.log("ram:", typeof ram !== 'undefined' ? ram.length : "NOT FOUND");
    console.log("psuCasesCooling:", typeof psuCasesCooling !== 'undefined' ? psuCasesCooling.length : "NOT FOUND");
    console.log("storageDevices:", typeof storageDevices !== 'undefined' ? storageDevices.length : "NOT FOUND");
    console.log("motherboards:", typeof motherboards !== 'undefined' ? motherboards.length : "NOT FOUND");
    console.log("peripherals:", typeof peripherals !== 'undefined' ? peripherals.length : "NOT FOUND");

    // Show what we have
    const container = document.getElementById('products-container');
    const countElement = document.getElementById('products-count');
    
    let allProducts = [];
    
    if (typeof laptops !== 'undefined') {
        allProducts = [...allProducts, ...laptops];
        console.log("Added laptops:", laptops.length);
    }
    
    if (typeof smartphones !== 'undefined') {
        allProducts = [...allProducts, ...smartphones];
        console.log("Added smartphones:", smartphones.length);
    }
    
    if (typeof pcComponents !== 'undefined') {
        allProducts = [...allProducts, ...pcComponents];
        console.log("Added pcComponents:", pcComponents.length);
    }
    
    if (typeof gpus !== 'undefined') {
        allProducts = [...allProducts, ...gpus];
        console.log("Added gpus:", gpus.length);
    }
    
    if (typeof ram !== 'undefined') {
        allProducts = [...allProducts, ...ram];
        console.log("Added ram:", ram.length);
    }
    
    if (typeof psuCasesCooling !== 'undefined') {
        allProducts = [...allProducts, ...psuCasesCooling];
        console.log("Added psuCasesCooling:", psuCasesCooling.length);
    }
    
    if (typeof storageDevices !== 'undefined') {
        allProducts = [...allProducts, ...storageDevices];
        console.log("Added storageDevices:", storageDevices.length);
    }
    
    if (typeof motherboards !== 'undefined') {
        allProducts = [...allProducts, ...motherboards];
        console.log("Added motherboards:", motherboards.length);
    }
    
    if (typeof peripherals !== 'undefined') {
        allProducts = [...allProducts, ...peripherals];
        console.log("Added peripherals:", peripherals.length);
    }
    
    console.log("TOTAL PRODUCTS:", allProducts.length);
    
    // Show products
    container.innerHTML = '';
    allProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-rating">${product.rating} ${product.reviews}</div>
            </div>
        `;
        container.appendChild(card);
    });
    
    countElement.innerHTML = `Showing <strong>${allProducts.length}</strong> products from all categories`;
});
