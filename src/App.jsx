import './App.css'
import Home from './sections/home/Home'
import Knowledge from './sections/knowledge/Know'
import Projects from './sections/projects/Projects'
import Tab from './sections/tab/Tab'

function App() {
  return (
    <>
      <Tab />
      <div className="container-rigth">
        <Home />
        <Projects />
        <Knowledge />
      </div>
    </>
  )
}

export default App
