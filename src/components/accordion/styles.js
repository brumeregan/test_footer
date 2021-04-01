import styled from "styled-components";
import {Chevron} from "./Chevron";

export const AccordionStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  
  &:last-of-type {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`

export const AccordionTitle = styled.button`
  cursor: pointer;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  outline: none;

  color: rgb(255, 255, 255);
  font-size: 1.6rem;
  font-weight: bold;
  background-color: transparent;
  
  &:active {
    outline: none;
  }
`

export const AccordionContent = styled.div`
    height: ${({isOpen}) => isOpen ? 'auto' : '0'};
    overflow: hidden;
`

export const ChevronStyled = styled(Chevron)`
  transform: ${({ isOpen }) =>
          isOpen ? 'rotate(270deg)' : 'rotate(90deg)'};
`