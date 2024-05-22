import React from "react";
import "./home.css";
import heart from "../../assests/heart.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  const handleGo = () => {
    navigate("/game");// function for navigating to the next page

  };
  return (
   <div className="home">
     <div className='start-container'>
      <img src={heart} className="heartright" alt="heart-logo" />

      <div className="info">
        <h3>How to play pokeswipe</h3>
        <p>Pokemon appear one at a time</p>
        <p>Choose 'Like' or 'DisLike'</p>
        <p>Build Your Favourite team</p>
      </div>
      <button className="go-btn" onClick={handleGo}>
       
        Let's Go
      </button>
    </div>
   </div>
  );
}

export default Home;
