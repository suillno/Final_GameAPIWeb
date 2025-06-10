// Sidebar.tsx
import React from "react";
import styled from "styled-components";
import sidebarIcon from "../img/sidebar.png";

const SidebarContainer = styled.nav`
  width: 240px;
  height: 100vh;
  background-color: #1e1f24;
  color: white;
  padding: 20px;
  position: fixed;
  top: 60px;
  left: 0;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #bbb;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  font-size: 15px;
  cursor: pointer;
  color: #e0e0e0;

  svg {
    margin-right: 10px;
  }

  &:hover {
    color: #1ea7fd;
  }
`;

let SidebarDiv = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background-color: #1e1f24; // 배경색 지정으로 흰줄 방지
    padding: 8px;
    position: relative;
  }
`;

const SidebarIcon = styled.img`
  width: 32px;
  height: 32px;
  filter: invert(1); /* 색상 반전 */
  display: block;
`;

const sidebarToggle = () => {};

const Sidebar = () => {
  return (
    <>
      <SidebarDiv>
        <button type="button" onClick={sidebarToggle}>
          <SidebarIcon src={sidebarIcon}></SidebarIcon>
        </button>
      </SidebarDiv>
      <SidebarContainer>
        <Section>
          <MenuItem>Home</MenuItem>
          <MenuItem>Reviews</MenuItem>
          <MenuItem>suillno 🔶</MenuItem>
          <MenuItem>Wishlist</MenuItem>
          <MenuItem>My Library</MenuItem>
        </Section>

        <Section>
          <SectionTitle>New Releases</SectionTitle>
          <MenuItem>Last 30 days</MenuItem>
          <MenuItem>This week</MenuItem>
          <MenuItem>Next week</MenuItem>
          <MenuItem>Release calendar</MenuItem>
        </Section>

        <Section>
          <SectionTitle>Top</SectionTitle>
          <MenuItem>Best of the year</MenuItem>
          <MenuItem>Popular in 2024</MenuItem>
          <MenuItem>All time top 250</MenuItem>
        </Section>

        <Section>
          <SectionTitle>Browse</SectionTitle>
          <MenuItem>Platforms</MenuItem>
          <MenuItem>Stores</MenuItem>
          <MenuItem>Collections</MenuItem>
        </Section>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
