// NativePlants.js

import React, {useState} from 'react';
import '../styles/DetailProject.css'; // Import your CSS file for styling
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';

const DetailProject = ({projectTitle, projectDesc, projectLink, skills, goals, designProcess, img1, ux, development, finalImages, learningOutcomes, backToLink, backToWhere}) => {

        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const changeImage = (direction) => {
          const newIndex = (currentImageIndex + direction + finalImages.length) % finalImages.length;
          setCurrentImageIndex(newIndex);
        };

  return (
    <div className="native-plants-container">
    <div id="goalsSkills">
        <div id="goalsSkills-col1">
            <h1 className="detailh1">{projectTitle}</h1>
            <p className="description">{projectDesc}</p>

            

            <div className="skills-section">
                <div className="skill-item">{skills[0]}</div>
                <div className="skill-item">{skills[1]}</div>
                <div className="skill-item">{skills[2]}</div>
                {/* Add more skills as needed */}
            </div>

            <div> <a className ="link" href={projectLink}>Project Link</a></div>
            
        </div>
        

      <div className="goals-section">
        <h2 id= "projectGoals">Project Goals</h2>
        <ul id="goalList">
          <li className="goal">{goals[0]}</li>
          <li className="goal">{goals[1]}</li>
          <li className="goal">{goals[2]}</li>
          {/* Add more goals as needed */}
        </ul>
      </div>

      

    </div>
      

      <div className="design-process-section">
        <h2>Design Process</h2>
        <p>{designProcess}</p>
      </div>

      <div className="ux-testing-section">
        <img className ='iteration'src={img1} alt="UX Testing" />
        <div id="uxText">
        <h3>UX Testing and Iteration</h3>
        <p>{ux}</p>
        </div>      
      </div>

      <div className="development-section">
        <h2>Development</h2>
        <p>{development}</p>
      </div>

      <div className="final-images-section">
        <button className ="slideShowButton" onClick={() => changeImage(-1)}>⏴</button>
        <img className="final-product" src={finalImages[currentImageIndex]} alt="Final Product" />
        <button className ="slideShowButton" onClick={() => changeImage(1)}>⏵</button>
      </div>
    

      <div className="learning-outcomes-section">
        <h2>Demonstrated Learning</h2>
        <p>{learningOutcomes}</p>
      </div>

      <LinkButton id ="backButton"text={backToWhere} link={backToLink}></LinkButton>
    </div>
  );
};

export default DetailProject;
