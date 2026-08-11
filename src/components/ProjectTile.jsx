function ProjectTile({ project, isActive, onClick }) {
    return (
        <button
            className={`projectTile ${isActive ? "activeTile" : ""}`}
            onClick={onClick}
            type="button"
        >
            <div className="tileStatus">{project.status}</div>
            <h3>{project.shortTitle}</h3>
            <p>{project.description}</p>

            <div className="tileTools">
                {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool}>{tool}</span>
                ))}
            </div>
        </button>
    );
}

export default ProjectTile;