import { Link as LinkR} from 'react-router-dom'
import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'


export const NavOut = styled.div`
   // background:${props => props.scrolledDownEnough ? 'white' : "rgba(0,0,0,0)"};
   background:white;
   height: 9vh;
   margin-left:${props => props.scrolledDownEnough ? '0%' : "0%"};
   width: ${props => props.scrolledDownEnough ? '100%' : "100%"};
   justify-content:center;
   align-items:center;
   font-size: 1rem;
   position: fixed;
   transition: all 1s ease;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
   border-bottom: ${props => props.scrolledDownEnough ? '2px solid #cccccc' : "none"};;
   top:${props => props.scrolledDownEnough ? '0vh' : "0vh"};
   z-index:10;

   @media screen and (max-width: 960px){
       transition: 0s all ease;
   }
`

export const NavbarContianer = styled.div`
display: flex;
justify-content:space-between;
height: 60px;
z-index: 1;
width: 100%;
padding: 0 ${props => props.width > 900 ? '7%' : "5%"};
`

export const NavLogo =styled(LinkS)`
color:${props => props.scrolledDownEnough ? '#26409A' : "#fff"};
justify-self: flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:-10px;
font-weight:bold;
text-decoration:none;
`

export const MobileIcon =styled.div`
  display:none;
  margin-top:-1vh;

  @media screen and (max-width: 800px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    cursor:pointer;
    
}
`

export const HomeMobileIcon =styled.div`
  display:none;
  margin-top:-1vh;

  @media screen and (max-width: 800px){
    display:flex;
    transform: translate(0%, 15%);
}
`

export const NavMenu =styled.ul`
   display:flex;
   position: absolute;
   height:4vh;
   right: 0px;
   align-items:center;
   list-style:none;
   text-align: center;
   // margin-right: ${props => props.width > 1000 ? props => props.width > 1330 ? "-23%" : "-30%" : "-35%"};
   

   @media screen and (max-width: 768px){
       display:none;
   }
`

export const NavItem = styled.li`
   height:max-content;
   margin-top:5vh;
   text-decoration:none;!important;
`

export const NavLinks = styled(LinkS)`
   // color: ${props => props.scrolledDownEnough ? '#26409A' : "#fff"};
   color:#26409A;
   text-decoration:none;
   display:flex;
   align-item: center;
   letter-spacing: 1px;
   font-size: ${props => props.width > 900 ? "18px" : "15px"};
   padding:0.3rem ${props => props.width > 1000 ? props => props.width > 1330 ? "1.3rem" : "1rem" : "0.5rem"};
   height: 100%
   cursor: pointer;
   &.active{
       border-bottom: 5px solid #26409A;
   }

`
export const NavBtn = styled.nav`
   display: flex;
   align-items: center;
   margin-top:3vh;
   @media screen and (max-width:768px){
       display:none;
   }
`
export const NavBtnLink = styled(LinkR)`
   white-space:nowrap;
   padding: 0.3rem ${props => props.width > 1000 ? props => props.width > 1330 ? "1.8rem" : "1rem" : "0.5rem"};
   // color:${props => props.scrolledDownEnough ? '#26409A' : "#fff"};
   color:#26409A;
   font-size:${props => props.width > 900 ? "18px" : "15px"};
   display:flex;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration:none;
   &:hover{
       transition: all 0.2 ease-in-out;
       color:#26409A;
   }


`


