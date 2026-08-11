function Currently() {
    return (
        <aside className="currentlyCard glassPanel">
            <p className="sectionLabel">Currently</p>

            <div className="currentItem">
                <span>Reading</span>
                <strong>The Odyssey</strong>
            </div>

            <div className="currentItem">
                <span>Listening to</span>
                <strong>Study playlists</strong>
            </div>

            <div className="currentItem">
                <span>Based in</span>
                <strong>Seattle, WA</strong>
            </div>

            <div className="currentItem">
                <span>Favorites</span>
                <strong>Basketball · Policy · Design · Tech</strong>
            </div>
        </aside>
    );
}

export default Currently;