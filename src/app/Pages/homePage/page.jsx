import Place from "@/app/components/BestPlace/Place";
import Footer from "@/app/components/Footer/footer";
import LatestArea from "@/app/components/LatestProperties/LatestArea";
import Rent from "@/app/components/LatestPropertyRent/Rent";
import NavBar from "@/app/components/NavBar/NavBar";
import Area from "@/app/components/propertiesArea/Area";
import CardArea from "@/app/components/propertiesAreacards/cardArea";
import React from "react";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Area />
      <CardArea />
      <LatestArea />
      <Rent />
      <Place />
      <Footer />
    </>
  );
};

export default HomePage;
