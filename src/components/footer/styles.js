import styled from 'styled-components';

export const device = {
    desktop: `(min-width: 768px)`,
};

export const Title = styled.h1`
  font-family: Mulish, "Helvetica Neue", Helvetica, Roboto, sans-serif;
  text-align: left;
  line-height: 1;
  font-weight: 800;
  color: rgb(255, 255, 255);
  font-size: 4rem;
  
  @media ${device.desktop} {
    color: black;
    margin-bottom: 40px;
    max-width: 550px;
    font-size: 7rem;
  }
`;

export const FooterStyled = styled.div`
  background-color: rgb(8, 95, 99);
  color: white;
  font-size: 1em;
  min-height: 120px;
  text-align: left;
  padding-bottom: 30px;
`
