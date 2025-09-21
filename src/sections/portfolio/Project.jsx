import Card from '../../components/Card'



const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="Portfolio Project" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
          {project.demo && (
            <a href={project.demo} download className="btn sm" target="_blank" rel="noopener noreferrer" id="demo_button">View Project</a>
          )}
          <a href={project.github} download className="btn sm primary" target="_blank" rel="noopner noreferrer" id = "code_button">Code</a>
        </div>
    </Card>
  )
}


export default Project