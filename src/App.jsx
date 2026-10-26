import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './componant/Header/Header';
import Home from './pages/Home';
import Footer from './componant/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;