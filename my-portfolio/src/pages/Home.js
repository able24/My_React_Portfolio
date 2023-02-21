
import Header from '../components/Header';
import Footer from '../components/Footer';
import Picture from '../assets/Avatar1.jpg';
import Button from 'react-bootstrap/Button';
import './Home.css';



function Home() {
  return (
    <>
      <Header />

      <section className="intro">
        <div className="brand">
          <h4>HELLO THERE! 👋 I'M</h4>
          <h1>Abel Egbele</h1>
          <h4>SOFTWARE & FRONTEND DEVELOPER | NETWORK ENGINEER </h4>
          <p>I'm a professional software and frontend developer with IP networking skills based in the UK.</p>
          <a href= 'https://drive.google.com/file/d/1yX_mPnkQZsveYqA2Zx7EF3vLU9VTVJOV/view?usp=share_link' target= '_blank'>
            <Button>MY CV</Button>
          </a>
        </div>

        <div className="image">
          <img src={Picture} alt="Picture" />

        </div>
      </section>

      <section className="about">
        <h1 id="me">About Me</h1>
        <p>I am Abel Egbele, I live in England UK. I am a software/frontend developer with IP Networking skills.<br></br>
        I have hands on experience with the following technologies - HTML, CSS, JavaScript, JQuery, Bootstrap,<br></br>
        Node js, React js and IP Networking. I have considerable number of years as a freelancer and I'm open to<br></br>
        both freelancing, project-based, contract and permanent roles. You can use the contact section to reach out<br></br>
        to me for more information.</p>


      </section>

      <Footer />

    </>
  );
}

export default Home;