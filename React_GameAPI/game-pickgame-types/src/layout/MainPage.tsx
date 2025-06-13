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

// LayoutContext 인터페이스 정의 (Outlet에서 받을 타입)
interface LayoutContext {
  isSidebarOpen: boolean;
}

// 메인 컨테이너 (사이드바 열림에 따라 margin 변경, 반응형 대응)
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

// 카드 전체 스타일 (hover 시 그림자 강조)
const GameCard = styled.div`
  background-color: #2a2b32;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  position: relative;
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }
`;

// 상세정보 확장 부분 (hover 시 max-height 변경)
const ExpandSection = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease;
  ${GameCard}:hover & {
    max-height: 300px;
  }
`;

// 플랫폼 아이콘 스타일
const PlatformSpan = styled.span<{ platform: string }>`
  display: inline-block;
  padding: 2px 8px;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid ${({ platform }) => platformBorderColors[platform] ?? ""};
  border-radius: 8px;
  background-color: #1e1f24;
  margin-right: 4px;
  margin-bottom: 4px;
  color: white;
`;

const MainPage: React.FC = () => {
  const { isSidebarOpen } = useOutletContext<LayoutContext>(); // ✅ 이제 context로 받음

  const [gameResponse, setGameResponse] =
    useState<GameResponse>(defaultGameResponse);
  const [pageCount, setPageCount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(false);

  const pageNext = () => {
    setPageCount((prev) => prev + 1);
  };

  const getGameList = (pageCount: number) => {
    setIsLoading(true);
    apiGetGameList(pageCount)
      .then((res) => {
        const results = [...gameResponse.results, ...res.results];
        setGameResponse({
          ...res,
          results: results,
        });
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
          <GameCard key={idx}>
            <img
              src={`https://media.rawg.io/media/resize/640/-/${
                item.background_image.split("/media/")[1]
              }`}
              alt={item.name}
              className="w-full h-[174px] md:h-[300px] bg-[#555] object-cover"
            />
            <div className="p-2">
              {item.platforms
                .filter((p) => !!platformIcons[p.platform.slug?.toLowerCase()])
                .map((p, idx) => {
                  const slug = p.platform.slug.toLowerCase();
                  return (
                    <PlatformSpan key={idx} platform={slug}>
                      {platformIcons[slug]}
                    </PlatformSpan>
                  );
                })}
            </div>
            <p className="mt-2 mb-1 font-bold text-ellipsis overflow-hidden whitespace-normal line-clamp-2 p-2">
              {item.name}
            </p>
            <div className="flex justify-between p-2 text-sm">
              <span>➕{item.added ?? "미출시"}</span>
              <span>평점: {item.rating ?? "미출시"}</span>
            </div>
            <Link to={`/game/${item.id}`}>
              <ExpandSection>
                <div className="p-2 text-xs">
                  <div>Release date: {item.released ?? "미정"}</div>
                  <div>Genres: {item.genres.map((g) => g.name).join(", ")}</div>
                </div>
              </ExpandSection>
            </Link>
          </GameCard>
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
