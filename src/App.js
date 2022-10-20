import React, { Suspense } from 'react'
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/scss/portal.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  HashRouter
} from "react-router-dom";
import { ProtectedRoute } from './ProtectRoute';
import ScrollToTop from './ScrollToTop';
import { HistoryRouter, history } from './history';
import jwtDecode from 'jwt-decode';
import Loading from './components/Loading';
import routes from './routes';


// Containers
const DefaultLayout = React.lazy(() => import('./components/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/login/Login'))
const NoMatch = React.lazy(() => import('./views/404'))

// const verifyAuth = () => {

//   try {
//     const accessToken = jwtDecode(localStorage?.accessToken)
//     const refreshToken = jwtDecode(localStorage?.refreshToken)
//     const currentTime = Date.now() / 1000;
//     if (accessToken.exp < currentTime && refreshToken.exp < currentTime) {
//       return false
//     }
//   } catch (error) {
//     return false
//   }
//   return true

// }

function App() {

  return (
    // <BrowserRouter>
    <HistoryRouter history={history}>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            // <ProtectedRoute isAuth={verifyAuth}>
            <DefaultLayout />
            // </ProtectedRoute>
          } >
            {routes.map((route, idx) => {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    name={route.app}
                    element={<route.element />}
                  />
                )
              )
            })}
          </Route>
          {/* <Route path="/" element={<Navigate to="dashboard" replace />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </HistoryRouter>
    // </BrowserRouter>
  );
}

export default App;
