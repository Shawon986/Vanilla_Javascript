products = [
    {
        id: 1,
        name: 'Gaming Laptop',
        price: 3500,
        image: './assets/notfound.png',
        categories: ['Laptops', 'Gaming'],
    },
    {
        id: 2,
        name: 'Wireless Mouse',
        price: 50,
        image: './assets/notfound.png',
        categories: ['Peripherals', 'Accessories'],
    },
    {
        id: 3,
        name: 'Mechanical Keyboard',
        price: 350,
        image: './assets/notfound.png',
        categories: ['Peripherals', 'Accessories'],
    },
    {
        id: 4,
        name: 'External Hard Drive',
        price: 120,
        image: './assets/notfound.png',
        categories: ['Accessories', 'Storage'],
    },
    {
        id: 5,
        name: 'Graphics Card',
        price: 290,
        image: './assets/notfound.png',
        categories: ['Components', 'Gaming'],
    },
    {
        id: 6,
        name: 'Portable SSD',
        price: 190,
        image: './assets/notfound.png',
        categories: ['Storage', 'Accessories'],
    },
    {
        id: 7,
        name: 'Gaming Monitors',
        price: 350,
        image: './assets/notfound.png',
        categories: ['Gaming', 'Monitors'],
    },
    {
        id: 8,
        name: 'All-in-One Printer',
        price: 150,
        image: './assets/notfound.png',
        categories: ['Peripherals', 'Printers'],
    },
];


const productGrid = document.getElementById('product-grid');

const renderProducts = (products)=>{

    const productCards = products.map((product)=>{
        const productCard = getProductCard(product);
        return productCard;
    });
    productGrid.append(...productCards);

};

const getProductImage = (product)=>{
    const productImage = document.createElement('img');
    productImage.className = 'w-full mb-4';
    productImage.src = product.image;
    productImage.alt = product.name;
    return productImage;
}

const getProductName = (name)=>{
    const productName = document.createElement('h3');
    productName.className = 'text-lg font-semibold' ;
    productName.innerText = name;
    return productName;
};

const getProductPrice =(price)=>{
    const productPrice = document.createElement('p');
    productPrice.className = 'text-gray-700';
    productPrice.innerText = `$${price}`;
    return productPrice;
}

const getProductCard = (product)=>{
    const productCard = document.createElement('div');
    productCard.className = 'bg-white p-4 rounded shadow';

    const productImage = getProductImage(product);
    const productName = getProductName(product.name);
    const productPrice = getProductPrice(product.price);

    productCard.append(productImage,productName,productPrice);

    return productCard;
};



renderProducts(products);
