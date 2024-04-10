import React from "react"
import { useNavigate} from 'react-router-dom';

import logo from '../assets/logo-white.png'

import styles from './Header.module.css'

function Header () {
    const navigate = useNavigate();

    function handleClick(e) {
        const newPageName = e.target.innerHTML
        if(newPageName === 'Contact') {
            navigate('contact')
        } else if(newPageName === 'FAQ') {
            navigate('FAQ')
        } else if (newPageName === 'Clients') {
            navigate('clients')
        }
    }
    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="" />
            <label className={styles.hamburgerMenu}>
                <input type="checkbox"/>
            </label>
            
            <aside className={styles.sidebar}>
                <nav>
                    <div onClick={handleClick}>Clients</div>
                    <div onClick={handleClick}>FAQ</div>
                    <div onClick={handleClick}>Contact</div>
                </nav>
             </aside>
        </div> 
        
    )
}

export default Header