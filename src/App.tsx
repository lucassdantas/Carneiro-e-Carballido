import { FloatWppButton } from './components/FloatWppButton'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={''}
        />
        <Route
          path="/contato"
          element={<Contact/>}
        />
        </Routes>
        <FloatWppButton/>
      </Router>
  )
}

export default App
