import React, { Suspense } from 'react'
import './assets/scss/portal.scss'
import * as bootstrap from 'bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProtectedRoute } from './ProtectRoute';
import ScrollToTop from './ScrollToTop';
import { HistoryRouter, history } from './history';
import jwtDecode from 'jwt-decode';
import Loading from './components/Loading';


// Containers
const DefaultLayout = React.lazy(() => import('./components/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/login/Login'))
const Employees = React.lazy(() => import('./views/employees/Employees'))
const NoMatch = React.lazy(() => import('./views/404'))

const verifyAuth = () => {

  try {
    const accessToken = jwtDecode(localStorage?.accessToken)
    const refreshToken = jwtDecode(localStorage?.refreshToken)
    const currentTime = Date.now() / 1000;
    if (accessToken.exp < currentTime && refreshToken.exp < currentTime) {
      return false
    }
  } catch (error) {
    return false
  }
  return true
  
}

function App() {

  return (
    // <BrowserRouter>
    <HistoryRouter history={history} >
      <Suspense fallback={Loading}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            // <ProtectedRoute isAuth={verifyAuth}>
              <DefaultLayout />
            // </ProtectedRoute>
          }>
            <Route index element={<Employees />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </HistoryRouter>
    // </BrowserRouter>
  );
}

export default App;
