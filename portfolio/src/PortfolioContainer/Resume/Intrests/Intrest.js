import React, { useState } from "react";
import "./Intrest.css";
import IntrestList from "./IntrestList";

export default function Intrest() {
  const [mintrests, setIntrests] = useState([
    {
      Myintrest: "TEACHING",
      more: "Apart from being  atech enthusiast and a code writer, I also love to teach people what i know simply because i believe in sharing",
    },
    {
      Myintrest: "Music",
      more: "Listening to smooth Music is something i can never compromise with, skimming through sportify's pop songs charts is at times the best stress reliever that i can get my hands on",
    },
    {
      Myintrest: "Gaming",
      more: "I like to challenge my reflexes alot while competing in football games, pushing the ranks and having interactive gaming gaming session excites me the most",
    },
    {
      Myintrest: "GARDENING",
      more: "Growing up with my grandparents was a unique experience that shaped my interests and hobbies. My grandmother, a dedicated farmer, and my grandfather, a skilled livestock keeper, not only provided a nurturing environment but also instilled in me a deep appreciation for the natural world. It was in their loving care that I discovered my passion for gardening, a hobby that has since become a cherished part of my life.",
    },
    {
      Myintrest: "COOKING",
      more: "From the sizzle of a hot pan to the aroma of spices wafting through the air, my passion for cooking has always been a journey of sensory delights. Cooking is not merely a hobby for me; it's a profound expression of creativity and love. Whether I'm experimenting with new recipes or preparing cherished family traditions, the kitchen is where I feel most at home. ",
    },
    {
      Myintrest: "READING",
      more: "In the boundless realm of books, I have found my greatest fascination and refuge. Reading is a lifelong passion that has enriched my existence in countless ways. With each page turned, I embark on new adventures, traverse different eras, and explore the depths of human imagination.",
    },
  ]);
  return (
    <div>
      <IntrestList mintrests ={mintrests}/>
    </div>
  );
}
