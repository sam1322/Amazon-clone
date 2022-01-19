import React from 'react';
import './Home.css'
import Product from './Product';
function Home() {
        const Rand =()=>Math.floor((Math.random()*1000000)+1)
  return (<div className='home'>
        <img className='home__image'
        src="https://i.gadgets360cdn.com/large/amazon-republic-day-2022-sale-large_1642314530486.jpg"      alt=""
        />
        {/* Product id, title ,price.rating , image */}
        <Product 
            id={Rand()}
            title="Deep Work: Rules for Focused Success in a Distracted World"
            price="277.00"
            rating="4.5"
            image="https://images-na.ssl-images-amazon.com/images/I/41UMGAFVUTL._SX319_BO1,204,203,200_.jpg"
        />
        {/* Product   */}
  </div>)
}

export default Home;
