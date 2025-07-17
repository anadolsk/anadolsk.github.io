import './about.css'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import { FiDownload } from "react-icons/fi"
import Card from '../../components/Card'
import data from './data'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About"/>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
              {
                data.map(item => ( 
                  <Card key={item.id} className= 'about__card'>
                    <span className='about__card-icon'>{item.icon}</span>
                    <h5>{item.title}</h5>
                    <small>{item.desc}</small>
                  </Card>
                ))
              }
          </div>
          <p> paragraph about me</p>
          <p> another paragraph about me</p>
          <a href={CV} download className='btn primary'>Download Resume <FiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About