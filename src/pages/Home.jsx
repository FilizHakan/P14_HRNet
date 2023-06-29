import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Loader from "./Loader";

/**
 * @name Home
 * @description create the home page
 * @returns {JSX.Element}
 */
export default function Home ()
{
    return (
      <div>
        <Loader />
        <Header />
        <Hero />
        <Footer />
      </div>
    );
};