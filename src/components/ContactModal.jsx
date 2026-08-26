import { useEffect, useRef } from "react";

function ContactModal({ isOpen, onClose }) {
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const previouslyFocusedElement = document.activeElement;
        closeButtonRef.current?.focus();

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                onClose();
                return;
            }

            if (event.key !== "Tab" || !modalRef.current) {
                return;
            }

            const focusableElements = modalRef.current.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements.length === 0) {
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            previouslyFocusedElement?.focus?.();
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modalOverlay" role="presentation" onClick={onClose}>
            <section
                ref={modalRef}
                className="contactModal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    ref={closeButtonRef}
                    className="modalClose"
                    type="button"
                    onClick={onClose}
                    aria-label="Close contact dialog"
                >
                    ×
                </button>

                <p className="eyebrow">Connect</p>
                <h2 id="contact-modal-title">Contact Arwaad</h2>

                <a className="emailBlock" href="mailto:arwaadar@gmail.com">
                    <span>Email</span>
                    <strong>arwaadar@gmail.com</strong>
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
