import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from './Components/registration';
import History from './Components/history';
import Update from './Components/update';
import Login from './Components/login';
import Contact from './Components/contact';
import About from './Components/aboutUs';

function App() {
  return (
     <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/reg' element={<Registration/>} />
          <Route path='/history' element={<History/>} />
          <Route path='/update/:id' element={<Update/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
