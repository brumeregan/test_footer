import styled from "styled-components";

export const AccordionStyled = styled.div`
  display: flex;
  flex-direction: column;
`

export const AccordionTitle = styled.button`
  cursor: pointer;
  padding: 18px;
  display: flex;
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