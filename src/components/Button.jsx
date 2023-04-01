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
        background: rgba(234, 205, 27);
        color: #000000 !important;
        cursor: pointer;
      }
    `}
    ${(props) =>
      props.hecho &&
      css`
        &:hover {
          background: #D6BB02;
          cursor: pointer;
        }
  
        background: #FFDF00;
        font-family: Lilita One;
        font-size:  25px;
        color: black !important;
        width: 10rem;
        height: 3rem;
        border: 2px solid black;
        border-radius: 30px;
        
      `}
`;


export default Button;
