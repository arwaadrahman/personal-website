import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Header({ theme, onThemeToggle, onContactOpen }) {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);

    return (
        <header className="header">
            <Link className="namePlate" to="/about">
                Arwaad Rahman
            </Link>

            <nav className="mainNav" aria-label="Main navigation">
                <Link to="/">Home</Link>

                <div
                    className={`navDropdown ${isProjectsOpen ? "open" : ""}`}
                    onMouseEnter={() => setIsProjectsOpen(true)}
                    onMouseLeave={() => setIsProjectsOpen(false)}
                >
                    <button
                        type="button"
                        onClick={() => setIsProjectsOpen((current) => !current)}
                    >
                        Projects ▾
                    </button>

                    <div className="dropdownMenu">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                to={`/projects/${project.slug}`}
                                onClick={() => setIsProjectsOpen(false)}
                            >
                                {project.shortTitle}
                            </Link>
                        ))}
                    </div>
                </div>

                <Link to="/coursework">Coursework</Link>
            </nav>

            <div className="navActions">
                <button className="actionButton modeButton" type="button" onClick={onThemeToggle}>
                    {theme === "light" ? "☾" : "☀"}
                </button>

                <button className="actionButton connectButton" type="button" onClick={onContactOpen}>
                    Connect
                </button>
            </div>
        </header>
    );
}

export default Header;