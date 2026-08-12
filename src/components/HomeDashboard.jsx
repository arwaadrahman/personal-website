import { Link } from "react-router-dom";
import { currentRotation } from "../data/currentRotation";

function HomeDashboard() {
    return (
        <main className="homePage">
            <div className="backgroundFX" aria-hidden="true">
                <span className="burst burstOne" />
                <span className="burst burstTwo" />
                <span className="burst burstThree" />
                <span className="ribbon ribbonOne" />
                <span className="ribbon ribbonTwo" />
            </div>

            <section className="homeTiles" aria-label="Homepage dashboard">
                <Link className="homeTile aboutTile" to="/about">
                    <div className="tileBaseContent aboutBase">
                        <p className="tileKicker">About Arwaad Rahman</p>

                        <h1>Arwaad Rahman</h1>

                        <p>
                            Find out more about me, what I’m building, and what I’m currently
                            into.
                        </p>
                    </div>

                    <div className="rotationPanel">
                        <p className="tileKicker">Current Rotation</p>

                        <div className="rotationStack">
                            {currentRotation.map((item) => (
                                <div className="rotationItem" key={item.label}>
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="tileStripe aboutStripe" />
                </Link>

                <Link className="homeTile highlightTile" to="/projects/policy-analysis">
                    <div className="highlightLabel">Featured Highlight</div>

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
                    <div className="tileStripe highlightStripe" />
                </Link>
            </section>
        </main>
    );
}

export default HomeDashboard;