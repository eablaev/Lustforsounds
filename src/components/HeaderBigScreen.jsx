import styles from './HeaderBigScreen.module.css'

import { useNavigate} from 'react-router-dom';

import logo from '../assets/logo-white.png'

function HeaderBigScreen () {
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
            <div className={styles.menuItems} onClick={handleClick}>
                <div>Clients</div>
                <div>FAQ</div>
                <div>Contact</div>
            </div>
        </div>
    )
}

export default HeaderBigScreen