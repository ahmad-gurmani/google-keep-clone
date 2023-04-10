import React from "react";

function Note() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="note">
            <h1>This is the note title</h1>
            <p>This is the note content</p>
        </div>
    )
}

export default Note;