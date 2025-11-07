import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import PortfolioLanding from './PortfolioLanding'
import { _Header } from './components/_Header'
import BlogDetail from './pages/BlogDetail'

function App() {
  return (
    <>
      <Router>
        <div className='min-h-screen font-sans bg-gray-50 text-gray-800'>
          {/* Top navigation */}
          <_Header />
          <Routes>
            <Route path="/" element={<PortfolioLanding />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
          {/* Footer */}
          <footer className='text-center text-sm text-gray-500 py-6'>
            @ {new Date().getFullYear()} Michelle Nguyen
          </footer>
        </div>
      </Router>

    </>
  )
}

export default App
