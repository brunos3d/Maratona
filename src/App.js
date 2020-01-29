import validator from "validator";
import React, { useState } from "react";
import OnVisible from "react-on-visible";

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
        if (validator.isURL(url)) {
            setPlaylist([...playlist, url]);
            return true;
        }
        return false;
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

    const VideoThumbnail = ({ videoUrl }) => {
        const [visible, setVisible] = useState(false);
        return (
            <OnVisible className="video-preview-container" onChange={setVisible}>
                {visible && <video className="video-preview" src={videoUrl + "#t=3"} autoPlay={false} controls={false} preload="metadata" />}
            </OnVisible>
        );
    };

    return (
        <div id="app">
            {displayModal && <LinkListModal setPlaylist={setPlaylist} closeModal={() => setDisplayModal(false)} />}

            <Navbar playlistAdd={playlistAdd} />

            <div className="navbar-space" style={{ height: "56px" }}></div>

            <VideoTheater source={playlist[current]} onEnded={onEndedHandler} autoPlay={autoplay} />

            <InfoContainer>
                <div className="video-info-container ">
                    <span className="current-video-title">{playlist[current]}</span>
                    <ul className="playlist-queue">
                        {playlist &&
                            playlist.map((video_url, id) => (
                                <li className={`playlist-queue-item ${id === current && "current"}`} key={id}>
                                    <button className="playlist-video-button" onClick={() => setCurrent(id)}>
                                        <VideoThumbnail videoUrl={video_url} />
                                        <span className="video-url">{video_url}</span>
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>

                <div className="playlist-controls-container">
                    <Switch label="Autoplay" checked={autoplay} onChange={() => setAutoplay(!autoplay)} />
                    <Switch label="Load Next" checked={loadNext} onChange={() => setLoadNext(!loadNext)} />
                </div>
            </InfoContainer>
        </div>
    );
}

export default App;
