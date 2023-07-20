import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import HomePage from './Pages/HomePage/HomePage';
import VocabularyCategories from './Pages/VocabularyPage/VocabularyCategories/VocabularyCategories';
import VocabularyByCategory from './Pages/VocabularyPage/VocabularyByCategory';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
function App() {
   const isLoggedIn = useSelector(state => state.authentication.isLoggedIn);
   return (
      <div className="App">
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<>
                  <Banner />
                  <HomePage />
               </>
               } />
            </Routes>
            <Routes >
               <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <LoginPage />} />
            </Routes>
            <Routes>
               <Route path="/register" element={isLoggedIn ? <Navigate to="/" replace /> : <RegisterPage />} />
            </Routes>
            <Routes>
               <Route path="/vocabulary" element={<>
                  <Banner />
                  <VocabularyCategories />
               </>} />
               <Route path="/vocabularybycategory/:name" element={
                  <>
                     <Banner />
                     <VocabularyByCategory />
                  </>
               } />
            </Routes>
            <Footer />
         </BrowserRouter>
         <ToastContainer className="toast-position"
            position="top-center"></ToastContainer>
      </div>
   );
}

export default App;
