import Salad from '../images/greeksalad.jpg'
import Bruschetta from '../images/bruschetta.png'
import Dessert from '../images/lemondessert.jpg'

const specials = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: Salad,
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: Bruschetta,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: Dessert,
  },
];

export default specials;