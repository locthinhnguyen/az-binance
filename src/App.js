import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Course from './pages/course/Course';
import Home from './pages/homepage/Home';

// import { CourseCrypto } from './pages/course/CourseCrypto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
