import styled from "styled-components";

export const Container = styled.div`
    & * {
        color: #000;
    }

    & {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 10;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
    }

    .window {
        width: 500px;
        height: 500px;

        border-radius: 5px;
        background-color: #fff;

        overflow: hidden;

        display: flex;
        flex-direction: column;
    }

    .title-bar {
        height: 50px;
        padding: 10px 20px;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;
    }

    .title {
        color: #222;
        font-size: 1.25rem;
        font-weight: bold;
    }

    /* .close-modal .play */
    button {
        padding: 10px;
        border-radius: 5px;

        border: 1px solid #ccc;
        background-color: #eee;
    }

    .body {
        flex: 1;
        padding: 15px 30px 30px 30px;

        background-color: #eee;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
    }

    .subtitle {
        color: #444;
        font-size: 1.05rem;
        font-weight: bold;
    }

    .description {
        color: #777;
    }

    #textbox {
        width: 100%;
        height: 100%;

        resize: none;

        padding: 5px;
        margin-top: 10px;
    }

    .play {
        padding: 10px 20px;
        margin-top: 10px;
        color: #fff;
        font-size: 1rem;
        background-color: #1a73e8;
    }

    .play:disabled {
        background: #999;
    }
`;
