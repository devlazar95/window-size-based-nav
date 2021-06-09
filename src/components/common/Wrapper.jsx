import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${(props) =>
    props.mode === "vertical" &&
    css`
      display: grid;
      grid-template-columns: 95px auto;
    `}
  ${(props) =>
    props.mode === "horizontal" &&
    css`
      display: flex;
      flex-direction: column;
    `}
    ${(props) =>
    props.mode === "none" &&
    css`
      > :first-child {
        display: none;
      }
    `}
  background-color: #f8f8f8;
  height: 100vh;
`;

export default Wrapper;
