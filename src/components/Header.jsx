import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function MoonIcon() {
    return (
        <svg
            className="themeIcon"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <path
                d="M21 14.7A8.2 8.2 0 0 1 9.3 3a7.2 7.2 0 1 0 11.7 11.7Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function SunIcon() {
    return (
        <svg
            className="themeIcon"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="4.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
            />
            <path
                d="M12 2.5v3M12 18.5v3M4.8 4.8l2.1 2.1M17.1 17.1l2.1 2.1M2.5 12h3M18.5 12h3M4.8 19.2l2.1-2.1M17.1 6.9l2.1-2.1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        </svg>
    );
}

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
                        onClick={() => setIsProjectsOpen((current) => !current)}
                    >
                        Projects ▾
                    </button>

                    <div className="dropdownMenu">
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
                    className="modeButton"
                    type="button"
                    onClick={onThemeToggle}
                    aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                >
                    {theme === "light" ? <MoonIcon /> : <SunIcon />}
                </button>

                <button className="actionButton connectButton" type="button" onClick={onContactOpen}>
                    Connect
                </button>
            </div>

            <button
                className="mobileMenuButton"
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((current) => !current)}
            >
                Menu
            </button>
        </header>
    );
}

export default Header;