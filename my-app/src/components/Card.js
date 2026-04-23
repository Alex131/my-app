function Card({ title, price, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3>
          {title} <span>{price}</span>
        </h3>
        <p>{description}</p>
        <button>Order a delivery</button>
      </div>
    </div>
  );
}

export default Card;