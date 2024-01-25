import React from 'react';
import '../styles/Home.css';
import HomeProjectCard from './HomeProjectCard.js';
import HomeAnimation from './HomeAnimation.js';
import hikeImg from '../img/hike.jpeg';
import formImg from '../img/formImg.png';
import matchaImg from '../img/matcha.png';
import ScrollButton from './ScrollButton.js';
import TitleAnimation from './TitleAnimation.js';
import SeeMoreUXUI from './SeeMoreUXUI.js';
import SeeMoreWebDev from './SeeMoreWebDev.js';
import SeeMoreProducts from './SeeMoreProducts.js';

const Home = () => {
    return(
        <>
        
        <div id="wrapper">

        <div>
        <HomeAnimation/>
        </div>

        <ScrollButton/>
        
        <div id="columnWrapper">
            <div id="titles">
                <TitleAnimation text={"UX/UI Design"}/>
                <TitleAnimation text={"Web Development"}/>
                <TitleAnimation text={"Product Design"}/>
            </div>

            <div id ="CardContainer">
            <HomeProjectCard
                image ={hikeImg}
                title = {"PortfoliPro ★"}
                category={"UX/UI Design"}
                description = {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <HomeProjectCard
                image ={formImg}
                title = {"2D to 3D Dinosaur ★"}
                category ={"Product Design"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
            <HomeProjectCard 
                image = {matchaImg}
                title= {"Matcha Tea Packaging Design ★"}
                category = {"Product Design, Graphic Design"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
           
            </div>

            <div id="seeMoreContainer">
                <SeeMoreUXUI/>
                <SeeMoreWebDev/>
                <SeeMoreProducts/>
            </div>
        </div>
        

        </div>
        </>
    );
};

export default Home;