import React from "react";

import { Container } from "./styles";

export default function VideoTheater({ source, onEnded, autoPlay }) {
    return (
        <Container>
            <video id="video-component" src={source} onEnded={onEnded} controls autoPlay={autoPlay} />
        </Container>
    );
}
