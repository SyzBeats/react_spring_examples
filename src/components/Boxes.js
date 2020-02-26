import React, { useState } from "react";
import { animated, useTransition, useTrail } from "react-spring";

const Boxes = () => {
  const [on, toggle] = useState(false);
  const items = [0, 1, 2, 3, 4];
  // const springs = useSprings(
  //   items.length,
  //   items.map(item => ({
  //     from: {
  //       opacity: 0
  //     },
  //     to: {
  //       opacity: 1
  //     }
  //   }))
  // );

  // const transitions = useTransition(items, item => item.key, {
  //   from: { transform: "translate3d(0,-40px,0)" },
  //   enter: item => async (next, cancel) => {
  //     await next({ transform: "translate3d(0,0,0)" });
  //     await next({ transform: "translate3d(0,-100px,0)" });
  //   },
  //   leave: { transform: "translate3d(0,-40px,0)" }
  // });

  const trail = useTrail(items.length, {
    opacity: on ? 0 : 1,
    transform: on ? "translate3d(0,0,0)" : "translate3d(0,100px,0)"
  });
  return (
    <div className='boxes-grid'>
      {/* {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <div className='box'></div>
        </animated.div>
      ))} */}
      {trail.map((animation, index) => (
        <animated.div key={items[index]} style={animation} onClick={() => toggle(!on)}>
          <div className='box'></div>
        </animated.div>
      ))}
    </div>
  );
};

export default Boxes;
