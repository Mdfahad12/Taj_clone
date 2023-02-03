import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Form from "./components/hotel/Form";
import Footer from "./components/footer/Footer";
import Home from "./components/homehotel/Home";
import Dining from "./components/dining/Dining";
import Wedding from "./components/wedding/Wedding"
import Holiday from "./components/holidays/Holiday";
import GiftCard from './components/giftcard/GiftCard';
import Jiva from "./components/Jiva";
import SignIn from "./components/Signup/SignIn";
import Login from "./components/Signup/Login";
import Checklist from "./components/Checklist"
import Bhopal from "./components/Places/Bhopal";
import Dubai from "./components/Places/Dubai";
import Mumbai from "./components/Places/Mumbai";
import LandsEnd from "./components/Places/LandsEnd";
import ReviewBhopal from "./components/Places/ReviewBhopal";
import FindBook from "./components/FindBook";
import FindReview from "./components/FindReview";
import Calender from "./components/Calender/Calender";
const App = () => {
  return (
    <div>
      <div className="page-container">
        <div className="content-wrap">
      <Router>
    
        <Navbar />

        <Routes>
          <Route element={<Dining/>} path="/Dining"/>
          <Route element={<Home/>} path='/Home'/>
          <Route element={ <Form />} path='/'/>
          <Route element={<Wedding/>} path="/Wedding"/>
          <Route element={<GiftCard/>} path="/GiftCard"/>
          <Route element={<Holiday/>} path="/Holiday"/>
          <Route element={<Jiva/>} path="/Jiva"/>
          <Route element={<SignIn/>} path="/SignIn"/>
          <Route element={<Login/>} path="/Login"/>
          <Route element={<Checklist/>} path="/Checklist"/>
          <Route element={<Bhopal/>} path="/Bhopal"/>
          <Route element={<Dubai/>} path="/Dubai"/>
          <Route element={<Mumbai/>} path="/Mumbai"/>
          <Route element={<LandsEnd/>} path="/LandsEnd"/>
          <Route element={<ReviewBhopal/>} path="/ReviewBhopal"/>
          <Route element={<FindBook/>} path="/FindBook"/>
          <Route element={<FindReview/>} path="/FindReview"/>
          <Route element={<Calender/>} path="/Calender"/>



        </Routes>
      </Router>

        </div>
        

        <Footer />
      </div>
    </div>
  );
};

export default App;

