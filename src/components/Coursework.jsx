const coursework = [
    {
        area: "Computer Science",
        details:
            "Programming foundations, problem solving, Java, data structures, and software development practice.",
    },
    {
        area: "Mathematics",
        details:
            "Calculus, linear algebra, and quantitative reasoning for future work in data science and machine learning.",
    },
    {
        area: "Public Policy",
        details:
            "Policy analysis, social systems, and the connection between technology and public impact.",
    },
    {
        area: "Project-Based Learning",
        details:
            "A growing collection of course projects, personal tools, and applied technical work.",
    },
];

function Coursework() {
    return (
        <section className="section" id="coursework">
            <div className="sectionIntro">
                <p className="sectionLabel">Coursework</p>
                <h2>Relevant coursework</h2>
                <p>
                    I plan to connect this section to course-based projects as I continue
                    building stronger technical work.
                </p>
            </div>

            <div className="courseGrid">
                {coursework.map((course) => (
                    <article className="courseCard" key={course.area}>
                        <h3>{course.area}</h3>
                        <p>{course.details}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Coursework;