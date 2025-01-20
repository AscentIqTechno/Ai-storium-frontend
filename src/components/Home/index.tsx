import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
import MovieScripts from "./MovieScripts";
import WebseriesScripts from "./WebseriesScripts";
import SongsLyrics from "./SongsLyrics";
import YouTubeScripts from "./YouTubeScripts";
import ReelsScripts from "./ReelsScripts";

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      <MovieScripts />
      <SongsLyrics />
      <WebseriesScripts />
      <YouTubeScripts />
      <ReelsScripts />
      <CounDown />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Home;
