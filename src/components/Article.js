import React from "react";
import "./Article.css";

function Article() {
  return (
    <div id="heroSection">
      <div id="text">
        <p>
          Online yoga designed for real people—whether you're a busy mom in need
          of a quick morning energy boost, or a traveler looking to relax with a
          yoga nidra before sleep. Work up a sweat with an advanced vinyasa
          flow, or brush up on the basics in our accessible beginner classes.
          Whatever your level of experience, life stage, and aspirations—from
          prenatal strength to mid-workday calm—we'll help you create an online
          yoga practice that's uniquely your own.
        </p>
        <p id="author">- Yogi Chad</p>
      </div>
      <div id="fotoBox">
        <img id="foto" src="chad.png" alt="chad"></img>
        <p id="fotoName">Chad</p>
      </div>
    </div>
  );
}

export default Article;
