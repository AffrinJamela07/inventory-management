const products = [
  { id: 1, name: "T-Shirts", price: 250, image: "https://chriscross.in/cdn/shop/files/ChrisCrossRoyalblueCottontshirtmen.jpg?v=1740994595&width=2048" },
  { id: 2, name: "Sneakers", price: 350, image: "https://media.gq.com/photos/6813a873625bf4cbda4cb50c/3:2/w_1686,h_1124,c_limit/sneaker%20lede%20v1.png" },
  { id: 3, name: "Backpacks", price: 200, image: "https://statebags.com/cdn/shop/files/STB1863_KaneKidsTravel_BlueCheckerboard_TT_FRONT_1.png?v=1718287014" },
  { id: 4, name: "Watches", price: 220, image: "https://images-static.nykaa.com/media/catalog/product/d/d/ddc01ea77105sm01_2.jpg?tr=w-500" },
  { id: 5, name: "Shirts", price: 450, image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shirt/w/2/c/xl-chota-patti0-sky-yaara-fashion-original-imah3zthdqtzvh3f.jpeg?q=90&crop=false" },
  { id: 6, name: "Sarees", price: 650, image: "https://i.ytimg.com/vi/2uK2co6wKqw/maxresdefault.jpg" },
  { id: 7, name: "Caps", price: 100, image: "https://colorfulstandard.com/cdn/shop/files/CS6010_Male_OrganicCottonCap-PacificBlue_2_d4c073c8-cdb4-4a44-8ce6-fe0063c919a0.jpg?crop=center&height=1200&v=1738230628&width=1200" },
  { id: 8, name: "Jeans", price: 500, image: "https://image.hm.com/assets/hm/fd/27/fd273a690f144f7a35382e1a52e4e66901248fa0.jpg?imwidth=768" },
  { id: 9, name: "Kurtis", price: 280, image: "https://images.meesho.com/images/products/437829804/tswzu_512.webp?width=512"},
  { id: 10, name: "Groom Dress", price: 9000, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8mmRMKMDifwbnj3MafMU18sUasmLnU-5ufzH-CurqoB64dY4qX-qcSDnDtEYBE3D_t8&usqp=CAU"},
  { id: 11, name: "Bride Dress", price: 10000, image: "https://www.dhresource.com/webp/m/0x0/f2/albu/g6/M01/A8/C3/rBVaSFq0vEGAKgn1AAGSfL5r9mk109.jpg"},
  { id: 12, name: "Earrings", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbqlcfg7FrazAMATnErtK9AHtHyuROCk6LYRnLdAoB3687TQCouEc6pMZJGKhXGd1Lbs&usqp=CAU"},
  { id: 13, name: "Bangles", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NrGodZExBF9hkC4jpn3BYkOLxBRVzyFLbOqkB5bZOtZxZKQqfwRi8KsyWQmoU5HCGI0&usqp=CAU"},
  { id: 14, name: "Sunglasses", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQgZBtfY2F_CM4qlTG7r5I-0IhmeHQ4Pp6ZcRL8lnbcyShhRAPQc-GitLrUGywTRF04w&usqp=CAU"},
  { id: 15, name: "Hair Clips", price: 25, image: "https://images.meesho.com/images/products/84846487/5ess2_512.jpg"},
  { id: 16, name: "Makeup Kit", price: 900, image: "https://m.media-amazon.com/images/I/71I1RUXlL+L._UF1000,1000_QL80_.jpg"},
  { id: 17, name: "Lipstick", price: 80, image: "https://m.media-amazon.com/images/I/61ooz-avMBL.jpg"},
  { id: 18, name: "Eyeliner", price: 50, image: "https://rukminim2.flixcart.com/image/480/480/kj0bp8w0-0/eye-liner/m/e/h/10-ml-c23-waterproof-eyeliner-eyetex-dazller-original-imafyz4cstdhdjgt.jpeg?q=90"},
  { id: 19, name: "Talcum Powder", price: 100, image: "https://enchanteur.in/cdn/shop/files/Romantic-Talc-Slide-3_1000x1000pxl.jpg?v=1728369819&width=1445"},
  { id: 20, name: "Avocado", price: 65, image: "https://m.media-amazon.com/images/I/61N7iqjDGcL.jpg"}, 
  { id: 21, name: "Dragon Fruit", price: 80, image: "https://m.media-amazon.com/images/I/61EtG5MlUDL._SL1000_.jpg"},
  { id: 22, name: "Kiwi", price: 55, image: "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg"},
  { id: 23, name: "Cucumber", price: 15, image: "https://lh3.googleusercontent.com/proxy/uAP0COl6pYdMYCK7qQ8ByEIj5vJxItD15VJPNG2e-h9sN31B3oHsfGDMCMXEKMgJqD4PWXmRIE5fbKOCQL_iVyFAEFWARtIlh5Tm3yzZSmjyplOJYj_4wYSQuZIABHcKdQu1NsZrCmjoZJfwxL4S"},
  { id: 24, name: "Aloe Vera Gel", price: 65, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEftfCHuuCPACXzD9DtQzvMgQQTCacij3YdXI7821br06kW-KaLPK3Lkpq2c64wlFvZY&usqp=CAU"},
  { id: 25, name: "Soap", price: 25, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5L_8JL8mKr8c8a6Ru064Zwu4s6-l1olPAT4ec87a03iIoUCIn-tWnNeegBfqurCz-dQ&usqp=CAU"},
  { id: 26, name: "Shampoo", price: 195, image: "https://assets.ajio.com/medias/sys_master/root/20240911/7yck/66e13b4a6f60443f316d81aa/-473Wx593H-4939135240-multi-MODEL.jpg"},
  { id: 27, name: "Dinner Set", price: 2999, image: "https://shop.globalbees.com/cdn/shop/files/1721368924751_Lifestyle.jpg?v=1739944468"},
  { id: 28, name: "Dairy Milk", price: 10, image: "https://rukminim2.flixcart.com/image/704/844/jt4olu80/chocolate/s/k/m/56-dairymilk-10-pack-of-56-cadbury-original-imafe387qmfbmseu.jpeg?q=90&crop=false"},
  { id: 29, name: "Munch", price: 5, image: "https://i0.wp.com/pkhypermart.com/wp-content/uploads/2021/08/img-688618d1334e9.jpg?fit=225%2C225&ssl=1"},
  { id: 30, name: "KitKat", price: 10, image: "https://www.bbassets.com/media/uploads/p/l/20005896_12-nestle-kitkat-crispy-wafer-bar.jpg"}
];

let cart = [];
let wishlist = [];
let orders = [];

function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === 'cart') renderCart();
  if (id === 'orders') renderOrders();
  if (id === 'wishlist') renderWishlist();
}

function renderProducts() {
  const container = document.getElementById('productList');
  container.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
      <button onclick="addToWishlist(${p.id})">Add to Wishlist</button>
      <button onclick="placeOrder(${p.id})">Order Now</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  alert(`${item.name} added to cart.`);
}

function addToWishlist(id) {
  const item = products.find(p => p.id === id);
  if (!wishlist.some(p => p.id === id)) {
    wishlist.push(item);
    alert(`${item.name} added to wishlist.`);
  } else {
    alert(`${item.name} is already in wishlist.`);
  }
}

function placeOrder(id) {
  const item = products.find(p => p.id === id);
  orders.push(item);
  alert(`Order placed for ${item.name}.`);
}

function renderCart() {
  const list = document.getElementById('cartList');
  list.innerHTML = cart.length ? cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('') : "<li>Cart is empty</li>";
}

function renderOrders() {
  const list = document.getElementById('orderList');
  list.innerHTML = orders.length ? orders.map(item => `<li>${item.name} - $${item.price}</li>`).join('') : "<li>No orders placed</li>";
}

function renderWishlist() {
  const list = document.getElementById('wishlistList');
  list.innerHTML = wishlist.length ? wishlist.map(item => `<li>${item.name} - $${item.price}</li>`).join('') : "<li>Wishlist is empty</li>";
}

renderProducts();
