import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import AppNav from './Components/Navbar/AppNav';

function App() {
  return (
    <div className="App">
      <AppNav />
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
