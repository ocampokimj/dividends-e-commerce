import '/Users/kjocampo/Desktop/shopping-react/react-shopping/src/css/homepage.css'
import Navigation from './Navigation';
import firebaseConfig, { db } from '../firebase-config';
import { getDoc, collection, getDocs, doc, onSnapshot, setDoc, addDoc } from 'firebase/firestore';
import getStorage from 'firebase/storage';

import List from './Data';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useEffect } from 'react';

function Homepage(props) {
  
  //get collection reference first param is database second is "collection name"

const colRef = collection(db, 'featured-items');
const featured = [];

async function saveMessage(e) {
  // Add a new message entry to the Firebase database.
  // e.preventDefault();
List.forEach((item) => {
  try {
   addDoc((colRef),
      {
        name: item.name,
        price: item.price,
        itemImage: item.itemImage,
        description: item.description,
        id: item.id
      }
    );
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
  }

})
}

const unsub = onSnapshot(colRef, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    featured.push(doc.data());
    
  })
})

console.log(featured);


  const { carts } = props;
  const contentImg1 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/ald5.jpeg");
  const contentImg2 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/ald11.jpeg");
  const contentImg3 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/ald4.jpeg");
  const contentImg4 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/ald7.jpeg");
  const contentImg5 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/ald3.jpeg");
  const photoshootImg1 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/photoshoot-1.jpg");
  const photoshootImg2 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/photoshoot-2.jpg");
  const photoshootImg3 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/photoshoot-3.jpg");
  const summerImg1 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/summer1.jpg");
  const summerImg2 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/summer2.jpg");
  const summerImg3 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/summer3.jpg");

  // console.log(List);
  // console.log(carts)
  
function itemDisplay() {



const featuredList = List.slice(0, 4);

// console.log(featuredCollection);

console.log(featured);
console.log(featuredList);
console.log('test')



  return (
    <>
    <h2>featured collection</h2>
      <div className='disp'>
        {featuredList.map((item) => (
            <div className='content'>
              <Link to={`/shop/${item.id}`}>
              <img src={item.itemImage} className='img' alt="" />
              </Link>
              <div className='info-container'>
                <p className='item-title'>{item.name}</p>
                <p className='item-price'>${item.price}</p>
                <p className='item-description'>{item.description}</p>
                <p className='item-id'>Object #{item.id}</p>
                <div className='add-to-cart'>  {/* not functioning yet */}
                  <input className='add-to-cart-input' type="number" />
                  <button className='add-to-cart-button'>add to cart</button>
                </div>
              </div>
            </div>
        ))}
    </div>
    <h2 className='mobile-title'>featured collection</h2>
    <div className='disp-mobile'>
      {featured.map((item) => (
        <div className='mobile-content'>
          <img src={item.itemImage} className='mobile-img' alt="" />
          <div className='mobile-info-container'>
            <p className='mobile-item-title'>{item.name}</p>
            <p className='mobile-item-id'>Object #{item.id}</p>
            <div className='mobile-item-price'>${item.price}</div>
          </div>
        </div>
          ))}
    </div>

    </>
  )
}

function homePageContent() {

  return (
    <div className='content-container'>
      {/* <h2>dividends paradise collection</h2> */}
      <section className='content-image-container'>
        <img src={contentImg1} alt="" className="content-image" />
        <img src={contentImg2} alt="" className="content-image" />
        <img src={contentImg3}alt="" className="content-image" />
        <img src={contentImg4} alt="" className="content-image" />
        <img src={contentImg5} alt="" className="content-image" />
      </section>
      <section>
        {/* <button onClick={() => {saveMessage()}}>save it</button> */}
      </section>
    </div>
  )
}
function loadHomePage() {

  return (
    <div className="homepage-container">
      {/* <Navigation carts={carts}/> */}
      </div>
    
  )

}

function homepageCarousel() {

  return (
    <div className='homepage-carousel'>
        {/* <Navigation carts={carts}/> */}
    </div>
  )
}



function displayHomePageImages() {


  return (
    <>
    <div className='photoshoot-homepage1'>
      <h2 className='photoshoot-logo'>dividends paradise</h2>
    </div>
    <div className='photoshoot-homepage2'>
      <h2 className='photoshoot-logo'>dividends paradise</h2>
    </div>
    <div className='photoshoot-homepage3'>
      <h2 className='photoshoot-logo'>dividends paradise</h2>
    </div>
      {/* <img src={photoshootImg3} alt="" className='photoshoot-homepage'/>
      <img src={photoshootImg2} alt="" className='photoshoot-homepage'/>
      <img src={photoshootImg1} alt="" className='photoshoot-homepage'/> */}
    </>
  )
}

    return (
      <div className="homepage">
        {homepageCarousel()}
        {/* {loadHomePage()} */}
        {homePageContent()}
        {itemDisplay()}
        {displayHomePageImages()}
      </div>
    );
  }
  
  export default Homepage;