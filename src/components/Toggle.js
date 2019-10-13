import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { fontWeight, x, y, z } = useSpring({
    fontWeight: isToggled ? "100" : "800",
    x: isToggled ? 0 : -50,
    y: isToggled ? 0 : -50,
    z: isToggled ? 0 : -50
  });

  return (
    <div>
      <AnimatedTitle
        style={{
          fontWeight,
          transform: y.interpolate(y => `translate3d(0,${y}px,0)`)
        }}>
        Hello
      </AnimatedTitle>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

const AnimatedTitle = animated.h1;
export default Toggle;
