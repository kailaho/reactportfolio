import React from 'react';
import BannerAnimation from './BannerAnimation';
import ProjectCard from './ProjectCard';
import Filler from '../img/blueCanvas.png'
import plantWeb from '../img/plantWeb.png'
import gnomeStyler from '../img/gnomeStyler.png';

const WebDevProjects = () => {
    return(
        <>
        <BannerAnimation text={"Web Development Projects"}/>
        <ProjectCard
            title={"Colorado Native Plant Website"}
            img={plantWeb}
            pitch={"Created using HTML, CSS, and Three.js, this website provides information about Colorado's native plant spieces in a visually appealing and interactive manner."}
            description={"Combining a passion for the Colorado outdoors and alpine environments and my desire to learn new JS libraries, I explored ways in which I could use new techniques in order to incorporate visually enticing and interactive features into my informational website. This project was a great learning opportunity in both understanding how to develop a website whose design furthers its purpose as well as advancing my skills technically. Using the Three.js library, I was able to incorporate 3D models of each of the plants I cataloged, which was a great learning experience and also provided a nuanced visual element."}
            skill1={"HTML/CSS"}
            skill2={"Three.js"}
            skill3={"UX/UI Design"}
            text={"▶"}
            link={"/nativePlants"}
        />

        <ProjectCard
            title={"Gnome Styler"}
            img={gnomeStyler}
            pitch={"Through the help of the coolor.io API, this project provided an opportunity to practice API calls and implement them in a fun and engaging way."}
            description={"To practice API calls, I used the coolor.io API to generate a random color palette that is then applied to the gnome graphic to the right. In order to replace the colors, I iterated through each pixel of the image, cheked if it match the old color, and then replaced it with the new color generated from the color palette. The API outputs five colors, which change the gnome's hat, shirt, mittens, pompom, and shoes individually. This was a very challening assignment for me, but I learned a lot about APIs, using canvas in HTML, for loops, and got lots of practice debugging using console.log and developer tools."}
            skill1={"API Calls"}
            skill2={"Developer Tools"}
            skill3={"HTML/CSS"}
            text={"▶"}
            link={"/gnomeStyler"}
        />

        <ProjectCard
            title={"Project Title"}
            img={Filler}
            pitch={"This is where the elevator pitch for each project will go, which will be more highlighted than the other text"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend. Urna id volutpat lacus laoreet. Pharetra vel turpis nunc eget lorem dolor. In fermentum posuere urna nec tincidunt praesent. Duis ut diam quam nulla porttitor. Diam maecenas sed enim ut sem viverra aliquet eget. Justo nec ultrices dui sapien eget. Ut faucibus pulvinar elementum integer enim neque volutpat. Erat velit scelerisque in dictum non consectetur a. Faucibus in ornare quam viverra orci sagittis eu volutpat. Enim tortor at auctor urna. Id leo in vitae turpis massa sed elementum. Non blandit massa enim nec dui nunc mattis enim. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nisl condimentum id venenatis a condimentum vitae. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id."}
            skill1={"Skill 1"}
            skill2={"Skill 2"}
            skill3={"Skill 3"}
            text={"▶"}
        />
        </>
    );
};

export default WebDevProjects;