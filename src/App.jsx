import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeDashboard from "./components/HomeDashboard";
import CustomCursor from "./components/CustomCursor";
import ProjectPage from "./pages/ProjectPage";
import CourseworkPage from "./pages/CourseworkPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Header />

      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/projects/:projectSlug" element={<ProjectPage />} />
        <Route path="/coursework" element={<CourseworkPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;