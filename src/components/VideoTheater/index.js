import React from "react";

import { Container } from "./styles";

export default function VideoTheater({ source, onEnded, autoPlay, theaterMode }) {
    return (
        <Container theaterMode={theaterMode}>
            <video id="video-component" src={source} onEnded={onEnded} autoPlay={autoPlay} controls preload="metadata" />
        </Container>
    );
}
