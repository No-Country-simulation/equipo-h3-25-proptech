import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import 'react-material-symbols/sharp';

/* ::: PAGES ::: */

import Home from "./pages/home"
import Layout from "./components/common/layout"
import Login from "./pages/login"
import RegisterStep1 from "./pages/registerSteps/step1"
import RegisterStep2 from "./pages/registerSteps/step2"
import RegisterStep3 from "./pages/registerSteps/step3"
import AboutUs from "./pages/aboutUs"
import Help from "./pages/help"
import ScrollToTop from "./helpers/scrollToTop"
import Users from "./pages/users"
import Financing from "./pages/financing"
import FinancingCalculator from "./pages/financingCalculator"
import Success from "./pages/registerSteps/success"
import Dashboard from "./pages/dashboard/dashboard"
import DashboardLayout from "./components/dashboard/dashboardLayout"
import Investment from "./pages/investment"
import InvestmentDashboard from "./pages/dashboard/investmentDashboard"
import FinancingDashboard from "./pages/dashboard/financingDashboard"
import HttpRequestTester from "./pages/HttpRequestTester";
import { RegisterProvider } from "./context/registerContext"
import NotFoundPage from "./pages/404";
import InvestmentSteps1 from "./pages/investmentSteps/investmentStep1";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Layout>
          <RegisterProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/acerca-de" element={<AboutUs />}></Route>
              <Route path="/ayuda" element={<Help />}></Route>
              <Route path="/usuarios" element={<Users />}></Route>
              <Route path="/inversion" element={<Investment />}></Route>
              <Route path="/financiamiento" element={<Financing />}></Route>
              <Route path="/calculadora-financiamiento" element={<FinancingCalculator />}></Route>
              <Route path="/test" element={<HttpRequestTester />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register/paso1" element={<RegisterStep1 />}></Route>
              <Route path="/register/paso2" element={<RegisterStep2 />}></Route>
              <Route path="/register/paso3" element={<RegisterStep3 />}></Route>
              <Route path="/register/exito" element={<Success />}></Route>
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Navigate to="/dashboard/perfil" />}></Route>
                <Route path="/dashboard/perfil" element={<Dashboard />}></Route>
                <Route path="/dashboard/inversion" element={<InvestmentDashboard />}></Route>
                <Route path="/dashboard/inversion/requisitos" element={<InvestmentDashboard />}></Route>
                <Route path="/dashboard/financiamiento" element={<FinancingDashboard />}></Route>
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </RegisterProvider>
        </Layout>
      </Router>
    </>
  )
}

export default App
