import React from "react";
import Comment from "../../Comment/Comment";
import Banner from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <Comment></Comment>
      <AppointmentBanner></AppointmentBanner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
