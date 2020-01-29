import React, { useState } from "react";
import GitHubButton from "react-github-btn";

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
                <GitHubButton
                    href="https://github.com/BrunoS3D"
                    data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Follow @BrunoS3D on GitHub"
                >
                    Follow @BrunoS3D
                </GitHubButton>
                <form onSubmit={handleSubmit}>
                    <input type="url" value={url} onChange={handleInputChange} placeholder="Insert your video url..." />
                    <input type="submit" value="Add" />
                </form>
                <div className="github-buttons">
                    <GitHubButton
                        href="https://github.com/BrunoS3D/Maratona/subscription"
                        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                        data-icon="octicon-eye"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Watch BrunoS3D/Maratona on GitHub"
                    >
                        Watch
                    </GitHubButton>
                    <GitHubButton
                        href="https://github.com/BrunoS3D/Maratona"
                        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star BrunoS3D/Maratona on GitHub"
                    >
                        Star
                    </GitHubButton>
                    <GitHubButton
                        href="https://github.com/BrunoS3D/Maratona/fork"
                        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
                        data-icon="octicon-repo-forked"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Fork BrunoS3D/Maratona on GitHub"
                    >
                        Fork
                    </GitHubButton>
                </div>
            </div>
        </Container>
    );
}
