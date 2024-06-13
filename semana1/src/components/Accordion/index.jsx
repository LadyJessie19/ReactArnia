import React, { useState } from "react";
import "./style.css";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="accordion-header">
        <h4>Quanto custa a viagem?</h4>
        <button onClick={toggle}>+</button>
      </div>

      {open && (
        <div className="accordion-content">
          <p> O viagem custa R$ 500</p>
        </div>
      )}
    </>
  );
};

export default Accordion;
