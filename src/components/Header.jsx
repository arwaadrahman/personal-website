import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Header() {
    return (
        <header className="header">
            <Link className="logo" to="/" aria-label="Home">
                AR
            </Link>

            <nav className="mainNav" aria-label="Main navigation">
                <Link to="/">Home</Link>

                <div className="navDropdown">
                    <button type="button">Projects ▾</button>

                    <div className="dropdownMenu">
                        {projects.map((project) => (
                            <Link key={project.slug} to={`/projects/${project.slug}`}>
                                {project.shortTitle}
                            </Link>
                        ))}
                    </div>
                </div>

                <Link to="/coursework">Coursework</Link>
                <Link to="/about">About</Link>
            </nav>

            <div className="navActions">
                <a
                    className="actionButton githubButton"
                    href="https://github.com/arwaadrahman"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>

                <a
                    className="actionButton linkedinButton"
                    href="https://www.linkedin.com/in/arwaad/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>

                <a
                    className="actionButton resumeButton"
                    href="/Arwaad_Rahman_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume
                </a>
            </div>
        </header>
    );
}

export default Header;