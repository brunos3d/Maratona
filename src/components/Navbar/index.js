import React, { useState } from "react";

import { Container } from "./styles";

export default function Navbar({ playlistAdd }) {
    const [url, setUrl] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        playlistAdd(url);
        setUrl("");
    }

    function handleInputChange(event) {
        setUrl(event.target.value);
    }

    return (
        <Container>
            <div className="layout">
                <h1>Maratona</h1>
                <form onSubmit={handleSubmit}>
                    <input type="url" value={url} onChange={handleInputChange} placeholder="Insert your video url..." />
                    <input type="submit" value="Add" />
                </form>
                <h1>end</h1>
            </div>
        </Container>
    );
}
