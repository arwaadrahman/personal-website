import { Link } from "react-router-dom";
import { currentRotation } from "../data/currentRotation";

function HomeDashboard() {
    return (
        <main className="homePage">
            <section className="heroStrip">
                <p className="eyebrow">UW Student Portfolio</p>
                <h1>Arwaad Rahman</h1>
                <p>
                    Building projects across technology, public policy, data, and
                    interactive systems.
                </p>
            </section>

            <section className="homeTiles" aria-label="Homepage dashboard">
                <Link className="homeTile aboutTile" to="/about">
                    <div className="tileAccent cyanAccent" />

                    <div className="tileBaseContent">
                        <p className="tileKicker">About</p>
                        <h2>Student portfolio</h2>
                        <p>
                            A growing technical portfolio shaped by coursework, project-based
                            learning, and curiosity across software, policy, and data.
                        </p>
                    </div>

                    <div className="rotationPanel">
                        <p className="tileKicker">Current Rotation</p>

                        <div className="rotationGrid">
                            {currentRotation.map((item) => (
                                <div className="rotationItem" key={item.label}>
                                    <span>{item.label}</span>
                                    <strong>{item.value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </Link>

                <Link className="homeTile highlightTile" to="/projects/policy-analysis">
                    <div className="tileAccent magentaAccent" />

                    <div className="highlightLabel">Featured Highlight</div>

                    <div className="tileBaseContent">
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

                    <div className="tileCTA">Open project</div>
                </Link>
            </section>
        </main>
    );
}

export default HomeDashboard;