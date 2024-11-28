const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 199,
    colors: [
      {
        code: "black",
        image: "./img/air-force.png",
      },
      {
        code: "white",
        image: "./img/air-force2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air jordan",
    price: 220,
    colors: [
      {
        code: "blue",
        image: "./img/jordan.png",
      },
      {
        code: "white",
        image: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "blazer",
    price: 349,
    colors: [
      {
        code: "pink",
        image: "./img/blazer.png",
      },
      {
        code: "blue",
        image: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "crater",
    price: 409,
    colors: [
      {
        code: "black",
        image: "./img/crater.png",
      },
      {
        code: "white",
        image: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 356,
    colors: [
      {
        code: "orange",
        image: "./img/hippie.png",
      },
      {
        code: "green",
        image: "./img/hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translatex(${-110 * index}vw)`;

    //change the chosen product
    chosenProduct = products[index];

    //change texts of current product
    currentProductImg.src = chosenProduct.colors[0].image;
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = `$${chosenProduct.price}`;

    //assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
      color.dataset.colorCode = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].image;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Add to Cart functionality
const productButton = document.querySelector(".addToCart");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});