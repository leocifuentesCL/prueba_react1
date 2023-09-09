import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'
import MiApi from './components/MiApi'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className="landing">
      <Navbar />
      <MiApi />
      </div>
    </>
  )
}

export default App
