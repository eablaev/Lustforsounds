import styles from './ClientsPage.module.css'
import { useNavigate } from 'react-router-dom'

const clientsList = ['Brent Faiyaz', 'Orion Sun', 'Nascent' , 'DUCKWORTH.', 'BJ The Chicago Kid', 'Mereba', 'Jordan Ward', 'Omarion', 'Jeremih', 'Soulja Boy', 'Ray J', 'Lil` Flip', 'Dj Paul', 'OG Maco', 'Kehlani', 'YG', 'TDE',' Ace Hood', 'Fredo Santana', 'Chnis Travis', 'Sean Kingston', 'Bone Thugs And Harmony', 'Austin Mahone', 'Kevin Federline', 'Lil Flip', 'Sevyn Streeter', 'Eddie Kramer', 'HB Barnum', 'Angie Fisher', 'Critch Critch', 'Atlantic Records',
'Sony Music', 'VH1.', 'Lost Kids', 'N3W YRK LA', 'Lido', 'hamzaa' , 'Jake Cornell', 'Rudi', 'Ruby Jay' , 'Abstract', 'Rich the Kid' , 'Famous Dex', 'Kalisway']


function ClientsPage () {
    const navigate = useNavigate();
    function handleBack () {
        navigate(-1)
    }
    return (
        <div className={styles.clientsPageContainer}>
            <h4 className={styles.goBack} onClick={handleBack}>back</h4> 
            <h2>Lustforsounds Clients</h2>
            <div className={styles.clientsContainer}>
                {clientsList.map((el, index) => {
                    return <div key={index} className={styles.client}>{el}</div>
                })}
            </div>
        </div>
    )
}

export default ClientsPage