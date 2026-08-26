import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function Header({ theme, onThemeToggle, onContactOpen }) {
    const [isProjectsOpen, setIsProjectsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);

    function closeMobileMenu() {
        setIsMobileMenuOpen(false);
        setIsProjectsOpen(false);
    }

    function openContactFromMenu() {
        onContactOpen();
        closeMobileMenu();
    }

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateHeader() {
            const currentScrollY = window.scrollY;
            const scrollDifference = currentScrollY - lastScrollY;

            if (currentScrollY < 80 || isMobileMenuOpen) {
                setIsHeaderHidden(false);
            } else if (scrollDifference > 8) {
                setIsHeaderHidden(true);
            } else if (scrollDifference < -8) {
                setIsHeaderHidden(false);
            }

            lastScrollY = currentScrollY;
            ticking = false;
        }

        function handleScroll() {
            if (!ticking) {
                window.requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMobileMenuOpen]);

    return (
        <header className={`header ${isHeaderHidden ? "headerHidden" : ""}`}>
            <Link className="namePlate" to="/about" onClick={closeMobileMenu}>
                Arwaad Rahman
            </Link>

            <Link className="mobileHomeButton" to="/" onClick={closeMobileMenu}>
                Home
            </Link>

            <nav
                className={`mainNav ${isMobileMenuOpen ? "mobileOpen" : ""}`}
                aria-label="Main navigation"
            >
                <Link to="/" onClick={closeMobileMenu}>
                    Home
                </Link>

                <div
                    className={`navDropdown ${isProjectsOpen ? "open" : ""}`}
                    onMouseEnter={() => setIsProjectsOpen(true)}
                    onMouseLeave={() => setIsProjectsOpen(false)}
                >
                    <button
                        type="button"
                        aria-expanded={isProjectsOpen}
                        aria-controls="project-navigation-menu"
                        onClick={() => setIsProjectsOpen((current) => !current)}
                    >
                        Projects ▾
                    </button>

                    <div className="dropdownMenu" id="project-navigation-menu">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                to={`/projects/${project.slug}`}
                                onClick={closeMobileMenu}
                            >
                                {project.shortTitle}
                            </Link>
                        ))}
                    </div>
                </div>

                <Link to="/coursework" onClick={closeMobileMenu}>
                    Coursework
                </Link>

                <button
                    className="mobileConnectNavButton"
                    type="button"
                    onClick={openContactFromMenu}
                >
                    Connect
                </button>
            </nav>

            <div className="navActions">
                <button
                    className={`actionButton modeButton ${theme === "dark" ? "modeButtonActive" : ""}`}
                    type="button"
                    onClick={onThemeToggle}
                    aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                >
                    ☾
                </button>

                <button className="actionButton connectButton" type="button" onClick={onContactOpen}>
                    Connect
                </button>
            </div>

            <button
                className="mobileMenuButton"
                type="button"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
                Menu
            </button>
        </header>
    );
}

export default Header;
