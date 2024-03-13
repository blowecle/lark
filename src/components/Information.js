import '../css/information.css';
import { Link } from 'react-router-dom';

const FAQ = () => {
  return (
    <section className="faq-container">
        <div className="faq-header">CAMP INFORMATION</div>
        <div className="info-container">
            <div className="info-item">
                <div className="item-header">10 Master Classes</div>
                <div className="item-content">Ten 90-minute in-person classes<br/>with a famous instructor.</div>
            </div>
            <div className="info-item">
                <div className="item-header">2 Mid-Day Events per Day</div>
                <div className="item-content">Two mid-day events with a choice<br/>of a Trad Talk or a Secret Concert.</div>
            </div>
            <div className="info-item">
                <div className="item-header">Faculty Concert</div>
                <div className="item-content">One ticket to the Faculty Concert<br/>Wednesday night at Glór.</div>
            </div>
            <div className="info-item">
                <div className="item-header">Nightly Session Trail</div>
                <div className="item-content">A nightly tour hitting pubs all over<br/>Ennis hosting free sessions for<br/>participants.  A great opportunity<br/>to play with others in the wild.<br/>with a famous instructor.</div>
            </div>
            <div className="info-item">
                <div className="item-header">Refreshments</div>
                <div className="item-content">Refreshments and light snacks<br/>will be provided at the Hub.<br/>Open during the day.</div>
            </div>
            <div className="info-item">
                <div className="item-header">Tour of Clare*</div>
                <div className="item-content">Options to book a mid-day tour to<br/>see the wonderful sights of Clare.</div>
            </div>
            <div className="info-item">
                <div className="item-header">Fleadh Nua Festival*</div>
                <div className="item-content">Options to stay a little longer and<br/>attend the 50th Fleadh Nua Festival.</div>
            </div>
        </div>
            <div className="disclaimer">* not included in camp package.</div>
            <Link to='/register' className="sign-up-div">
                <button className="sign-up-button">Sign Up Today!</button>
            </Link>
            <div className="bottom-div"/>
    </section>
  )
}

export default FAQ;