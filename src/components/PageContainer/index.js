import styled from "styled-components";

export default styled.div`
    & {
        height: ${({ theaterMode }) => (theaterMode ? "100%" : "unset")};
        max-width: ${({ theaterMode }) => (theaterMode ? "unset" : "85%")};
        margin: ${({ theaterMode }) => (theaterMode ? "none" : "50px auto")};

        display: flex;
        flex-direction: ${({ theaterMode }) => (theaterMode ? "column" : "row")};
    }
`;
