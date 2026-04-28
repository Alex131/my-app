import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="confirmed">
      <h2>Reservation Confirmed</h2>
      <p>Your reservation has been successfully submitted.</p>
      <p>Feel free to browse our site and take a look at out meals.</p>
      <Link to="/" className="btn-primary">Home</Link>
    </section>
  );
}

export default ConfirmedBooking;