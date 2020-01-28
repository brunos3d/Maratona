import React, { useState } from "react";
import "./styles.css";

export default function Navbar({ playURL }) {
    const [url, setUrl] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        playURL(url);
    }

    function handleInputChange(event) {
        setUrl(event.target.value);
    }

    return (
        <div className="navbar">
            <div className="layout">
                <h1>start</h1>
                <form onSubmit={handleSubmit}>
                    <input type="url" value={url} onChange={handleInputChange} placeholder="Insert your video url..." />
                    <input type="submit" value="Add" />
                </form>
                <h1>end</h1>
            </div>
        </div>
    );
}
