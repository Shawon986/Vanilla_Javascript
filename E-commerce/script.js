products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 3500,
    image: "./assets/notfound.png",
    categories: ["Laptops", "Gaming"],
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 50,
    image: "./assets/notfound.png",
    categories: ["Peripherals", "Accessories"],
  },
  {
    id: 3,
    name: "Mechanical Keyboard",
    price: 350,
    image: "./assets/notfound.png",
    categories: ["Peripherals", "Accessories"],
  },
  {
    id: 4,
    name: "External Hard Drive",
    price: 120,
    image: "./assets/notfound.png",
    categories: ["Accessories", "Storage"],
  },
  {
    id: 5,
    name: "Graphics Card",
    price: 290,
    image: "./assets/notfound.png",
    categories: ["Components", "Gaming"],
  },
  {
    id: 6,
    name: "Portable SSD",
    price: 190,
    image: "./assets/notfound.png",
    categories: ["Storage", "Accessories"],
  },
  {
    id: 7,
    name: "Gaming Monitors",
    price: 350,
    image: "./assets/notfound.png",
    categories: ["Gaming", "Monitors"],
  },
  {
    id: 8,
    name: "All-in-One Printer",
    price: 150,
    image: "./assets/notfound.png",
    categories: ["Peripherals", "Printers"],
  },
];

const cart_key = 'E-commerce';

const saveCartItemsToLocalStorage = (cart)=>{
  localStorage.setItem(cart_key,JSON.stringify(cart));
};

const getCartItemsFromLocalStorage = ()=>{
  const cartItems = JSON.parse(localStorage.getItem(cart_key));
  if(!cartItems){
    return [];
  }
  return cartItems;
};

let cart = getCartItemsFromLocalStorage();


const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById("cart-items");
const checkoutBtn = document.getElementById('checkout-btn');
const totalPrice = document.getElementById('total-price');
const categoryFilters = document.getElementById('category-filters');
const clearFilters = document.getElementById('clear-filters-btn');
const applyFilters = document.getElementById('apply-filters-btn');


let filters = new Set();

const renderProducts = (products) => {
  const productCards = products.map((product) => {
    const productCard = getProductCard(product);
    return productCard;
  });
  productGrid.innerHTML = '';
  productGrid.append(...productCards);
};

const getProductImage = (product) => {
  const productImage = document.createElement("img");
  productImage.className = "w-full mb-4";
  productImage.src = product.image;
  productImage.alt = product.name;
  return productImage;
};

const getProductName = (name) => {
  const productName = document.createElement("h3");
  productName.className = "text-lg font-semibold";
  productName.innerText = name;
  return productName;
};

const getProductPrice = (price) => {
  const productPrice = document.createElement("p");
  productPrice.className = "text-gray-700";
  productPrice.innerText = `$${price}`;
  return productPrice;
};

const indexOfProductInCart = (productId) =>
  cart.findIndex((cartItem) => {
    if (cartItem.id === productId) {
      return true;
    } else {
      return false;
    }
  });

const addProductToCart = (product) => {
  const cartItemIndex = indexOfProductInCart(product.id);

  if (cartItemIndex === -1) {
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[cartItemIndex].quantity++;
  }

  saveCartItemsToLocalStorage(cart);
};

const getAddToCartBtn = (product) => {
  const addToCartBtn = document.createElement("button");
  addToCartBtn.className =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2";
  addToCartBtn.innerText = "Add to Cart";
  addToCartBtn.addEventListener("click", () => {
    addProductToCart(product);
    renderCart(cart);
  });
  return addToCartBtn;
};

const getProductCard = (product) => {
  const productCard = document.createElement("div");
  productCard.className = "bg-white p-4 rounded shadow";

  const productImage = getProductImage(product);
  const productName = getProductName(product.name);
  const productPrice = getProductPrice(product.price);
  const addToCartBtn = getAddToCartBtn(product);

  productCard.append(productImage, productName, productPrice, addToCartBtn);

  return productCard;
};

const renderCart = (cart) => {
  cartList.innerHTML = "";
  cart.forEach((cartItems) => {
    const cartListItem = getCatrListItem(cartItems);
    cartList.append(cartListItem);
  });

  const totalPrices = cart.reduce((acc,currentItem)=>{
    const subTotal = currentItem.quantity * currentItem.price;
    return acc + subTotal;
  },0)

  totalPrice.innerText = `Total = $${totalPrices}`;
  saveCartItemsToLocalStorage(cart);
};

const getRemoveCartBtn = (cartItem) => {
  const removeCartBtn = document.createElement("button");
  removeCartBtn.className = "text-red-500 ml-2";
  removeCartBtn.innerText = "Remove";
  removeCartBtn.addEventListener("click", () => {
    removeCartItem(cartItem);
  });
  return removeCartBtn;
};

const removeCartItem = (cartItem) => {
  const cartItemIndex = indexOfProductInCart(cartItem.id);

  if (cartItemIndex === -1) {
    alert(`${cartItem.name} does not exist`);
    return;
  }

  if(cart[cartItemIndex].quantity>1){
    cart[cartItemIndex].quantity --;
    renderCart(cart);
    return;
  }

  if (confirm("Are you sure?")) {
    cart.splice(cartItemIndex, 1);
    renderCart(cart);
  };
};

const getAddProductQuantity = (cartItem)=>{
    const addProductQuantity = document.createElement('button');
    addProductQuantity.innerText = 'Add';
  addProductQuantity.className = "text-green-500 ml-2";
    addProductQuantity.addEventListener('click',()=>{
        cartItem.quantity++ ;
        renderCart(cart);
    })
    return addProductQuantity;

}

const getCatrListItem = (cartItems) => {
  const cartListItem = document.createElement("li");
  cartListItem.innerText = `${cartItems.name} * ${cartItems.quantity} * $${cartItems.price}`;
  const removeCartBtn = getRemoveCartBtn(cartItems);
  const addProductQuantity = getAddProductQuantity(cartItems);
  cartListItem.append(addProductQuantity,removeCartBtn);
  return cartListItem;
};

const getUniqueCategories = (products)=>{
  const flattenCategories = products.map((product)=> product.categories).flat();

  return [...new Set(flattenCategories)];
};

const getCategoryBtn = (category)=>{
  const categoryBtn = document.createElement('button');
  categoryBtn.innerText = category;
  categoryBtn.className = 'hover:bg-gray-300  font-semibold py-2 px-4 rounded mr-2';

  if(filters.has(category)){
    categoryBtn.classList.add('bg-blue-600','text-white');
  }else{
    categoryBtn.classList.add('bg-gray-300','text-gray-800');
  }

  categoryBtn.addEventListener('click', ()=>{

    if(filters.has(category)){
      filters.delete(category)
    }else{

      filters.add(category);
    }

    renderCategories(products);
  })

  return categoryBtn;
}

const renderCategories = (products)=>{
  const categories = getUniqueCategories(products);
  const categoryBtns = categories.map((category)=>{
    const categoryBtn = getCategoryBtn(category);
    return categoryBtn;
  });
  categoryFilters.innerHTML = '';
  categoryFilters.append(...categoryBtns);
}

renderCategories(products);
renderProducts(products);
renderCart(cart);
checkoutBtn.addEventListener('click',()=>{
  cart = [];
  renderCart(cart);
});

applyFilters.addEventListener('click',()=>{
  if(!filters.size){
    return;
  }
  const filteredProducts = products.filter((product)=>{
    if(product.categories.some((category)=>{
      if(filters.has(category)){
        return true;
      }
      return false;
    })){
      return true;
    }
    return false;
    
  })

  renderProducts(filteredProducts);

});

clearFilters.addEventListener('click',()=>{
  filters.clear();
  renderCategories(products);
  renderProducts(products);
})
