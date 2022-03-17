import styled from 'styled-components'
import{Link as LinkS} from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'

export const SidebarContainer = styled.aside`
  position: fixed; 
  width:100%;
  height:${({isOpen}) => (isOpen ? '100%' : "0")};
  background-color:${props => props.scrolledDownEnough ? 'white' : "white"};
  display: grid;
  align-items: center;
  top:${props => props.scrolledDownEnough ? '7vh' : "17vh"};
  right:0;
  transition:0.3s ease-in-out;
  border-bottom: ${props => props.scrolledDownEnough ? '2px solid #cccccc' : "none"};;
  z-index:998;
`

export const Icon = styled.div`
  position:absolute;
  top: 20px;
  left: 5%;
  background: rgba(0,0,0,0);
  cursor:pointer;
`

export const SidebarWrapper =styled.div`
color: #fff;
`

export const SidebarMenu =styled.ul`
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:repeat(6, 80px);
  text-aligh:center;

  @media screen and (max-width:480px){
    grid-template-rows:repeat(6, 80px);

  }
`

export const SidebarLink = styled(LinkS)`
   text-decoration: none;
   display:flex;
   align-item:center;
   justify-content:center;
   font-size:1.5rem;
   list-style:none;
   transition:0.2s ease-in-out;
   color:black;

   $:hover{
       color: #01bf71;
       transition: 0.2s ease-in-out;
   }
`

export const SideBtnWrap = styled.div`
  display:flex;
  justify-content:center;
`

export const SidebarRoute =  styled(LinkR)`
border-radius:50px;
background: #01bf71;
white-space:nowrap;
padding: 16px 64px;
color :#010686;
font-size:16px;
outline:none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
    transition: all 0.2 ease-in-out;
    background: #fff;
    color:#010606;
}
`
