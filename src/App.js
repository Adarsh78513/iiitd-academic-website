import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Certificates from './pages/Certificates';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" index element={<Index />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/faq" element={<FAQ />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
