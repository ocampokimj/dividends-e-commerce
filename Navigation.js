import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu, GiShoppingCart } from 'react-icons/gi';
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import List from './Data';
import '/Users/kjocampo/Desktop/shopping-react/react-shopping/src/css/nav.css';

function Navigation(props) {
  const {carts} = props;

  const [toggle, setToggle] = useState(false);
  const [toggleContact, setToggleContact] = useState(false);
  const [toggleCollection, setToggleCollection] = useState(false);
  const [toggleSeries, setToggleSeries] = useState(false);
  const [toggleLegal, setToggleLegal] = useState(false);
  const [toggleCart, setToggleCart] =useState(false);
  const logoImage = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/ald-logo.jpeg");
  const testImage = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/item-images/hoodie.jpg");
  console.log(carts)

function toggleMenu() {
 toggle ? setToggle(false) : setToggle(true);
 console.log(toggle);
}

const featuredCollection = List.slice(0, 8);
const testCartItems = List.slice(0, 4);


// function toggleMenu() {
//   setToggle(false);
// }
console.log(toggle);
function toggleCartFunc() {
  toggleCart ? setToggleCart(false) : setToggleCart(true);
}

function toggleCollectionFunc() {
  toggleCollection ? setToggleCollection(false) : setToggleCollection(true);
  console.log(toggleCollection);
}
function toggleContactFunc() {
  toggleContact ? setToggleContact(false) : setToggleContact(true);
  console.log(toggleContact);
}
function toggleSeriesFunc() {
  toggleSeries ? setToggleSeries(false) : setToggleSeries(true);
  console.log(toggleContact);
}

function toggleLegalFunc() {
  toggleLegal ? setToggleLegal(false) : setToggleLegal(true);
}


function loadNavigation() {

return (
  !toggle ? (
    <div className='hamburger-cart-container'>
      <GiHamburgerMenu className='hamburger' size={15} color="black"onClick={() => {
        toggleMenu();
      }}/>
      <Link to='/' className='nav-logo'>dividends paradise </Link>
      {!toggleCart ? 
      <div className='cart-button-container'>
        <p className='cart' onClick={() => {
        toggleCartFunc();
      }}>shopping cart {carts.length}</p>
      <p className='mobile-cart'><HiOutlineShoppingBag onClick={() => {
        toggleCartFunc();
      }}/>{carts.length}</p>
      </div> : (
        <div className='cart-open'>
          <div className='menu-open'>
            <button className='close-menu' onClick={() => {
              toggleCartFunc()
              }}>close
            </button>
            {/* <img src={logoImage} alt="" className='logo-image'/> */}
            <div className='text-logo'>
              shopping cart 
            </div>
          </div>
          <div className='cart-items-container'>
          {carts.map((item) => (
             <div className='cart-items'>
              <img className='cart-image' src={item[0].itemImage} alt="" />
              <div className='cart-info-container'>
                <div className='cart-title'>{item[0].name}</div>
                <div className='cart-quantity-price'>
                    <div className='cart-quantity'>
                      <button className='cart-decrease'>+</button>
                      <input type="text" className='quantity' placeholder='1' />
                      <button className='cart-increase'>-</button>
                    </div>
                    <div className='cart-price'>{item[0].price}</div>
                </div>
              </div>
         </div>
        ))}
          </div>
          <div className='checkout'>
            <div className='cart-subtotal'>
              <div className='subtotal'>Subtotal</div>
              <div className='subtotal-price'>$233</div>
            </div>
            <button className='checkout-button'>checkout</button>
          </div>
        </div>
      )}
      
    </div>
    ) : (
  <div className='menu-container'>
    <div className='menu-open'>
      <button className='close-menu' onClick={() => {
        toggleMenu()
      }}>close</button>
      {/* <img src={logoImage} alt="" className='logo-image'/> */}
      <Link to='/' className='text-logo'>
        dividends paradise
      </Link>
    </div>
    <div className='menu-search'>
      <form action="" className='menu-search-form'>
        <input type="search" id='search' placeholder='Search...'/>
        {/* <label for="search" className='search-icon'><AiOutlineSearch /></label> */}
      </form>
    </div>
    <div className='menu-content'>
      <ul className='nav-container'>
        <li className='nav-button'>
          <p onClick={() => {toggleCollectionFunc()}}>collection</p>
          <button className='collection-expand' onClick={() => {toggleCollectionFunc()}}>{toggleCollection ? '-' : '+'}</button>
          {toggleCollection ? (
            <ul className='collection-expand-subCategories-container'>
              <Link to='/shop'>
                <li className='collection-expand-subCategories'>Shop</li>
              </Link>
              <Link to='/'>
                
              </Link>
              <Link to='/'>
              
              </Link>
              <Link to='/'>
              
              </Link>
              <li className='collection-expand-subCategories'>Summer 2023</li>
              <li className='collection-expand-subCategories'>Fall 2023</li>
              <li className='collection-expand-subCategories'>Winter 2023</li>
              <li className='collection-expand-subCategories'>recent collection</li>
            </ul>
          ) : null}
        </li>
        <li className='nav-button'>
          <p className='collection' onClick={() => {toggleLegalFunc()}}>legal</p>
          <button className='collection-expand' onClick={() => {toggleLegalFunc()}}>{toggleLegal ? '-' : '+'}</button>
          {toggleLegal ? (
            <ul className='collection-expand-subCategories-container'>
              <li className='collection-expand-subCategories'>refund policy</li>
              <li className='collection-expand-subCategories'>privacy policy</li>
              <li className='collection-expand-subCategories'>terms of services</li>
              <li className='collection-expand-subCategories'>shipping policy</li>
            </ul>
          ) : null}
        </li>
        <li className='nav-button'>
          <p onClick={() => {toggleSeriesFunc()}}>series</p>
          <button className='collection-expand' onClick={() => {toggleSeriesFunc()}}>{toggleSeries ? '-' : '+'}</button>
          {toggleSeries ? (
            <div id="drop" className='collection-expand-subCategories-container'>
              <li className='collection-expand-subCategories'>photoshoot</li>
              <li className='collection-expand-subCategories'>blog</li>
              <li className='collection-expand-subCategories'>events</li>
              <li className='collection-expand-subCategories'>charity</li>
            </div>
          ) : null}
        </li>
        {/* <li className='nav-button'>
          <p>cart</p>
          <button className='collection-expand'>+</button>
        </li> */}
        <li className='nav-button'>
          <p onClick={() => {toggleContactFunc()}}>contact</p>
          <button className='collection-expand' onClick={() => {toggleContactFunc()}}>{toggleContact ? '-' : '+'}</button>
          {toggleContact ? (
            <div className='collection-expand-subCategories-container'>
              <li className='collection-expand-subCategories'>sizing</li>
              <li className='collection-expand-subCategories'>about us</li>
              <li className='collection-expand-subCategories'>social media</li>
              <li className='collection-expand-subCategories'>email us</li>
            </div>
          ) : null}
        </li>
      </ul>
    </div>
    <div className='menu-additional'>
    </div>
  </div>
  ) 
)
 
}
  

  
  return (
    <div className="navigation-container">
      {loadNavigation()}
    </div>
  );
      }
      
export default Navigation;


// { !toggleCollection ? 
//   <button className='collection-expand' onClick={() => {
//     toggleCollectionFunc()
//     }}>+</button>
//   : 
//   <div className='collection-expand'>
//     <button className='collection-expand' onClick={() => {
//     toggleCollectionFunc()
//     }}>-</button>
//     <div></div>
//   </div>

//     }