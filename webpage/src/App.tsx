import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import PortfolioLanding from './PortfolioLanding'
import { _Header } from './components/_Header'
import BlogDetail from './pages/BlogDetail'
import { _Footer } from './components/_Footer'
import Gallery from './pages/Gallery'
import ScrollToHash from './util/SrollToHash'

function App() {
  
  return (
    <>
      <Router>
        <ScrollToHash />
        <div className='min-h-screen font-sans bg-gray-50 text-gray-800'>
          {/* Top navigation */}
          <_Header />
          <Routes>
            <Route path="/" element={<PortfolioLanding />} />
            <Route path="/artwork" element={<Gallery />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
          {/* Footer */}
          <_Footer />
          
        </div>
      </Router>

    </>
  )
}

export default App
