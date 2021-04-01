import styled from "styled-components";
import { device } from "../../../shared/helpers";

export const CheckedWrapper = styled.span`
  width: 22px;
  height: 22px;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(55, 195, 164);
  border-radius: 50%;
  margin-right: 5px;
`;

export const InfoList = styled.ul`
  margin: 0px 0px 20px;
  padding: 0px;
  list-style: none;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-bottom: 0px;

  @media ${device.desktop} {
    display: block;
  }
`;

export const InfoListItem = styled.li`
  margin: 5px 5px 5px 0;
  font-size: 1.4rem;
  font-weight: 700;

  @media ${device.desktop} {
    margin: 5px 0;
  }
`;
