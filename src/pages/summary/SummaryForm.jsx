import React, { useState } from "react";
import { Popover, Button } from "bootstrap";
import { OverlayTrigger } from "react-bootstrap";

export const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkBoxLabel = () => (
    <OverlayTrigger placement="right" overlay={popover}>
      <Button variant="success">Click me to see</Button>
    </OverlayTrigger>
  );

  return (
    <div>
      <button disabled={disabled}>Confirm Order</button>
      <input
        onClick={() => setDisabled(!disabled)}
        type="checkbox"
        id="chechConditions"
        labe={checkBoxLabel}
      ></input>
      <label htmlFor="chechConditions">I agree to terms and conditions</label>
    </div>
  );
};
