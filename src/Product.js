import React, {useState} from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, image, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((e, i) => (
              <p key={i}>✴️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />

      <div className="product__actions">
        <button className="addToBasket" onClick={addToBasket}>Add to Basket</button>
          {/* <div className="product__Quantity">
          <button onClick={increaseQuantity}>+</button>
          <h6>Qnt:{quantity}</h6>
        <button onClick={decreaseQuantity}>-</button>
        </div> */}
      </div>
    </div>
  );
};

export default Product;
