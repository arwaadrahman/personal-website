import { Link } from "react-router-dom";
import { currentRotation } from "../data/currentRotation";

function HomeDashboard() {
    return (
        <main className="homePage">
            <div className="backgroundFX" aria-hidden="true">
                <span className="gradientBubble bubbleOne" />
                <span className="gradientBubble bubbleTwo" />
                <span className="gradientBubble bubbleThree" />
                <span className="gradientBubble bubbleFour" />
                <span className="gradientBubble bubbleFive" />

                <span className="shootingStreak streakOne" />
                <span className="shootingStreak streakTwo" />
                <span className="shootingStreak streakThree" />
                <span className="shootingStreak streakFour" />
                <span className="shootingStreak streakFive" />
                <span className="shootingStreak streakSix" />
                <span className="shootingStreak streakSeven" />

                <span className="softRibbon ribbonOne" />
                <span className="softRibbon ribbonTwo" />
            </div>

            <section className="homeTiles" aria-label="Homepage dashboard">
                <article className="homeTile aboutTile">
                    <Link
                        className="aboutMainLink"
                        to="/about"
                        aria-label="About Arwaad Rahman"
                    >
                        <div className="aboutIdentity">
                            <p className="tileKicker">About</p>
                            <h1>Arwaad Rahman</h1>
                            <p className="tileFooterText">More about me</p>
                        </div>
                    </Link>

                    <div className="aboutMiniLabel">Currently into</div>

                    <div className="rotationPanel">
                        <p className="tileKicker">Current Rotation</p>

                        <div className="rotationGrid">
                            {currentRotation.map((item) => (
                                <a
                                    className="rotationButton"
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith("http") ? "_blank" : undefined}
                                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                >
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </a>
                            ))}
                        </div>
                    </div>
                </article>

                <Link className="homeTile highlightTile" to="/projects/policy-analysis">
                    <div className="projectMiniStatus statusInProgressLabel">In progress</div>
                    <div className="highlightLabel weeklyHighlightLabel">
                        Highlight of the week
                    </div>

                    <div className="tileBaseContent highlightContent">
                        <p className="tileKicker">Project</p>

                        <h2>Policy Analysis</h2>

                        <p>
                            A public policy analysis project using data, visualization, and
                            eventually machine learning to explore civic questions.
                        </p>

                        <div className="tagRow">
                            <span>Python</span>
                            <span>Data</span>
                            <span>Policy</span>
                            <span>Visualization</span>
                        </div>
                    </div>

                    <div className="tileCTA">See more</div>
                </Link>
            </section>
        </main>
    );
}

export default HomeDashboard;