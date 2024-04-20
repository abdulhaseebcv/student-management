import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import AddStudentPage from './Pages/AddStudentPage/AddStudentPage';
import EditStudentPage from './Pages/EditStudentPage/EditStudentPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add-student' element={<AddStudentPage />} />
        <Route path='/edit-student/:studentId' element={<EditStudentPage />} />
      </Routes>
    </div>
  );
}

export default App;
