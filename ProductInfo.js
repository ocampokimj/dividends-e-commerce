import Navigation from "./Navigation";
import { useState } from 'react';
import List from "./Data";
import { useParams } from "react-router-dom";
import '/Users/kjocampo/Desktop/shopping-react/react-shopping/src/css/ProductInfo.css'
function ProductInfo(props) {
    const { handleCartItem, carts } = props;
    const [toggleProductInfo, setToggleProductInfo] = useState(false);
    const [array, setArray] = useState([]);
    const contentImg5 = require("/Users/kjocampo/Desktop/shopping-react/react-shopping/src/item-images/glasses-bl.webp");
    const params = useParams();
    console.log(params.id)
    console.log(List)
    console.log(params)

    let shoppingCart = [];
 

    const filtiredProduct = List.filter((product) => {
        return product.id === params.id
    })


    function pushToCart() {
        setArray(...array, filtiredProduct)

    }
    console.log(array)

    console.log(shoppingCart)
    console.log(carts)

    console.log(shoppingCart);
    function displayProduct() {
    

        function toggleProductInfoFunc() {

             !toggleProductInfo ? setToggleProductInfo(true) : setToggleProductInfo(false)
            console.log(toggleProductInfo);
        }

        return (
            <>
            <div className="product-container">
                <div className="product-img-container">
                    <img src={filtiredProduct[0]?.itemImage} alt="" className="product-img" />
                </div>
                <section className="product-info-container">
                    <div className="product-title-price">
                        <div className="product-title">{filtiredProduct[0]?.name}</div>
                        <div className="product-price">${filtiredProduct[0]?.price}</div>
                        <div className="product-size-container">
                            <p>select size</p>
                            <button className="product-button-size">s</button>
                            <button className="product-button-size">m</button>
                            <button className="product-button-size">l</button>
                            <button className="product-button-size">xl</button>
                            <button className="product-button-size">xxl</button>
                        </div>
                        <button className="product-add-to-cart" onClick={() => {handleCartItem(filtiredProduct)}}>add to bag</button>
                    </div>
                    {/* <div className="product-size">product size</div> */}
                    <section className="product-details">
                        <button className="product-details-button" onClick={() => {toggleProductInfoFunc()}}>product details</button>
                        {toggleProductInfo ? 
                        <div className="product-detail"> {filtiredProduct[0]?.description}</div>
                        : null}
                    </section>
                </section>
            </div>
            </>
        )
    }


    return (
        <>
        {/* <Navigation className='product-nav'/> */}
        {displayProduct()}
        </>
    )
}

export default ProductInfo;