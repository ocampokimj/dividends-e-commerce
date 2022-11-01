import List from "./Data";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import '/Users/kjocampo/Desktop/shopping-react/react-shopping/src/css/homepage.css'
import '/Users/kjocampo/Desktop/shopping-react/react-shopping/src/css/shop.css';

function Shop() {


    function displayShop() {

        return (
            <div className="shop-container">
                {/* <Navigation /> */}
                {/* <div className="horizontal-nav-container">
                    <div className="horizontal-nav-logo"></div>
                    <div className="cart"></div>
                </div> */}
                <h2 className="page-title">shop all</h2>
                <div className='shop-disp'>
                {List.map((item) => (
                    <div className='shop-content'>
                        <Link to={`/shop/${item.id}`}>
                        <img src={item.itemImage} className='shop-img' alt="" />
                        </Link>
                        <div className='shop-info-container'>
                            <p className='shop-item-title'>{item.name}</p>
                            <p className='shop-item-id'>Object #{item.id}</p>
                            <div className='shop-item-price'>${item.price}</div>
                        </div>
                    </div>
            ))}
                </div>
                <h2 className='mobile-title'>featured collection</h2>
                <div className='disp-mobile'>
                {List.map((item) => (
                    <div className='mobile-content'>
                    <Link to={`/shop/${item.id}`}>
                    <img src={item.itemImage} className='mobile-img' alt="" />
                    </Link>
                    <div className='mobile-info-container'>
                        <p className='mobile-item-title'>{item.name}</p>
                        <p className='mobile-item-id'>Object #{item.id}</p>
                        <div className='mobile-item-price'>${item.price}</div>
                    </div>
                    </div>
                    ))}
                </div>
            </div>
        )
    }


    return (
        <div className="shop">
            {displayShop()}
        </div>
        
    )
}

export default Shop;