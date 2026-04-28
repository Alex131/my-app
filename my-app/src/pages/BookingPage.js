import { Link } from "react-router-dom";
import Homeicon from '../images/homeicon.svg'
import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <div className="booking-page-header">
        <Link to="/">
          <img src={Homeicon} alt="Home icon"/>
          Back
        </Link>
        <h2>Reserve a Table</h2>
      </div>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;