import './App.css'
import Home from './sections/Home'
import Projects from './sections/Projects'
import Tab from './sections/Tab'

function App() {
  return (
    <>
      <Tab />
      <div className="container-rigth">
        <Home />
        <Projects />
      </div>
    </>
  )
}

export default App
