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
         <div className='home__row'>
         <Product 
            id={123223}
            title="Deep Work: Rules for Focused Success in a Distracted World"
            price={277.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41UMGAFVUTL._SX319_BO1,204,203,200_.jpg"
        />  
        <Product 
        id={2343425}
        title="Atomic Habits: The life-changing million copy bestseller Paperback – 30 October 2018"
        price={480.00}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
        />
         </div>
         <div className='home__row'>
         <Product 
            id={448795}
            title="TIMEWEAR Digital Men's Watch"
            price={699.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/81qcmjX9TrL._UL1500_.jpg"
        />  
        <Product 
            id={7878454}
            title="The Subtle Art of Not Giving a F*ck – 19 January 2017"
            price={300.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/516pmXNNmCL._SX324_BO1,204,203,200_.jpg"
        /> 
        <Product 
        id={4564539}
        title="DO EPIC SHIT Hardcover – 27 December 2021"
        price={298.00}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/41+grDTP2FL._SX316_BO1,204,203,200_.jpg"
        />
        </div>
        <div className='home__row'>
          
        <Product 
        id={545642}
        title="Can't Hurt Me: Master Your Mind and Defy the Odds Paperback – Illustrated, 11 October 2018"
        price={1500.00}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/41ApNA6CwTL._SX331_BO1,204,203,200_.jpg"
        />
        </div>
        {/* Product   */}
  </div>)
}

export default Home;
