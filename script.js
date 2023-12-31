function getProducts() {
  let data = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ],
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.du  mmyjson.com/data/products/3/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        ],
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg",
        ],
      },
      {
        id: 6,
        title: "MacBook Pro",
        description:
          "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "Apple",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
        images: [
          "https://i.dummyjson.com/data/products/6/1.png",
          "https://i.dummyjson.com/data/products/6/2.jpg",
          "https://i.dummyjson.com/data/products/6/3.png",
          "https://i.dummyjson.com/data/products/6/4.jpg",
        ],
      },
      {
        id: 7,
        title: "Samsung Galaxy Book",
        description:
          "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: "Samsung",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/7/1.jpg",
          "https://i.dummyjson.com/data/products/7/2.jpg",
          "https://i.dummyjson.com/data/products/7/3.jpg",
          "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        ],
      },
      {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description:
          "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: "Microsoft Surface",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/8/1.jpg",
          "https://i.dummyjson.com/data/products/8/2.jpg",
          "https://i.dummyjson.com/data/products/8/3.jpg",
          "https://i.dummyjson.com/data/products/8/4.jpg",
          "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        ],
      },
      {
        id: 9,
        title: "Infinix INBOOK",
        description:
          "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: "Infinix",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/9/1.jpg",
          "https://i.dummyjson.com/data/products/9/2.png",
          "https://i.dummyjson.com/data/products/9/3.png",
          "https://i.dummyjson.com/data/products/9/4.jpg",
          "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        ],
      },
      {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        description:
          "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: "HP Pavilion",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        images: [
          "https://i.dummyjson.com/data/products/10/1.jpg",
          "https://i.dummyjson.com/data/products/10/2.jpg",
          "https://i.dummyjson.com/data/products/10/3.jpg",
          "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        ],
      },
      {
        id: 11,
        title: "perfume Oil",
        description:
          "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
        price: 13,
        discountPercentage: 8.4,
        rating: 4.26,
        stock: 65,
        brand: "Impression of Acqua Di Gio",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/11/1.jpg",
          "https://i.dummyjson.com/data/products/11/2.jpg",
          "https://i.dummyjson.com/data/products/11/3.jpg",
          "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
        ],
      },
      {
        id: 12,
        title: "Brown Perfume",
        description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
        price: 40,
        discountPercentage: 15.66,
        rating: 4,
        stock: 52,
        brand: "Royal_Mirage",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/12/1.jpg",
          "https://i.dummyjson.com/data/products/12/2.jpg",
          "https://i.dummyjson.com/data/products/12/3.png",
          "https://i.dummyjson.com/data/products/12/4.jpg",
          "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
        ],
      },
      {
        id: 13,
        title: "Fog Scent Xpressio Perfume",
        description:
          "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
        price: 13,
        discountPercentage: 8.14,
        rating: 4.59,
        stock: 61,
        brand: "Fog Scent Xpressio",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
        images: [
          "https://i.dummyjson.com/data/products/13/1.jpg",
          "https://i.dummyjson.com/data/products/13/2.png",
          "https://i.dummyjson.com/data/products/13/3.jpg",
          "https://i.dummyjson.com/data/products/13/4.jpg",
          "https://i.dummyjson.com/data/products/13/thumbnail.webp",
        ],
      },
      {
        id: 14,
        title: "Non-Alcoholic Concentrated Perfume Oil",
        description:
          "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
        price: 120,
        discountPercentage: 15.6,
        rating: 4.21,
        stock: 114,
        brand: "Al Munakh",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/14/1.jpg",
          "https://i.dummyjson.com/data/products/14/2.jpg",
          "https://i.dummyjson.com/data/products/14/3.jpg",
          "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
        ],
      },
      {
        id: 15,
        title: "Eau De Perfume Spray",
        description:
          "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
        price: 30,
        discountPercentage: 10.99,
        rating: 4.7,
        stock: 105,
        brand: "Lord - Al-Rehab",
        category: "fragrances",
        thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/15/1.jpg",
          "https://i.dummyjson.com/data/products/15/2.jpg",
          "https://i.dummyjson.com/data/products/15/3.jpg",
          "https://i.dummyjson.com/data/products/15/4.jpg",
          "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
        ],
      },
      {
        id: 16,
        title: "Hyaluronic Acid Serum",
        description:
          "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
        price: 19,
        discountPercentage: 13.31,
        rating: 4.83,
        stock: 110,
        brand: "L'Oreal Paris",
        category: "skincare",
        thumbnail: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/16/1.png",
          "https://i.dummyjson.com/data/products/16/2.webp",
          "https://i.dummyjson.com/data/products/16/3.jpg",
          "https://i.dummyjson.com/data/products/16/4.jpg",
          "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
        ],
      },
      {
        id: 17,
        title: "Tree Oil 30ml",
        description:
          "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
        price: 12,
        discountPercentage: 4.09,
        rating: 4.52,
        stock: 78,
        brand: "Hemani Tea",
        category: "skincare",
        thumbnail: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/17/1.jpg",
          "https://i.dummyjson.com/data/products/17/2.jpg",
          "https://i.dummyjson.com/data/products/17/3.jpg",
          "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
        ],
      },
      {
        id: 18,
        title: "Oil Free Moisturizer 100ml",
        description:
          "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
        price: 40,
        discountPercentage: 13.1,
        rating: 4.56,
        stock: 88,
        brand: "Dermive",
        category: "skincare",
        thumbnail: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/18/1.jpg",
          "https://i.dummyjson.com/data/products/18/2.jpg",
          "https://i.dummyjson.com/data/products/18/3.jpg",
          "https://i.dummyjson.com/data/products/18/4.jpg",
          "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
        ],
      },
      {
        id: 19,
        title: "Skin Beauty Serum.",
        description:
          "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
        price: 46,
        discountPercentage: 10.68,
        rating: 4.42,
        stock: 54,
        brand: "ROREC White Rice",
        category: "skincare",
        thumbnail: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/19/1.jpg",
          "https://i.dummyjson.com/data/products/19/2.jpg",
          "https://i.dummyjson.com/data/products/19/3.png",
          "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
        ],
      },
      {
        id: 20,
        title: "Freckle Treatment Cream- 15gm",
        description:
          "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
        price: 70,
        discountPercentage: 16.99,
        rating: 4.06,
        stock: 140,
        brand: "Fair & Clear",
        category: "skincare",
        thumbnail: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/20/1.jpg",
          "https://i.dummyjson.com/data/products/20/2.jpg",
          "https://i.dummyjson.com/data/products/20/3.jpg",
          "https://i.dummyjson.com/data/products/20/4.jpg",
          "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
        ],
      },
      {
        id: 21,
        title: "- Daal Masoor 500 grams",
        description:
          "Fine quality Branded Product Keep in a cool and dry place",
        price: 20,
        discountPercentage: 4.81,
        rating: 4.44,
        stock: 133,
        brand: "Saaf & Khaas",
        category: "groceries",
        thumbnail: "https://i.dummyjson.com/data/products/21/thumbnail.png",
        images: [
          "https://i.dummyjson.com/data/products/21/1.png",
          "https://i.dummyjson.com/data/products/21/2.jpg",
          "https://i.dummyjson.com/data/products/21/3.jpg",
        ],
      },
      {
        id: 22,
        title: "Elbow Macaroni - 400 gm",
        description:
          "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
        price: 14,
        discountPercentage: 15.58,
        rating: 4.57,
        stock: 146,
        brand: "Bake Parlor Big",
        category: "groceries",
        thumbnail: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/22/1.jpg",
          "https://i.dummyjson.com/data/products/22/2.jpg",
          "https://i.dummyjson.com/data/products/22/3.jpg",
        ],
      },
      {
        id: 23,
        title: "Orange Essence Food Flavou",
        description:
          "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
        price: 14,
        discountPercentage: 8.04,
        rating: 4.85,
        stock: 26,
        brand: "Baking Food Items",
        category: "groceries",
        thumbnail: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/23/1.jpg",
          "https://i.dummyjson.com/data/products/23/2.jpg",
          "https://i.dummyjson.com/data/products/23/3.jpg",
          "https://i.dummyjson.com/data/products/23/4.jpg",
          "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
        ],
      },
      {
        id: 24,
        title: "cereals muesli fruit nuts",
        description:
          "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
        price: 46,
        discountPercentage: 16.8,
        rating: 4.94,
        stock: 113,
        brand: "fauji",
        category: "groceries",
        thumbnail: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/24/1.jpg",
          "https://i.dummyjson.com/data/products/24/2.jpg",
          "https://i.dummyjson.com/data/products/24/3.jpg",
          "https://i.dummyjson.com/data/products/24/4.jpg",
          "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
        ],
      },
      {
        id: 25,
        title: "Gulab Powder 50 Gram",
        description:
          "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
        price: 70,
        discountPercentage: 13.58,
        rating: 4.87,
        stock: 47,
        brand: "Dry Rose",
        category: "groceries",
        thumbnail: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/25/1.png",
          "https://i.dummyjson.com/data/products/25/2.jpg",
          "https://i.dummyjson.com/data/products/25/3.png",
          "https://i.dummyjson.com/data/products/25/4.jpg",
          "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
        ],
      },
      {
        id: 26,
        title: "Plant Hanger For Home",
        description:
          "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        price: 41,
        discountPercentage: 17.86,
        rating: 4.08,
        stock: 131,
        brand: "Boho Decor",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/26/1.jpg",
          "https://i.dummyjson.com/data/products/26/2.jpg",
          "https://i.dummyjson.com/data/products/26/3.jpg",
          "https://i.dummyjson.com/data/products/26/4.jpg",
          "https://i.dummyjson.com/data/products/26/5.jpg",
          "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
        ],
      },
      {
        id: 27,
        title: "Flying Wooden Bird",
        description:
          "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        price: 51,
        discountPercentage: 15.58,
        rating: 4.41,
        stock: 17,
        brand: "Flying Wooden",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
        images: [
          "https://i.dummyjson.com/data/products/27/1.jpg",
          "https://i.dummyjson.com/data/products/27/2.jpg",
          "https://i.dummyjson.com/data/products/27/3.jpg",
          "https://i.dummyjson.com/data/products/27/4.jpg",
          "https://i.dummyjson.com/data/products/27/thumbnail.webp",
        ],
      },
      {
        id: 28,
        title: "3D Embellishment Art Lamp",
        description:
          "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        price: 20,
        discountPercentage: 16.49,
        rating: 4.82,
        stock: 54,
        brand: "LED Lights",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/28/1.jpg",
          "https://i.dummyjson.com/data/products/28/2.jpg",
          "https://i.dummyjson.com/data/products/28/3.png",
          "https://i.dummyjson.com/data/products/28/4.jpg",
          "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
        ],
      },
      {
        id: 29,
        title: "Handcraft Chinese style",
        description:
          "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        price: 60,
        discountPercentage: 15.34,
        rating: 4.44,
        stock: 7,
        brand: "luxury palace",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
        images: [
          "https://i.dummyjson.com/data/products/29/1.jpg",
          "https://i.dummyjson.com/data/products/29/2.jpg",
          "https://i.dummyjson.com/data/products/29/3.webp",
          "https://i.dummyjson.com/data/products/29/4.webp",
          "https://i.dummyjson.com/data/products/29/thumbnail.webp",
        ],
      },
      {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: "Golden",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/30/1.jpg",
          "https://i.dummyjson.com/data/products/30/2.jpg",
          "https://i.dummyjson.com/data/products/30/3.jpg",
          "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        ],
      },
    ],
    total: 100,
    skip: 0,
    limit: 30,
  };
  return data;
}

function getDataFromStorage() {
  let data = localStorage.getItem("productList");
  data = JSON.parse(data);
  return data;
}

function CreateHeader() {
  var mainDiv = document.querySelector("#mainDiv");
  var header = document.createElement("header");
  header.setAttribute("class", "bg-dark d-flex justify-content-between");
  header.setAttribute("style", "width:100%;height:80px;border:1px solid;");

  var logoDiv = document.createElement("div");
  logoDiv.setAttribute(
    "class",
    "d-flex justify-content-center align-items-center"
  );
  logoDiv.setAttribute("style", "width:20% height:70px;");

  var img = document.createElement("img");
  img.setAttribute("style", "height:90px; width:150px");
  img.setAttribute("src", "./image/e-shop-logo.png");
  logoDiv.appendChild(img);

  var search = document.createElement("div");
  search.setAttribute("style", "width:50% height:70px");
  search.setAttribute(
    "class",
    "d-flex justify-content-center align-items-center"
  );
  var searchInput = document.createElement("input");
  searchInput.setAttribute("type", "text");
  searchInput.setAttribute("placeholder", "Search Product");
  searchInput.setAttribute("style", "width:80% height:40px");
  searchInput.setAttribute("id","seacrchKeyword");
  
  searchInput.addEventListener("keyup",()=>{
      searchProduct()
  });
  
  search.appendChild(searchInput);
  var menuDiv = document.createElement("div");
  menuDiv.setAttribute("style", "width:20%; height:70px;");
  menuDiv.setAttribute(
    "class",
    "d-flex justify-content-around align-items-center"
  );

  if (isLoggedIn()) {
    var mainDiv = document.querySelector("#mainDiv");
    var viewCart = document.createElement("span");
    viewCart.innerText = "View Cart";
    viewCart.setAttribute("style", "color:white; cursor:pointer;");
    viewCart.addEventListener("click", () => {
      viewCartList(header, menuDiv);
    });

    var signOut = document.createElement("span");
    signOut.innerText = "Sign Out";
    signOut.setAttribute("style", "color:white; cursor:pointer;");
    signOut.addEventListener("click", () => {
      signOutClick(menuDiv);
    });

    menuDiv.appendChild(viewCart);
    menuDiv.appendChild(signOut);
  } else {
    var signIn = document.createElement("span");
    signIn.innerText = "Sing in";
    signIn.setAttribute("style", "color:white; cursor:pointer;");

    signIn.addEventListener("click", () => {
      signInComponent();
    });

    var signUp = document.createElement("span");
    signUp.innerText = "Sing up";
    signUp.setAttribute("style", "color:white; cursor:pointer;");

    signUp.addEventListener("click", () => {
      signUpComponent();
    });

    menuDiv.appendChild(signIn);
    menuDiv.appendChild(signUp);
  }
  header.appendChild(logoDiv);
  header.appendChild(search);
  header.appendChild(menuDiv);
  mainDiv.appendChild(header);
}
function searchProduct(){
    var searchInput = document.querySelector("#seacrchKeyword").value ;
    var productList = JSON.parse(localStorage.getItem("productList"));
    console.log(productList);
    var filterData = productList.products.filter((product)=> {return product.title.toUpperCase().includes(searchInput.toUpperCase())}) ;
    console.log('filterData>>',filterData)
    document.querySelector("#cart-container").remove() ;
    if(filterData.length == 0)
      createcart(productList.products);
    else
      createcart(filterData);
}
function createcart(data) {
  var cartContainer = document.createElement("div");
  cartContainer.setAttribute(
    "class",
    "container-fluid mt-5 p-2 d-flex flex-wrap justify-content-around "
  );
  cartContainer.setAttribute(
    "style",
    " padding:20px; row-gap:10px;"
  );
  cartContainer.setAttribute("id","cart-container");

  for (let product of data) {
    var cartDiv = document.createElement("div");
    cartDiv.setAttribute(
      "style",
      "width:30%; height:500px; border:1px solid; display:flex; flex-direction:column; justify-content:space-between; align-items:center;   border:none; padding:10px; border-radius:10px; box-shadow:0px 0px 10px grey;"
    );
    var pImg = document.createElement("img");
    pImg.setAttribute("src", product.thumbnail);
    pImg.setAttribute("style", "width:100%; height:300px; ");
    cartDiv.appendChild(pImg);
    var h3 = document.createElement("h3");
    h3.innerHTML = product.title;

    var p = document.createElement("p");
    p.innerHTML = product.price;

    var addCart = document.createElement("button");
    addCart.setAttribute("style", "height:40px; width:400px;");
    addCart.innerHTML = "Add To Cart";
    addCart.setAttribute("class", "bg-dark text-white");
    addCart.addEventListener("click", () => {
      if (isLoggedIn()) addItemIntoCart(product);
      else window.alert("Sign In First");
    });

    cartDiv.appendChild(h3);
    cartDiv.appendChild(p);
    cartDiv.appendChild(addCart);
    cartContainer.appendChild(cartDiv);
  }
  mainDiv.appendChild(cartContainer);
}

function viewCartList(header, menuDiv) {
  var currentUserDetail = sessionStorage.getItem("currentUser"); // abhimanyu
  var currentUserItemList = JSON.parse(localStorage.getItem("cartList"));
  let currentUser = currentUserItemList.find((obj) => {
    return obj.email == currentUserDetail;
  });
  var mainDiv = document.querySelector("#mainDiv");
  mainDiv.innerHTML = "";

  if (currentUser) {
    var viewCartdiv = document.createElement("div");
    viewCartdiv.setAttribute(
      "style",
      "border:1px solid;height:auto; width:100%;"
    );

    menuDiv.innerHTML = "";
    var home = document.createElement("span");
    home.innerText = "Home";
    home.setAttribute("class","text-center")
    home.setAttribute("style", "color:white; padding-top:5px; border:1px solid white; height:35px ; width:80px ;  cursor:pointer;");
    home.addEventListener("click", () => {
      mainDiv.innerHTML = "";
      CreateHeader();
      var data = JSON.parse(localStorage.getItem("productList"))
      createcart(data.products);
    });

    var email = document.createElement("h3");
    email.setAttribute("style", "text-align:center ;");
    email.innerHTML = currentUser.email;

    viewCartdiv.appendChild(email);
    menuDiv.appendChild(home);
    header.appendChild(menuDiv);
    mainDiv.appendChild(header);
    mainDiv.appendChild(viewCartdiv);

    var row = document.createElement("div");
    row.setAttribute("id","tableRow") ;
    row.setAttribute("class", "row mt-3");
    row.setAttribute(
      "style",
      "height:auto; display: flex; justify-content: space-evenly;"
    );

    var col1 = document.createElement("div");
    col1.setAttribute("class", "col-7");
    col1.setAttribute("style", "overflow: auto;");

    var row1 = document.createElement("div");
    row1.setAttribute("class", "row");

    var table = document.createElement("table");
    table.setAttribute("class", "table table-bordered");
    
    var thead = document.createElement("thead");
    thead.setAttribute("class", "text-center");
    
    var trow = document.createElement("tr");
    var timage = document.createElement("th");
    timage.innerHTML = "Image";
    var tbrand = document.createElement("th");
    tbrand.innerHTML = "Model";
    var tprice = document.createElement("th");
    tprice.innerHTML = "Price";
    var tquantity = document.createElement("th");
    tquantity.innerHTML = "Quantity";
    var ttotal = document.createElement("th");
    ttotal.innerHTML = "Total";
    
    for (let product of currentUser.cartItems) {
      var tbody = document.createElement("tbody");
      var bodyrow = document.createElement("tr");
      bodyrow.setAttribute("class", "text-center");

      var rowimage = document.createElement("td");
      rowimage.setAttribute("class", "align-middle");
      var image = document.createElement("img");
      image.setAttribute("src", product.thumbnail);
      image.setAttribute("style", "width: 100px; height: 100px;");

      var rowmodel = document.createElement("td");
      rowmodel.setAttribute("class", "align-middle");
      rowmodel.innerHTML = product.title;

      var rowprice = document.createElement("td");
      rowprice.setAttribute("class", "align-middle");

      var op = document.createElement("p");
      op.setAttribute("id", "price" + product.id);
      op.innerHTML = "Price : " + product.price;
      var price = (product.discountPercentage * product.price) / 100;
      var dp = document.createElement("p");
      dp.innerHTML = "Discounted Price : " + Math.floor(product.price - price);

      var rowqty = document.createElement("td");
      rowqty.setAttribute("class", "align-middle");

      var q = document.createElement("p");
      q.setAttribute("id", "qty" + product.id);
      q.innerHTML = "Quantity : " + product.qty;

      var btn = document.createElement("p");
      btn.setAttribute("class", "d-flex justify-content-center");
      btn.setAttribute("style", "column-gap:10px;");

      var increase = document.createElement("button");
      increase.innerHTML = "+";
      increase.setAttribute("class", "btn btn-primary");
      increase.setAttribute("type", "button");
      increase.addEventListener("click", () => {
        quantityIncrease(product);
      });

      var decrease = document.createElement("button");
      decrease.innerHTML = "-";
      decrease.setAttribute("class", "btn btn-primary");
      decrease.setAttribute("type", "button");
      decrease.addEventListener("click", () => {
        quantityDecrease(product);
      });

      var rowttl = document.createElement("td");
      rowttl.setAttribute("class", "align-middle");
      rowttl.setAttribute("id", "total" + product.id);
      rowttl.innerHTML = product.price * product.qty ;

      row.appendChild(col1);
      row1.appendChild(table);
      table.appendChild(thead);
      thead.appendChild(trow);
      trow.appendChild(timage);
      trow.appendChild(tbrand);
      trow.appendChild(tprice);
      trow.appendChild(tquantity);
      trow.appendChild(ttotal);
      bodyrow.appendChild(rowimage);
      bodyrow.appendChild(rowmodel);
      rowprice.appendChild(op);
      rowprice.appendChild(dp);
      bodyrow.appendChild(rowprice);
      btn.appendChild(increase);
      btn.appendChild(decrease);
      rowqty.appendChild(q);
      rowqty.appendChild(btn);
      bodyrow.appendChild(rowqty);
      rowimage.appendChild(image);
      table.appendChild(tbody);
      tbody.appendChild(bodyrow);
      col1.appendChild(row1);
      bodyrow.appendChild(rowttl);
    }

    var col2 = document.createElement("div");
    col2.setAttribute("class", "col-3 border");
    col2.setAttribute("style", "height:300px;");
    var h3 = document.createElement("h3");
    h3.setAttribute("style","padding:10px;");
    var hr = document.createElement("hr");
    h3.innerHTML = "Order Details";
    
    var h5 = document.createElement("h5") ;
    h5.setAttribute("style","padding:10px;");
    h5.innerHTML = "Total Items : "+ currentUser.cartItems.length;

    var totalprice = document.createElement("h5") ;
    totalprice.setAttribute("style","padding:10px;");
    totalprice.setAttribute("id","totalBillAmount");

    totalprice.innerHTML = "Total Bill &nbsp;&nbsp;&nbsp;&nbsp;: " + getBillAmount();
    var checkOut = document.createElement("button") ;
    checkOut.setAttribute("class","btn btn-outline-primary mt-5 ml-3 ") ;
    checkOut.innerHTML = "Check Out" ;
    checkOut.setAttribute("style","")
    
    checkOut.addEventListener("click",()=>{
        checkOutForOrder(header);
    });

    col2.appendChild(h5) ;
    col2.appendChild(h3);
    h3.appendChild(hr);
    col2.appendChild(h5) ;
    col2.appendChild(totalprice)
    col2.appendChild(checkOut);
    row.appendChild(col2);
    mainDiv.appendChild(row);
  } else {
    menuDiv.innerHTML = "";
    var home = document.createElement("span");
    home.innerText = "Go To Home Page To Add Item";
    home.setAttribute("class","text-center")
    home.setAttribute("style", "color:white; padding-top:5px ; height:35px; width:250px; border:1px solid white ;  cursor:pointer;");
    home.addEventListener("click", () => {
      mainDiv.innerHTML = "";
      CreateHeader();
      var data = JSON.parse(localStorage.getItem("productList"))
      createcart(data.products);
    });
    var cartDiv = document.createElement("div");
    var label = document.createElement("h5");
    label.setAttribute("style", "margin-top:40px; margin-left:20% ;");
    label.innerHTML = "No item Added please go to home page";

    menuDiv.appendChild(home);
    header.appendChild(menuDiv);
    mainDiv.appendChild(header);
    cartDiv.appendChild(label);
    mainDiv.appendChild(cartDiv);
  }
}

function checkOutForOrder(header){
    var div = document.querySelector("#mainDiv") ;
    div.innerHTML = "" ;  


    var form = document.createElement("form") ;
    form.setAttribute("class","m-5");
    
    var div1 = document.createElement("div") ;
    div1.setAttribute("class","form-row d-flex") ;
    div1.setAttribute("style","column-gap: 20px;") ;

    var name = document.createElement("div");
    name.setAttribute("class","col-3");
     
    var nameLabel = document.createElement("label") ;
    nameLabel.setAttribute("for","name") ;
    nameLabel.innerHTML = "Name" ;
   
    var nameInput = document.createElement("input");
    nameInput.setAttribute("class","form-control");
    nameInput.setAttribute("id","name");
    nameInput.setAttribute("placeholder","Name");

    var mobNo =document.createElement("div");
    mobNo.setAttribute("class","col-3");
  
    var mobLabel = document.createElement("label") ;
    mobLabel.setAttribute("for","mobNo") ;
    mobLabel.innerHTML = "Mobile No." ;
  
    var mobInput = document.createElement("input");
    mobInput.setAttribute("class","form-control");
    mobInput.setAttribute("type","text") ;
    mobInput.setAttribute("id","mobNo");
    mobInput.setAttribute("placeholder","Moile No.");

    var div2 = document.createElement("div");
    div2.setAttribute("class","form-row d-flex mt-2") ;
    div2.setAttribute("style","column-gap: 20px;") ;

    var pincode = document.createElement("div");
    pincode.setAttribute("class","col-3");
    var pinlabel = document.createElement("label");
    pinlabel.setAttribute("for","pincode");
    pinlabel.innerHTML= "Pincode"
    var pinInput = document.createElement("input");
    pinInput.setAttribute("id","pincode") ;
    pinInput.setAttribute("placeholder","Pincode") ;
    pinInput.setAttribute("class","form-control");
    pinInput.setAttribute("type","text");
    
    var locality = document.createElement("div");
    locality.setAttribute("class","col-3");
    var locallabel = document.createElement("label");
    locallabel.setAttribute("for","locality");
    locallabel.innerHTML= "Locality"
    var localInput = document.createElement("input");
    localInput.setAttribute("id","locality") ;
    localInput.setAttribute("placeholder","Locality") ;
    localInput.setAttribute("class","form-control");
    localInput.setAttribute("type","text");

    var div3 = document.createElement("div");
    div3.setAttribute("class","form-row mt-2");
    var textarea = document.createElement("div") ;
    textarea.setAttribute("class","col-6");

    var textlabel = document.createElement("label") ;
    textlabel.setAttribute("for","address") ;
    textlabel.innerHTML = "Address" ;
    var text = document.createElement("textarea") ;
    text.setAttribute("class","form-control");
    text.setAttribute("id","address") ;
    text.setAttribute("rows","3") ;
    text.setAttribute("placeholder","Address") ;
    
    var div4 = document.createElement("div") ;
    div4.setAttribute("class","form-row d-flex mt-2");
    div4.setAttribute("style","column-gap: 20px;");

    var cityDiv = document.createElement("div") ;
    cityDiv.setAttribute("class","form-group col-3") ;

    var cityLabel = document.createElement("label");
    cityLabel.setAttribute("for","inputCity") ;
    cityLabel.innerHTML = "City" ;

    var cityInput = document.createElement("input");
    cityInput.setAttribute("type","text");
    cityInput.setAttribute("class","form-control") ;
    cityInput.setAttribute("id","inputCity") ;
    cityInput.setAttribute("placeholder","Enter City")
    
    var state = document.createElement("div");
    state.setAttribute("class","form-group col-3") ;
    var stateLabel = document.createElement("label") ;
    stateLabel.setAttribute("for","inputState") ;
    stateLabel.innerHTML = "State"
    var selState = document.createElement("select") ;
    selState.setAttribute("class","form-control") ;
    selState.setAttribute("id","inputState") ;

    var opt1 = document.createElement("option") ;
    opt1.setAttribute("selected","");
    opt1.innerHTML = "..."
    var opt2 = document.createElement("option") ;
    opt2.innerHTML = "Delhi"
    var opt3 = document.createElement("option") ;
    opt3.innerHTML = "Maharastra"
    var opt4 = document.createElement("option") ;
    opt4.innerHTML = "Uttar Pradesh"
    var opt5 = document.createElement("option") ;
    opt5.innerHTML = "Rajasthan"
    var opt6 = document.createElement("option") ;
    opt6.innerHTML = "Punjab"
    var opt7 = document.createElement("option") ;
    opt7.innerHTML = "Goa" ;

    var div5 = document.createElement("div");
    div5.setAttribute("class","form-hroup mt-2");

    var check = document.createElement("div") ;
    check.setAttribute("class","form-check") ;

    var checkInput = document.createElement("input") ;
    checkInput.setAttribute("class","form-check-input") ;
    checkInput.setAttribute("style","color:red;")
    checkInput.setAttribute("type","checkbox") ;
    checkInput.setAttribute("id","gridcheck") ;

    var checkLabel = document.createElement("label") ;
    checkLabel.setAttribute("class","form-check-label") ;
    checkLabel.setAttribute("for","gridcheck") ;
    checkLabel.innerHTML = "Check me out" ;

    var button = document.createElement("button") ;
    button.setAttribute("type","submit") ;
    button.setAttribute("class","btn btn-primary mt-3") ;
    button.innerHTML = 'Submit Details'

    button.addEventListener("click",()=>{
      window.alert("Order place successfully")
    })

    check.appendChild(checkInput) ;
    check.appendChild(checkLabel) ;
    div5.appendChild(check) ;

    selState.appendChild(opt1) ;
    selState.appendChild(opt2) ;
    selState.appendChild(opt3) ;
    selState.appendChild(opt4) ;
    selState.appendChild(opt5) ;
    selState.appendChild(opt6) ;
    selState.appendChild(opt7)
    state.appendChild(stateLabel) ;
    state.appendChild(selState) ;
    cityDiv.appendChild(cityLabel)
    cityDiv.appendChild(cityInput) ;
    div4.appendChild(cityDiv);
    div4.appendChild(state) ;
    textarea.appendChild(textlabel)
    textarea.appendChild(text) ;
    div3.appendChild(textarea);
    div2.appendChild(pincode) ;
    pincode.appendChild(pinlabel) ;
    pincode.appendChild(pinInput);
    div2.appendChild(locality) ;
    locality.appendChild(locallabel);
    locality.appendChild(localInput)
    name.appendChild(nameLabel);
    name.appendChild(nameInput); 
    div1.appendChild(name);
    div1.appendChild(mobNo);
    mobNo.appendChild(mobLabel);
    mobNo.appendChild(mobInput);
    form.appendChild(div1);
    form.appendChild(div2) ;
    form.appendChild(div3) ;
    form.appendChild(div4) ;
    form.appendChild(div5) ;
    form.appendChild(button)
    div.appendChild(header) ;
    div.appendChild(form) ;
}

function quantityIncrease(product) {
  let quantity = document.querySelector("#qty" + product.id);
  quantity.innerHTML = "Quantity : " + (product.qty * 1 + 1);

  var cartList = JSON.parse(localStorage.getItem("cartList"));
  var currentUser = sessionStorage.getItem("currentUser");

  var currentUserCart = cartList.find((user) => {
    return user.email == currentUser;
  });
  product.qty += 1;
  
  var productIndex = currentUserCart.cartItems.findIndex((prod) => {
     return prod.id == product.id;
   });
   currentUserCart.cartItems.splice(productIndex, 1, product);

   var userIndex = cartList.findIndex((user) => {
      return user.email == currentUser;
   });
   cartList.splice(userIndex, 1, currentUserCart);
   localStorage.setItem("cartList", JSON.stringify(cartList));
   console.log(product.title + "  " + product.qty);
   
   let total = document.querySelector("#total" + product.id);
   total.innerHTML = "" + (product.price * 1) * (product.qty * 1);

   let totalprice = document.querySelector("#totalBillAmount");
   totalprice.innerHTML = "Total Bill &nbsp;&nbsp;&nbsp;&nbsp;: " + getBillAmount() ;

}
function quantityDecrease(product) {
  if (product.qty * 1 > 1) {
    let quantity = document.querySelector("#qty" + product.id);
    quantity.innerHTML = "Quantity : " + (product.qty * 1 - 1);

    var cartList = JSON.parse(localStorage.getItem("cartList"));
    var currentUser = sessionStorage.getItem("currentUser");

    var currentUserCart = cartList.find((user) => {
      return user.email == currentUser;
    });

    product.qty -= 1;
    var productIndex = currentUserCart.cartItems.findIndex((prod) => {
      return prod.id == product.id;
    });
    currentUserCart.cartItems.splice(productIndex, 1, product);

    var userIndex = cartList.findIndex((user) => {
      return user.email == currentUser;
    });
    cartList.splice(userIndex, 1, currentUserCart);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    // console.log( product.title+"  "+product.qty);
    let total = document.querySelector("#total" + product.id);
    total.innerHTML = product.price * 1 * product.qty * 1;

    let totalprice = document.querySelector("#totalBillAmount");
    totalprice.innerHTML = "Total Bill &nbsp;&nbsp;&nbsp;&nbsp;: " + getBillAmount() ;
 
  }
}

function getBillAmount() {
  var currentUser = sessionStorage.getItem("currentUser");
  var cartList = JSON.parse(localStorage.getItem("cartList"));

  var currentUserCartList = cartList.find((obj) => {
    return obj.email == currentUser;
  });

  var cartItems = currentUserCartList.cartItems;
  var totalBill = 0;
  for (var product of cartItems) {
    totalBill = totalBill + product.price * 1 * (product.qty * 1);
  }
//   console.log(totalBill); 
  return totalBill;
}

function addItemIntoCart(product) {
  var currentUser = sessionStorage.getItem("currentUser");
  var cartList = JSON.parse(localStorage.getItem("cartList"));
  let currentUserCartItems = cartList.find((obj) => {
    return obj.email == currentUser;
  });

  if (currentUserCartItems) {
    var currentUserItemList = currentUserCartItems.cartItems;
    var productObj = currentUserItemList.find((obj) => {
      return obj.id == product.id;
    });
    if (productObj) {
      window.alert("Item is already added");
    } else {
      var index = cartList.findIndex((obj) => {
        return obj.email == currentUser;
      });
      product.qty = 1;
      currentUserCartItems.cartItems.push(product);
      cartList.splice(index, 1);
      cartList.push(currentUserCartItems);
      localStorage.setItem("cartList", JSON.stringify(cartList));
      window.alert("Product Added Successfully");
    }
  } else {
    var obj = { email: currentUser, cartItems: [] };
    product.qty = 1;
    obj.cartItems.push(product);
    cartList.push(obj);
    localStorage.setItem("cartList", JSON.stringify(cartList));
    window.alert("Product Added SuccessFully");
  }
}

function signUpComponent(){
  var mainDiv = document.querySelector("#mainDiv");
  mainDiv.innerHTML = "";

  var container = document.createElement("div");
  container.setAttribute(
    "style",
    "position:absolute; top:30% ;left:37%; border:2px solid ; border-radius:25px; height:40%; width:30%;"
  );
  var dtls = document.createElement("h3");
  dtls.innerHTML = "Enter deatils to Sign up";
  dtls.setAttribute("class", "text-center m-2");

  var input = document.createElement("input");
  input.setAttribute("type", "email");
  input.setAttribute("id", "email");
  input.setAttribute("placeholder", "Email");
  input.setAttribute(
    "style",
    "height:50px; width:350px; padding-left:20px;margin-left:90px; margin-top:20px;"
  );

  var pass = document.createElement("input");
  pass.setAttribute("type", "text");
  pass.setAttribute("id", "password");
  pass.setAttribute("placeholder", "Enter Password");
  pass.setAttribute(
    "style",
    "height:50px; width:350px; padding-left:20px;margin-left:90px; margin-top:20px;"
  );

  var btn = document.createElement("button");
  btn.innerHTML = "Sign Up";
  btn.setAttribute(
    "style",
    "padding:10px; color:white; background-color:crimson; border:none; margin-left:90px; margin-top:20px; width:100px;"
  );
  btn.addEventListener("click", () => {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    if (isUserExist(email)) {
      window.alert("user already exist");
      signInComponent();
    } else if (email == "" || password == "")
      window.alert("Enter email & pasword");
    else {
      var user = { email: email, password: password };
      var userList = JSON.parse(localStorage.getItem("userList"));
      userList.push(user);
      localStorage.setItem("userList", JSON.stringify(userList));
      window.alert("User Registered Success Fully");
      signInComponent();
    }
  });

  var span = document.createElement("span");
  span.innerHTML = "Already have an account";
  span.setAttribute("class", "text-danger ml-5");
  span.setAttribute("style", "cursor:pointer;");
  span.addEventListener("click", () => {
    signInComponent();
  });

  container.appendChild(dtls);
  container.appendChild(input);
  container.appendChild(pass);
  container.appendChild(btn);
  container.appendChild(span);
  mainDiv.appendChild(container);
}

function signInComponent() {
  var mainDiv = document.querySelector("#mainDiv");
  mainDiv.innerHTML = "";
  // window.alert("sign up successfull");
  var container = document.createElement("div");
  container.setAttribute(
    "style",
    "position:absolute; top:30% ;left:37%;  border:2px solid ; border-radius:25px; height:40%; width:30%;"
  );
  var dtls = document.createElement("h3");
  dtls.innerHTML = "Enter deatils to LogIn";
  dtls.setAttribute("class", "text-center m-2");

  var input = document.createElement("input");
  input.setAttribute("id", "email");
  input.setAttribute("type", "email");
  input.setAttribute("placeholder", "Email");
  input.setAttribute(
    "style",
    "height:50px; width:350px; padding-left:20px;margin-left:90px; margin-top:20px;"
  );

  var pass = document.createElement("input");
  pass.setAttribute("id", "password");
  pass.setAttribute("type", "text");
  pass.setAttribute("placeholder", "Enter Password");
  pass.setAttribute(
    "style",
    "height:50px; width:350px; padding-left:20px;margin-left:90px; margin-top:20px;"
  );

  var btn = document.createElement("button");
  btn.innerHTML = "LogIn";
  btn.setAttribute(
    "style",
    "padding:10px; margin-left:90px; border:none; color:white; margin-top:20px; width:100px; background-color:crimson;"
  );
  btn.addEventListener("click", () => {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    signIn(email, password);
  });
  var span = document.createElement("span");
  span.innerHTML = "Create Account";
  span.setAttribute("class", "text-danger ml-5");
  span.setAttribute("style", "cursor:pointer;");

  span.addEventListener("click", () => {
    signUpComponent();
  });

  container.appendChild(dtls);
  container.appendChild(input);
  container.appendChild(pass);
  container.appendChild(btn);
  container.appendChild(span);
  mainDiv.appendChild(container);
}

function isUserExist(email) {
  console.log(email);
  var userList = localStorage.getItem("userList");
  userList = JSON.parse(userList);
  var user = userList.find((u) => {
    return u.email == email;
  });

  console.log(user);
  return !!user;
}
function signIn(email, password) {
  var userList = JSON.parse(localStorage.getItem("userList")); // JSON.parse() convert js object into js array
  var user = userList.find((user) => {
    return user.email == email && user.password == password;
  }); // var currentUser1 = userList.find((user)=>{return password==user.password})

  if (user) {
    window.alert("user login successfully");
  }
  if (user) {
    sessionStorage.setItem("isLogged", "true");
    sessionStorage.setItem("currentUser", user.email);

    document.querySelector("#mainDiv").innerHTML = "";
    CreateHeader();
    var data = JSON.parse(localStorage.getItem("productList"));
    createcart(data.products);
  } else {
    window.alert("Login Failed");
  }
}

function isLoggedIn() {
  return !!sessionStorage.getItem("currentUser");
}
function signOutClick(menuDiv) {
  menuDiv.innerHTML = "";
  sessionStorage.clear();

  var signIn = document.createElement("span");
  signIn.innerText = "Sing in";
  signIn.setAttribute("style", "color:white; cursor:pointer;");

  signIn.addEventListener("click", () => {
    signInComponent();
  });

  var signUp = document.createElement("span");
  signUp.innerText = "Sing up";
  signUp.setAttribute("style", "color:white; cursor:pointer;");

  signUp.addEventListener("click", () => {
    signUpComponent();
  });
  menuDiv.appendChild(signIn);
  menuDiv.appendChild(signUp);
}
