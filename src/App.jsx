import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import ImageUploader from "./components/ImageUploader/ImageUploader"
import ListAllImages from "./components/ListAllImages/ListAllImages"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<ImageUploader />} />
        <Route path="/imagens" element={<ListAllImages />} />
      </Routes>
    </Router>
  )
}

export default App
