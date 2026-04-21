import Card from './Card'

function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button className="btn-primary">Online Menu</button>
      </div>

      <div className="cards">
        <Card
          title="Greek Salad"
          price="$12.99"
          text="Crispy lettuce, peppers, olives and feta cheese."
        />
        <Card
          title="Bruschetta"
          price="$5.99"
          text="Grilled bread with garlic and olive oil."
        />
        <Card
          title="Lemon Dessert"
          price="$5.00"
          text="Grandma’s traditional lemon recipe."
        />
      </div>
    </section>
  );
}

export default Specials;