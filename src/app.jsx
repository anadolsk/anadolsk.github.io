import About from "./sections/about/About"
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header"
import Navbar from "./sections/navbar/Navbar"
import Portfolio from "./sections/portfolio/Portfolio";
import Services from './sections/services/Services';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import {useRef} from 'react'

const App = () => {
  const {themeState} = useThemeContext();

  const mainRef = useRef();
  
  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <Theme/>
        
    </main>
  )
}

export default App