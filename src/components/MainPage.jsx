import { Link } from "react-router-dom";

import React, { useState, useEffect } from 'react';
import Header from './Header'
import HeaderBigScreen from './HeaderBigScreen'

import ig from '../assets/socials/instagram.png'
import spotify from '../assets/socials/spotify-logo.png'
import mail from '../assets/socials/mail.png'

import styles from './MainPage.module.css'

function MainPage () {

    function handleSocials (e) {
        const selectedSocial = e.target.alt;
        console.log(selectedSocial)
        if(selectedSocial === 'instagram icon') {
            window.open('https://www.instagram.com/lustforsounds/')
        } else if (selectedSocial === 'spotify icon') {
            window.open('https://open.spotify.com/playlist/2RYqUUqLQzZE02JTQ5GHOp?si=b13dbb8ef2474ba5')
        } else if (selectedSocial === 'mail icon') {
            window.open('mailto:ervin@lustforsounds.com')
        }
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700 && !isMobile) {
                setIsMobile(true);
              } else if (window.innerWidth >= 700 && isMobile) {
                setIsMobile(false);
              }
        }

        window.addEventListener('resize', handleResize);
         // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[isMobile])
    
    return (
        <div className={styles.mainPage}>
            {isMobile ? <Header/> : <HeaderBigScreen/>}
            
            <div className={styles.pageContent}>
                <div className={styles.pageBody}>
                    <ul className={styles.list}>
                        <Link to='/studio'>
                            <li className={styles.listItem}>
                                    <div className={styles.decorItems}>
                                        <div className={styles.decorHor}></div>
                                        <div className={styles.decorVer}></div>
                                    </div>
                                    <h4>Studio Services</h4>  
                            </li>
                        </Link>
                        <Link to='/production'>
                            <li className={styles.listItem} >
                                    <div className={styles.decorItems}>
                                        <div className={styles.decorHor}></div>
                                        <div className={styles.decorVer}></div>
                                    </div>
                                    <h4>Production Services</h4>
                            </li>
                        </Link>
                        <Link to='rates'>
                            <li className={styles.listItem}>
                                    <div className={styles.decorItems}>
                                        <div className={styles.decorHor}></div>
                                        <div className={styles.decorVer}></div>
                                    </div>
                                    <h4>Rates</h4>
                                
                            </li>
                        </Link>  
                    </ul>
                    <div className={styles.socials}>
                        <img src={ig} alt="instagram icon" onClick={handleSocials} />
                        <img src={spotify} alt="spotify icon" onClick={handleSocials}/>
                        <img src={mail} alt="mail icon" onClick={handleSocials}/>
                    </div>

                </div>
                 
            </div>
           
        </div>
    )
}

export default MainPage;