import React from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Tutors from "./components/Tutors";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="programs"><Programs /></section>
        <section id="tutors"><Tutors /></section>
     
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
