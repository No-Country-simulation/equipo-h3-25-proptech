import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


/* ::: PAGES ::: */

import Home from "./pages/home"
import Layout from "./components/layout"
import Login from "./pages/login"
import RegisterStep1 from "./pages/register/step1"
import RegisterStep2 from "./pages/register/step2"
import RegisterStep3 from "./pages/register/step3"
import AboutUs from "./pages/aboutUs"
import Help from "./pages/help"
import ScrollToTop from "./helpers/scrollToTop"
import Users from "./pages/users"
import Financing from "./pages/financing"

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register/step1" element={<RegisterStep1 />}></Route>
            <Route path="/register/step2" element={<RegisterStep2 />}></Route>
            <Route path="/register/step3" element={<RegisterStep3 />}></Route>
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route path="/help" element={<Help />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/financing" element={<Financing />}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
