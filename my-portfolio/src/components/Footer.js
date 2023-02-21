import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';

import './Footer.css';
function Footer() {
  return (
    <footer>
      <p><strong>&copy; Abel 2023</strong></p>
      <p>
        E: <a href='mailto:abledev93@gmail.com'>abledev93@gmail.com</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/abelegbele/" target='blank'>
          <img src={Linkedin} width='25px' alt="linkedin icon" />
        </a>
      </p>
      <p>
        <a href="https://github.com/able24" target='blank'>
          <img src={Github} width='25px' alt="linkedin icon" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;