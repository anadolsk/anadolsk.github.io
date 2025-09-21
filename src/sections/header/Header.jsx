import { useEffect } from 'react'
import HeaderImage from '../../assets/winter-portrait.JPG'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile' data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3 data-aos="fade-up"> Alana Nadolski</h3>
        <p data-aos="fade-up"> 
          Hi there! I am a hardworking Statistics and Computer Science student with a passion for using data to improve the lives of others. Scroll for more about me!
        </p>
        <div className='header__cta' data-aos="fade-up">
          <a href='#contact' className='btn primary'>I've seen enough - Let's Talk</a>
          <a href='#portfolio' className='btn light'>Let's skip to the good stuff - My Portfolio</a>
        </div>
        <div className='header__socials'>
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' rel="noreferrer">
              {item.icon}</a>)
          }
      </div>
      </div>
    </header>
  )
}

export default Header