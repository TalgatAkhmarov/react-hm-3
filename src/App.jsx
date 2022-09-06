import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Header from './components/Header/Header';
import Contacts from './Pages/Contacts/Contacts';
import SignIn from './Pages/SignIn/SignIn';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
      
    </div>
  );
}

export default App;
