import Navbar from "./Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Components/Banner";
import "./style.css"
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
function App() {

  return (
    <>
      <div className="App">
        <Navbar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    </>
  )
}

export default App
