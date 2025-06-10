// ✅ MainPage.tsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 24px;
  color: white;
  background-color: #1e1f24;
`;

const PromoSection = styled(Section)`
  padding-left: 240px;
  background-color: #1e1f24;

  @media (max-width: 768px) {
    padding-left: 24px;
  }
`;

const PromoImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const Card = styled.div`
  background-color: #3a3c42;
  padding: 12px;
  border-radius: 6px;
  width: calc(25% - 12px); // 한 줄에 4개
  min-width: 200px;
  text-align: center;

  img {
    width: 100%;
    height: 174px;
    border-radius: 4px;
    background-color: #555;

    @media (max-width: 768px) {
      height: 300px;
    }
  }

  p {
    margin: 8px 0 4px;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2; // 최대 줄 수 지정
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: #1ea7fd;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const MainPage: React.FC = () => {
  return (
    <>
      <PromoSection>
        <PromoImages>
          <Card>
            <img src="" alt="Game" />
            <p>둠: 암흑 시대</p>
            <span>₩69,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>클레어 옵스큐: 탐험 33</p>
            <span>₩49,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>스펠던 블레이드 전편판</p>
            <span>₩79,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>엘더스크롤: 아카이브</p>
            <span>₩59,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>
              둠: 암흑
              시대aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
            <span>₩69,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>클레어 옵스큐: 탐험 33</p>
            <span>₩49,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>스펠던 블레이드 전편판</p>
            <span>₩79,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>엘더스크롤: 아카이브</p>
            <span>₩59,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>둠: 암흑 시대</p>
            <span>₩69,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>클레어 옵스큐: 탐험 33</p>
            <span>₩49,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>스펠던 블레이드 전편판</p>
            <span>₩79,999</span>
          </Card>
          <Card>
            <img src="" alt="Game" />
            <p>엘더스크롤: 아카이브</p>
            <span>₩59,999</span>
          </Card>
        </PromoImages>
      </PromoSection>
    </>
  );
};

export default MainPage;
