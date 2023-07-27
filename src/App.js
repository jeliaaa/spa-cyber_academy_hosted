import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/AboutUs/AboutUs";
import Booking from "./Components/Booking/Booking";
import Services from "./Components/Services/Services"
import ContactUs from "./Components/ContactUs/ContactUs"
import Info from "./Components/ReusableComponents/InfoAfterArticle/Info"
import SuitesAndRooms from "./Components/SuitsAndRooms/SuitesAndRooms";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/booking" element={<Booking />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/article-info" element={<Info />} />
        <Route path="/suites-and-rooms" element={<SuitesAndRooms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
