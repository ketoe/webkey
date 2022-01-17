import React from "react";
import './css/App.css';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import $ from 'jquery';


const App = () => {
    $(document).ready(function () {
        $('nav li').on("click", () => {
            $('main').css("opacity", 0);
            $('main').animate({"opacity": 1},2000);
        })
    })
    return (  
        <>
            <header>
                <Header />
            </header>

            <main>
                <Main />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
 
export default App;