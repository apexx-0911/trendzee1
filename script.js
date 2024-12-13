

const fetchAndDisplayProducts = async () => {
    //elements for categories
    const mensFashion = document.getElementById('mens-fashion');
    const womensFashion = document.getElementById('womens-fashion');
    const electronics = document.getElementById('electronics');
    const accessories = document.getElementById('accessories');

    try {
        const response1 = await fetch('https://fakestoreapi.com/products');
        const data1 = await response1.json();

        const response2 = await fetch('https://dummyjson.com/products');
        const data2 = await response2.json();

        // Combine the product data
        const allProducts = [...data1, ...data2.products];

        // create a product card
        const createProductCard = (product) => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <h3>${product.title}</h3>
                    <p class="price">$${product.price}</p>
                    <p class="category">${product.category || 'Uncategorized'}</p>
                </div>
                <button>Add to Cart</button>
            </div>
        `;

        // Loop
        allProducts.forEach(product => {
            const category = product.category?.toLowerCase() || '';

            if (category.includes('men')) {
                mensFashion.innerHTML += createProductCard(product);
            } else if (category.includes('women')) {
                womensFashion.innerHTML += createProductCard(product);
            } else if (category.includes('electronics')) {
                electronics.innerHTML += createProductCard(product);
            } else if (category.includes('accessories') || category.includes('jewelery')) {
                accessories.innerHTML += createProductCard(product);
            }
        });
    } catch (error) {
        console.error("Error fetching product data:", error);
    }
};

// Call function 
window.onload = fetchAndDisplayProducts;
