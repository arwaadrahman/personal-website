import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
    const { projectSlug } = useParams();

    const project = projects.find((item) => item.slug === projectSlug);

    if (!project) {
        return (
            <main className="contentPage">
                <section className="pageHeader glassPanel">
                    <p className="sectionLabel">Project not found</p>
                    <h1>That project does not exist yet.</h1>

                    <Link className="learnMore" to="/">
                        Back home
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="contentPage">
            <section className="pageHeader glassPanel">
                <p className="sectionLabel">{project.status}</p>

                <h1>{project.title}</h1>

                <p>{project.details}</p>

                <div className="tileTools pageTools">
                    {project.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                    ))}
                </div>

                <div className="projectNotes">
                    <h2>Planned direction</h2>

                    <p>
                        This page will eventually include the project goal, process,
                        screenshots, technical decisions, GitHub link, and final reflection.
                    </p>
                </div>

                <Link className="learnMore" to="/">
                    Back to dashboard
                </Link>
            </section>
        </main>
    );
}

export default ProjectPage;