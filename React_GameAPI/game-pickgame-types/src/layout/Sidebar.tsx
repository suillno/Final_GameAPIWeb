import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.nav<{ isOpen: boolean }>`
  width: 240px;
  height: 100vh;
  background-color: #1e1f24;
  color: white;
  padding: 20px;
  position: fixed;
  top: 60px;
  left: ${({ isOpen }) => (isOpen ? "0" : "-240px")};
  transition: left 0.3s ease;
  overflow-y: auto;
  z-index: 1000;
  @media (max-width: 768px) {
    top: 60px;
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

const MenuItem = styled.div<{ active?: boolean }>`
  padding: 8px 0;
  font-size: 15px;
  cursor: pointer;
  color: ${({ active }) => (active ? "#1ea7fd" : "#e0e0e0")};
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  &:hover {
    color: #1ea7fd;
  }
`;

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  setIsOpen,
  selectedTab,
  onSelectTab,
}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Section>
        <MenuItem
          active={selectedTab === "home"}
          onClick={() => {
            onSelectTab("home");
            setIsOpen(false);
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          active={selectedTab === "reviews"}
          onClick={() => {
            onSelectTab("reviews");
            setIsOpen(false);
          }}
        >
          Reviews
        </MenuItem>
        <MenuItem
          active={selectedTab === "suillno"}
          onClick={() => {
            onSelectTab("suillno");
            setIsOpen(false);
          }}
        >
          suillno 🔶
        </MenuItem>
        <MenuItem
          active={selectedTab === "wishlist"}
          onClick={() => {
            onSelectTab("wishlist");
            setIsOpen(false);
          }}
        >
          Wishlist
        </MenuItem>
        <MenuItem
          active={selectedTab === "myLibrary"}
          onClick={() => {
            onSelectTab("myLibrary");
            setIsOpen(false);
          }}
        >
          My Library
        </MenuItem>
      </Section>

      <Section>
        <SectionTitle>New Releases</SectionTitle>
        <MenuItem
          active={selectedTab === "last30days"}
          onClick={() => onSelectTab("last30days")}
        >
          Last 30 days
        </MenuItem>
        <MenuItem
          active={selectedTab === "thisWeek"}
          onClick={() => onSelectTab("thisWeek")}
        >
          This week
        </MenuItem>
        <MenuItem
          active={selectedTab === "nextWeek"}
          onClick={() => onSelectTab("nextWeek")}
        >
          Next week
        </MenuItem>
        <MenuItem
          active={selectedTab === "releaseCalendar"}
          onClick={() => onSelectTab("releaseCalendar")}
        >
          Release calendar
        </MenuItem>
      </Section>

      <Section>
        <SectionTitle>Top</SectionTitle>
        <MenuItem
          active={selectedTab === "bestOfYear"}
          onClick={() => onSelectTab("bestOfYear")}
        >
          Best of the year
        </MenuItem>
        <MenuItem
          active={selectedTab === "popular2024"}
          onClick={() => onSelectTab("popular2024")}
        >
          Popular in 2024
        </MenuItem>
        <MenuItem
          active={selectedTab === "top250"}
          onClick={() => onSelectTab("top250")}
        >
          All time top 250
        </MenuItem>
      </Section>

      <Section>
        <SectionTitle>Browse</SectionTitle>
        <MenuItem
          active={selectedTab === "platforms"}
          onClick={() => onSelectTab("platforms")}
        >
          Platforms
        </MenuItem>
        <MenuItem
          active={selectedTab === "stores"}
          onClick={() => onSelectTab("stores")}
        >
          Stores
        </MenuItem>
        <MenuItem
          active={selectedTab === "collections"}
          onClick={() => onSelectTab("collections")}
        >
          Collections
        </MenuItem>
      </Section>

           {/* 어드민 메뉴 추가 섹션 */}
           <Section>
        <SectionTitle>Admin</SectionTitle>
        <MenuItem
          active={selectedTab === "userManagement"}
          onClick={() => onSelectTab("userManagement")}
        >
          User Management
        </MenuItem>
        <MenuItem
          active={selectedTab === "reviewManagement"}
          onClick={() => onSelectTab("reviewManagement")}
        >
          Review Management
        </MenuItem>
        <MenuItem
          active={selectedTab === "customerSupport"}
          onClick={() => onSelectTab("customerSupport")}
        >
          Customer Support
        </MenuItem>
        <MenuItem
          active={selectedTab === "adminPermission"}
          onClick={() => onSelectTab("adminPermission")}
        >
          Admin Permission
        </MenuItem>
      </Section>
    </SidebarContainer>
  );
};

export default Sidebar;
