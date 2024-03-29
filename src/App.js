import validator from "validator";
import React, { useState } from "react";
import OnVisible from "react-on-visible";

import "./styles/App.css";

import Navbar from "./components/Navbar";
import Switch from "./components/Switch";
import VideoTheater from "./components/VideoTheater";
import LinkListModal from "./components/LinkListModal";

import PageContainer from "./components/PageContainer";
import InfoContainer from "./components/InfoContainer";

function App() {
    const [current, setCurrent] = useState(0);
    const [playlist, setPlaylist] = useState([]);
    const [autoplay, setAutoplay] = useState(true);
    const [loadNext, setLoadNext] = useState(true);
    const [theaterMode, setTheaterMode] = useState(!true);
    const [showThumbnail, setShowThumbnail] = useState(true);
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
        const [videoDuration, setVideoDuration] = useState(0);

        return (
            <OnVisible className="video-preview-container" onChange={setVisible}>
                {visible && showThumbnail && (
                    <>
                        <video
                            className="video-preview"
                            src={videoUrl + "#t=3"}
                            autoPlay={false}
                            controls={false}
                            preload="metadata"
                            onLoadedMetadata={event => setVideoDuration(event.target.duration)}
                        />
                        <div className="overlay-info-container">
                            <span className="overlay-info-time">
                                {new Date(videoDuration * 1000)
                                    .toISOString()
                                    .substr(11, 8)
                                    .replace(/00:/, "")}
                            </span>
                        </div>
                    </>
                )}
            </OnVisible>
        );
    };

    return (
        <div id="app">
            {displayModal && <LinkListModal setPlaylist={setPlaylist} closeModal={() => setDisplayModal(false)} />}

            <Navbar playlistAdd={playlistAdd} />

            <div className="navbar-space" style={{ height: "56px" }}></div>

            <PageContainer theaterMode={theaterMode}>
                <VideoTheater source={playlist[current]} onEnded={onEndedHandler} autoPlay={autoplay} theaterMode={theaterMode} />

                <InfoContainer theaterMode={theaterMode}>
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
                        <Switch label="Theater Mode" checked={theaterMode} onChange={() => setTheaterMode(!theaterMode)} />
                        <Switch label="Show Thumbnail" checked={showThumbnail} onChange={() => setShowThumbnail(!showThumbnail)} />
                    </div>
                </InfoContainer>
            </PageContainer>
        </div>
    );
}

export default App;
