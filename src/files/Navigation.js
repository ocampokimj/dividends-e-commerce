import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import '/Users/kjocampo/Desktop/shopping-react/react-shopping/src/css/nav.css';

function Navigation() {

  const [toggle, setToggle] = useState(false);
  const [toggleContact, setToggleContact] = useState(false);
  const [toggleCollection, setToggleCollection] = useState(false);
  const [toggleSeries, setToggleSeries] = useState(false);
  const [toggleLegal, setToggleLegal] = useState(false);
  const logoImage = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/images/ald-logo.jpeg");

function toggleMenu() {
 toggle ? setToggle(false) : setToggle(true);
 console.log(toggle);
}



// function toggleMenu() {
//   setToggle(false);
// }
console.log(toggle);

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
   <GiHamburgerMenu className='hamburger' size={15} color="gray"onClick={() => {
    toggleMenu();
  }}/>
    ) : (
  <div className='menu-container'>
    <div className='menu-open'>
      <button className='close-menu' onClick={() => {
        toggleMenu()
      }}>close</button>
      {/* <img src={logoImage} alt="" className='logo-image'/> */}
      <p className='text-logo'>dividends paradise</p>
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
            <div className='collection-expand-subCategories-container'>
              <div className='collection-expand-subCategories'>Spring 2023</div>
              <div className='collection-expand-subCategories'>Summer 2023</div>
              <div className='collection-expand-subCategories'>Fall 2023</div>
              <div className='collection-expand-subCategories'>Winter 2023</div>
              <div className='collection-expand-subCategories'>recent collection</div>
            </div>
          ) : null}
        </li>
        <li className='nav-button'>
          <p className='collection' onClick={() => {toggleLegalFunc()}}>legal</p>
          <button className='collection-expand' onClick={() => {toggleLegalFunc()}}>{toggleLegal ? '-' : '+'}</button>
          {toggleLegal ? (
            <div className='collection-expand-subCategories-container'>
              <div className='collection-expand-subCategories'>refund policy</div>
              <div className='collection-expand-subCategories'>privacy policy</div>
              <div className='collection-expand-subCategories'>terms of services</div>
              <div className='collection-expand-subCategories'>shipping policy</div>
            </div>
          ) : null}
        </li>
        <li className='nav-button'>
          <p onClick={() => {toggleSeriesFunc()}}>series</p>
          <button className='collection-expand' onClick={() => {toggleSeriesFunc()}}>{toggleSeries ? '-' : '+'}</button>
          {toggleSeries ? (
            <div id="drop" className='collection-expand-subCategories-container'>
              <div className='collection-expand-subCategories'>oneup series</div>
              <div className='collection-expand-subCategories'>rivals series</div>
              <div className='collection-expand-subCategories'>Salt Nic series</div>
              <div className='collection-expand-subCategories '>Gold Series</div>
              <div className='collection-expand-subCategories'>New Products</div>
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
              <div className='collection-expand-subCategories'>brands</div>
              <div className='collection-expand-subCategories'>about us</div>
              <div className='collection-expand-subCategories'>partners</div>
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
    <div className="homepage">
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