import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import PortfolioLanding from './PortfolioLanding'
import { _Header } from './components/_Header'
import BlogDetail from './pages/BlogDetail'
import { _Footer } from './components/_Footer'
import Gallery from './pages/Gallery'
import ScrollToHash from './util/SrollToHash'
import { HubspotProvider } from 'next-hubspot';
import HubspotForm from './util/HubspotForm'

function App() {
  
  return (
    <>
    <HubspotProvider>
      
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
          
          <div className="flex flex-col items-center justify-center py-12 bg-white">
            <div className="hs-form-frame container"> <HubspotForm /></div>
            </div>
          {/* Footer */}
          <_Footer />
          
        </div>
      </Router>
     
    </HubspotProvider>

    </>
  )
}

export default App
