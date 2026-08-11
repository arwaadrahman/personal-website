const projects = [
    {
        title: "Policy/Data Visualization Project with ML",
        status: "Planned",
        description:
            "A data-focused project exploring a public policy question through cleaning, analysis, visual storytelling, and a simple machine learning model.",
        tools: ["Python", "Data analysis", "Machine learning", "Visualization"],
    },
    {
        title: "Sports Analytics Project",
        status: "Planned",
        description:
            "An analytics project using sports data to identify trends, compare players or teams, and communicate insights through clear visuals.",
        tools: ["Python", "Statistics", "Sports data", "Charts"],
    },
    {
        title: "Solitaire Card Game",
        status: "Planned",
        description:
            "An interactive card game project focused on React state, game rules, user interactions, and clean front-end design.",
        tools: ["React", "JavaScript", "Game logic", "UI"],
    },
];

function Projects() {
    return (
        <section className="section" id="projects">
            <div className="sectionIntro">
                <p className="sectionLabel">Projects</p>
                <h2>Projects in progress</h2>
                <p>
                    These are early project directions I plan to build out as I continue
                    developing my programming, data, and design skills.
                </p>
            </div>

            <div className="projectGrid">
                {projects.map((project) => (
                    <article className="projectCard" key={project.title}>
                        <div className="cardTop">
                            <span className="status">{project.status}</span>
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <div className="toolList">
                            {project.tools.map((tool) => (
                                <span key={tool}>{tool}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;