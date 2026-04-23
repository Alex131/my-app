import Mario from '../images/MarioAdrianA.jpg'
import Adrian from '../images/MarioAdrianB.jpg'

function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>

        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
          sunt nostrud amet.
        </p>

        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit.
        </p>
      </div>

      <div className="about-images">
        <img src={Adrian} alt="chef" className="img-top" />
        <img src={Mario} alt="chef" className="img-bottom" />
      </div>
    </section>
  );
}

export default About;