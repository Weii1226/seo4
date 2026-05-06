document.addEventListener('DOMContentLoaded', () => {
    // Determine which page we are on
    const path = window.location.pathname;
    const isHomePage = path.endsWith('/') || path.endsWith('index.html');
    const isMenPage = path.endsWith('men.html');
    const isWomenPage = path.endsWith('women.html');
    const isOtherPage = path.endsWith('other.html');
    const isProductPage = path.endsWith('product.html');

    const renderProducts = (containerId, filteredProducts) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = filteredProducts.map(p => `
            <a href="product.html?id=${p.id}" class="product-card">
                <img src="${p.image}" alt="${p.name}" class="product-image" onerror="this.src='${p.image.replace('.png', '.webp')}'">
                <h3>${p.name}</h3>
                <p>NT$ ${p.price.toLocaleString()}</p>
            </a>
        `).join('');
    };

    if (isHomePage) {
        // Show 4 random featured products
        const featured = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
        renderProducts('featured-products', featured);
    } else if (isMenPage) {
        const menProducts = products.filter(p => p.category === 'men');
        renderProducts('men-products', menProducts);
    } else if (isWomenPage) {
        const womenProducts = products.filter(p => p.category === 'women');
        renderProducts('women-products', womenProducts);
    } else if (isOtherPage) {
        const otherProducts = products.filter(p => p.category === 'other');
        renderProducts('other-products', otherProducts);
    } else if (isProductPage) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        const product = products.find(p => p.id === productId);

        if (product) {
            document.title = `${product.name} | Aura 香水`;
            const img = document.getElementById('product-image');
            img.src = product.image;
            img.onerror = () => { img.src = product.image.replace('.png', '.webp'); };
            img.alt = product.name;
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').textContent = `NT$ ${product.price.toLocaleString()}`;
            document.getElementById('product-desc').textContent = product.desc;
        } else {
            document.getElementById('product-detail-container').innerHTML = '<h2>找不到該產品</h2>';
        }
    }
});
