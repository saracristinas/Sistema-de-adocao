import "./Components/Login/Login.css";
import "./Components/Cadastro/Cadastro.css";
import "./Components/Home/Home.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Cadastro from "./Components/Cadastro/Cadastro";
import Home from "./Components/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route
          path="/home"
          element={
            <Home
              username={localStorage.getItem("nome")}
              onLogout={() => {
                localStorage.removeItem("nome");
                localStorage.removeItem("username");
                window.location.href = "/login";
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
