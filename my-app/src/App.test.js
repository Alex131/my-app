import { render, screen } from '@testing-library/react';
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/MainBooking";
import { BookingProvider } from "./context/BookingContext";


jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
  Link: ({ children }) => <a>{children}</a>,
  BrowserRouter: ({ children }) => <div>{children}</div>,
  MemoryRouter: ({ children }) => <div>{children}</div>,
}), { virtual: true });

test("renders BookingForm labels", () => {
  render(
    <BookingProvider>
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
      />
    </BookingProvider>
  );

  expect(screen.getByText("First Name")).toBeInTheDocument();
  expect(screen.getByText("Last Name")).toBeInTheDocument();
  expect(screen.getByText("Email")).toBeInTheDocument();
  expect(screen.getByText("Date")).toBeInTheDocument();
  expect(screen.getByText("Time")).toBeInTheDocument();
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
