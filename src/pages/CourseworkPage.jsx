import { coursework } from "../data/coursework";

function CourseworkPage() {
    return (
        <main className="contentPage">
            <section className="pageHeader glassPanel">
                <p className="sectionLabel">Coursework</p>

                <h1>Coursework and technical growth</h1>

                <p>
                    This section will connect coursework to projects, skills, and evidence
                    of learning as I continue building the portfolio.
                </p>
            </section>

            <section className="pageGrid">
                {coursework.map((item) => (
                    <article className="detailCard glassPanel" id={item.slug} key={item.slug}>
                        <p className="sectionLabel">{item.area}</p>

                        <h2>{item.area}</h2>

                        <p>{item.details}</p>

                        <div className="relatedList">
                            <strong>Related projects</strong>

                            {item.relatedProjects.map((project) => (
                                <span key={project}>{project}</span>
                            ))}
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

export default CourseworkPage;