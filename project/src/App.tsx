import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Contact } from './pages/Contact';
import { Terms } from './pages/Terms';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}

export default App;