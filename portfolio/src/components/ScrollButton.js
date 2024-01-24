import React from 'react';

const ScrollButton = () => {
    const scrollToFunc = () => {
        const targetX = 0;
        const targetY = 800;

        window.scrollTo({
            top: targetY, 
            left: targetX,
            behavior: 'smooth',
        });
    };

    return (
        <button onClick={scrollToFunc} style={{fontWeight: 'bold', backgroundColor: 'black', padding: '1.5em', fontSize: '16px', color: 'white', borderRadius: '2em', border: 'none'}}>
            EXPLORE PROJECTS
        </button>
    );

};

export default ScrollButton;