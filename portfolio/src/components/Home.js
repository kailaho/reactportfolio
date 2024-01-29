import React from 'react';
import '../styles/Home.css';
import HomeProjectCard from './HomeProjectCard.js';
import HomeAnimation from './HomeAnimation.js';
import hikeImg from '../img/hike.jpeg';
// import formImg from '../img/formImg.png';
import matchaImg from '../img/matcha.png';
import plantWeb from '../img/plantWeb.png';
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

        <div id="CardContainer">
            <div className ="titleCardButton">
                <TitleAnimation className="title" text={"UX/UI Design"}/>
                <HomeProjectCard
                image ={hikeImg}
                title = {"PortfoliPro ★"}
                category={"UX/UI Design"}
                description = {"Using UX/UI design principles to develop an idea for a portfolio-sharing app for creative professionals"}
                />
                <SeeMoreUXUI/>
            </div>

            <div className ="titleCardButton">
                <TitleAnimation className="title" text={"Web Development"}/>
                <HomeProjectCard
                image ={plantWeb}
                title = {"Colorado Native Plants Website ★"}
                category ={"Web Development"}
                description={"An exploration in Three.js and interactive information website design"}
                />
               <SeeMoreWebDev/>
            </div>

            <div className="titleCardButton">
                <TitleAnimation className="title" text={"Product Design"}/>
                <HomeProjectCard 
                image = {matchaImg}
                title= {"Matcha Tea Packaging Design ★"}
                category = {"Product Design, Graphic Design"}
                description={"Achieving brand image through visual product design"}
                />
                <SeeMoreProducts/>
            </div>
        </div>
               

        </div>
        </>
    );
};

export default Home;