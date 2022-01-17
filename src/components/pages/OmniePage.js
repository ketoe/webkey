import React from 'react';
import faceme from '../css/images/faceme.png';
import $ from 'jquery';


const OmniePage = () => {
    $(document).ready(function () {
        let value = document.getElementsByClassName("star").length;
        for (let i = 0; i < value ; i++) {
            setTimeout(() => { $('.star:nth('+i+') li').animate({opacity: 1}, 800);  }, i*1000/2);
        }
        $('img.faceMe').animate({opacity: 1},2000);
    })
    return ( 
        <section className="omnie">
            <img src={faceme} alt="FaceMe" class="faceMe"/>
            <div className="description">
                Cierpliwość i sumienność to klucz do sukcesu.
	            <p>Cześć mam na imię Marcin. 
                Po ukończeniu technikum budowlanego moja kariera zawodowa ukierunkowała się na branżę stolarską. </p>
	            <p>Jednak to co uwielbiam robić w wolnym czasie to tworzyć - tworzyć aplikacje interentowe strony www, rozbudowane systemy crm.
                Technologie w których się poruszam to PHP, Laravel, JavaSrcipt, ReactJS, html5, css3. Programowaniem zajmuje się hobbistycznie od 11 lat. 
                Nie mam doświadczenia komercyjnego, ale to co mnie wyróżnia to pasja i determinacja. 
                Jestem osobą otwartą na nowe technologie. Wszystkich jezyków/frameworków programowania uczyłem się sam - głównie z książek lub kursów na udemy.  
                Chcesz mnie poznać lub potrzebujesz wsparcia w świecie IT? Zapraszam do kontaktu. </p>
            </div>
            <div className="experience">
                <ul>
                    <li>
                        PHP7
                        <ul className="star">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li></li>
                            <li></li>
                        </ul>

                    </li>
                    <li>
                        JavaScript
                        <ul className="star">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                    <li>
                        Laravel
                        <ul className="star">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li></li>
                        </ul>
                    </li>
                    <li>
                        ReactJS
                        <ul className="star">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        html5
                        <ul className="star">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li></li>
                        </ul>
                    </li>
                    <li>
                        css3
                        <ul className="star">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li></li>
                        </ul>
                    </li>
                    <li>
                        PhotoShop
                        <ul className="star">
                            <li className="active"></li>
                            <li className="active"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
     );
}
 
export default OmniePage;