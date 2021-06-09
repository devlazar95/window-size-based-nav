import styled, { css } from "styled-components";

const NavigatorWrapper = styled.div`
  display: flex;
  ${(props) =>
    props.mode === "vertical" &&
    css`
      flex-direction: column;
      height: 100vh;
    `}
  ${(props) =>
    props.mode === "horizontal" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 95px !important;
      padding-left: 1.5em;
      padding-right: 1.5em;
    `}
    ${(props) =>
    props.mode === "none" &&
    css`
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `}
  background-color: #333;
`;

export default NavigatorWrapper;
