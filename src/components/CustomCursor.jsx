import { useEffect, useState } from "react";

function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        function handleMouseMove(event) {
            setPosition({ x: event.clientX, y: event.clientY });

            const target = event.target;
            const isInteractive = target.closest(
                "a, button, .homeTile, .navDropdown"
            );

            setIsHovering(Boolean(isInteractive));
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                className="cursorDot"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />

            <div
                className={`cursorRing ${isHovering ? "cursorHover" : ""}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
}

export default CustomCursor;