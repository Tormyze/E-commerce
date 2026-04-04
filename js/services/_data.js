const products = [
  {
    id: 1,
    image: "assets/prod-imgs/prod-img1.jpg",
    alt: "Imagem do produto",
    title: "Modern Yellow T-Shirt",
    price: 120.0,
  },
  {
    id: 2,
    image: "assets/prod-imgs/prod-img5.jpg",
    alt: "Imagem do produto",
    title: "Classic White Hoodie",
    price: 250.0,
  },
  {
    id: 3,
    image: "assets/prod-imgs/prod-img3.jpg",
    alt: "Imagem do produto",
    title: "Slim Fit Black T-Shirt",
    price: 300.0,
  },
  {
    id: 4,
    image: "assets/prod-imgs/prod-img4.jpg",
    alt: "Imagem do produto",
    title: "Navy Casual Tee",
    price: 90.0,
  },
  {
    id: 5,
    image: "assets/prod-imgs/prod-img2.jpg",
    alt: "Imagem do produto",
    title: "Retro Striped Shirt",
    price: 150.0,
  },
  {
    id: 6,
    image: "assets/prod-imgs/prod-img6.jpg",
    alt: "Imagem do produto",
    title: "Dark Navy Streetwear",
    price: 160.0,
  },
];

export async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}
