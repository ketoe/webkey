import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import listCytat from '../listCytat.json';


const HomePage = () => {
    $(document).ready(() => {
        $('.heroImage').animate({opacity: 1},2000);
    })
    
    
        const randCytat =  Math.floor(Math.random()*listCytat.length);
        const [cytat, setCytat] = useState(listCytat.filter((cytat, index) => index === randCytat));


    return ( 
        <>
            <div className="heroImage">
                <div className="cytat">
                    ,,{cytat[0].txt}''
                    <span class="autor">{cytat[0].autor}</span>
                </div>
            </div>
        </>
     );
}
 
export default HomePage;