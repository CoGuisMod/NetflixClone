import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NoLoggedIn from "./components/ProtectedRoutes/NoLoggedIn";
import LoggedIn from "./components/ProtectedRoutes/LoggedIn";
import { AuthContextProvider } from "./context/AuthContext";
import Browse from "./pages/Browse/Browse";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Sign/SignIn";
import SignUp from "./pages/Sign/SignUp";

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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/browse"
            element={
              <NoLoggedIn>
                <Browse />
              </NoLoggedIn>
            }
          />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
