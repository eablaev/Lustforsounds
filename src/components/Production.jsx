import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import styles from './production.module.css'

import ProductionExamples from './ProductionExamples'


function Production () {

    const navigate = useNavigate();

    function handleBack () {
        navigate(-1)
    }

    const [infoTabVisible, setInfoTabVisible] = useState(false);
    const [infoTab, setInfoTab] = useState(null)

    function onClick(e) {
        console.log(e.target)
        setInfoTabVisible(!infoTabVisible);
        const tabName = e.target.innerHTML;
        if(tabName === 'Production Examples' && infoTab !== <ProductionExamples/>) {
            setInfoTab(<ProductionExamples/>);
        }  
    }
  
   
    return(
        <div className={styles.productionContainer}>
            {infoTabVisible && <div id="infoTab" className={styles.infoTab}>
                <div className={styles.closeBtn} onClick={onClick}></div>
                <div className={styles.content}>
                    {infoTab}
                </div>
                
        </div>}
            <h4 className={styles.goBack} onClick={handleBack}>back</h4>   
            <h2>Production</h2>
            <div className={styles.productionBody}>
                <div className={styles.decorationDiv}></div>
                <div className={styles.infoContainer}>
                    <p>Whether you need a catchy beat, a captivating melody, a powerful mix, or a polished master, we have you covered. We can help you with every aspect of music production, from songwriting and composition to sound design and recording to mixing and mastering.
                    </p>
                    <div className={styles.btnsContainer}>
                    <div onClick={onClick}>Production Examples</div>
                     
            </div>
                    
                </div>
                
                
            </div> 
           
          
        </div>
    )
}

export default Production