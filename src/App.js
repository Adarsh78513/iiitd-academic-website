import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import AcademicTeam from './pages/AcademicTeam';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" index element={<Index />} />
          {/* <Route path="/academicTeam" element={<AcademicTeam />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
