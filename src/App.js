import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import HomePage from './Pages/HomePage/HomePage';
import VocabularyPage from './Pages/VocabularyPage/VocabularyPage';
import VocabularyByCategory from './Pages/VocabularyPage/VocabularyByCategory/VocabularyByCategory';
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
               <Route path="/" element={
                  <>
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
               <Route path="/vocabulary" element={
                  <>
                     <Banner />
                     <VocabularyPage />
                  </>
               }>
               </Route>
            </Routes>
            <Routes>
               <Route path="/vocabularybycategory" element={
                  <>
                     <Banner />
                     <VocabularyByCategory />
                  </>
               }>
                  
               </Route>
            </Routes>
            <Footer />
         </BrowserRouter>
         <ToastContainer className="toast-position"
            position="top-center"></ToastContainer>
      </div>
   );
}

export default App;
