import './header.css'
import HeaderImage from '../../assets/header.jpg'
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
          catchy slogan/hello
        </p>
        <div className='header__cta'>
          <a href='#contact' className='btn primary'>Let's Talk</a>
          <a href='#portfolio' className='btn light'>My Work</a>
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