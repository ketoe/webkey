import React from 'react';
import img1 from '../css/images/crmAltom.PNG';
import $ from 'jquery';

const ProjektyPage = () => {
    $(document).ready(function () {
        $('.preview').animate({opacity: 1},1000);
    })
    return ( 
        <>
            <section className="projekty">
                <div class="element">
                    <img src={img1} alt="IMG" class="preview" />
                    <ul>
                        <li>
                            <h4>Opis: </h4>System crm do zarządzania firmą produkcyjną.
                        </li>
                        <li>
                            <h4>Technologie: </h4>php, SQL, codeIgniter, jQuery
                        </li>
                        <li>
                            <h4>Czas Budowy: </h4>około 200h
                        </li>
                        <li>
                            <h4>Wydana wersja: </h4>2019
                        </li>
                    </ul>
                </div>
            </section>
        </>
     );
}
 
export default ProjektyPage;