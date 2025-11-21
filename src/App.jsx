import OfficialLanding from './components/Landing/OfficialLanding';
import Wrapper from './components/Wrapper/Wrapper';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
      <BrowserRouter >
        <Routes>
          <Route path="/get-started" element={<Wrapper/>} />
          <Route path="/" element={<OfficialLanding />} />
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
