import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  defaultGameResponse,
  GameResponse,
  GameResult,
  platformBorderColors,
  platformIcons,
} from "../types/types";
import { apiGetGameList } from "../api/api";
import Loader from "../components/common/Loader";
import { Link, useOutletContext } from "react-router-dom";

interface LayoutContext {
  isSidebarOpen: boolean;
}

// 메인 컨테이너
const MainContainer = styled.div<{ isSidebarOpen: boolean }>`
  margin-right: 5%;
  margin-left: ${(props) => (props.isSidebarOpen ? "300px" : "5%")};
  transition: margin-left 0.3s ease;
  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;

// 페이지 타이틀
const MainTitle = styled.h2<{ isSidebarOpen: boolean }>`
  font-size: 4vw;
  line-height: 74px;
  font-weight: 700;
  padding: 1em;
  margin-right: 5%;
  margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "5%")};
  transition: margin-left 0.3s ease;
  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;

// 게임 카드 (hover시 확대)
const GameCard = styled.div`
  background-color: #2a2b32;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }
`;

// 항상 표시될 기본정보 (이미지 아래에 배치)
const InfoSection = styled.div`
  padding: 0.8rem;
  color: white;
  background-color: #1e1f24;
`;

// hover 시 등장할 상세정보 (이미지 위 오버레이)
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 31, 36, 0.7);
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  color: white;
  ${GameCard}:hover & {
    opacity: 1;
  }
`;

const MainPage: React.FC = () => {
  const { isSidebarOpen } = useOutletContext<LayoutContext>();
  const [gameResponse, setGameResponse] =
    useState<GameResponse>(defaultGameResponse);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  const pageNext = () => setPageCount((prev) => prev + 1);

  const getGameList = (pageCount: number) => {
    setIsLoading(true);
    apiGetGameList(pageCount)
      .then((res) => {
        const results = [...gameResponse.results, ...res.results];
        setGameResponse({ ...res, results });
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getGameList(pageCount);
  }, [pageCount]);

  return (
    <div className="bg-[#1e1f24] text-white py-6 w-full">
      <MainTitle isSidebarOpen={isSidebarOpen}>Top picks</MainTitle>

      <MainContainer
        isSidebarOpen={isSidebarOpen}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
      >
        {gameResponse.results.map((item: GameResult, idx: number) => (
          <Link to={`/game/${item.id}`} key={idx}>
            <GameCard>
              {/* 이미지 표시 */}
              <img
                src={`https://media.rawg.io/media/resize/640/-/${
                  item.background_image.split("/media/")[1]
                }`}
                alt={item.name}
                className="w-full h-[174px] md:h-[300px] bg-[#555] object-cover"
              />

              {/* 항상 노출될 정보 (이미지 아래에 위치) */}
              <InfoSection>
                <div className="font-bold text-lg">{item.name}</div>
                <div className="flex justify-between text-sm mt-1">
                  <span>평점: {item.rating ?? "미출시"}</span>
                  <span>출시: {item.released ?? "미정"}</span>
                </div>
              </InfoSection>

              {/* Hover 시 상세정보 오버레이 */}
              <Overlay>
                <div>장르: {item.genres.map((g) => g.name).join(", ")}</div>
                <div>추가정보 준비 가능</div>
              </Overlay>
            </GameCard>
          </Link>
        ))}
      </MainContainer>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex justify-center mt-8 h-35 ">
          <button
            type="button"
            className="w-24 h-12 bg-blue-500 text-white rounded text-center"
            style={{ marginTop: "2em", fontWeight: "600" }}
            onClick={pageNext}
          >
            더보기
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
