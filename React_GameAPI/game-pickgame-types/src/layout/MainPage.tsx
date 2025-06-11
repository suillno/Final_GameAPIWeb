import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GameResponse, GameResult } from "../types/types";
import { apiGetGameList } from "../api/api";

// 메인 컨테이너 스타일 (PC/Mobile 반응형)
const MainContainer = styled.div<{ isSidebarOpen: boolean }>`
  margin-left: ${(props) => (props.isSidebarOpen ? "240px" : "0px")};
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;

interface MainPageProps {
  isSidebarOpen: boolean;
}

const MainPage: React.FC<MainPageProps> = ({ isSidebarOpen }) => {
  /**
   * API 응답을 저장할 상태값 (초기값 지정)
   */
  const [gameResponse, setGameResponse] = useState<GameResponse>({
    count: 0, // 전체 게임 수 초기값
    next: null, // 다음 페이지 링크 (없을 경우 null)
    previous: null, // 이전 페이지 링크 (없을 경우 null)
    results: [], // 게임 리스트 빈 배열로 초기화
    seo_title: "",
    seo_description: "",
    seo_keywords: "",
    seo_h1: "",
    noindex: false,
    nofollow: false,
    description: "",
    filters: null,
    nofollow_collections: [],
  });

  /**
   * 페이지 번호 상태값 (더보기 버튼을 누를 때 증가)
   */
  const [pageCount, setPageCount] = useState<number>(1);

  // 다음 페이지 요청시 호출
  const pageNext = () => {
    setPageCount((prev) => prev + 1);
  };

  /**
   * API 호출 메서드
   * 매 페이지 호출시 기존 results에 누적되도록 병합
   */
  const getGameList = (pageCount: number) => {
    apiGetGameList(pageCount).then((res) => {
      console.log(res); // 응답 확인용 디버깅
      const results = [...gameResponse.results, ...res.results];
      setGameResponse({
        ...res, // 기존 메타데이터는 최신 값으로 갱신
        results: results, // 결과 리스트만 누적
      });
    });
  };

  /**
   * 최초 마운트 & pageCount 변경 시마다 호출
   */
  useEffect(() => {
    getGameList(pageCount);
  }, [pageCount]);

  return (
    <div className="bg-[#1e1f24] text-white py-6 w-full">
      <MainContainer
        isSidebarOpen={isSidebarOpen}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
      >
        {gameResponse.results.map((item: GameResult, idx: number) => (
          <div key={idx}>
            <img
              src={`https://media.rawg.io/media/resize/640/-/${
                item.background_image.split("/media/")[1]
              }`}
              alt={item.name}
              className="w-full h-[174px] md:h-[300px] bg-[#555] rounded"
            />
            <p className="mt-2 mb-1 font-bold text-ellipsis overflow-hidden whitespace-normal line-clamp-2">
              {item.name}
            </p>
            <span className="text-[#1ea7fd]">
              출시일: {item.released ? item.released : "미정"}
            </span>
          </div>
        ))}
        <button
          type="button"
          className="w-24 h-12 bg-blue-500 text-white rounded"
          onClick={pageNext}
        >
          더보기
        </button>
      </MainContainer>
    </div>
  );
};

export default MainPage;
