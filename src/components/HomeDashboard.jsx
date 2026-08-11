import { useState } from "react";
import { projects } from "../data/projects";
import DashboardCard from "./DashboardCard";
import Currently from "./Currently";

function HomeDashboard() {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <main className="homePage">
            <section className="homeIntro glassPanel">
                <p className="sectionLabel">UW Student Portfolio</p>

                <h1>Arwaad Rahman</h1>

                <p className="introText">
                    Building projects across technology, policy, data, and interactive
                    systems.
                </p>

                <div className="quickLinks">
                    <a
                        href="https://github.com/arwaadrahman"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/arwaad/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="/Arwaad_Rahman_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </section>

            <section className="menuBoard" aria-label="Featured project menu">
                {projects.map((project) => (
                    <DashboardCard
                        key={project.slug}
                        project={project}
                        isHovered={hoveredProject === project.slug}
                        isDimmed={hoveredProject !== null && hoveredProject !== project.slug}
                        onMouseEnter={() => setHoveredProject(project.slug)}
                        onMouseLeave={() => setHoveredProject(null)}
                    />
                ))}
            </section>

            <Currently />
        </main>
    );
}

export default HomeDashboard;