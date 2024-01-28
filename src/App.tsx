import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
