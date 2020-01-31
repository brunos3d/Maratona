import styled from "styled-components";

export const Container = styled.div`
    /* .theater { */
    & {
        flex: 1;
        width: ${({ theaterMode }) => (theaterMode ? "100%" : "50%")};
        height: ${({ theaterMode }) => (theaterMode ? "70%" : "unset")};
        max-height: ${({ theaterMode }) => (theaterMode ? "unset" : "70%")};

        background-color: #000;

        align-self: flex-start;

        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
    }

    #video-component {
        width: 100%;
        height: 100%;

        outline: none;
        background-color: #000;
    }
`;
