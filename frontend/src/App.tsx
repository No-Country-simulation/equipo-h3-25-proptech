import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { useContext } from "react"


/* ::: PAGES ::: */

import Home from "./pages/home"

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Router>
    </>
  )
}

export default App