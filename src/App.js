import React, { useState } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Switch from "./components/Switch";

function App() {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const [playlist, setPlaylist] = useState(["https://www.w3schools.com/html/mov_bbb.mp4", "https://flatschart.com/html5/videos/video.m4v"]);

    function playURL(url) {
        setPlaylist([...playlist, url]);
    }

    function onEndedHandler(event) {
        if (autoplay) {
            if (current + 1 < playlist.length) {
                setCurrent(current + 1);
            } else {
                setCurrent(0);
            }
        }
    }

    return (
        <div id="app">
            <Navbar playURL={playURL} />

            <div className="theater">
                <video id="video-component" src={playlist[current]} onEnded={onEndedHandler} controls />
            </div>

            <label>
                <span>Autoplay</span>
                <Switch checked={autoplay} onChange={() => setAutoplay(!autoplay)} />
            </label>

            <h1>{playlist[current]}</h1>
            {playlist && playlist.map((video_url, id) => id > 0 && <p key={id}>{video_url}</p>)}
        </div>
    );
}

export default App;
