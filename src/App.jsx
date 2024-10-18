import { Route, Routes } from "react-router-dom";
import BarAnimation from "./components/barAnimated/BarAnimation";
import Footer from "./components/footer/Footer";
import NavbarComponent from "./components/navbar/NavbarComponent";
import HomePage from "./pages/HomePage";
import Accounting from "./pages/Accounting";
import Review from "./pages/Review";
import Organizations from "./pages/Organizations";
import CareerNews from "./pages/CareerNews";
import CompanyFormation from "./pages/CompanyFormation";
import InterviewPage from "./pages/InterviewPage";
import ErpPage from "./pages/ErpPage";
import CostAccountPage from "./pages/CostAccountPage";
import TaxPage from "./pages/TaxPage";
import Article from "./pages/article/Article";
import SubscribeNewsletter from "./components/subscribe/SubscribeNewsletter";
import React from 'react';

function App() {
    return (
        <div dir='rtl' className='bg-body-tertiary'>
            <div className="container">
                <NavbarComponent />
                <BarAnimation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/accounting" element={<Accounting />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/tax" element={<TaxPage />} />
                    <Route path="/organization" element={<Organizations />} />
                    <Route path="/carer" element={<CareerNews />} />
                    <Route path="/formation" element={<CompanyFormation />} />
                    <Route path="/interview" element={<InterviewPage />} />
                    <Route path="/erp" element={<ErpPage />} />
                    <Route path="/costaccount" element={<CostAccountPage />} />
                    <Route path="/:articleId" element={<Article />} />
                </Routes>
            </div>
            <SubscribeNewsletter />
            <Footer />
        </div >
    )
}
export default App;