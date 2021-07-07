import React, { useState } from "react";

export const SummaryForm = () => {
  const [disabled, setDisabled] = useState(true);

  return (
    <div>
      <button disabled={disabled}>Confirm Order</button>
      <input
        onClick={() => setDisabled(!disabled)}
        type="checkbox"
        id="chechConditions"
      ></input>
      <label htmlFor="chechConditions">I agree to terms and conditions</label>
    </div>
  );
};
