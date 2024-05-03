import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/Sigin')
    }
  },[])
  
  return (
    <div className="{margin: 0, padding: 0  height: '100vh'}">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
