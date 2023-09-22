import React from "react";
import Header from "../../components/Home/Header/Header";
import HeroSection from "../../components/Home/HeroSection/HeroSection";
import WhatWeOffer from "../../components/Home/WhatWeOffer/WhatWeOffer";
import OnePlatform from "../../components/Home/OnePlatform/OnePlatform";
import ForEveryOne from "../../components/Home/ForEveryOne/ForEveryOne";
import Testimonial from "../../components/Home/Testimonial/Testimonial";
import Faq from "../../components/Home/Faq/Faq";
import StartYourCryptoJourney from "../../components/Home/StartYourCryptoJourney/StartYourCryptoJourney";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhatWeOffer />
      <OnePlatform />
      <ForEveryOne />
      <Testimonial />
      <Faq />
      <StartYourCryptoJourney />
    </>
  );
};

export default Home;
