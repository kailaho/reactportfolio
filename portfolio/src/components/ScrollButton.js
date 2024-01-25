import React from 'react';

const ScrollButton = () => {
    const scrollToFunc = () => {
        const targetX = 0;
        const targetY = 2000;

        window.scrollTo({
            top: targetY, 
            left: targetX,
            behavior: 'smooth',
        });
    };

    return (
        <button onClick={scrollToFunc} style={{marginLeft:'40em',fontWeight: 'medium', width: '15%', backgroundColor: 'black', padding: '1.5em', fontSize: '16px', color: 'white', borderRadius: '2em', border: 'none', marginTop: '1em', textAlign: 'center', justifyContent: 'center'}}>
            EXPLORE PROJECTS
        </button>
    );

};

export default ScrollButton;