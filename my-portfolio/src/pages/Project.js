
import Card from 'react-bootstrap/Card';


import Header from '../components/Header';
import Footer from '../components/Footer';

const style = {
  div: {
    margin: '2%',
    marginLeft: '15%',
    marginRight: '25%',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    rowGap: '3%'
   
  },

  image: {

    width: '300px',
    height: '150px',
    borderBottom: 'solid 5px #020281',

  },

  card: {

    border: 'solid 1px #020281',
    borderRadius: '7px',
    width: '300px',
  
  },

  title: {
    fontSize: '20px',
    textAlign: 'center',
    
  },

  text: {
    padding: '7px',
    textAlign: 'left',
  },

  link: {
    marginRight: '10px',
    padding: '5px',
    textDecoration: 'none',
    color: '#020281',

  },

}

function Project(props) {

  return (
    <>
      <Header />

      <div className='project' style={style.div}>
        {props.work.map(
          (project, i) =>
            <Card className='card' style={style.card}>
              <Card.Img className='pictures' style={style.image} variant="top" key={i} src={project.image} />
              <Card.Body>
                <Card.Title style={style.title}><strong>{project.title}</strong></Card.Title>
                <Card.Text style={style.text}>
                  {project.description}
                </Card.Text>
                <Card.Link style={style.link} href={project.url} target='_blank'>Project Link</Card.Link>
                <Card.Link style={style.link} href={project.github} target='_blank'>GitHub Repo</Card.Link>
              </Card.Body>
            </Card>

        )}

      </div>


      <Footer />

    </>
  );
}

export default Project;