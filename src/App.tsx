import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { pages, PageType } from '@/utils/constants/pages';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {pages.map((page:PageType) => <Route path={page.url} element={page.component} />)}
      </Routes>
    </Router>
  )
}

export default App
