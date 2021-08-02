import diamond from '../img/diamond.png';
import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';



export class First extends Component {
    render() {
        return (
            <div  className = "first-page">
                <div className="first-img">
                    <img src={diamond} alt="" />
                </div>
                <div className="first-txt">
                    <div className="rounded-rectangle"></div>
                    <div className="txt-rectangle">
                        <h2>The best jewellery in The Town Now!</h2>
                        <p>We Use 100% pure Metals</p>
                    </div>
                    <div className="button-circle">
                        <div className="rounded-border">
                            <div className="transp-div">
                                <Link className="rounded-btn" to="/home">
                                <FontAwesomeIcon icon= {faArrowRight} transform={{ rotate: 45 }} size="lg" color="white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default First