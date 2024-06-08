import React, { useEffect, useState } from 'react';
import './Home.css';
import headerImg from '../../assets/header_img.jpeg'; // Import the image directly

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className='home' style={{ backgroundImage: `url(${headerImg})` }}>
      <div className={`home-content ${animate ? 'animate' : ''}`}>
        <h2>Discover the Crunch, Savor the Flavor</h2>
        <p>Dive into a world of irresistible flavors and delightful crunch with our handcrafted chips. Each bite promises a unique taste adventure that will leave you craving for more. </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Home;
