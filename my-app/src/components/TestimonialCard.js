function TestimonialCard({ name, rating, text, image }) {
  return (
    <div className="testimonial-card">
      <p>{"⭐".repeat(rating)}</p>

      <div className="user">
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>

      <p>{text}</p>
    </div>
  );
}

export default TestimonialCard;