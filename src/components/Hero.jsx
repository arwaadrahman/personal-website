function Hero() {
    const tagline =
        "UW student building projects at the intersection of technology, policy, and human-centered systems.";

    return (
        <section className="hero" id="top">
            <p className="eyebrow">Student portfolio</p>

            <h1>Arwaad Rahman</h1>

            <p className="heroText">{tagline}</p>

            <div className="heroButtons">
                <a href="#projects">View Projects</a>
                <a href="#coursework">Coursework</a>
                <a href="#contact">Resume & Links</a>
            </div>
        </section>
    );
}

export default Hero;