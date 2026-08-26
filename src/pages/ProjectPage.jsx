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

    const directionHeading =
        project.statusType === "in-progress" ? "What I am working on" : "Planned direction";

    const directionCopy =
        project.statusType === "in-progress"
            ? "This project is actively being developed. As the work becomes more complete, I will add concrete results, screenshots, implementation decisions, and a short reflection on what I learned."
            : "This is a project I intend to develop as I build the relevant technical skills. It is listed here as planned work rather than as a completed portfolio piece.";

    return (
        <main className="contentPage">
            <section className={`projectFrame ${projectStatusClass}`}>
                <div className="projectPageInner">
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
                        <h2>{directionHeading}</h2>
                        <p>{directionCopy}</p>
                    </div>

                    <Link className="pageButton" to="/">
                        Back to homepage
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default ProjectPage;
