import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Certificates from './pages/Certificates';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" index element={<Index />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
