import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({title, img, pitch, description, skill1, skill2, skill3}) => {
    return(
    <div id='ProjectCardWrapper'>
        <div id="row1">
            <h1>{title}</h1>
        </div>

        <div id= "row2">
            
            <img id="heroImg" src={img} alt="filler"/>
            
            
            <div id="textSkills">
            <div id="text">
                <h4>{pitch}</h4>
                <p>{description}</p>
            </div>

            <h6>Learned Skills</h6>

            <div id="learnedSkills">
                <h5>{skill1}</h5>
                <h5>{skill2}</h5>
                <h5>{skill3}</h5>
            </div>
            </div>


        </div>
     

    </div>
    );
};

export default ProjectCard;