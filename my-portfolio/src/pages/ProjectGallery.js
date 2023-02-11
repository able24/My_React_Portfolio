import Header from '../components/Header';
import Footer from '../components/Footer';
import Avatar from '../assets/Avatar.jpg';
import Avatar1 from '../assets/Avatar1.jpg';

const style = {
  width: '100px',
  height: '100px'
}

function ProjectGallery() {
  const pictures = [Avatar, Avatar1];
  
  return (
    <>
    <Header />

  <div>
    {pictures.map(
      picture => 
     <img style={style} src= {picture}/>)}
  </div>
    
    <Footer />
      
    </>
  );
}

export default ProjectGallery;