import Logo from '../images/Logo.svg'
import Nav from './Nav'

function Footer() {
  return (
    <>
      <footer>
        <img src={Logo} alt="little-lemon-logo"/>
        <section>
          <h5>Doormat Navigation</h5>
          <Nav/>
        </section>
        <section>
          <h5>Contact</h5>
          <p>Adress: Main Street 15</p>
          <p>Phone: 123456789</p>
          <p>Email: littlelemon@gmail.com</p>
        </section>
        <section>
          <h5>Social Media Links</h5>
          <a href="facebook.com">Facebook</a>
          <a href="instagram.com">Instagram</a>
        </section>
      </footer>
    </>
  );
}

export default Footer;