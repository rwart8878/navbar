import {FaBars} from 'react-icons/fa'
import React from 'react';
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavLinks,NavItem,NavBtn,NavBtnLink} from './NavbarElement'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">BhartSe</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="explore">Explore</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="service">Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                 <NavBtnLink to="/signup">Sign In</NavBtnLink>
                </NavBtn>
                
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar