import React from "react";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import BooksList from "../components/books/BooksList";
import Footer from "../components/Footer";

export function Home() {
  return (
    <>
      <div className="container">
        <Slider/>
        <BooksList />
      </div>
      <Footer/>

    </>
  );
}
