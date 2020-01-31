import styled from "styled-components";

export const Container = styled.div`
    & {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 56px;
        background-color: #282828;
        z-index: 1;
    }

    .layout {
        height: 100%;
        max-width: 90%;
        margin: 0 auto;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;
    }

    form {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;
    }

    input {
        padding: 5px 10px;
        font-size: 1rem;
        color: #282828;
    }

    input[type="url"] {
        min-width: 40%;

        border-radius: 3px 0 0 3px;
        border: 1px solid #393939;

        color: #ccc;
        background-color: #121212;
    }

    input[type="submit"] {
        color: #ccc;
        border-radius: 0 3px 3px 0;

        border: 1px solid #393939;
        background-color: #393939;
    }

    .github-buttons {
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: center;
    }

    .github-buttons > * {
        margin-left: 5px;
    }
`;
