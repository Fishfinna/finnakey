import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

// components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
