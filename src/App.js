import React, { useState } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Switch from "./components/Switch";
import VideoTheater from "./components/VideoTheater";
import LinkListModal from "./components/LinkListModal";

import { Container as InfoContainer } from "./components/Info/styles";

function App() {
    const [current, setCurrent] = useState(0);
    const [playlist, setPlaylist] = useState([]);
    const [autoplay, setAutoplay] = useState(true);
    const [loadNext, setLoadNext] = useState(true);
    const [displayModal, setDisplayModal] = useState(!(playlist && playlist.length > 0));

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

            <InfoContainer>
                <div className="video-info-container ">
                    <span className="current-video-title">{playlist[current]}</span>
                    <ul className="playlist-queue">
                        {playlist &&
                            playlist.map((video_url, id) => (
                                <li className={`playlist-queue-item ${id === current && "current"}`} key={id}>
                                    <button className="playlist-video-button" onClick={() => setCurrent(id)}>
                                        <video
                                            className="video-preview"
                                            src={video_url + "#t=3"}
                                            autoPlay={false}
                                            controls={false}
                                            preload="metadata"
                                        />
                                        <span className="video-url">{video_url}</span>
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className="playlist-controls-container">
                    <label>
                        <span>Autoplay</span>
                        <Switch checked={autoplay} onChange={() => setAutoplay(!autoplay)} />
                    </label>
                    <label>
                        <span>Load next</span>
                        <Switch checked={loadNext} onChange={() => setLoadNext(!loadNext)} />
                    </label>
                </div>
            </InfoContainer>
        </div>
    );
}

export default App;
