import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { GameResponse, GameResult } from "../types/types";
import { apiGetGameList } from "../api/api";
import Loader from "../components/common/Loader";

// 메인 컨테이너 스타일 (PC/Mobile 반응형)
const MainContainer = styled.div<{ isSidebarOpen: boolean }>`
  margin-right: 5%;
  margin-left: ${(props) => (props.isSidebarOpen ? "240px" : "5%")};
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin: 0 5%;
  }
`;

// 사이드바 등장시 조건
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
    previous: null, // 이전 페이지 링크 (없을 경우 nulyl)
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

  // 로딩완료 미완료 처리
  const [isLoading, setIsLoading] = useState(false);

  /**
   * API 호출 메서드
   * 매 페이지 호출시 기존 results에 누적되도록 병합
   */
  const getGameList = (pageCount: number) => {
    // 로딩처리
    setIsLoading(false);
    apiGetGameList(pageCount)
      .then((res) => {
        console.log(res); // 응답 확인용 디버깅
        const results = [...gameResponse.results, ...res.results];
        setGameResponse({
          ...res, // 기존 메타데이터는 최신 값으로 갱신
          results: results, // 결과 리스트만 누적
        });
      }) // 로딩처리완료
      .finally(() => setIsLoading(true));
  };

  /**
   * 최초 마운트 & pageCount 변경 시마다 호출
   */
  useEffect(() => {
    getGameList(pageCount);
  }, [pageCount]);

  return (
    <div className="bg-[#1e1f24] text-white py-6 w-full">
      <MainContainer isSidebarOpen={isSidebarOpen}>추천 게임</MainContainer>
      <MainContainer
        isSidebarOpen={isSidebarOpen}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
      >
        {gameResponse.results.map((item: GameResult, idx: number) => (
          <div key={idx} className="mt-6 ...">
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
      </MainContainer>
      {/* 로딩동작 */}
      {!isLoading && <Loader />}
      {isLoading && (
        <button
          type="button"
          className="w-24 h-12 bg-blue-500 text-white rounded"
          onClick={pageNext}
        >
          더보기
        </button>
      )}
    </div>
  );
};

export default MainPage;
