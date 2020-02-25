import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

const Toggle = () => {
  const [items, setItems] = useState([
    {
      letter: "S",
      key: 1
    },
    {
      letter: "I",
      key: 2
    },
    {
      letter: "M",
      key: 3
    },
    {
      letter: "E",
      key: 4
    },
    {
      letter: "O",
      key: 5
    },
    {
      letter: "N",
      key: 6
    }
  ]);
  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <AnimatedTitle key={key} style={props}>
          {item.letter}
        </AnimatedTitle>
      ))}
      <button
        onClick={() =>
          setItems([
            {
              letter: "S",
              key: 1
            }
          ])
        }>
        Toggle
      </button>
    </div>
  );
};

const AnimatedTitle = animated.h1;
export default Toggle;

// const transition = useTransition(isToggled, null, {
//   from: { opacity: 0, position: "absolute" },
//   enter: { opacity: 1 },
//   leave: { opacity: 0 }
// });
