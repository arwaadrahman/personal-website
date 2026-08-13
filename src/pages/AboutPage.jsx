import { currentRotation } from "../data/currentRotation";

function AboutPage() {
    return (
        <main className="contentPage">
            <section className="pagePanel aboutPagePanel">
                <div className="aboutProfileLayout">
                    <div className="profilePhotoSlot">
                        <img src="/about/arwaad-profile.jpg" alt="Arwaad Rahman" />
                    </div>

                    <div className="aboutIntro">
                        <p className="eyebrow">About</p>

                        <h1>Arwaad Rahman</h1>

                        <p className="pageLead">
                            I am a University of Washington student pursuing computer science,
                            informatics, and public policy. I am interested in using software,
                            data, and thoughtful design to build tools that make real-world
                            questions easier to understand.
                        </p>
                    </div>
                </div>

                <div className="pageSection firstAboutSection">
                    <h2>Current rotation</h2>

                    <p>
                        A rotating snapshot of what I am reading, listening to, watching,
                        playing, building, and thinking about.
                    </p>

                    <div className="aboutRotationGrid">
                        {currentRotation.map((item) => (
                            <a
                                className="aboutRotationCard"
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                                {item.coverStyle === "status" ? (
                                    <div className="statusCoverFrame">
                                        <span className="rotationStatusPill">{item.coverLabel}</span>
                                    </div>
                                ) : (
                                    <div className="coverFrame">
                                        <img src={item.cover} alt={`${item.value} cover`} />
                                    </div>
                                )}

                                <div>
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="aboutSnapshotGrid">
                    <div>
                        <span>Academic direction</span>
                        <strong>Computer Science, Informatics, and Public Policy</strong>
                        <p>
                            I am building a foundation across programming, data, systems,
                            public-interest technology, and policy analysis.
                        </p>
                    </div>

                    <div>
                        <span>Career interests</span>
                        <strong>Data, ML, and policy technology</strong>
                        <p>
                            I am aiming toward data analyst, data scientist, machine learning,
                            and public policy technology roles.
                        </p>
                    </div>

                    <div>
                        <span>Currently building</span>
                        <strong>History Timeline Website</strong>
                        <p>
                            An interactive project focused on visual storytelling, historical
                            structure, front-end design, and clear information presentation.
                        </p>
                    </div>

                    <div>
                        <span>Currently learning</span>
                        <strong>Python, React, data structures, and linear algebra</strong>
                        <p>
                            I am strengthening the technical base I need for analytics,
                            machine learning, web development, and project-based work.
                        </p>
                    </div>
                </div>

                <div className="pageSection">
                    <h2>More about me</h2>

                    <p>
                        Outside of coursework and projects, I am into sports, games, TV,
                        design, photography, and reading. I like building things that feel
                        useful, personal, and visually intentional.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default AboutPage;