import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Index from './pages/Index';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import Classrooms from './pages/Classrooms';
import Convocation from './pages/Convocation';
import Faculty from './pages/Faculty';
import ReportsStatistics from './pages/ReportsStatistics';
import Student from './pages/Student';
import StudentProjects from './pages/StudentProjects';
import AcademicTeam from './pages/AcademicTeam';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Index />} />
          <Route path="/academicTeam" element={<AcademicTeam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
