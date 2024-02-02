// NativePlants.js

import React, {useState} from 'react';
import '../styles/DetailProject.css'; // Import your CSS file for styling

const DetailProject = ({projectTitle, projectDesc, projectLink, skill1, skill2, skill3, goal1, goal2, 
    goal3, designProcess, img1, ux, development, finalImages, learningOutcomes }) => {

        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const changeImage = (direction) => {
          const newIndex = (currentImageIndex + direction + finalImages.length) % finalImages.length;
          setCurrentImageIndex(newIndex);
        };

  return (
    <div className="native-plants-container">
    <div id="goalsSkills">
        <div id="goalsSkills-col1">
            <h1>{projectTitle}</h1>
            <p className="description">{projectDesc}</p>

           

            <div className="skills-section">
                <div className="skill-item">{skill1}</div>
                <div className="skill-item">{skill2}</div>
                <div className="skill-item">{skill3}</div>
                {/* Add more skills as needed */}
            </div>

            <div> <a id ="link" href={projectLink}>Project Link</a></div>
        </div>
        

      <div className="goals-section">
        <h2 id= "projectGoals">Project Goals</h2>
        <ul>
          <li className="goal">{goal1}</li>
          <li className="goal">{goal2}</li>
          <li className="goal">{goal3}</li>
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
        <h2>Learning Outcomes</h2>
        <p>{learningOutcomes}</p>
      </div>
    </div>
  );
};

export default DetailProject;
