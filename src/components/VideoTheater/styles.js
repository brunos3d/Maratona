import styled from "styled-components";

export const Container = styled.div`
    /* .theater { */
    & {
        width: 100%;
        height: 70%;

        background-color: #000;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
    }

    #video-component {
        height: 100%;
        width: auto;
        outline: none;
    }
`;
