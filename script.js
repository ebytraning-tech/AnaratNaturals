const defaultProducts=[
{id:1,name:"Skin Brightening & Lightening Toner",desc:"Exfoliating daily toner for smoother, brighter-looking skin.",price:1310,category:"care",tag:"SKIN TONER",symbol:"✿",reviews:1968},
{id:2,name:"7% Skin Brightening & Lightening Toner",desc:"A 7% exfoliating toner for body-care routines.",price:1389,category:"care",tag:"7% TONER",symbol:"✧",reviews:1219},
{id:3,name:"Anti Freckles Serum",desc:"A targeted serum for the appearance of freckles and uneven-looking tone.",price:1549,category:"care",tag:"FACE SERUM",symbol:"✧",reviews:536},
{id:4,name:"Skin Lightening Serum",desc:"A face serum for the look of dark spots and more even-looking skin tone.",price:1549,category:"care",tag:"FACE SERUM",symbol:"✧",reviews:629},
{id:5,name:"Anti-Acne Cleanser",desc:"A cleanser designed for oily and blemish-prone skincare routines.",price:1420,category:"care",tag:"FACE CLEANSER",symbol:"◌",reviews:355},
{id:6,name:"Sunscreen SPF 50++",desc:"Daily sun protection with a non-greasy feel.",price:1439,category:"care",tag:"SUN CARE",symbol:"☼",reviews:356},
{id:7,name:"Moisturizing Cream",desc:"A daily moisturiser for hydration and skin-barrier care.",price:1419,category:"care",tag:"MOISTURE CARE",symbol:"♡",reviews:66},
{id:8,name:"Oily Skin Moisturizer",desc:"A lightweight moisturiser for oily-skin routines.",price:1419,category:"care",tag:"MOISTURE CARE",symbol:"♡",reviews:49},
{id:37,name:"Vitamin C Radiance Serum",desc:"A lightweight serum for a bright, fresh-feeling skincare routine.",price:1499,category:"care",tag:"FACE SERUM",symbol:"✧"},
{id:38,name:"Daily Clarifying Cleanser",desc:"A gentle everyday face cleanser.",price:1370,category:"care",tag:"FACE CLEANSER",symbol:"◌"},
{id:39,name:"Brightening Daily Toner",desc:"A refreshing toner for your daily skincare steps.",price:1329,category:"care",tag:"FACE TONER",symbol:"✿"},
{id:40,name:"Daily Sun Shield SPF 50+",desc:"A daily sun-care essential for outdoor routines.",price:1389,category:"care",tag:"SUN CARE",symbol:"☼"},
{id:41,name:"Root Nourish Hair Serum",desc:"A leave-on serum for a simple scalp and hair-care routine.",price:1659,category:"care",tag:"HAIR CARE",symbol:"❋"},
{id:42,name:"Comfort Moisture Cream",desc:"An everyday cream for a comfortable, moisturised feel.",price:1419,category:"care",tag:"MOISTURE CARE",symbol:"♡"},
{id:43,name:"Even Tone Face Serum",desc:"A targeted serum to complement your daily skincare routine.",price:1499,category:"care",tag:"FACE SERUM",symbol:"✧"},
{id:44,name:"Fresh Finish Gel Cleanser",desc:"A fresh-feeling gel cleanser for daily face washing.",price:1450,category:"care",tag:"GEL CLEANSER",symbol:"◌"},
{id:9,name:"Smooth Skin Exfoliating Toner",desc:"An exfoliating-care step. Follow product directions and use sun protection.",price:1360,category:"care",tag:"EXFOLIATING CARE",symbol:"✧"},
{id:10,name:"Blemish Care Cream",desc:"A targeted cream for blemish-prone skincare routines.",price:1380,category:"care",tag:"TARGETED CARE",symbol:"♡"},
{id:11,name:"Age Support Face Serum",desc:"A serum for a nourishing evening skincare routine.",price:1570,category:"care",tag:"FACE SERUM",symbol:"✧"},
{id:12,name:"Scalp Balance Drops",desc:"A scalp-care product for a clean, comfortable-feeling routine.",price:1070,category:"care",tag:"SCALP CARE",symbol:"❋"},
{id:13,name:"Botanical Hair Oil",desc:"A botanical-inspired oil for hair-care rituals.",price:1559,category:"care",tag:"HAIR OIL",symbol:"❋"},
{id:14,name:"Bright Look Eye Gel",desc:"A lightweight gel for your under-eye care routine.",price:1389,category:"care",tag:"EYE CARE",symbol:"♡"},
{id:15,name:"Radiance Routine Bundle",desc:"A curated skincare set for a simple daily routine.",price:2990,category:"daily",tag:"VALUE BUNDLE",symbol:"✧"},
{id:16,name:"Hydrating Face Cleanser",desc:"A gentle cleanser for a comfortable daily wash.",price:1370,category:"care",tag:"FACE CLEANSER",symbol:"◌"},
{id:17,name:"Hand & Foot Care Cream",desc:"A rich-feel cream for hand and foot care.",price:1389,category:"care",tag:"BODY CARE",symbol:"♡"},
{id:18,name:"Soft Lips Treatment Balm",desc:"A nourishing balm for everyday lip care.",price:1100,category:"care",tag:"LIP CARE",symbol:"♡"},
{id:19,name:"Overnight Renewal Cream",desc:"A comforting cream for your evening skincare routine.",price:1380,category:"care",tag:"NIGHT CARE",symbol:"☾"},
{id:20,name:"Rice Milk Face Cleanser",desc:"A gentle daily cleanser inspired by rice-based skincare.",price:1370,category:"care",tag:"RICE CARE",symbol:"◌"},
{id:21,name:"Rice Milk Hydrating Toner",desc:"A refreshing toner for a hydrated-feeling routine.",price:1200,category:"care",tag:"RICE CARE",symbol:"✿"},
{id:22,name:"Rice Glow Face Serum",desc:"A lightweight serum for everyday skincare.",price:1499,category:"care",tag:"RICE CARE",symbol:"✧"},
{id:23,name:"Rose Soft Face Wash",desc:"A gentle face wash with a soft rose-inspired feel.",price:1100,category:"care",tag:"FACE WASH",symbol:"✿"},
{id:24,name:"Rosemary Scalp Hair Oil",desc:"A botanical-inspired oil for scalp and hair-care rituals.",price:1559,category:"care",tag:"HAIR OIL",symbol:"❋"},
{id:25,name:"Saffron Glow Face Wash",desc:"A gentle face wash for your everyday routine.",price:1100,category:"care",tag:"FACE WASH",symbol:"✿"},
{id:26,name:"Strong Roots Hair Shampoo",desc:"An everyday shampoo for your hair-wash routine.",price:1250,category:"care",tag:"HAIR CARE",symbol:"❋"},
{id:27,name:"Smooth & Shine Hair Serum",desc:"A finishing serum for a smooth-feeling hair routine.",price:1659,category:"care",tag:"HAIR CARE",symbol:"✧"},
{id:28,name:"Brightening Body Wash",desc:"A refreshing body wash for everyday bathing.",price:1630,category:"care",tag:"BODY CARE",symbol:"✿"},
{id:29,name:"Deep Hydration Body Wash",desc:"A moisturising-feel body wash for daily use.",price:1630,category:"care",tag:"BODY CARE",symbol:"♡"},
{id:30,name:"AHA BHA Body Wash",desc:"An exfoliating body-care wash. Use as directed.",price:1690,category:"care",tag:"BODY CARE",symbol:"✧"},
{id:31,name:"Clarifying & Hydrating Toner",desc:"A refreshing toner for a balanced-feeling routine.",price:1499,category:"care",tag:"FACE TONER",symbol:"✿"},
{id:32,name:"Oily Skin Moisture Gel",desc:"A lightweight moisturiser for a fresh-feeling finish.",price:1419,category:"care",tag:"MOISTURE CARE",symbol:"♡"},
{id:33,name:"Daily Hair Nourish Oil",desc:"A nourishing oil for regular hair-care rituals.",price:1559,category:"care",tag:"HAIR OIL",symbol:"❋"},
{id:34,name:"Gentle Skin Polish Scrub",desc:"A face scrub for occasional exfoliating care. Use gently as directed.",price:1360,category:"care",tag:"EXFOLIATING CARE",symbol:"✧"},
{id:35,name:"Everyday Skin Essentials Set",desc:"A curated collection of everyday skincare essentials.",price:3950,category:"daily",tag:"VALUE BUNDLE",symbol:"✧"},
{id:36,name:"Complete Radiance Care Set",desc:"A multi-step skincare bundle for your daily routine.",price:5100,category:"daily",tag:"VALUE BUNDLE",symbol:"✿"}
];
const importedTregoProducts=[
{id:45,name:"Hand and Feet Brightening Cream",desc:"Brightens hands and feet while helping deeply hydrate dry skin.",price:1140,category:"body",tag:"HAND & FOOT CARE",imageUrl:"https://trego.pk/cdn/shop/files/hand-and-foot-whitening-cream_600x.progressive.jpg?v=1738826293",productUrl:"https://trego.pk/products/hands-and-feet-brightening-cream"},
{id:46,name:"Bright-Eye Gel",desc:"A lightweight under-eye gel for hydration and a refreshed look.",price:1140,category:"skin",tag:"EYE CARE",imageUrl:"https://trego.pk/cdn/shop/files/dark-circle-cream_600x.progressive.jpg?v=1744051700",productUrl:"https://trego.pk/products/bright-eye-gel"},
{id:47,name:"Anti-Acne / Scar Cream",desc:"A targeted cream for blemish-prone skin and the appearance of post-acne marks.",price:1400,category:"skin",tag:"BLEMISH CARE",imageUrl:"https://trego.pk/cdn/shop/files/acne-scar-cream_600x.progressive.jpg?v=1745024246",productUrl:"https://trego.pk/products/anti-acne-scar-cream"},
{id:48,name:"Night Cream",desc:"An overnight moisturising cream for your evening skincare routine.",price:1090,category:"skin",tag:"NIGHT CARE",imageUrl:"https://trego.pk/cdn/shop/files/night-cream_600x.progressive.jpg?v=1762894391",productUrl:"https://trego.pk/products/night-cream"},
{id:49,name:"Moisturizing Cream",desc:"Daily hydration to help support a soft, comfortable skin barrier.",price:1120,category:"skin",tag:"MOISTURE CARE",imageUrl:"https://trego.pk/cdn/shop/files/best-moisturizer-for-dry-skin_600x.progressive.jpg?v=1773230307",productUrl:"https://trego.pk/products/moisturizing-cream"},
{id:50,name:"Oily Skin Moisturizer",desc:"A lightweight moisturiser for oily-skin routines.",price:1120,category:"skin",tag:"OILY SKIN CARE",imageUrl:"https://trego.pk/cdn/shop/files/03_600x.progressive.jpg?v=1767617308",productUrl:"https://trego.pk/products/oily-skin-moisturizer"}
];
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
const save=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
let products=read("anarat_products",defaultProducts),cart=read("anarat_cart",[]),orders=read("anarat_orders",[]),profile=read("anarat_profile",null),activeFilter="all",searchTerm="";
if(!localStorage.getItem("anarat_catalog_v4")){products=defaultProducts;save("anarat_products",products);localStorage.setItem("anarat_catalog_v4","1");}
importedTregoProducts.forEach(p=>{let old=products.find(x=>x.id===p.id);if(old)Object.assign(old,p);else products.push(p)});
products.forEach(p=>{if(p.category==="care"||!p.category){p.category=p.category==="daily"?"daily":(/hair|scalp|shampoo/i.test(p.name+" "+(p.tag||""))?"hair":(/body|hand|foot/i.test(p.name+" "+(p.tag||""))?"body":"skin"));}});save("anarat_products",products);

const alfatahSkinProducts=[
{name:"ABIB - HEARTLEAF SUN ESSENCE CALMING PUMP 50ML",price:5695,imageUrl:"https://alfatah.pk/cdn/shop/files/8809624727353.jpg?v=1785155544&width=500",productUrl:"https://alfatah.pk/products/abib-heartleaf-sun-essence-calming-pump-50ml",category:"skin",tag:"SUN CARE"},
{name:"KIEHLS SUNSHINE ESSENTIALS SPF50 DUO 15/50ML",price:19900,imageUrl:"https://alfatah.pk/cdn/shop/files/3605973084902.jpg?v=1786793466&width=500",productUrl:"https://alfatah.pk/products/kiehls-sunshine-essentials-spf50-duo-15-50ml",category:"skin",tag:"SUN CARE"},
{name:"LA ROCHE-POSAY ANTHELIOS UV SERUM SUNSCREEN SPF 50 50ML",price:15900,imageUrl:"https://alfatah.pk/cdn/shop/files/3606000650114.jpg?v=1786793465&width=500",productUrl:"https://alfatah.pk/products/la-roche-posay-anthelios-uv-serum-sunscreen-spf-50-50ml",category:"skin",tag:"SUN CARE"},
{name:"LA ROCHE POSAY ANTHELIOS XL 60FPS/SPF UVB+UVA 9G",price:8495,imageUrl:"https://alfatah.pk/cdn/shop/files/3337875759120_36aa5aa9-160a-43c5-bc6b-fb9e3e4e454a.jpg?v=1735018537&width=500",productUrl:"https://alfatah.pk/products/la-roche-posay-anthelios-xl-60fps-spf-uvb-uva-9g",category:"skin",tag:"SUN CARE"},
{name:"RIVAJ SPF60 WHITENING & VANISHING SUNBLOCK 100ML",price:630,imageUrl:"https://alfatah.pk/cdn/shop/files/AFP-000171396_946236a8-d5a3-4d79-8b8a-8a42d5ac7596.jpg?v=1754651075&width=500",productUrl:"https://alfatah.pk/products/rivaj-sunblock-whitening-and-vanishing-spf-60-pc",category:"skin",tag:"SUN CARE"},
{name:"6TH SENSE SUNBLOCK SPF 60",price:395,imageUrl:"https://alfatah.pk/cdn/shop/files/2025240000571_b49fdeab-415e-41e4-9f60-af5450484832.jpg?v=1764423849&width=500",productUrl:"https://alfatah.pk/products/6th-sense-sunblock-spf-60",category:"skin",tag:"SUN CARE"},
{name:"VINCE SUNBLOCK EXTRA SUN PROTECTION & SUN CARE SPF75 75 ML",price:1270,imageUrl:"https://alfatah.pk/cdn/shop/files/AFP-000090311_7e20a1d1-e8da-4460-a57b-ed6457d6d88b.jpg?v=1754651076&width=500",productUrl:"https://alfatah.pk/products/vince-sunblock-extra-sun-protection-sun-care-spf75-80-ml",category:"skin",tag:"SUN CARE"},
{name:"RIVAJ SUNBLOCK WHITENING & VANISHING SPF60 40ML",price:300,imageUrl:"https://alfatah.pk/cdn/shop/files/AFP-000173560_59a7e7fe-0d8e-42f7-bb4a-ed29d3dc2cd6.jpg?v=1754651105&width=500",productUrl:"https://alfatah.pk/products/rivaj-spf60-whiting-sun-block-pc",category:"skin",tag:"SUN CARE"},
{name:"BEAUTY OF JOSEON RICE+PROBIOTICS RELIEF SUN SCREEN SPF50+ PA",price:5995,imageUrl:"https://alfatah.pk/cdn/shop/files/8809782555508_5a6bebb6-dc45-4883-9dc5-6940e7ee3f17.jpg?v=1728644120&width=500",productUrl:"https://alfatah.pk/products/beauty-of-joseon-rice-probiotics-relief-sun-screen-spf50-pa",category:"skin",tag:"SUN CARE"},
{name:"VINCE ULTRA SUN PROTECTION SPF50 SUN CARE 75 ML",price:1130,imageUrl:"https://alfatah.pk/cdn/shop/files/6165858300079_1.jpg?v=1716191392&width=500",productUrl:"https://alfatah.pk/products/vince-ultra-sun-protection-spf50-sun-care-80-ml",category:"skin",tag:"SUN CARE"}
];
alfatahSkinProducts.forEach(p=>{if(!products.some(x=>x.name.toLowerCase()===p.name.toLowerCase())){p.id=Math.max(0,...products.map(x=>Number(x.id)||0))+1;products.push(p);}});
save("anarat_products",products);


// Additional verified skincare catalogue items supplied by the user
const moreSkincareProducts=[
{name:"Skin Brightening & Lightening Toner",price:1180,tag:"FACE TONER",imageUrl:"https://trego.pk/cdn/shop/files/Glycolic-Acid_600x.progressive.jpg?v=1744052292",productUrl:"https://trego.pk/products/skin-brightening-and-lightening-toner"},
{name:"7% Skin Brightening & Lightening Toner",price:1200,tag:"BODY TONER",imageUrl:"https://trego.pk/cdn/shop/files/4_e492c80e-739d-4991-83d3-0768bb8e6ee0_600x.progressive.jpg?v=1752144333",productUrl:"https://trego.pk/products/7-skin-brightening-and-lightening-toner"},
{name:"Anti Freckles Serum",price:1400,tag:"FACE SERUM",imageUrl:"https://trego.pk/cdn/shop/files/melasma-treatment_600x.progressive.jpg?v=1738840951",productUrl:"https://trego.pk/products/anti-freckles-serum"},
{name:"Skin Lightening Serum",price:1400,tag:"FACE SERUM",imageUrl:"https://trego.pk/cdn/shop/files/niacinamide-serum_600x.progressive.jpg?v=1744132480",productUrl:"https://trego.pk/products/skin-lightening-serum"},
{name:"Anti-Acne Cleanser",price:1200,tag:"FACE CLEANSER",imageUrl:"https://trego.pk/cdn/shop/products/salicylic-acid-face-wash_600x.progressive.jpg?v=1744051278",productUrl:"https://trego.pk/products/anti-acne-cleanser"},
{name:"Sunscreen SPF 50++",price:1280,tag:"SUN CARE",imageUrl:"https://trego.pk/cdn/shop/files/IMG_7639800x800_600x.progressive.jpg?v=1722642658",productUrl:"https://trego.pk/products/sunscreen-spf-50"},
{name:"Acne / Oil Control Toner",price:1130,tag:"FACE TONER",imageUrl:"https://trego.pk/cdn/shop/files/Anti_acne_toner_600x.progressive.jpg?v=1787636800",productUrl:"https://trego.pk/products/acne-oil-control-toner"},
{name:"Clarifying and Hydrating Toner",price:1170,tag:"FACE TONER",imageUrl:"https://trego.pk/cdn/shop/files/A_4_600x.progressive.jpg?v=1702452214",productUrl:"https://trego.pk/products/clarifying-and-hydrating-toner"},
{name:"Glycolic Acid Scrub",price:1150,tag:"FACE & BODY SCRUB",imageUrl:"https://trego.pk/cdn/shop/files/1_fd961e7b-851f-457a-bbc6-acb54296f89a_600x.progressive.jpg?v=1734103022",productUrl:"https://trego.pk/products/glycolic-acid-scrub"},
{name:"Niacinamide Scrub",price:1150,tag:"FACE SCRUB",imageUrl:"https://trego.pk/cdn/shop/files/5_062d1170-8c27-4f9d-a186-fbad4402eaa6_600x.progressive.jpg?v=1734103221",productUrl:"https://trego.pk/products/niacinamide-scrub"},
{name:"Vitamin C Serum",price:1400,tag:"FACE SERUM",imageUrl:"https://trego.pk/cdn/shop/files/vitamin-c-serum_600x.png?v=1756159194",productUrl:"https://trego.pk/products/vitamin-c-serum"},
{name:"Repairing Toner",price:1400,tag:"FACE TONER",imageUrl:"https://trego.pk/cdn/shop/files/salicylic-acid_600x.progressive.jpg?v=1738827566",productUrl:"https://trego.pk/products/salicylic-acid-serum"},
{name:"Hydrating Facial Cleanser",price:1200,tag:"FACE CLEANSER",imageUrl:"https://trego.pk/cdn/shop/files/Cleanser_600x.progressive.jpg?v=1684822468",productUrl:"https://trego.pk/products/hyderating-facial-cleanser"},
{name:"Glass Skin Refreshing Gel Cleanser",price:1250,tag:"FACE CLEANSER",imageUrl:"https://trego.pk/cdn/shop/files/mandelac-face-wash_600x.progressive.jpg?v=1761600738",productUrl:"https://trego.pk/products/glass-skin-refreshing-gel-cleanser"},
{name:"Lip Pigmentation Treatment",price:950,tag:"LIP CARE",imageUrl:"https://trego.pk/cdn/shop/files/1_3d6a186b-612b-40db-a9c1-00b427895fe7_600x.progressive.jpg?v=1734102511",productUrl:"https://trego.pk/products/lip-pigmentation-balm"},
{name:"Anti-Aging Serum",price:1400,tag:"FACE SERUM",imageUrl:"https://trego.pk/cdn/shop/files/Retinol-Image_600x.progressive.jpg?v=1748610518",productUrl:"https://trego.pk/products/anti-aging-serum"},
{name:"Rice Cleanser",price:1450,tag:"FACE CLEANSER",imageUrl:"https://trego.pk/cdn/shop/files/4_c2915a10-f2d3-41a6-829e-7cc05c493a89_600x.progressive.jpg?v=1725460631",productUrl:"https://trego.pk/products/rice-cleanser"},
{name:"Rice Milk Toner",price:1050,tag:"FACE TONER",imageUrl:"https://trego.pk/cdn/shop/files/image00003_600x.progressive.jpg?v=1725461005",productUrl:"https://trego.pk/products/rice-milk-toner"},
{name:"Rice Serum",price:1400,tag:"FACE SERUM",imageUrl:"https://trego.pk/cdn/shop/files/5_600x.progressive.jpg?v=1725459878",productUrl:"https://trego.pk/products/rice-serum"},
{name:"Rose Face Wash",price:900,tag:"FACE CLEANSER",imageUrl:"https://trego.pk/cdn/shop/files/6_d18c09bc-2e26-453d-8ac0-4ec496faa132_600x.progressive.jpg?v=1701863519",productUrl:"https://trego.pk/products/rose-face-wash"},
{name:"Saffron Face Wash",price:900,tag:"FACE CLEANSER",imageUrl:"https://trego.pk/cdn/shop/files/546oo_600x.progressive.jpg?v=1701863810",productUrl:"https://trego.pk/products/saffron-face-wash"}
];
moreSkincareProducts.forEach((p,i)=>{if(!products.some(x=>x.name.toLowerCase()===p.name.toLowerCase()))products.push({id:60+i,desc:"A skincare essential for your everyday routine.",category:"skin",...p})});
// Keep only the 20 products shown in the customer-approved screenshot
const approvedProductNames=new Set(["Bright-Eye Gel","Anti-Acne / Scar Cream","Night Cream","Acne / Oil Control Toner","Clarifying and Hydrating Toner","Glycolic Acid Scrub","Niacinamide Scrub","Vitamin C Serum","Repairing Toner","Hydrating Facial Cleanser","Glass Skin Refreshing Gel Cleanser","Lip Pigmentation Treatment","Anti-Aging Serum","Rice Cleanser","Rice Milk Toner","Rice Serum","Rose Face Wash","Saffron Face Wash"]);
products=products.filter(p=>approvedProductNames.has(p.name)||String(p.productUrl||"").includes("alfatah.pk")||/\b(shampoo|hair\s*oil|hair\s*serum|scalp|dandruff|root nourish|hair nourish)\b/i.test((p.name||"")+" "+(p.tag||"")+" "+(p.desc||"")));
cart=cart.filter(p=>products.some(x=>x.id===p.id));
save("anarat_products",products);
save("anarat_cart",cart);
const money=n=>"Rs. "+Number(n||0).toLocaleString("en-PK");
const randomProductPhotos=[
"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
"https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85"
];
function imageForProduct(p){
 const name=(p.name+" "+(p.tag||"")).toLowerCase();
 if(p.category==="hair"||/hair|scalp|shampoo|roots/.test(name)) return "assets/products/haircare.svg";
 if(p.category==="body"||/body|hand|foot/.test(name)) return "assets/products/body-lotion.svg";
 if(/sunscreen|sun shield|spf/.test(name)) return "assets/products/sunscreen.svg";
 if(/cleanser|face wash|gel wash/.test(name)) return "assets/products/cleanser.svg";
 if(/cream|moistur|eye gel|balm/.test(name)) return "assets/products/cream.svg";
 return "assets/products/serum.svg";
}

products.forEach(p=>{p.image=p.imageUrl||imageForProduct(p)});save("anarat_products",products);

const $=id=>document.getElementById(id);
function toast(message){$("toast").textContent=message;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2400)}
function productCards(list){return list.map(p=>`<article class="product-card"><button class="product-image ${p.category}" data-detail="${p.id}" aria-label="View ${p.name}"><img src="${p.image||p.imageUrl||imageForProduct(p)}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag||"ANARAT PICK"}</span></button><div class="product-info"><button class="product-name" data-detail="${p.id}">${p.name}</button><p>${p.desc||"Thoughtfully selected for your everyday."}</p>${`<div class="product-reviews">Customer reviews coming soon</div>`}<div class="product-buy"><span class="product-price">${money(p.price)}</span><button class="add-button" data-add="${p.id}" aria-label="Add to bag">+</button></div></div></article>`).join("")}function renderHomeCollections(){let list=products.filter(p=>p.category!=="daily");let imported=importedTregoProducts.map(p=>products.find(x=>x.id===p.id)).filter(Boolean);let skin=list.filter(p=>p.category==="skin"),hair=list.filter(p=>p.category==="hair");$("newArrivalGrid").innerHTML=productCards(imported);$("trendingGrid").innerHTML=productCards([...imported].reverse());$("skinCollectionGrid").innerHTML=productCards(skin.slice(0,6));$("skincarePageGrid").innerHTML=productCards(products.filter(p=>p.category==="skin"));$("hairCollectionGrid").innerHTML=productCards(hair.slice(0,6));}const skinCategoryInfo={
serums:{title:"Serums",intro:"Explore face serums and targeted skincare treatments.",match:/\b(serum|ampoule|essence)\b/i},
"cleansers-face-wash":{title:"Cleansers & Face Wash",intro:"Find face washes, facial cleansers and cleansing products for your daily routine.",match:/\b(face\s*wash|facewash|facial\s*wash|cleanser|cleansing|micellar)\b/i},
toners:{title:"Toners",intro:"Refreshing face and exfoliating toners for your skincare routine.",match:/\btoner\b/i},
"creams-gels":{title:"Creams & Gels",intro:"Moisturisers, creams, lotions and gels for everyday skin care.",match:/\b(cream|moisturi[sz]er|moisturi[sz]ing|gel|lotion|night\s*care|eye\s*care)\b/i},
sunscreen:{title:"Sunscreen",intro:"Sunblocks and SPF products for daily sun protection.",match:/\b(sunscreen|sun\s*screen|sunblock|sun\s*block|spf|sun\s*essence)\b/i},
"lip-care-scrubs":{title:"Lip Care & Scrubs",intro:"Lip balms, lip treatments and gentle exfoliating scrubs.",match:/\b(lip|scrub|exfoliat)\b/i}
};
function skinCategoryFor(p){
const text=(p.name||"")+" "+(p.tag||"")+" "+(p.desc||"");
if(/\b(sunscreen|sun\s*screen|sunblock|sun\s*block|spf|sun\s*essence)\b/i.test(text))return "sunscreen";
if(/\b(lip|scrub|exfoliat)\b/i.test(text))return "lip-care-scrubs";
if(/\b(toner)\b/i.test(text))return "toners";
if(/\b(serum|ampoule|essence)\b/i.test(text))return "serums";
if(/\b(face\s*wash|facewash|facial\s*wash|cleanser|cleansing|micellar)\b/i.test(text))return "cleansers-face-wash";
if(/\b(cream|moisturi[sz]er|moisturi[sz]ing|gel|lotion|night\s*care|eye\s*care)\b/i.test(text))return "creams-gels";
return "";
}
function renderSkinCategory(slug){
const meta=skinCategoryInfo[slug];if(!meta)return;
const list=products.filter(p=>p.category==="skin"&&skinCategoryFor(p)===slug);
$("skinCategoryTitle").textContent=meta.title;
$("skinCategoryIntro").textContent=meta.intro;
$("skinCategoryCount").textContent="Showing "+list.length+" products";
$("skinCategoryGrid").innerHTML=list.length?productCards(list):'<p class="muted">Products for this category are being added.</p>';
showView("skinCategory");
}
const hairCategoryInfo={
shampoo:{title:"Shampoo",intro:"Shampoos for everyday hair cleansing."},
"hair-oil":{title:"Hair Oil",intro:"Hair oils for nourishing haircare routines."},
"hair-serum":{title:"Hair Serum",intro:"Hair serums for smoothing and styling care."},
"scalp-care":{title:"Scalp Care",intro:"Products made for scalp-focused haircare."}
};
function hairCategoryFor(p){
const t=(p.name||"")+" "+(p.tag||"")+" "+(p.desc||"");
if(/\b(shampoo|shampoos)\b/i.test(t))return "shampoo";
if(/\b(hair\s*oil|hair\s*oils|coconut\s*oil|argan\s*oil)\b/i.test(t))return "hair-oil";
if(/\b(hair\s*serum|serum.*hair|hair.*serum)\b/i.test(t))return "hair-serum";
if(/\b(scalp|anti[- ]dandruff|dandruff|root treatment)\b/i.test(t))return "scalp-care";
return "";
}
function renderHairCategory(slug){
const meta=hairCategoryInfo[slug];if(!meta)return;
const list=products.filter(p=>{
  if(slug==="shampoo") return /shampoo/i.test((p.name||"")+" "+(p.tag||""));
  return hairCategoryFor(p)===slug;
});
$("hairCategoryTitle").textContent=meta.title;
$("hairCategoryIntro").textContent=meta.intro;
$("hairCategoryCount").textContent="Showing "+list.length+" products";
$("hairCategoryGrid").innerHTML=list.length?productCards(list):'<p class="muted">Shampoo catalogue is loading. Please refresh in a moment.</p>';
showView("hairCategory");
}
function renderProducts(){let list=products.filter(p=>(activeFilter==="all"||p.category===activeFilter)&&(p.name+" "+p.desc).toLowerCase().includes(searchTerm));let sort=$("sortSelect").value;if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));$("resultCount").textContent="Showing "+list.length+" products";$("productGrid").innerHTML=list.length?productCards(list):'<p class="muted">No products found. Try another search.</p>'}
function renderCart(){let count=cart.reduce((s,p)=>s+p.qty,0),total=cart.reduce((s,p)=>s+p.price*p.qty,0);$("cartCount").textContent=count;$("drawerCount").textContent="("+count+")";$("cartTotal").textContent=money(total);$("cartItems").innerHTML=cart.length?cart.map(p=>`<div class="cart-row"><div><strong>${p.name}</strong><small>${money(p.price)} × <button data-qty="${p.id}" data-change="-1">−</button> ${p.qty} <button data-qty="${p.id}" data-change="1">+</button></small></div><div><strong>${money(p.price*p.qty)}</strong><br><button data-remove="${p.id}">Remove</button></div></div>`).join(""):'<p class="empty-cart">Your bag is waiting for something lovely.</p>';save("anarat_cart",cart)}
function setFilter(f){activeFilter=f;document.querySelectorAll("[data-filter]").forEach(b=>b.classList.toggle("active",b.dataset.filter===f));renderProducts()}
function openCart(){ $("cartDrawer").classList.add("open");$("cartBackdrop").classList.add("open")}
function closeCart(){$("cartDrawer").classList.remove("open");$("cartBackdrop").classList.remove("open")}
function addToCart(id){let p=products.find(x=>x.id===Number(id));if(!p)return;let old=cart.find(x=>x.id===p.id);if(old)old.qty++;else cart.push({...p,qty:1});renderCart();toast("Added to your bag")}
function showProduct(id){let p=products.find(x=>x.id===Number(id));if(!p)return;$("productDetail").innerHTML=`<div class="detail-art ${p.category}"><img src="${p.image||p.imageUrl||imageForProduct(p)}" alt="${p.name}"></div><div class="detail-copy"><p class="eyebrow">${p.tag||"ANARAT PICK"}</p><h2>${p.name}</h2><p>${p.desc||"Thoughtfully selected for your everyday."}</p><strong>${money(p.price)}</strong><p class="muted">Product description, ingredients, size and usage information will be added after your final product catalogue is supplied.</p><button class="primary-button" data-add="${p.id}">Add to bag →</button></div>`;$("productBackdrop").classList.add("open")}
function showView(view){$("homeView").hidden=view!=="home";["skincareView","skinCategoryView","haircareView","hairCategoryView","accountView","trackView","checkoutView","orderSuccessView","adminView","infoView"].forEach(id=>$(id).hidden=true);if(view==="skincare")$("skincareView").hidden=false;if(view==="skinCategory")$("skinCategoryView").hidden=false;if(view==="haircare")$("haircareView").hidden=false;if(view==="hairCategory")$("hairCategoryView").hidden=false;if(view==="account")$("accountView").hidden=false;if(view==="track")$("trackView").hidden=false;if(view==="checkout")$("checkoutView").hidden=false;if(view==="success")$("orderSuccessView").hidden=false;if(view==="admin")$("adminView").hidden=false;if(view==="info")$("infoView").hidden=false;document.querySelectorAll(".category-nav").forEach(n=>n.classList.remove("open"));window.scrollTo({top:0,behavior:"smooth"});if(view==="checkout")renderCheckout();if(view==="account")renderAccount();if(view==="admin")renderAdmin()}
function renderCheckout(){let total=cart.reduce((s,p)=>s+p.price*p.qty,0);$("checkoutItems").innerHTML=cart.map(p=>`<div class="summary-line"><span>${p.name} × ${p.qty}</span><strong>${money(p.price*p.qty)}</strong></div>`).join("");$("checkoutSubtotal").textContent=money(total);$("checkoutTotal").textContent=money(total)}
function renderAccount(){if(profile){$("accountForm").querySelector('[name="name"]').value=profile.name;$("accountForm").querySelector('[name="email"]').value=profile.email;$("accountForm").querySelector('[name="phone"]').value=profile.phone||""}let mine=profile?orders.filter(o=>o.email.toLowerCase()===profile.email.toLowerCase()):[];$("accountOrders").innerHTML=mine.length?mine.map(o=>`<p><strong>${o.id}</strong><br>${money(o.total)} · ${o.status}</p>`).join(""):'<p class="muted">No matching orders saved on this device yet.</p>'}
function renderAdmin(){$("adminOrderCount").textContent=orders.length;$("adminProductCount").textContent=products.length;$("adminSales").textContent=money(orders.reduce((s,o)=>s+o.total,0));$("adminOrderList").innerHTML=orders.length?orders.slice().reverse().map(o=>`<div class="admin-order"><div><strong>${o.id}</strong><small>${o.name} · ${o.phone} · ${o.city}</small><small>${o.items.map(i=>i.name+" × "+i.qty).join(", ")}</small></div><div><strong>${money(o.total)}</strong><select data-status="${o.id}"><option ${o.status==="Received"?"selected":""}>Received</option><option ${o.status==="Confirmed"?"selected":""}>Confirmed</option><option ${o.status==="Packed"?"selected":""}>Packed</option><option ${o.status==="Dispatched"?"selected":""}>Dispatched</option><option ${o.status==="Delivered"?"selected":""}>Delivered</option></select></div></div>`).join(""):"No demo orders yet."}
const info={shipping:["Shipping information","Delivery charges and estimated delivery times will be published here once your courier partner and shipping rates are confirmed. Orders are not yet sent to a courier."],returns:["Returns & refunds","Your final return and refund policy must be confirmed before launch. Add clear rules for damaged, incorrect or eligible returned items, including the return window and contact method."],faqs:["Frequently asked questions","How can I pay? Cash on Delivery is the planned payment method. How can I track my order? Use the order number on the Track Order page. When will my parcel arrive? Delivery estimates will be added after the courier is selected."],privacy:["Privacy policy","A complete privacy policy must explain what customer data is collected, why it is used, how long it is retained, and how customers can request access or deletion. Have this reviewed before launch."],terms:["Terms & conditions","Final terms must cover product details, pricing, order acceptance, cancellations, delivery, returns, liability and customer support. This placeholder is not legal advice."]};
function route(){
const hash=decodeURIComponent((location.hash||"#home").replace(/^#/,"")).trim().toLowerCase()||"home";
if(hash.startsWith("info/")){const key=hash.split("/")[1],data=info[key]||info.faqs;$("infoTitle").textContent=data[0];$("infoContent").textContent=data[1];showView("info");return}
if(hash.startsWith("skin/")){renderSkinCategory(hash.split("/")[1]);return}
if(hash.startsWith("hair/")){const slug=hash.split("/")[1];if(hairCategoryInfo[slug]){renderHairCategory(slug);return}showView("haircare");return}
if(hash==="haircare"){showView("haircare");return}
if(["skincare","account","track","checkout","admin"].includes(hash)){showView(hash);return}
if(hash==="success"){showView("success");return}
showView("home");
}
document.addEventListener("click",event=>{
 const link=event.target.closest('a[href^="#hair/"]');
 if(!link)return;
 const slug=link.getAttribute("href").slice(6).toLowerCase();
 if(!hairCategoryInfo[slug])return;
 event.preventDefault();
 if(location.hash==="#"+link.getAttribute("href").slice(1)) route();
 else location.hash="hair/"+slug;
});
["productGrid","newArrivalGrid","trendingGrid","skinCollectionGrid","hairCollectionGrid","skinCategoryGrid","hairCategoryGrid"].forEach(id=>$(id).addEventListener("click",e=>{let a=e.target.closest("[data-add]"),d=e.target.closest("[data-detail]");if(a)addToCart(a.dataset.add);else if(d)showProduct(d.dataset.detail)}));
$("productDetail").addEventListener("click",e=>{let b=e.target.closest("[data-add]");if(b){addToCart(b.dataset.add);$("productBackdrop").classList.remove("open")}});
$("cartItems").addEventListener("click",e=>{let r=e.target.closest("[data-remove]"),q=e.target.closest("[data-qty]");if(r)cart=cart.filter(p=>p.id!==Number(r.dataset.remove));if(q){let p=cart.find(x=>x.id===Number(q.dataset.qty));p.qty+=Number(q.dataset.change);if(p.qty<1)cart=cart.filter(x=>x.id!==p.id)}renderCart()});
document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.filter)));document.querySelectorAll("[data-nav-filter]").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.navFilter)));
$("sortSelect").addEventListener("change",renderProducts);$("searchForm").addEventListener("submit",e=>{e.preventDefault();searchTerm=$("searchInput").value.trim().toLowerCase();renderProducts();location.hash="shop"});$("searchInput").addEventListener("input",e=>{searchTerm=e.target.value.trim().toLowerCase();renderProducts()});
$("cartButton").addEventListener("click",openCart);$("closeCart").addEventListener("click",closeCart);$("cartBackdrop").addEventListener("click",closeCart);$("checkoutButton").addEventListener("click",()=>{if(!cart.length){toast("Your bag is empty");return}closeCart();location.hash="checkout"});
$("closeProduct").addEventListener("click",()=>$("productBackdrop").classList.remove("open"));$("productBackdrop").addEventListener("click",e=>{if(e.target===$("productBackdrop"))$("productBackdrop").classList.remove("open")});
$("menuToggle").addEventListener("click",()=>$("mainNav").classList.toggle("open"));$("accountForm").addEventListener("submit",e=>{e.preventDefault();let f=new FormData(e.target);profile={name:f.get("name"),email:f.get("email"),phone:f.get("phone")};save("anarat_profile",profile);$("accountMessage").textContent="Demo profile saved on this device.";renderAccount()});
$("checkoutForm").addEventListener("submit",e=>{e.preventDefault();if(!cart.length){$("checkoutMessage").textContent="Your bag is empty.";return}let f=new FormData(e.target),order={id:"ANR-"+Math.floor(100000+Math.random()*900000),name:f.get("name"),phone:f.get("phone"),email:f.get("email")||"",address:f.get("address"),city:f.get("city"),postal:f.get("postal"),notes:f.get("notes"),items:cart.map(p=>({id:p.id,name:p.name,price:p.price,qty:p.qty})),total:cart.reduce((s,p)=>s+p.price*p.qty,0),payment:"Cash on Delivery",status:"Received",date:new Date().toISOString()};orders.push(order);save("anarat_orders",orders);cart=[];save("anarat_cart",cart);renderCart();$("successText").textContent="Your demo order number is "+order.id+". Order total: "+money(order.total)+". Payment: Cash on Delivery.";location.hash="success"});
$("trackForm").addEventListener("submit",e=>{e.preventDefault();let id=new FormData(e.target).get("orderId").trim().toUpperCase(),o=orders.find(x=>x.id===id);$("trackingResult").innerHTML=o?`<div class="panel tracking-card"><p class="eyebrow">ORDER ${o.id}</p><h3>${o.status}</h3><p>${o.name} · ${o.city}</p><p>Total: <strong>${money(o.total)}</strong></p><p>Payment: Cash on Delivery</p></div>`:'<div class="panel">No order with that number was found in this browser demo.</div>'});
$("adminView").addEventListener("change",e=>{let id=e.target.dataset.status;if(!id)return;let o=orders.find(x=>x.id===id);if(o){o.status=e.target.value;save("anarat_orders",orders);toast("Demo order status updated")}});
$("addProductForm").addEventListener("submit",e=>{e.preventDefault();let f=new FormData(e.target);products.push({id:Math.max(0,...products.map(p=>p.id))+1,name:f.get("name"),desc:"New Anarat product",price:Number(f.get("price")),category:f.get("category"),tag:"NEW ARRIVAL",symbol:"✳"});save("anarat_products",products);e.target.reset();renderProducts();renderAdmin();toast("Demo product added")});
$("newsletterForm").addEventListener("submit",e=>{e.preventDefault();$("newsletterMessage").textContent="Thank you! Newsletter signup needs an email service connection.";e.target.reset()});
$("year").textContent=new Date().getFullYear();window.addEventListener("hashchange",route);window.addEventListener("pageshow",route);renderProducts();renderHomeCollections();renderCart();route();

// Load the full Al-Fatah catalogue from the companion JSON data file.
fetch("/alfatah-products.json")
  .then(response => { if (!response.ok) throw new Error("Catalogue JSON could not be loaded"); return response.json(); })
  .then(items => {
    items.forEach(item => {
      const existing = products.find(p => p.name.toLowerCase() === item.name.toLowerCase());
      if (existing) Object.assign(existing, item, { category: "skin", image: item.imageUrl });
      else products.push({ ...item, id: Math.max(0, ...products.map(p => Number(p.id) || 0)) + 1, desc: "A skincare product listed by Al-Fatah.", image: item.imageUrl, category: "skin" });
    });
    save("anarat_products", products);
    renderProducts();
    renderHomeCollections();
    if(location.hash.startsWith("skin/")) renderSkinCategory(location.hash.split("/")[1]);if(location.hash.startsWith("hair/")) renderHairCategory(location.hash.split("/")[1]);
  })
  .catch(error => console.error("Al-Fatah catalogue:", error));
 
// Load and validate the dedicated Alfatah shampoo catalogue.
fetch("/alfatah-shampoo-products.json?v=20261102d",{cache:"no-store"})
  .then(response => {
    if (!response.ok) throw new Error("Catalogue request failed: "+response.status);
    return response.json();
  })
  .then(data => {
    const items = Array.isArray(data) ? data : (Array.isArray(data.products) ? data.products : []);
    if (!items.length) throw new Error("Catalogue JSON contains no products");
    let nextId = Math.max(0, ...products.map(p => Number(p.id) || 0)) + 1;
    items.forEach(item => {
      if (!item || !item.name) return;
      const existing = products.find(p => (p.name||"").toLowerCase() === item.name.toLowerCase());
      const product = {
        ...item,
        id: existing ? existing.id : nextId++,
        category: "hair",
        tag: "SHAMPOO",
        image: item.imageUrl || item.image || imageForProduct({name:item.name,category:"hair"}),
        desc: "A shampoo product listed by Al-Fatah."
      };
      if (existing) Object.assign(existing, product);
      else products.push(product);
    });
    save("anarat_products", products);
    renderProducts();
    renderHomeCollections();
    // Always re-run the current route after the remote catalogue is merged.
    // This ensures a directly opened Shampoo URL is populated even if the
    // initial route rendered before the JSON request completed.
    route();
    if (location.hash.toLowerCase().includes("hair/shampoo")) {
      renderHairCategory("shampoo");
    }
  })
  .catch(error => {
    console.error("Al-Fatah shampoo catalogue:", error);
    const count = document.getElementById("hairCategoryCount");
    if (location.hash === "#hair/shampoo" && count) count.textContent = "Shampoo products could not load. Please contact support.";
  });

