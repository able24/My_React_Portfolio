import Header from '../components/Header';
import Footer from '../components/Footer';
import Picture from '../assets/Avatar1.jpg';
import Button from 'react-bootstrap/Button';
import './Home.css';

const style = {
  backgroundColor: "red"
}

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
        <Button>Find Out More</Button>
      </div>

      <div className="image">
        <img src={Picture} alt="Picture" />
        
      </div>
      </section>

      <section className="about">
        <h1 id="me">About Me</h1>
        <p>I am Abel Egbele, I live in England UK. I am a software/frontend developer with IP Networking skills.</p>
        

      </section>

      <Footer />

    </>
  );
}

export default Home;