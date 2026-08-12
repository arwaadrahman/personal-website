function ContactModal({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modalOverlay" role="presentation" onClick={onClose}>
            <section
                className="contactModal"
                role="dialog"
                aria-modal="true"
                aria-label="Contact information"
                onClick={(event) => event.stopPropagation()}
            >
                <button className="modalClose" type="button" onClick={onClose}>
                    ×
                </button>

                <p className="eyebrow">Connect</p>

                <h2>Contact Arwaad</h2>

                <p className="modalNote">
                    I am currently building projects across technology, public policy,
                    data, and interactive systems. The best way to reach me is by email.
                </p>

                <a className="emailBlock" href="arwaadar@gmail.com">
                    arwaadar@gmail.com
                </a>

                <div className="modalLinks">
                    <a
                        className="modalButton githubModal"
                        href="https://github.com/arwaadrahman"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        className="modalButton linkedinModal"
                        href="https://www.linkedin.com/in/arwaad/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        className="modalButton resumeModal"
                        href="/Arwaad_Rahman_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </section>
        </div>
    );
}

export default ContactModal;