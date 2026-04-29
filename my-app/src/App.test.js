import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/MainBooking";
import { BookingProvider } from "./context/BookingContext";


jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
  Link: ({ children }) => <a>{children}</a>,
  BrowserRouter: ({ children }) => <div>{children}</div>,
  MemoryRouter: ({ children }) => <div>{children}</div>,
}), { virtual: true });

const renderForm = () => {
  render(
    <BookingProvider>
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        submitForm={() => {}}
      />
    </BookingProvider>
  );
};

test("renders BookingForm labels", () => {
  renderForm();

  expect(screen.getByText("First Name")).toBeInTheDocument();
  expect(screen.getByText("Last Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Date")).toBeInTheDocument();
  expect(screen.getByText("Time")).toBeInTheDocument();
});

test("first name input is required", () => {
  renderForm();

  const firstNameInput =
    screen.getByLabelText(/first name/i);

  expect(firstNameInput).toBeRequired();
});

test("email input has type email", () => {
  renderForm();

  const emailInput =
    screen.getByLabelText(/email/i);

  expect(emailInput).toHaveAttribute(
    "type",
    "email"
  );
});

test("guests input has minimum value of 1", () => {
  renderForm();

  const guestsInput =
    screen.getByLabelText(/guests/i);

  expect(guestsInput).toHaveAttribute(
    "min",
    "1"
  );
});

test("shows error for invalid email", () => {
  renderForm();

  const emailInput =
    screen.getByLabelText(/email/i);

  fireEvent.change(emailInput, {
    target: { value: "wrong-email" },
  });

  fireEvent.blur(emailInput);

  expect(
    screen.getByText(/invalid email format/i)
  ).toBeInTheDocument();
});

test("removes email error when corrected", () => {
  renderForm();

  const emailInput =
    screen.getByLabelText(/email/i);

  fireEvent.change(emailInput, {
    target: { value: "wrong" },
  });

  fireEvent.blur(emailInput);

  expect(
    screen.getByText(/invalid email format/i)
  ).toBeInTheDocument();

  fireEvent.change(emailInput, {
    target: { value: "test@test.com" },
  });

  expect(
    screen.queryByText(/invalid email format/i)
  ).not.toBeInTheDocument();
});

test("initializeTimes returns an array", () => {
  const result = initializeTimes();

  expect(Array.isArray(result)).toBe(true);
});

test("updateTimes returns an array", () => {
  const result = updateTimes([], {
    type: "UPDATE_TIMES",
    date: "2026-01-01",
  });

  expect(Array.isArray(result)).toBe(true);
});

test("submits form with valid data", () => {
  const mockSubmitForm = jest.fn();

  render(
    <BookingProvider>
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        submitForm={mockSubmitForm}
      />
    </BookingProvider>
  );

  fireEvent.change(
    screen.getByLabelText(/first name/i),
    {
      target: { value: "John" },
    }
  );

  fireEvent.change(
    screen.getByLabelText(/last name/i),
    {
      target: { value: "Doe" },
    }
  );

  fireEvent.change(
    screen.getByLabelText(/email/i),
    {
      target: { value: "john@test.com" },
    }
  );

  fireEvent.change(
    screen.getByLabelText(/date/i),
    {
      target: { value: "2026-01-01" },
    }
  );

  fireEvent.change(
    screen.getByLabelText(/time/i),
    {
      target: { value: "17:00" },
    }
  );

  fireEvent.change(
    screen.getByLabelText(/guests/i),
    {
      target: { value: 2 },
    }
  );

  fireEvent.click(
    screen.getByRole("button", {
      name: /confirm reservation/i,
    })
  );

  expect(mockSubmitForm).toHaveBeenCalledTimes(1);

  expect(mockSubmitForm).toHaveBeenCalledWith(
    expect.objectContaining({
      firstName: "John",
      lastName: "Doe",
      email: "john@test.com",
      date: "2026-01-01",
      time: "17:00",
      guests: 2,
    })
  );
});