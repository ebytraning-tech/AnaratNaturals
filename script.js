const products = [
  {id:1,name:"Botanical Body Wash",desc:"A gentle everyday refresh",price:1290,category:"care",tag:"EVERYDAY CARE",symbol:"✿"},
  {id:2,name:"Calm Ritual Candle",desc:"A softer kind of evening",price:1650,category:"home",tag:"SLOW LIVING",symbol:"✳"},
  {id:3,name:"Daily Essentials Kit",desc:"Little things, thoughtfully picked",price:2190,category:"daily",tag:"CUSTOMER FAVOURITE",symbol:"a."},
  {id:4,name:"Herbal Care Blend",desc:"A simple moment for yourself",price:1450,category:"care",tag:"NATURAL CARE",symbol:"❋"}
];
let cart = [];
let activeFilter = "all";
let searchTerm = "";
const money = value => "Rs. " + value.toLocaleString("en-PK");
const grid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const drawerCount = document.getElementById("drawerCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const drawer = document.getElementById("cartDrawer");
const backdrop = document.getElementById("cartBackdrop");

function getVisibleProducts(){
  let visible = products.filter(p => (activeFilter === "all" || p.category === activeFilter) && (p.name + " " + p.desc).toLowerCase().includes(searchTerm));
  const sort = document.getElementById("sortSelect").value;
  if(sort === "low") visible.sort((a,b)=>a.price-b.price);
  if(sort === "high") visible.sort((a,b)=>b.price-a.price);
  if(sort === "name") visible.sort((a,b)=>a.name.localeCompare(b.name));
  return visible;
}
function renderProducts(){
  const visible = getVisibleProducts();
  document.getElementById("resultCount").textContent = "Showing " + visible.length + (visible.length === 1 ? " product" : " products");
  grid.innerHTML = visible.length ? visible.map(p=>`<article class="product-card"><div class="product-image ${p.category}"><span class="product-tag">${p.tag}</span><span class="product-symbol">${p.symbol}</span></div><div class="product-info"><h3>${p.name}</h3><p>${p.desc}</p><div class="product-buy"><span class="product-price">${money(p.price)}</span><button class="add-button" data-add="${p.id}" aria-label="Add ${p.name} to bag">+</button></div></div></article>`).join("") : '<p class="empty-results">No products found. Try another search.</p>';
}
function renderCart(){
  const count = cart.reduce((sum,item)=>sum+item.qty,0);
  const total = cart.reduce((sum,item)=>sum+item.price*item.qty,0);
  cartCount.textContent=count;
  drawerCount.textContent="("+count+")";
  cartTotal.textContent=money(total);
  cartItems.innerHTML = cart.length ? cart.map(item=>`<div class="cart-row"><div><strong>${item.name}</strong><small>${money(item.price)} × ${item.qty}</small></div><div><strong>${money(item.price*item.qty)}</strong><br><button data-remove="${item.id}">Remove</button></div></div>`).join("") : '<p class="empty-cart">Your bag is waiting for something lovely.</p>';
}
function showToast(message){
  const toast=document.getElementById("toast");
  toast.textContent=message;
  toast.classList.add("show");
  window.setTimeout(()=>toast.classList.remove("show"),2200);
}
function openCart(){drawer.classList.add("open");backdrop.classList.add("open");}
function closeCart(){drawer.classList.remove("open");backdrop.classList.remove("open");}
function setFilter(filter){
  activeFilter=filter;
  document.querySelectorAll("[data-filter]").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));
  renderProducts();
}

grid.addEventListener("click",e=>{
  const button=e.target.closest("[data-add]");
  if(!button)return;
  const product=products.find(p=>p.id===Number(button.dataset.add));
  const existing=cart.find(p=>p.id===product.id);
  if(existing)existing.qty++;else cart.push({...product,qty:1});
  renderCart();showToast("Added to your bag");
});
cartItems.addEventListener("click",e=>{
  const button=e.target.closest("[data-remove]");
  if(!button)return;
  cart=cart.filter(p=>p.id!==Number(button.dataset.remove));
  renderCart();
});
document.querySelectorAll("[data-filter]").forEach(button=>button.addEventListener("click",()=>setFilter(button.dataset.filter)));
document.querySelectorAll("[data-nav-filter]").forEach(link=>link.addEventListener("click",()=>setFilter(link.dataset.navFilter)));
document.getElementById("sortSelect").addEventListener("change",renderProducts);
document.getElementById("searchForm").addEventListener("submit",e=>{e.preventDefault();searchTerm=document.getElementById("searchInput").value.trim().toLowerCase();renderProducts();document.getElementById("shop").scrollIntoView({behavior:"smooth"});});
document.getElementById("searchInput").addEventListener("input",e=>{searchTerm=e.target.value.trim().toLowerCase();renderProducts();});
document.getElementById("cartButton").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
backdrop.addEventListener("click",closeCart);
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.getElementById("checkoutButton").addEventListener("click",()=>{if(!cart.length){showToast("Your bag is empty");return;}showToast("Checkout will be connected in the next step.");});
document.getElementById("accountLink").addEventListener("click",e=>{e.preventDefault();showToast("Customer accounts will be added in a later step.");});
document.getElementById("newsletterForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("newsletterMessage").textContent="Thanks for your interest! Newsletter signup will be connected soon.";e.target.reset();});
document.getElementById("year").textContent=new Date().getFullYear();
renderProducts();renderCart();