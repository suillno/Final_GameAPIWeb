// ✅ Header.tsx
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3b3e45;
  padding: 12px 24px;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    padding: 5px;
    border-radius: 4px;
    border: none;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo>Humble</Logo>
      <HeaderRight>
        <button type="button">🔍</button>
        <input type="text" placeholder="검색" />
        <a href="member/signup.html">회원가입</a>
        <a href="member/login.html">로그인</a>
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;
