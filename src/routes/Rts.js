import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const Rts = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rts;