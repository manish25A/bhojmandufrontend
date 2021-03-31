import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,SidebarWrapper,SidebarMenu,
    SidebarLink
}
from './SidebarElements'
const Sidebar = () => {
    return (
  <SidebarContainer>
      <Icon>
          <CloseIcon/>
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="/about">
                      About
                  </SidebarLink>
                  <SidebarLink to="/products">
                      Product
                  </SidebarLink>
                  <SidebarLink to="/discover">
                      Discover
                  </SidebarLink>
                  <SidebarLink to="/register">
                      Register
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
    )
}

export default Sidebar;
