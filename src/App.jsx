
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Header from './componant/Header/Header';
import Home from './pages/Home';
import Footer from './componant/Footer/Footer';
import PopupForm from './componant/PopupForm/PopupForm';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>
          Pandoza Solutions | Digital Marketing & Web Development
        </title>
        <meta
          name="description"
          content="Pandoza Solutions helps businesses grow with digital marketing, SEO, web development, branding, PR, and creative design services."
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#052e54" />
      </Helmet>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/thank-you-headrform"
          element={<ThankYou />}
        />

        <Route
          path="/thank-you-enquiryformone"
          element={<ThankYou />}
        />

        <Route
          path="/thank-you-footerform"
          element={<ThankYou />}
        />
         <Route path="*" element={<NotFound /> } />
         <Route path="ThankYou" element={<ThankYou /> } />
      </Routes>
     

      <Footer />
      <PopupForm />
    </BrowserRouter>
  );
}

export default App;