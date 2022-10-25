import '/Users/kjocampo/Desktop/shopping-react/react-shopping/src/css/homepage.css'
import Navigation from './Navigation';
import List from './Data';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

function Homepage() {
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

  console.log(List);
  
function itemDisplay() {
  return (
    <>
    <h2>featured collection</h2>
      <div className='disp'>
        {List.map((item) => (
            <div className='content'>
              <img src={item.itemImage} className='img' alt="" />
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
      {List.map((item) => (
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
      <h2>dividends paradise collection</h2>
      <section className='content-image-container'>
        <img src={contentImg1} alt="" className="content-image" />
        <img src={contentImg2} alt="" className="content-image" />
        <img src={contentImg3}alt="" className="content-image" />
        <img src={contentImg4} alt="" className="content-image" />
        <img src={contentImg5} alt="" className="content-image" />
      </section>
      <section>

      </section>
    </div>
  )
}
function loadHomePage() {

  return (
    <div className="homepage-container">
      <Navigation />
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
        {loadHomePage()}
        {homePageContent()}
        {itemDisplay()}
        {displayHomePageImages()}
      </div>
    );
  }
  
  export default Homepage;