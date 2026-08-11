function Header() {
    return (
        <header className="header">
            <a className="logo" href="#top">
                AR
            </a>

            <nav className="navLinks" aria-label="Main navigation">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#coursework">Coursework</a>
                <a href="#contact">Links</a>
            </nav>
        </header>
    );
}

export default Header;