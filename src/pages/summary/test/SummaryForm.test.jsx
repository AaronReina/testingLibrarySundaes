import { SummaryForm } from "../SummaryForm";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("SummaryForm tests", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm Order" });
  const check = screen.getByRole("checkbox", {
    name: "I agree to terms and conditions",
  });

  expect(check).not.toBeChecked();
  expect(button).toBeDisabled();
  userEvent.click(check);
  expect(button).toBeEnabled();
  userEvent.click(check);
  expect(button).toBeDisabled();
});

// test("Popover responds to hover", async () => {
//   render(<SummaryForm />);
//   const nullPopover = screen.queryByText(
//     /no ice cream will actually delivered/i
//   );
//   expect(nullPopover).not.toBeInTheDocument();

//   const termsAndConditions = screen.getByText(/terms and conditions/i);
//   userEvent.hover(termsAndConditions);

//   const popover = screen.getByText(/no ice cream will actually delivered/i);
//   expect(popover).toBeInTheDocument();

//   userEvent.unhover(termsAndConditions);
//   await waitForElementToBeRemoved(() =>
//     screen.queryByText(/no ice cream will actually delivered/i)
//   );
// });
