import { SummaryForm } from "../SummaryForm";
import { render, screen, fireEvent } from "@testing-library/react";

test("SummaryForm tests", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm Order" });
  const check = screen.getByRole("checkbox", {
    name: "I agree to terms and conditions",
  });

  expect(check).not.toBeChecked();
  expect(button).toBeDisabled();
  fireEvent.click(check);
  expect(button).toBeEnabled();
  fireEvent.click(check);
  expect(button).toBeDisabled();
});
