import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 5px;
  overflow-y: hidden;
  /* overflow-x: auto; */
  
  
  &::-webkit-scrollbar {
    width: 20px;
    height: 10px;
    
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
    margin: 0 50px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(90deg, rgba(225,209,25,1) 0%, rgba(227,114,95,0.1) 35%, rgba(229,16,164,1) 100%);
    border-radius: 10px;
  }
  
  

  ${(props) =>
    props.fixed &&
    css`
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        margin: 0 auto;
        max-width: 400px;
        padding; 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
    `}
`;

export const Item = styled.li`
  padding: 0 8px;
`;
