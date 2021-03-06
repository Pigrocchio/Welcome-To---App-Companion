import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

function CollapseButton(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="button-row">
      <Button
        variant={props.variant}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        {props.namebutton}
        </Button>
        </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          
          {props.contenuto}
        </div>
      </Collapse>
    </>
  );
}

export default CollapseButton;
