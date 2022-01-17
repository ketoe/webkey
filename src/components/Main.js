import React, { PureComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OmniePage from './pages/OmniePage';
import ProjektyPage from './pages/ProjektyPage';
import KontaktPage from './pages/KontaktPage';

const Main = () => {
  
  
    return (  
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/omnie" element={<OmniePage />} />
                <Route path="/projekty" element={<ProjektyPage />} />
                <Route path="/kontakt" element={<KontaktPage />} />
            </Routes>
        </>
    );
}
 
export default Main;