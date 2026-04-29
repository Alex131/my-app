import { useState } from "react";
import { useBooking } from "../context/BookingContext";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const { addBooking } = useBooking();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        return value.trim() ? "" : "First Name required";

      case "lastName":
        return value.trim() ? "" : "Last Name required";

      case "email":
        if (!value.trim()) return "Email required";
        if (!isValidEmail(value)) return "Invalid email format";
        return "";

      case "date":
        return value ? "" : "Date required";

      case "time":
        return value ? "" : "Time required";

      case "guests":
        return Number(value) >= 1
          ? ""
          : "Invalid guests";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedValue =
      name === "guests" ? Number(value) : value;

    setForm((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    const errorMessage = validateField(name, updatedValue);

    setErrors((prev) => {
      const updatedErrors = { ...prev };

      if (errorMessage) {
        updatedErrors[name] = errorMessage;
      } else {
        delete updatedErrors[name];
      }

      return updatedErrors;
    });

    if (name === "date") {
      dispatch({
        type: "UPDATE_TIMES",
        date: value,
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First Name required";
    if (!form.lastName) newErrors.lastName = "Last Name required";
    if (!form.email) {
      newErrors.email = "Email required";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.date) newErrors.date = "Date required";
    if (!form.time) newErrors.time = "Time required";
    if (form.guests < 1) newErrors.guests = "Invalid guests";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmailBlur = () => {
    setErrors((prev) => {
      const updatedErrors = { ...prev };

      if (!form.email) {
        updatedErrors.email = "Email required";
      } else if (!isValidEmail(form.email)) {
        updatedErrors.email = "Invalid email format";
      } else {
        delete updatedErrors.email;
      }

      return updatedErrors;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addBooking(form);
      submitForm(form);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="firstName">
        First Name
        <input
          id="firstName"
          name="firstName"
          type="text"
          required
          minLength={2}
          aria-invalid={!!errors.firstName}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <span id="firstName-error" role="alert">{errors.firstName}</span>}
      </label>

      <label htmlFor="lastName">
        Last Name
        <input
          id="lastName"
          name="lastName"
          type="text"
          required
          minLength={2}
          aria-invalid={!!errors.lastName}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <span id="lastName-error" role="alert">{errors.lastName}</span>}
      </label>

      <label htmlFor="email">
        Email
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          value={form.email}
          onChange={handleChange}
          onBlur={handleEmailBlur}
        />
        {errors.email && <span id="email-error" role="alert">{errors.email}</span>}
      </label>

      <label htmlFor="date">
        Date
        <input
          id="date"
          name="date"
          type="date"
          required
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "date-error" : undefined}
          value={form.date}
          onChange={handleChange}
        />
        {errors.date && <span id="date-error" role="alert">{errors.date}</span>}
      </label>

      <label htmlFor="time">
        Time
        <select
          id="time"
          name="time"
          required
          value={form.time}
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? "time-error" : undefined}
          onChange={handleChange}
        >
          <option value="">Select time</option>

          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && <span id="time-error" role="alert">{errors.time}</span>}
      </label>

      <label htmlFor="guests">
        Guests
        <input
          type="number"
          name="guests"
          min="1"
          max="8"
          required
          value={form.guests}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="occasion">
        Occasion
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
        >
          <option>Hunger</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Promotion</option>
        </select>
      </label>

      <button className="btn-primary" type="submit" aria-label="Confirm reservation" disabled={Object.keys(errors).length > 0}>Confirm Reservation</button>
      <div aria-live="polite">
        {Object.keys(errors).length > 0 && "Please fix the errors above"}
      </div>
    </form>
  );
}

export default BookingForm;