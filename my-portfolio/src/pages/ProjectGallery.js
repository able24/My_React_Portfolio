import {useNavigate} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../Project.json';

//console.log(Projects);

const style = {
  div: {
    margin: '3% 20%',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    rowGap: '5%',

  },

  img: {
    width: '300px',
    height: '300px',
    opacity: '0.9',
    border: 'solid 1px #020281',
    borderRadius: '7px',
    cursor: 'pointer',
  }

}

function ProjectGallery() {

  const navigate = useNavigate();

  const navigateToProject = () => {
    navigate('/project');
  };


  return (
    <>
      <Header />

      <div style = {style.div}>
        {Projects.map(
          (picture, i) =>
            //console.log(picture);

            <img onClick={navigateToProject} 
            style = {style.img} key={i} 
            src={picture.image} alt={picture.alt} />)}
      </div>

      <Footer />

    </>
  );
}

export default ProjectGallery;