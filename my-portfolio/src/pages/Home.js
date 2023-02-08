import Header from '../components/Header';
import Footer from '../components/Footer';
import Picture from '../assets/Avatar.jpg';
import './Home.css';

function Home() {
  return (
    <>
      <Header />

      <section className="intro">
      <div className="brand">
        <h4>HELLO! 👋 I'M</h4>
        <h1>Abel Egbele</h1>
        <h4>SOFTWARE & FRONTEND DEVELOPER | NETWORK ENGINEER </h4>
        <p>I'm a professional software and frontend developer with IP networking skills based in the UK.</p>
        <button>Find Out More</button>
      </div>

      <div className="image">
        <img src={Picture} alt="Picture" />
        
      </div>

      </section>

      <Footer />

    </>
  );
}

export default Home;