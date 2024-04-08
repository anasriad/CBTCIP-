import Private from "./components/Private"
import Login from "./pages/Login"
import ManagerHome from "./pages/Maneger/Home"
import Tracker from "./pages/Maneger/Track"
import Landing from "./pages/landing"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/manager" element={<Private />}>
            <Route index element={<Navigate to='/manager/Home' />} />
            <Route path="Home" element={<ManagerHome />} />
            <Route path="tracker" element={<Tracker/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
