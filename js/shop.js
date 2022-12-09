// generate shop page
let shop = document.getElementById("product-list");

let shopItemDetails = [
  {
    id: "product-1",
    name: "Ear Rings",
    price: "$100",
    img: "/img/product/product1.jpg",
    desc: `Earrings are a symbol of beauty and romance, and they have been worn since ancient times. These pieces of jewelry are usually made of metal, but they can also be made of a variety of materials. Some common materials used to make earrings are gold, silver, and bronze. 
            Product Features:
            • Unique design
            • Durable and lightweight.
            • Easy to wear.
            • Available in various colors and designs.
            • Can be personalized.
            • Comes in a gift box.
    `,
  },
  {
    id: "product-2",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product2.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-3",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product3.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-4",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product4.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-5",
    name: "Bangles",
    price: "$100",
    img: "/img/product/product5.jpg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

        Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-6",
    name: "Bangles",
    price: "$100",
    img: "/img/product/product6.jpg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-7",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product7.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-8",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product8.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-9",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product9.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-10",
    name: "Ear Rings",
    price: "$100",
    img: "/img/product/product10.jpg",
    desc: `Earrings are a symbol of beauty and romance, and they have been worn since ancient times. These pieces of jewelry are usually made of metal, but they can also be made of a variety of materials. Some common materials used to make earrings are gold, silver, and bronze. 
            Product Features:
            • Unique design
            • Durable and lightweight.
            • Easy to wear.
            • Available in various colors and designs.
            • Can be personalized.
            • Comes in a gift box.
    `,
  },
  {
    id: "product-11",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product11.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-12",
    name: "Bangles",
    price: "$100",
    img: "/img/product/product12.jpg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-13",
    name: "Bangles",
    price: "$100",
    img: "/img/product/product13.jpg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-14",
    name: "Bangles",
    price: "$100",
    img: "/img/product/product14.jpg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-15",
    name: "Bangles",
    price: "$100",
    img: "/img/product/product15.jpg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-16",
    name: "Bangles",
    price: "$100",
    img: "/img/product/product16.jpg",
    desc: `Bangles are a unique jewelry accessory that can be worn as bracelets or necklaces. They come in many different colors and styles, including sterling silver, gold plated, and more!

          Product Features:
        • Unique design - Wear them as bracelets or necklace.
        • Durable and lightweight.
        • Easy to wear.
        • Available in various colors and designs.
        • Can be personalized.
        • Comes in a gift box.`,
  },
  {
    id: "product-17",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product17.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-18",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product18.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones. 
          Product Features - 
          1. Necklace length -  14 inches 
          2. Pendant size: 3mm x 4mm 
          3. Chain length - 16 inches 
          4. Weight: 0.5 grams 
          5. Material -  18k Gold Plated Metal + Stainless Steel 
          6. Color: As shown 
          7. Gift box included 
          8. Customized service available 
          9. Free shipping 
          10. 100% satisfaction guaranteed`,
  },
  {
    id: "product-19",
    name: "Ear Rings",
    price: "$100",
    img: "/img/product/product19.jpg",
    desc: `Earrings are a symbol of beauty and romance, and they have been worn since ancient times. These pieces of jewelry are usually made of metal, but they can also be made of a variety of materials. Some common materials used to make earrings are gold, silver, and bronze. 
            Product Features:
            • Unique design
            • Durable and lightweight.
            • Easy to wear.
            • Available in various colors and designs.
            • Can be personalized.
            • Comes in a gift box.
    `,
  },
  {
    id: "product-20",
    name: "Necklace",
    price: "$100",
    img: "/img/product/product20.jpg",
    desc: `This necklace has a unique design. The pendant is made of 18K gold plated metal. The chain is made of stainless steel. This necklace can be worn as a fashion accessory or as an elegant gift for your loved ones.
          Product Features -
          1. Necklace length -  14 inches
          2. Pendant size: 3mm x 4mm
          3. Chain length - 16 inches
          4. Weight: 0.5 grams
          5. Material -  18k Gold Plated Metal + Stainless Steel
          6. Color: As shown
          7. Gift box included
          8. Customized service available
          9. Free shipping
          10. 100% satisfaction guaranteed`,
  },
];
//onclick="window.location.href='product-description.html';"
let generateShop = () => {
  return (shop.innerHTML = shopItemDetails
    .map((x) => {
      let { name, price, img } = x;
      return `
    <div class="pro" onclick="window.location.href='/pages/product-description/description01.html';">
    <div class="product-img">
      <img src=${img} alt="">
    </div>
      
      <div class="description">
          <span>Jewllery</span>
          <h5 class="product-Name">${name}</h5>
          <div class="star">
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
            <ion-icon name="star" class="checked"></ion-icon>
          </div>
          <h4>${price}</h4>
      </div>
      <a href="#">
        <ion-icon name="cart" class="cart"></ion-icon>
      </a>
  </div>
  `;
    })
    .join(""));
};

generateShop();
