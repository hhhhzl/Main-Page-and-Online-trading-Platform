import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HeaderOut = styled.nav`
  background: ${(props) =>
    props.scrolledDownEnough
      ? "#FFFFFF"
      : "linear-gradient(180deg,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0) 100%)"};
  height: 64px;
  margin-left: ${(props) => (props.scrolledDownEnough ? "0%" : "0%")};
  width: ${(props) => (props.scrolledDownEnough ? "100%" : "100%")};
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  transition: all 1s ease;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 1s all ease;
  }
  @media screen and (max-width: 768px) {
    border: none;
  }
  &:hover {
    background: #FFFFFF;
  }
`;

export const HeaderContianer = styled.div`
  margin-left: 18.75%;
  display: flex;
  // justify-content: space-between;
  color: #ffffff;
  height: 64px;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderMenu = styled.div`
  margin-left: 19.6875%;
  display: flex;
  height: 64px;
  justify-content: center;
  align-items: flex-start;
  font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderItem = styled.div`
  // padding: 22px 20px 20px 20px;
  &.active {
    border-bottom: 5px solid #26409a;
  }
`;

export const HeaderLinks = styled(LinkS)`
   color:${(props) => (props.scrolledDownEnough ? "#2A2B30" : "#ffffff")};
   text-decoration:none;
   display:flex;
   align-item: center;
   letter-spacing: 1px;
   padding:22px ${(props) =>
     props.width > 1000
       ? (props) => (props.width > 1330 ? "20px" : "0.8rem")
       : "0.1rem"};
   font-size: ${(props) => (props.width > 900 ? "14px" : "12px")};
   height: 100%
   cursor: pointer;
   &.hover{
    color:#1442ED !important
    font-weight:bold !important
}
&:active {
  font-weight: bold !important;
}
`;
export const MenuItemLinks = styled(LinkS)`
  color: #6e7184;
  &.hover {
    background: #eef0f4;
    color: #eef0f4 !important;
  }
  &:active {
    border: none !important;
  }
  @media screen and (max-width: 1330px) {
    padding: 8px 20px;
  }
  @media screen and (max-width: 1000px) {
    padding: 4px 8px;
    font-size:12px
  }
`;
export const HeaderBtn = styled.nav`
  display: flex;
  align-items: center;
  // margin-top: 3vh;
  margin-left: 13%;
  height: 64px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const HeaderBtnLink = styled(LinkR)`
  white-space: nowrap;
  color:${(props) => (props.scrolledDownEnough ? "#2A2B30" : "#ffffff")};
  text-decoration:none;
  display:flex;
  align-item: center;
  letter-spacing: 1px;
  font-size: ${(props) => (props.width > 900 ? "14px" : "12px")};
  padding: 22px 20px ;
  height: 100%
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: Microsoft YaHei UI-Regular, Microsoft YaHei UI;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    transition: all 0.2 ease-in-out;
    color: #ffffff;
    font-weight:600
  }
`;
