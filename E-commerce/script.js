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

let cart = [];

const productGrid = document.getElementById("product-grid");
const cartList = document.getElementById("cart-items");

const renderProducts = (products) => {
  const productCards = products.map((product) => {
    const productCard = getProductCard(product);
    return productCard;
  });
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

const getCatrListItem = (cartItems) => {
  const cartListItem = document.createElement("li");
  cartListItem.innerText = `${cartItems.name} * ${cartItems.quantity}`;
  const removeCartBtn = getRemoveCartBtn(cartItems);
  cartListItem.append(removeCartBtn);
  return cartListItem;
};

renderProducts(products);
renderCart(cart);
