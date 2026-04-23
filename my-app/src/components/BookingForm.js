import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

function BookingForm() {
  const { addBooking } = useBooking();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.date) newErrors.date = "Date required";
    if (!form.time) newErrors.time = "Time required";
    if (form.guests < 1) newErrors.guests = "Invalid guests";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    addBooking(form);
    navigate("/confirmed");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>
        Date
        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />
        {errors.date && <span>{errors.date}</span>}
      </label>

      <label>
        Time
        <input
          type="time"
          value={form.time}
          onChange={(e) =>
            setForm({ ...form, time: e.target.value })
          }
        />
        {errors.time && <span>{errors.time}</span>}
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
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>

      <button type="submit">Confirm Reservation</button>
    </form>
  );
}

export default BookingForm;