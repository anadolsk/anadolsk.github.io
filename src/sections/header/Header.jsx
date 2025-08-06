import './header.css'
import HeaderImage from '../../assets/winter-portrait.JPG'
import data from './data'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile'>
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Alana Nadolski</h3>
        <p>
          Hi there! I am a hardworking Statistics and Computer Science student with a passion for using data to improve the lives of others. Scroll for more about me!
        </p>
        <div className='header__cta'>
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