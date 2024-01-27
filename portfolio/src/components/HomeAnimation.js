import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const HomeAnimation = () => {
  const [gradientColors, setGradientColors] = useState(['#77b9f2', '#ed2b55', '#f5e1f3']);
  
  // Define the animation for the background color
  const props = useSpring({
    background: `linear-gradient(50deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
    config: { duration: 3000 },
  });

  // Update gradient colors every 4 seconds (adjust as needed)
  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate the colors array to change the order of colors
      setGradientColors((prevColors) => [
        prevColors[1],
        prevColors[2],
        prevColors[0],

      ]);
    }, 3000); // Change colors every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    
    <div style={{position: 'absolute', top: '60vh', left: '0', width: '100%', height: '25vh', background: `linear-gradient(to top, white, transparent)`, zIndex: 4}}></div>
    <animated.div style={{ ...props, height: '75vh', width: '100%',display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 3}}>
      <h1 style={{padding: '1em', paddingTop:'0em', textAlign:'center', fontSize: '60px', lineHeight:'95px'}}>Hi, my name is <span style={{color: 'black'}}>Kaila</span>. I'm a <span style={{backgroundColor:'white', padding: '0em .3em 0em .3em', borderRadius: '1em', opacity:'80%'}}>UX/UI designer</span>, <span style={{backgroundColor: 'white', padding:'0em .3em 0em .3em', borderRadius: '1em', opacity: '80%'}}>Web Developer</span>, and <span style={{backgroundColor: 'white', padding:'0em .3em 0em .3em', borderRadius: '1em', opacity:'80%'}}>Product Designer</span> based in <span style={{color: 'black'}}>Denver, Colorado</span>.</h1>
    </animated.div>
    </>
  );
};

export default HomeAnimation;
