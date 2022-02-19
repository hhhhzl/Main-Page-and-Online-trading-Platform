import { Link as LinkR} from 'react-router-dom'
import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const NavOut = styled.nav`
   background:${props => props.scrolledDownEnough ? 'white' : "rgba(0,0,0,0)"};
   height: 10vh;
   margin-left:${props => props.scrolledDownEnough ? '0%' : "0%"};
   width: ${props => props.scrolledDownEnough ? '100%' : "100%"};
   justify-content:center;
   align-items:center;
   font-size: 1rem;
   position:fixed;
   transition: all 1s ease;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
   border-bottom: ${props => props.scrolledDownEnough ? '2px solid #cccccc' : "none"};;
   top:${props => props.scrolledDownEnough ? '0vh' : "7vh"};
   z-index:10;

   @media screen and (max-width: 960px){
       transition: 1s all ease;
   }
`

export const NavbarContianer = styled.div`
display: flex;
justify-content:space-between;
height: 60px;
z-index: 1;
width: 100%;
padding  0 24;
`

export const NavLogo =styled(LinkS)`
color:${props => props.scrolledDownEnough ? '#337ab7' : "#fff"};
justify-self: flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight:bold;
text-decoration:none;
`

export const MobileIcon =styled.div`
  display:none;
  margin-top:-1vh;

  @media screen and (max-width: 760px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform: translate(-100%, 60%);
    cursor:pointer;
    
}
`

export const NavMenu =styled.ul`
   display:flex;
   align-items:center;
   list-style:none;
   text-align: center;
   margin-right: -22px;

   @media screen and (max-width: 768px){
       display:none;
   }
`

export const NavItem = styled.li`
   height:10px;
   margin-top:2vh;
   text-decoration:none;!important;
`

export const NavLinks = styled(LinkS)`
   color: ${props => props.scrolledDownEnough ? '#337ab7' : "#fff"};
   text-decoration:none;
   display:flex;
   align-item: center;
   padding:0.3rem 1rem;
   height: 100%
   cursor: pointer;

   &.active{
       border-bottom: 5px solid #337ab7;
   }

`

export const NavBtn = styled.nav`
   display: flex;
   align-items: center;
   @media screen and (max-width:768px){
       display:none;
   }
`

export const NavBtnLink = styled(LinkR)`
   white-space:nowrap;
   padding: 10px 22px;
   color:${props => props.scrolledDownEnough ? '#337ab7' : "#fff"};
   font-size:16px;
   outline:none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration:none;

   &:hover{
       transition: all 0.2 ease-in-out;
       background: #fff;
       color:white;
   }


`


