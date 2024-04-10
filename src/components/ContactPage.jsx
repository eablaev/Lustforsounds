import styles from './ContactPage.module.css'
import { useNavigate } from 'react-router-dom'

function ContactPage () {
    const navigate = useNavigate();

    function handleBack () {
        navigate(-1)
    }
    function handleEmail () {
        window.open('mailto:ervin@lustforsounds.com?subject=Lustforsounds Studio Inquiry&body=')
    }
    return (
        <div className={styles.contactPageContainer}>
            <h4 className={styles.goBack} onClick={handleBack}>back</h4> 
            <h2>Get In Touch</h2>
            <div className={styles.contactPageBody}>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.1438617627427!2d-118.36362402401922!3d34.168239361596086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2958ee3b8eb33%3A0x85ad3c6db67c073b!2s5362%20Cahuenga%20Blvd%2C%20North%20Hollywood%2C%20CA%2091601!5e0!3m2!1sen!2sus!4v1704508835632!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ borderRadius: '4px',border: 'none'  }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">

                </iframe>
                <div className={styles.contactOptions}>
                    <div onClick={handleEmail}>Email Us</div>
                    <a href="tel:555-555-5555">812-844-6500</a>
                </div>
            </div>
        </div>
    )
}

export default ContactPage