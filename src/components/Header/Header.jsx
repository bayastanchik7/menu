import React from 'react';
import './header.css'
import { IoLocationOutline } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { BsTelephoneForward } from "react-icons/bs";


const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header-menu">
                         <h1>МЕНЮ</h1>
                    </div>
                    <div className="header-input">
                        <IoLocationOutline className='location'/>
                        <input type="text" placeholder='Жеткирүү дарегин киргизиңиз...' />
                        <GoSearch className='search'/>
                    </div>
                    <div className="header-contact">
                        <button><BsTelephoneForward /></button>
                        <div className="header-number">
                            <h3>Контакты:</h3>
                            <h3>+(996)220705480</h3>      
                        </div>
                         </div>
                        <div className="header-button">
                            <button>Себет  |</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;