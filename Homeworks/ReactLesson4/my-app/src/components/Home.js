import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import {  faHeart } from '@fortawesome/free-solid-svg-icons';
import {  faGem } from '@fortawesome/free-solid-svg-icons';
import {  faUser } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import product from "../img/product.png";


export class Home extends Component {
    render() {
        return (
            <div className="home-page">
                
                <div className="home-head">
                    <a href="">
                    <FontAwesomeIcon icon= {faBars}  size="lg" color="black" />
                    </a>
                    <a href="">
                    <FontAwesomeIcon icon= {faShoppingCart}  size="lg" color="black" />
                    </a>
                </div>
                <h1>Best jewellery for you</h1>
                <form action="" className = "home-search">
                <FontAwesomeIcon icon= {faSearch}  size="lg" color="black" className = 'search-i' />
                    <input type="text" placeholder = "Search"/>
                </form>

                <div className="home-categ">
                    <a className = 'home-btn-ct'> All</a>
                    <a>Gold </a>
                    <a>Diamond </a>
                    <a>Silver </a>
                </div>

                <Link to= "/product" className="home-product">
                    <img src={product} alt="" />
                    <h2>Pink Diamond</h2>
                    <p>Pure ring with Diamonds (0.1400 Ct)</p>
                    <p className = "home-price">$600</p>
                </Link>
                <div className="footer">
                    <Link >
                    <FontAwesomeIcon icon= {faHeart}  size="lg" color="#D1D1D1" className = 'search-i' />
                    </Link>
                    <Link className= "home-link">
                    <FontAwesomeIcon icon= {faGem}  size="lg" color="white" transform={{ rotate: 45 }} className = 'search-i' />
                    </Link>
                    <Link to= "/profile">
                    <FontAwesomeIcon icon= {faUser}  size="lg" color="#D1D1D1"  className = 'search-i' />
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home