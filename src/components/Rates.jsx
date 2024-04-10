import { useNavigate} from 'react-router-dom';
import styles from './Rates.module.css'

function Rates () {
    const navigate = useNavigate();
    function handleBack() {
        navigate(-1);    
    } 
    return (
        <div className={styles.ratesPageContainer}>
            <h4 className={styles.goBack} onClick={handleBack}>back</h4>   
            <h1>Rates</h1>
            
            <div className={styles.ratesPageBody}>
                <div className={styles.decorationDiv}></div>
                <div className={styles.ratesInfoContainer}>
                    <h4>Studio with an engineer - $65/hr.</h4>
                    <h4>Studio without an engineer - $30/hr.</h4>
                    <h4>Studio block(6hrs) without an engineer - $140.</h4>
                    <h4>Custom song production - please contact for rates.</h4>  
                </div>
                
            </div>
            <p>Studio located in North Hollywood in a safe gated location with plenty of free parking inside. For longer blocks please contact us.</p>
               
        </div>
    )
}

export default Rates