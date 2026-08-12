import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeDashboard from "./components/HomeDashboard";
import CustomCursor from "./components/CustomCursor";
import ContactModal from "./components/ContactModal";
import ProjectPage from "./pages/ProjectPage";
import CourseworkPage from "./pages/CourseworkPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [isContactOpen, setIsContactOpen] = useState(false);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  return (
    <BrowserRouter>
      <div className={`appShell ${theme === "dark" ? "themeDark" : "themeLight"}`}>
        <CustomCursor />

        <Header
          theme={theme}
          onThemeToggle={toggleTheme}
          onContactOpen={() => setIsContactOpen(true)}
        />

        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/projects/:projectSlug" element={<ProjectPage />} />
          <Route path="/coursework" element={<CourseworkPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;