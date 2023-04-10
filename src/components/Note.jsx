import React from "react";

function Note(props) {
    const currentYear = new Date().getFullYear();

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;