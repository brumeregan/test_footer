import styled from 'styled-components';
import {device} from "../../shared/helpers";

export const Title = styled.h1`
  font-family: Mulish, "Helvetica Neue", Helvetica, Roboto, sans-serif;
  text-align: left;
  line-height: 1;
  font-weight: 800;
  color: rgb(255, 255, 255);
  font-size: 4rem;
  
  @media ${device.desktop} {
    margin-bottom: 40px;
    max-width: 550px;
    font-size: 7rem;
  }
`;

export const DecoratedText = styled.span`
  text-decoration: none;
  position: relative;
  z-index: 1;
    
    &:after {
      position: absolute;
      height: 8px;
      z-index: -1;
      content: "";
      width: 100%;
      background-color: rgb(249, 93, 122);
      left: 0px;
      bottom: 4px;
    }
`

export const FooterStyled = styled.div`
  background-color: rgb(8, 95, 99);
  color: white;
  font-size: 1em;
  min-height: 120px;
  text-align: left;
  padding: 20px 20px 30px 20px;
`

export const FooterContent = styled.div`
  margin: 0px auto;
  box-sizing: border-box;
  max-width: 1280px;
`

export const FooterContainer = styled.div`
  display: block;

  @media ${device.desktop} {
    display: flex;
  }
`


export const FooterColumn = styled.div`
  @media ${device.desktop} {
    width: 50%;
  }
  
`
export const FooterBlockWithLinks = styled(FooterColumn)`
  @media ${device.desktop} {
    display: flex;
  }
`

