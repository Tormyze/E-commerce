const products = [
  {
    id: 1,
    image: "assets/prod-imgs/prod-img1.jpg",
    alt: "Img do produto 1",
    price: 120.0,
  },
  {
    id: 2,
    image: "assets/prod-imgs/prod-img5.jpg",
    alt: "Img do produto 2",
    price: 250.0,
  },
  {
    id: 3,
    image: "assets/prod-imgs/prod-img3.jpg",
    alt: "Img do produto 3",
    price: 300.0,
  },
  {
    id: 4,
    image: "assets/prod-imgs/prod-img4.jpg",
    alt: "Img do produto 4",
    price: 90.0,
  },
  {
    id: 5,
    image: "assets/prod-imgs/prod-img2.jpg",
    alt: "Img do produto 5",
    price: 150.0,
  },
  {
    id: 6,
    image: "assets/prod-imgs/prod-img6.jpg",
    alt: "Img do produto 6",
    price: 160.0,
  }
]

export async function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}