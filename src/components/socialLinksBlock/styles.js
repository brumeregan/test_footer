import styled from "styled-components";
import {device} from "../../shared/helpers";

export const SocialLinksBlockStyled = styled.ul`
  padding: 5px 0 15px;
  margin: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} {
    padding-bottom: 5px;
  }
`

export const SocialLinksItem = styled.li`
  padding: 0 10px;
  list-style: none;
`