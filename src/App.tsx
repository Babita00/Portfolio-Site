import { MotionConfig } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { ScrollManager } from './components/layout/ScrollManager';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <ScrollManager />
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none focus-visible:ring-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </MotionConfig>
    </BrowserRouter>
  );
}

export default App;
