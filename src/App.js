import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import HomePage from './Pages/HomePage/HomePage';
import { ToastContainer } from 'react-toastify';
function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={
                  <>
                     <Banner />
                     <HomePage />
                  </>
               } />
            </Routes>
            <Routes>
               <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Routes>
               <Route path="/register" element={<RegisterPage />} />
            </Routes>
         </BrowserRouter>
         <ToastContainer className="toast-position"
            position="top-center"></ToastContainer>
      </div>
   );
}

export default App;
