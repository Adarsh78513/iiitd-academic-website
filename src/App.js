import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
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
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
