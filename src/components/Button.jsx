import styled, { css } from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: none;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) =>
    props.google &&
    css`
      &:hover {
        background: #BE0303;
        cursor: pointer;
      }

      background: #E91919;
      color: white !important;
      width: 20rem;
      height: 3rem;
    `}

  ${(props) =>
    props.login &&
    css`
      float: right;
      border-radius: 20px;
      color: #ffffff !important;
      font-size: 20px;
      padding: 0.4em 1.2em;
      background: rgba(0, 0, 0, 0);
      border: 1px solid;
      border-color: #ffffff;
      transition: all 0.2s ease;
      position: relative;

      &:hover {
        background: rgba(255, 255, 255, 0.8);
        color: #000000 !important;
        cursor: pointer;
      }
    `}
    ${(props) =>
      props.logout &&
      css`
        &:hover {
          background: #BE0303;
          cursor: pointer;
        }
  
        background: #E91919;
        color: white !important;
        width: 20rem;
        height: 3rem;
      `}
`;


export default Button;
