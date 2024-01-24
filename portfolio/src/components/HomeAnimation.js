import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const HomeAnimation = () => {
  const [gradientColors, setGradientColors] = useState(['#77b9f2', '#ed2b55', '#f5e1f3']);
  
  // Define the animation for the background color
  const props = useSpring({
    background: `linear-gradient(50deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
    config: { duration: 1500 },
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
    }, 1500); // Change colors every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <animated.div style={{ ...props, height: '100vh', width: '100%',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <h1 style={{padding: '3em'}}>Test</h1>
    </animated.div>
  );
};

export default HomeAnimation;
