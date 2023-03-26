import React from 'react';
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarRoute,SideBtnWrap,SidebarLink} from './SidebarElement'

const Sidebar= ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="explore" onClick={toggle}>Explore</SidebarLink>
                <SidebarLink to="service" onClick={toggle}>Service</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar