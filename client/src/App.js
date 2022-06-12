import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import LogIn from "./pages/AuthForm/LogIn";
import SignUp from "./pages/AuthForm/SignUp";
import Browse from "./pages/Browse/Browse";
import Account from "./pages/Account/Account";
import LoggedIn from "./components/ProtectedRoutes/LoggedIn";
import NoLoggedIn from "./components/ProtectedRoutes/NoLoggedIn";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <LoggedIn>
                <Home />
              </LoggedIn>
            }
          />
          <Route
            path="/login"
            element={
              <LoggedIn>
                <LogIn />
              </LoggedIn>
            }
          />
          <Route
            path="/signup"
            element={
              <LoggedIn>
                <SignUp />
              </LoggedIn>
            }
          />
          <Route
            path="/browse"
            element={
              <NoLoggedIn>
                <Browse />
              </NoLoggedIn>
            }
          />
          <Route
            path="/account"
            element={
              <NoLoggedIn>
                <Account />
              </NoLoggedIn>
            }
          />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </Router>
  );
}

export default App;
