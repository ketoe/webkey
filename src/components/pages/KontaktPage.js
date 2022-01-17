import React from 'react';
import location from '../css/images/location.png';

const KontaktPage = () => {
    return ( 
        <section className="kontakt">
            <img src={location} alt="Location" className="location" />
            <ul>
                <li><a href="http://www.web-key.pl" target="_blank">www.web-key.pl</a></li>
                <li>e-mail: <a href="mailto: marcin.stefanowski@web-key.pl">marcin.stefanowski@web-key.pl</a></li>
                <li>github: <a href="http://github.com/ketoe" target="_blank">github.com/ketoe</a></li>
                <li>Facebook: <a href="https://www.facebook.com/webKeySocial" target="_blank">facebook.com/webkey</a></li>
            </ul>
        </section>
     );
}
 
export default KontaktPage;