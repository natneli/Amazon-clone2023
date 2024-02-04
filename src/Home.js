import React from 'react';
import "./Home.css";
import Products from './Product';

function Home() {

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div>
      <div className="home">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/616qTQYQWIL._SX3000_.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id={111}
          title={truncateString(
            "Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Midnight",
            100
          )}
          price={1049.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/81Fm0tRFdHL._AC_SX679_.jpg"
        />
        <Products
          id={222}
          price={29.98}
          title={truncateString(
            "AUSAYE 4 Pack Plug in Night Light, Mushroom Light LED Nightlights for Kids, Adults, Bedroom, Bathroom,Hallway, Stairs, Kitchen Muti-Color",
            100
          )}
          rating={4}
          image="	https://m.media-amazon.com/images/I/714v7UnahiL._AC_UL960_FMwebp_QL65_.jpg"
        />
        <Products
          id={333}
          title={truncateString(
            "Night Vision Goggles - 4K Night Vision Binoculars for Adults, 3'' Large Screen Binoculars can Save Photo and Video with 32GB Memory Card & Rechargeable Lithium Battery",
            100
          )}
          price={105.98}
          rating={5}
          image="	https://m.media-amazon.com/images/I/718VA2LT3HL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id={444}
          title={truncateString(
            "APHERMA Massage Gun, Muscle Massage Gun for Athletes Handheld Electric Deep Tissue Back Massager, Percussion Massage Device for Pain Relief with 30 Speed Levels 9 Heads",
            100
          )}
          price={29.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61IgI4wzdGL._AC_UL960_FMwebp_QL65_.jpg"
        />
        <Products
          id={555}
          title={truncateString(
            "DEERC D20 Mini Drone for Kids with 720P HD FPV Camera Remote Control Toys Gifts for Boys Girls with Altitude Hold, Headless Mode, One Key Start Speed Adjustment, 3D Flips 2 Batteries, Silver",
            100
          )}
          price={49.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/71O90hq0utL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Products
          id={666}
          title={truncateString(
            "QIYHBVR 3 in 1 Water Sea Snow RC Plane 4 Channel Remote Control Airplane Ready to Fly RC Planes for Adults, Stunt Flying Upside Down, Easy & Ready to Fly, Great Gift Toy for Adults",
            100
          )}
          price={1076.68}
          rating={5}
          image="https://m.media-amazon.com/images/I/51TAh6qo4+L._AC_SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;