import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {  faGem } from '@fortawesome/free-solid-svg-icons';
import {  faWallet } from '@fortawesome/free-solid-svg-icons';
import {  faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import {  faMedal } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import productImage from '../img/diamond.png';


export class Product extends Component {
    render() {
        return (
            <div className="product-page">
                <div className="product-img">
                    <Link to="/home" className = "back-i">
                    <FontAwesomeIcon icon= {faArrowLeft}   color="rgba(34, 43, 69,0.6)" />
                    </Link>
                    <img src={productImage} alt="" />
                </div>
                <div className="product-txt-bg">
                <div className="product-txt">

                  
                    <div className="product-content">
                        <h2> Pink Diamond </h2>
                        <span>20% off</span>
                        <div className="product-info">

                            <div className="info">
                                <p><FontAwesomeIcon icon= {faGem}   size="lg" className = "prod-i" /></p>
                                <p>Pink</p>
                            </div>
                            <div className="info">
                            <p><FontAwesomeIcon icon= {faWallet}   size="lg" className = "prod-i"  /></p>
                            <p>$600</p>
                            </div>
                            <div className="info">
                            <p><FontAwesomeIcon icon= {faTicketAlt}  size="lg" className = "prod-i"   /></p>
                            <p>20%</p>
                            </div>
                            <div className="info">
                            <p><FontAwesomeIcon icon= {faMedal} size="lg" className = "prod-i"  /></p>
                            
                            <p>0.14 Ct</p>
                            </div>
                        </div>

                        <h3>About</h3>
                        <p>Round Cut Cubic Zircon Stones. 925 Sterling Silver with Rhodium Platting. Cubic zircon is Master Replica of Diamond. Best Stone After masionate and Diamond. Best Material After. Gold is Sterling Silver its main Metal Used. Perfect Gift For you Special Ones</p>

                        <button>Add to cart</button>
                    </div>


                </div>
                </div>
            </div>
        )
    }
}

export default Product