import styled from "styled-components";

export default styled.div`
    & {
        max-width: ${({ theaterMode }) => (theaterMode ? "1200px" : "unset")};
        margin: ${({ theaterMode }) => (theaterMode ? "0 auto" : "0 20px")};
        padding: 10px 0 0 8px;

        display: flex;

        flex-direction: ${({ theaterMode }) => (theaterMode ? "row" : "column-reverse")};
        justify-content: ${({ theaterMode }) => (theaterMode ? "space-between" : "unset")};
    }

    .video-info-container {
        /* flex: 1; */
        margin-top: ${({ theaterMode }) => (theaterMode ? "unset" : "20px")};
        margin-right: ${({ theaterMode }) => (theaterMode ? "20px" : "unset")};

        padding: 10px 0;
        border-radius: 5px;
        border: 1px solid #393939;
    }

    .playlist-controls-container {
        width: 200px;

        align-self: ${({ theaterMode }) => (theaterMode ? "flex-start" : "flex-end")};

        display: flex;
        flex-direction: column;

        padding: 10px;
        border-radius: 5px;
        border: 1px solid #393939;
    }

    .current-video-title {
        margin: 0 15px;
        font-size: 1.25rem;
        line-height: 2.4rem;
    }

    .playlist-queue {
        height: 300px;

        overflow: auto;
        margin-top: 15px;
        flex: 1;
        list-style: none;

        display: flex;
        flex-direction: column;
    }

    .playlist-queue-item {
        flex: 1;
    }

    .playlist-queue-item.current > .playlist-video-button {
        background-color: rgba(75, 153, 255, 0.493);
    }

    .playlist-video-button {
        width: 100%;
        padding: 5px 15px;

        border: none;
        background: none;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;
    }

    .playlist-video-button:hover {
        background-color: #393939;
    }

    .video-preview-container {
        width: 150px;
        height: 95px;
        position: relative;

        border-radius: 5px;
        background-color: #000;
    }

    .video-preview {
        width: 100%;
        height: 100%;

        border-radius: 5px;
        object-fit: contain;
    }

    .overlay-info-container {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        /* background-color: #fff; */
        z-index: 1;
    }

    .overlay-info-time {
        position: absolute;
        bottom: 10px;
        right: 10px;

        padding: 5px;
        background-color: rgba(0, 0, 0, 0.85);

        color: #fff;
        font-size: 0.8rem;
        border-radius: 5px;
    }

    .video-url {
        margin-left: 30px;
    }
`;
