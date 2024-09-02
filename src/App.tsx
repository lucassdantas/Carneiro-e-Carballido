import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from '@/pages/Home';
import './App.css'
import { pages, PageType } from '@/utils/constants/pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        {pages.map((page:PageType) => (
          <Route
            path={page.url}
            element={page.component}
          />
        ))}
        </Routes>
      </Router>
  )
}

export default App
