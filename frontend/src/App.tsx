import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


/* ::: PAGES ::: */

import Home from "./pages/home"
import Layout from "./components/layout"

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
