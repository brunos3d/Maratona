import React, { useState } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Switch from "./components/Switch";
import VideoTheater from "./components/VideoTheater";
import LinkListModal from "./components/LinkListModal";

function App() {
    const [current, setCurrent] = useState(0);
    const [playlist, setPlaylist] = useState([]);
    const [autoplay, setAutoplay] = useState(true);
    const [loadNext, setLoadNext] = useState(true);
    const [displayModal, setDisplayModal] = useState(!(playlist && playlist.length > 0));

    console.log(displayModal);

    function playlistAdd(url) {
        setPlaylist([...playlist, url]);
    }

    function onEndedHandler(event) {
        if (loadNext) {
            if (current + 1 < playlist.length) {
                setCurrent(current + 1);
            } else {
                setCurrent(0);
            }
        }
    }

    return (
        <div id="app">
            <Navbar playlistAdd={playlistAdd} />

            {displayModal && <LinkListModal setPlaylist={setPlaylist} closeModal={() => setDisplayModal(false)} />}

            <VideoTheater source={playlist[current]} onEnded={onEndedHandler} autoPlay={autoplay} />

            <label>
                <span>Autoplay</span>
                <Switch checked={autoplay} onChange={() => setAutoplay(!autoplay)} />
            </label>
            <label>
                <span>Load next</span>
                <Switch checked={loadNext} onChange={() => setLoadNext(!loadNext)} />
            </label>

            <h1>{playlist[current]}</h1>
            {playlist && playlist.map((video_url, id) => id !== current && <p key={id}>{video_url}</p>)}
        </div>
    );
}

export default App;
