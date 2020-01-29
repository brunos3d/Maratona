import validator from "validator";
import React, { useState } from "react";

import { Container } from "./styles";

import Switch from "../Switch";

export default function LinkListModal({ setPlaylist, closeModal }) {
    const [text, setText] = useState("");
    const [urlList, setUrlList] = useState([]);
    const [isJSON, setIsJSON] = useState(false);

    // test
    React.useEffect(() => {
        const initial_list = [
            "http://media.w3.org/2010/05/sintel/trailer.mp4",
            "http://media.w3.org/2010/05/bunny/trailer.mp4",
            "http://media.w3.org/2010/05/bunny/movie.mp4"
        ];
        setUrlList(initial_list);
        setText(initial_list.join(",\n"));
    }, []);

    React.useEffect(() => {
        if (isJSON) {
            try {
                const url_list = JSON.parse(text).filter(item => validator.isURL(item));
                setUrlList(url_list);
            } catch (error) {
                setUrlList([]);
            }
        } else {
            const url_list = text.split(/[\n ,]+/).filter(item => validator.isURL(item));
            setUrlList(url_list);
        }
    }, [isJSON, text]);

    function playButtonHandle(event) {
        setPlaylist(urlList);
        closeModal();
    }

    function textAreaChangedHandle(event) {
        const el_value = event.target.value;
        setText(el_value);
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
                    <div>
                        <span className="subtitle">Insert your list of URL's below</span>
                        <Switch label="JSON Array" checked={isJSON} onChange={() => setIsJSON(!isJSON)} />
                    </div>

                    {!isJSON && <span className="description">urls must be separated by commas or newlines</span>}

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
