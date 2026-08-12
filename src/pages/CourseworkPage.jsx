import { coursework } from "../data/coursework";

function CourseworkPage() {
    return (
        <main className="contentPage">
            <section className="pagePanel">
                <p className="eyebrow">Coursework</p>

                <h1>Coursework and technical growth</h1>

                <p className="pageLead">
                    Coursework connected to computer science, informatics, mathematics,
                    public policy, and project-based learning.
                </p>
            </section>

            <section className="courseworkGrid">
                {coursework.map((item) => (
                    <article className="courseworkCard" id={item.slug} key={item.slug}>
                        <p className="eyebrow">{item.area}</p>

                        <h2>{item.area}</h2>

                        <p>{item.details}</p>

                        <div className="courseList">
                            {item.courses.map((course) => (
                                <div
                                    className={`coursePill course-${course.statusType}`}
                                    key={course.code}
                                >
                                    <strong>{course.code}</strong>
                                    <span>{course.name}</span>
                                    <em>{course.status}</em>
                                </div>
                            ))}
                        </div>

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