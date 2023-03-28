import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home/Home";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import ListAllImages from "./components/ListAllImages/ListAllImages";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<ImageUploader />} />
        <Route path="/imagens" element={<ListAllImages />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
