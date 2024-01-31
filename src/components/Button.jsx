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
        background: #be0303;
        cursor: pointer;
      }

      background: #e91919;
      color: white !important;
      width: 20rem;
      height: 3rem;
    `}

  ${(props) =>
    props.login &&
    css`
      float: right;
      border-radius: 10px;
      color: #202020 !important;
      font-size: 20px;
      padding: 0.4em 1.2em;
      background: rgb(234, 190, 10);
      border: 1px solid;
      transition: all 0.2s ease;
      position: relative;

      &:hover {
        background: rgba(234, 205, 27);
        color: #000000 !important;
        cursor: pointer;
        transform: scale(1.1)
      }
    `}
    ${(props) =>
    props.hecho &&
    css`
      &:hover {
        background: #d6bb02;
        cursor: pointer;
      }

      background: #ffdf00;
      font-family: Lilita One;
      font-size: 25px;
      color: black !important;
      width: 10rem;
      height: 3rem;
      border: 2px solid black;
      border-radius: 30px;
    `}
      ${(props) =>
    props.edit &&
    css`
      &:hover {
        background: #eacd04;
        cursor: pointer;
      }

      background: #ffdf00;
      font-family: Lilita One;
      font-size: 25px;
      color: black !important;
      width: 13rem;
      height: 3rem;
      border: 2px solid black;
      border-radius: 30px;
    `}
`;

export default Button;
