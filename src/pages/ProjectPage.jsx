import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectPage() {
    const { projectSlug } = useParams();
    const project = projects.find((item) => item.slug === projectSlug);

    if (!project) {
        return (
            <main className="contentPage">
                <section className="pagePanel">
                    <p className="eyebrow">Project not found</p>
                    <h1>That project does not exist yet.</h1>

                    <Link className="pageButton" to="/">
                        Back home
                    </Link>
                </section>
            </main>
        );
    }

    const projectStatusClass =
        project.statusType === "in-progress" ? "projectInProgress" : "projectPlanned";

    const labelStatusClass =
        project.statusType === "in-progress" ? "statusInProgressLabel" : "statusPlannedLabel";

    return (
        <main className="contentPage">
            <section className={`pagePanel projectPagePanel ${projectStatusClass}`}>
                <div className="projectStatusBanner">
                    <span className={labelStatusClass}>{project.status}</span>
                </div>

                <p className="eyebrow">Project</p>

                <h1>{project.title}</h1>

                <p className="pageLead">{project.details}</p>

                <div className="tagRow pageTags">
                    {project.tools.map((tool) => (
                        <span key={tool}>{tool}</span>
                    ))}
                </div>

                <div className="pageSection">
                    <h2>Planned direction</h2>

                    <p>
                        This page will eventually include the project goal, process,
                        screenshots, technical decisions, GitHub link, and final reflection.
                    </p>
                </div>

                <Link className="pageButton" to="/">
                    Back to homepage
                </Link>
            </section>
        </main>
    );
}

export default ProjectPage;