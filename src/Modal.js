import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

const Modal = ({ closeModal }) => {
  return (
    <div className='modal'>
      <div className='modal-card'>
        <h1>Modal</h1>
        <button onClick={() => closeModal()}>close</button>
      </div>
    </div>
  );
};

export const ModalWrapper = () => {
  const [on, toggle] = useState(false);
  return (
    <div>
      {on && <Modal closeModal={() => toggle(false)} />}
      <button onClick={() => toggle(!on)}>Open</button>
    </div>
  );
};

export default ModalWrapper;
