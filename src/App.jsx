import Hero from "./components/Hero/Hero";
import Language from "./components/Language/Language";
import Navbar from "./components/Navbar/Navbar";
import thirdImage from './assets/thirdImage.png';
import secImage from './assets/secImage.png';
import Vocabulary from "./components/Vocabulary/Vocabulary";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Language image={thirdImage} title='Learn a language in a playful way' description='Make learning more fun with mini games' />
    <Vocabulary />
    <Language image={secImage} title='Watch your progress everyday' description='Save statistics of your achievements, words learned, and your mistakes'>
    <button type='button' className='btn'>Statistics</button>
    </Language>
    <Footer />
    </>
  )
}

export default App
