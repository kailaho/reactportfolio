import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const HomeAnimation = () => {
  const [gradientColors, setGradientColors] = useState(['#bac5e0', '#bfbac2', '#d1bae0']);
  
  // Define the animation for the background color
  const props = useSpring({
    background: `linear-gradient(50deg, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
    config: { duration: 2000 },
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
    }, 2000); // Change colors every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <animated.div style={{ ...props, height: '100vh', width: '50%',display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Color-Changing Gradient Background</h1>
    </animated.div>
  );
};

export default HomeAnimation;
