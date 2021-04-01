import styled from "styled-components";
import {device} from "../../../shared/helpers";

export const BottomFooterStyled = styled.div`
  @media ${device.desktop} {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    &:before {
      content: '';
      display: block;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      width: 100%;
      position: absolute;
      top: 0;
    }
  }
`

