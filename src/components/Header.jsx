import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { coursework } from "../data/coursework";

function Header() {
    return (
        <header className="header">
            <Link className="logo" to="/" aria-label="Home">
                AR
            </Link>

            <nav className="navLinks" aria-label="Main navigation">
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

                <div className="navDropdown">
                    <button type="button">Coursework ▾</button>

                    <div className="dropdownMenu">
                        {coursework.map((item) => (
                            <Link key={item.slug} to={`/coursework#${item.slug}`}>
                                {item.area}
                            </Link>
                        ))}
                    </div>
                </div>

                <Link to="/about">About</Link>

                <a
                    className="resumeNav"
                    href="/Arwaad_Rahman_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume
                </a>
            </nav>
        </header>
    );
}

export default Header;