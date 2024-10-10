import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import AppNavbar from "./components/AppNavbar";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import MovieView from "./pages/MovieView";

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });
  function unsetUser() {
    localStorage.clear();
  }
  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <AppNavbar />
          <Container>
            <Routes>
              {/* ROUTE HERE */}
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/movies/:id" element={<MovieView />} />
              {/* <Route path="*" element={<Error />} /> */}
            </Routes>
          </Container>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
