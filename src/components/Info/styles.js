import styled from "styled-components";

export const Container = styled.div`
    & {
        max-width: 1200px;

        margin: 0 auto;
        padding: 10px 0 0 8px;

        display: flex;
        flex-direction: row;

        justify-content: space-between;
    }

    .video-info-container {
        flex: 1;
        margin-right: 20px;

        padding: 10px;
        border: 1px solid #393939;
    }

    .playlist-controls-container {
        width: 200px;

        align-self: flex-start;

        display: flex;
        flex-direction: column;

        padding: 10px;
        border: 1px solid #393939;
    }

    .current-video-title {
        font-size: 1.25rem;
        line-height: 2.4rem;
    }

    .playlist-queue {
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
        padding: 5px 10px;

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
        position: relative;
        width: 150px;
        height: 95px;
        background-color: #000;
    }

    .video-preview {
        width: 100%;
        height: 100%;
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
    }
`;
