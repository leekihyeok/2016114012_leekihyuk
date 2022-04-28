import img1 from "./images/product-1.jpg";
import img2 from "./images/product-2.jpg";
import img3 from "./images/product-3.jpg";
import img4 from "./images/product-4.jpg";
import img5 from "./images/product-5.jpg";
import img6 from "./images/product-6.jpg";
import img7 from "./images/product-7.jpg";
import img8 from "./images/product-8.jpg";

export default {
  items: [
    {
      sys: { id: "1" },
      fields: {
        title: "supreme gummo mesh shirts",
        price: 3.99,
        image: { fields: { file: { url: img1 } } }
      }
    },
    {
      sys: { id: "2" },
      fields: {
        title: "supreme gummo hood brown",
        price: 5.99,
        image: { fields: { file: { url: img2 } } }
      }
    },
    {
      sys: { id: "3" },
      fields: {
        title: "supreme gummo track top red",
        price: 6.99,
        image: { fields: { file: { url: img3 } } }
      }
    },
    {
      sys: { id: "4" },
      fields: {
        title: "supreme gummo blue girl shirts",
        price: 2.99,
        image: { fields: { file: { url: img4 } } }
      }
    },
    {
      sys: { id: "5" },
      fields: {
        title: "bape cdg font shirts white",
        price: 1.5,
        image: { fields: { file: { url: img5 } } }
      }
    },
    {
      sys: { id: "6" },
      fields: {
        title: "bape cdg mesh shirts dark blue",
        price: 1.99,
        image: { fields: { file: { url: img6 } } }
      }
    },
    {
      sys: { id: "7" },
      fields: {
        title: "stussy ourlegacy logo hood ivory",
        price: 5.99,
        image: { fields: { file: { url: img7 } } }
      }
    },
    {
      sys: { id: "8" },
      fields: {
        title: "stussy ourlegacy check shirts pink",
        price: 7.99,
        image: { fields: { file: { url: img8 } } }
      }
    }
  ]
};
