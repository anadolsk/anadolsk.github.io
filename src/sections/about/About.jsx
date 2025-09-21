import './about.css'
import AboutImage from '../../assets/colosseum.jpeg'
import Resume from '../../assets/Nadolski_Resume_Fall2025.pdf'
import { FiDownload } from "react-icons/fi"
import Card from '../../components/Card'
import data from './data'

const About = () => {
  return (
    <section id="about" data-aos="fade-in"> 
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
          <p>I am a statistics major and computer science minor at Macalester College set to graduate in May 2026.
            After seeing so many misleading graphs and "facts" on social media, I was drawn to learning statistics which keyed me into 
            the power of numbers. Statistics inspired me to understand and apply these methods myself which allows me to use my knowledge for good. 
          </p>
          <p>Other academic interests I have include classical studies, GIS, and physics. 
            In my free time, I like to host regular gatherings with my friends to encourage community building. 
            As captain of the Macalester Varsity Water Polo team, a lot of my time is spent at practices and furthering our team goals, ultimately giving me experience in leadership and teamwork. </p>
          <a href={Resume} download className='btn primary'>Download Resume <FiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About