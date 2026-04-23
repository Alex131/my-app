import specials from "../data/specials";
import Card from "./Card";

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>Specials</h2>
        <a href="#" role="button" className="btn-primary">Online Menu</a>
      </div>

      <div className="cards">
        {specials.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Specials;