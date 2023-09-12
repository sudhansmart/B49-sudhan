import { useState } from "react";
import  "@mui/material/Button"
export function Products({ product, count, setCount }) {
  const [show, setShow] = useState(false);

  function addToCart() {
    setShow(true);
    setCount(count + 1);
  }

  function removeFromCart() {
    setShow(false);
    setCount(count - 1);
  }

  return (
    // product slides
    <div className="items">
      <div className="dimensions">
        <h2>
          450<span className="multiply">✖</span>300
        </h2>
      </div>
      <div> {/* Product Description */}
        <div className="product">
          <h2 className="product-name">{product.name}</h2>
          <span className="product-rating">{product.rating}</span>
          <p className="product-rupees">{product.price}</p>
         {/* Buttons control */}
          <div>
          {show?(""):(<button  onClick={addToCart}>Add to cart</button>)}
          {show?(<button onClick={removeFromCart}>Remove From cart</button>):("")}
          </div>
         

       
        </div>
      </div>
    </div>
  );
}