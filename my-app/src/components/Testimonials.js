import testimonialsData from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const testimonials =
    testimonialsData.default || testimonialsData;

  if (!Array.isArray(testimonials)) {
    console.error("Not an array:", testimonials);
    return null;
  }

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>

      <div className="testimonial-cards">
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;