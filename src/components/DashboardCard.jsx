import { Link } from "react-router-dom";

function DashboardCard({ project, isHovered, isDimmed, onMouseEnter, onMouseLeave }) {
    return (
        <article
            className={`dashboardCard ${isHovered ? "isHovered" : ""} ${isDimmed ? "isDimmed" : ""
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="cardGlow" />

            <div className="cardContent">
                <span className="tileStatus">{project.status}</span>

                <h2>{project.shortTitle}</h2>

                <p>{project.description}</p>

                <div className="tileTools">
                    {project.tools.slice(0, 3).map((tool) => (
                        <span key={tool}>{tool}</span>
                    ))}
                </div>

                <Link className="learnMore" to={`/projects/${project.slug}`}>
                    Learn more
                </Link>
            </div>
        </article>
    );
}

export default DashboardCard;