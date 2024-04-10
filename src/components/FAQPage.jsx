import styles from './FAQPage.module.css'
import { useNavigate } from 'react-router-dom';

function FAQPage () {

    const navigate = useNavigate();

    function handleBack () {
        navigate(-1)
    }
    return (
        <div className={styles.FAQPageContainer}>
            <h4 className={styles.goBack} onClick={handleBack}>back</h4> 
            <h2>FAQ</h2>
            <div className={styles.FAQs}>
                <div>
                    <h3>Do you require a deposit, to book the room?</h3>
                    <p> A 50% deposit 7 days in advance of your session will guarantee the time slot you request. Without a deposit, if someone else wants the same time slot and offers a deposit, it will go to them. </p>
                </div>
                <div>
                    <h3>Can I cancel or reschedule my session?</h3>
                    <p> If session is canceled or rescheduled 48 hours prior to the starting time, your deposit will be fully refunded. Cancelation or rescheduling with less than 48 hours notice will result in losing the deposit.</p>
                </div>
                <div>
                    <h3>When does the session clock begin?</h3>
                    <p>The session clock begins at the scheduled time that both parties agree upon. If you arrive early and the studio can accommodate an early start, then the session clock will begin at that time. If you are late for any reason, you will be charged from the scheduled session start time, with no exceptions.</p>
                </div>
                <div>
                    <p> In the event a piece of studio gear or any part of its facility becomes damaged by you, or anyone in your party, due to negligence, accident, or willful act, you agree to provide monetary compensation in the amount of full replacement value of the damaged item. Damage to the studio property of any kind that are a result of anyone in client's party or group will be assessed to client's account</p>
                </div>
            </div>

        </div>
    )
}

export default FAQPage