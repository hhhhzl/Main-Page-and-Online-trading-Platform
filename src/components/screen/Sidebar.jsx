import {React,useState,useEffect} from 'react'
import { SidebarContainer, Icon, SidebarLink ,SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarRoute} from '../MainPage/SidebarElement'
import { CloseOutlined } from '@material-ui/icons'

const Sidebar = ({isOpen,toggle}) => {
    const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
        const handleScroll = () => {
          const bodyScrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
          const scrolledDownEnough = bodyScrollTop > 85 ? true : false;
          setScrolledDownEnough(scrolledDownEnough);
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, [scrolledDownEnough]);

    return (
        <SidebarContainer scrolledDownEnough={scrolledDownEnough} isOpen ={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseOutlined/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink scrolledDownEnough={scrolledDownEnough} activeClass="active-block-side" to="home" spy={true} smooth={true} onClick={toggle}>账户总览</SidebarLink>
                    <SidebarLink scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block-side" to="aboutus" spy={true} smooth={true} onClick={toggle}>个股交易</SidebarLink>
                    <SidebarLink scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block-side" to ="team" spy={true} smooth={true} onClick={toggle}>市场行情</SidebarLink>
                    <SidebarLink scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block-side" to ="review" spy={true} smooth={true} onClick={toggle}>选股器</SidebarLink>
                    <SidebarLink scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block-side" to ="/eplatform/:admin" spy={true} smooth={true} onClick={toggle}>排行榜</SidebarLink>
                    <SidebarLink scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block-side" to ="/eplatform/:admin" spy={true} smooth={true} onClick={toggle}>个人主页</SidebarLink>
                    <SidebarLink scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block-side" to ="/eplatform/:admin" spy={true} smooth={true} onClick={toggle}>团队信息</SidebarLink>
                    <SidebarLink scrolledDownEnough={scrolledDownEnough} offset={-20} activeClass="active-block-side" to ="/eplatform/:admin" spy={true} smooth={true} onClick={toggle}>编辑资料</SidebarLink>
                    
                </SidebarMenu>

                <SideBtnWrap>
                
                    
                    <SidebarRoute  >
                        退出登录
                    </SidebarRoute>
                </SideBtnWrap>
               
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar;
