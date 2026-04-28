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

  const validate = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = "First Name required";
    if (!form.lastName) newErrors.lastName = "Last Name required";
    if (!form.email) newErrors.email = "Email required";
    if (!form.date) newErrors.date = "Date required";
    if (!form.time) newErrors.time = "Time required";
    if (form.guests < 1) newErrors.guests = "Invalid guests";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;

    setForm({ ...form, date: selectedDate });

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(form);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        First Name
        <input
          id="firstName"
          name="firstName"
          type="text"
          aria-invalid={!!errors.firstName}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
          value={form.firstName}
          onChange={(e) =>
            setForm({ ...form, firstName: e.target.value })
          }
        />
        {errors.firstName && <span id="firstName-error" role="alert">{errors.firstName}</span>}
      </label>

      <label>
        Last Name
        <input
          id="lastName"
          name="lastName"
          type="text"
          aria-invalid={!!errors.lastName}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
          value={form.lastName}
          onChange={(e) =>
            setForm({ ...form, lastName: e.target.value })
          }
        />
        {errors.lastName && <span id="lastName-error" role="alert">{errors.lastName}</span>}
      </label>

      <label>
        Email
        <input
          id="email"
          name="email"
          type="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        {errors.email && <span id="email-error" role="alert">{errors.email}</span>}
      </label>

      <label>
        Date
        <input
          id="date"
          name="date"
          type="date"
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "date-error" : undefined}
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />
        {errors.date && <span id="date-error" role="alert">{errors.date}</span>}
      </label>

      <label>
        Time
        <select
          id="time"
          name="time"
          value={form.time}
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? "time-error" : undefined}
          onChange={(e) =>
            setForm({ ...form, time: e.target.value })
          }
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

      <label>
        Guests
        <input
          type="number"
          min="1"
          value={form.guests}
          onChange={(e) =>
            setForm({ ...form, guests: e.target.value })
          }
        />
      </label>

      <label>
        Occasion
        <select
          value={form.occasion}
          onChange={(e) =>
            setForm({ ...form, occasion: e.target.value })
          }
        >
          <option>Hunger</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Promotion</option>
        </select>
      </label>

      <button className="btn-primary" type="submit" aria-label="Confirm reservation">Confirm Reservation</button>
      <div aria-live="polite">
        {Object.keys(errors).length > 0 && "Please fix the errors above"}
      </div>
    </form>
  );
}

export default BookingForm;