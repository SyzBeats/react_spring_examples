import React from "react";
import { animated } from "react-spring";

const Nav = ({ style }) => {
  return (
    <animated.div className='nav-wrapper' style={style}>
      <nav>
        <a href='#'>Home</a>
        <a href='#'>List</a>
        <a href='#'>Check</a>
        <a href='#'>Tuts</a>
      </nav>
    </animated.div>
  );
};

export default Nav;
