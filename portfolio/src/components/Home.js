import React from 'react';
import '../styles/Home.css';
import HomeProjectCard from './HomeProjectCard.js';
import HomeAnimation from './HomeAnimation.js';
import hikeImg from '../img/hike.jpeg';
import formImg from '../img/formImg.png';
import matchaImg from '../img/matcha.png';

const Home = () => {
    return(
        <>
        
        <div id="wrapper">

        <div>
        <HomeAnimation/>
        </div>
        
        <div id ="CardContainer">
        <HomeProjectCard
            image ={hikeImg}
            title = {"Test title"}
            category={"Test"}
            description = {"Example description of a project"}
        />

        <HomeProjectCard
            image ={formImg}
            title = {"2D to 3D Dinosaur"}
            category ={"Product Design"}
            description={"Fill in description here"}
        />

        <HomeProjectCard 
            image = {matchaImg}
            title= {"Matcha Tea Packaging Design"}
            category = {"Product Design, Graphic Design"}
            description={"Fill in description here"}
        />
        </div>
        </div>
        </>
    );
};

export default Home;