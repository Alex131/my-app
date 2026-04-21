function Card({ title, price, text }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>Title <span>Price</span></h3>
        <p>Text</p>
        <button>Order a delivery</button>
      </div>
    </div>
  );
}

export default Card;