import validator from "validator";
import React, { useState } from "react";

import { Container } from "./styles";

export default function LinkListModal({ setPlaylist, closeModal }) {
    const [text, setText] = useState("");
    const [urlList, setUrlList] = useState([]);

    // test
    React.useEffect(() => {
        updateUrlList(
            "http://media.w3.org/2010/05/sintel/trailer.mp4,\nhttp://media.w3.org/2010/05/bunny/trailer.mp4\nhttp://media.w3.org/2010/05/bunny/movie.mp4\nhttps://www.w3schools.com/html/mov_bbb.mp4, https://flatschart.com/html5/videos/video.m4v"
        );
    }, []);

    function playButtonHandle(event) {
        setPlaylist(urlList);
        closeModal();
    }

    function textAreaChangedHandle(event) {
        const el_value = event.target.value;
        updateUrlList(el_value);
    }

    function updateUrlList(value) {
        setText(value);

        const url_list = value.split(/[\n ,]+/).filter(item => validator.isURL(item));
        setUrlList(url_list);
    }

    return (
        <Container>
            <div className="window">
                <div className="title-bar">
                    <span className="title">What are we going to watch?</span>
                    <button className="close-modal" onClick={e => closeModal()}>
                        Close
                    </button>
                </div>
                <div className="body">
                    <span className="subtitle">Insert your list of URL's below</span>
                    <span className="description">urls must be separated by commas or newlines</span>

                    <textarea id="textbox" value={text} onChange={textAreaChangedHandle}></textarea>

                    <span className="description">URL list count: {urlList ? urlList.length : 0}</span>
                    <button className="play" onClick={playButtonHandle} disabled={!(urlList && urlList.length > 0)}>
                        Play
                    </button>
                </div>
            </div>
        </Container>
    );
}
