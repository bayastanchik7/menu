import React from 'react';
import './index.css'
import menu2 from '../../images/menu2.svg'

const Hero = () => {
    return (
        <div id="hero">
            <img src={menu2} alt=""/>
            <div className="container">
                <div className="hero">
                    <h1> ДААМДУ ТАМАКТЫ 60  <br /> МYНОТ ИЧИНДЕ ЖЕТКИРYY.</h1>
                    <button>АРАКЕТ КЫЛА ЭЛЕКСИЗБИ?</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;