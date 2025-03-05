import React, { useState } from "react";

import { useNavigate} from 'react-router-dom';
import styles from './Studio.module.css'

import GearList from "./GearList";
import PluginsList from "./PluginsList";
import SeeTheSpace from "./SeeTheSpace";

function Studio () {
    const navigation = useNavigate();

    const [infoTabVisible, setInfoTabVisible] = useState(false);
    const [infoTab, setInfoTab] = useState(null)

    function handleEmail () {
        window.open('mailto:ervin@lustforsounds.com?subject=Lustforsounds Studio Inquiry&body=')
    }

    function onClick(e) {
        setInfoTabVisible(!infoTabVisible);
        const tabName = e.target.innerHTML;
        if(tabName === 'Gear List' && infoTab !== <GearList/>) {
            setInfoTab(<GearList/>);
        } if(tabName === 'Plugins List' && infoTab !== <PluginsList/>) {
            setInfoTab(<PluginsList/>)
        } else if (tabName === 'See The Space' && infoTab !== <SeeTheSpace/>) {
            setInfoTab(<SeeTheSpace/>)
        }  
    }

    function handleBack () {
       navigation(-1)
    }

    return (
    <div className={styles.studioContainer}>
        {infoTabVisible && <div id="infoTab" className={styles.infoTab}>
                <div className={styles.closeBtn} onClick={onClick}></div>
                <div className={styles.content}>
                    {infoTab}
                </div>
                
            </div>}
         <h4 className={styles.goBack} onClick={handleBack}>back</h4>   
        <h1>Studio</h1>
        <div className={styles.studioBody}>
            <div className={styles.studioBodyCenter}>
                <div className={styles.decorationDiv}></div>
                <div className={styles.infoContainer}>
                    <p>We offer a cozy and safe space for recording and writing sessions, equipped with professional gear and amazing vibes. Whether you need to record vocals, instruments, or beats, we have the perfect environment to suit your creative needs.
                    </p>
                    <div className={styles.btnsContainer}>
                        <div onClick={onClick}>Gear List</div>
                        <div onClick={onClick}>Plugins List</div>
                        <div onClick={onClick}>See The Space</div>   
                    </div>
                
                </div>
            </div>
            
            <div className={styles.contactOptions}>
                    <div onClick={handleEmail}>Email Us</div>
                    <a href="tel:555-555-5555">812-844-6500</a>
        </div> 
            
        </div>  
        
    </div>
       
    )
}

export default Studio