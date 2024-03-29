import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  // Calculate the subtotal
  const subtotal = basket.reduce((total, product) => {
    return total + product.price;
  }, 0);
     console.log(subtotal);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <h3>Hello {user?.email}</h3>
        <h2 className="checkout__title">Your shopping Basket</h2>
        {basket.map((product, index) => (
          <CheckoutProduct
            key={index}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
            
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
